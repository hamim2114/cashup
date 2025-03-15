import { Avatar, Button, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUser from "../hook/useUser";
import apiReq from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CDialog from "../common/CDialog";
import MainBalanceWithdraw from "../components/MainBalanceWithdraw";
import MainOwingBalanceReq from "../components/MainOwingBalanceReq";
import { useTranslation } from "react-i18next";

function Header() {
  const [mainBalanceDialogOpen, setMainBalanceDialogOpen] = useState(false)
  const [mainOwingBalanceDialogOpen, setMainOwingBalanceDialogOpen] = useState(false)
  const [mainOwingBalanceReqDialogOpen, setMainOwingBalanceReqDialogOpen] = useState(false)
  const [withdrawReqDialogOpen, setWithdrawReqDialogOpen] = useState(false)


  const { user } = useUser();

  const { t } = useTranslation('dashboard')


  const { data: cashupOwingDeposit } = useQuery({
    queryKey: ['cashupOwingDeposit'],
    queryFn: () => apiReq.get('/api/cashup-owing-deposit/')
  })

  return (
    <>
      <nav className="bg-fuchsia-600 pt-5 pb-10 px-3 ">
        <div className="flex items-start justify-between">
          <Link to={"/profile"}>
            <Stack direction='row' alignItems='center' gap={2}>
              <Avatar src={user?.buyer_image ?? ''} />

              <div className="text-white">
                <h1 to={"/profile"} className="font-bold text-lg">
                  {user?.name}
                </h1>
                <span className="text-xs font-medium">
                  {user?.phone_number}
                </span>
              </div>
            </Stack>
          </Link>
          <Stack direction='row' alignItems='center' gap={2}>


            <Link
              to="/deposit"
            >
              <Button variant="contained" color="warning">
                {t('deposit')}
              </Button>
            </Link>
          </Stack>
        </div>
        <div className="flex justify-center ">
          {/* <details className="dropdown">
            <summary className="btn m-1 p-2 relative bg-white text-black/80 font-bold w-[200px] rounded-full">
              Balance
            </summary>
            <ul className="menu dropdown-content bg-white rounded-box z-30 w-52 p-2 shadow space-y-3">
              <li>
                <button
                  onClick={handleMainBalance}
                  className="btn btn-secondary"
                >
                  Main Balance
                </button>
              </li>
              <li>
                <button className="btn btn-secondary">Owing Balance</button>
              </li>
            </ul>
          </details> */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn mt-2 p-2 bg-white text-black/80 font-bold w-[200px] rounded-full"
            >
              {t('balance')}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-30 w-52 p-2 shadow space-y-3"
            >
              <li>
                <button
                  onClick={() => setMainBalanceDialogOpen(true)}
                  className="btn btn-secondary"
                >
                  {t('main_balance')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setMainOwingBalanceDialogOpen(true)}
                  className="btn btn-secondary"
                >
                  {t('owing_balance')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* main balance dialog */}
      <CDialog title='Main Balance' open={mainBalanceDialogOpen} onClose={() => setMainBalanceDialogOpen(false)} >
        <Typography sx={{ textAlign: 'center', color: 'green', my: 5 }} variant="h4">{user?.main_balance ?? 0.00} BDT</Typography>
        <Button onClick={() => setWithdrawReqDialogOpen(true)} variant="contained" style={{ width: '100%' }}>WithDraw</Button>
      </CDialog>

      {/* Owing Balance dialog */}
      <CDialog title='Owing / Loan Balance' open={mainOwingBalanceDialogOpen} onClose={() => setMainOwingBalanceDialogOpen(false)} >
        <Typography sx={{ textAlign: 'center', color: 'green', my: 5 }} variant="h4">{cashupOwingDeposit?.data[0]?.cashup_owing_main_balance ?? 0.00} BDT</Typography>
        <Button onClick={() => setMainOwingBalanceReqDialogOpen(true)} variant="contained" style={{ width: '100%' }}>Request For Loan</Button>
      </CDialog>

      {/* withdraw page dialog */}
      <CDialog title='Withdraw main Balance' open={withdrawReqDialogOpen} onClose={() => setWithdrawReqDialogOpen(false)}>
        <MainBalanceWithdraw />
      </CDialog>

      {/* owing main balance reqest dialog */}
      <CDialog title='Owing / Loan Request' open={mainOwingBalanceReqDialogOpen} onClose={() => setMainOwingBalanceReqDialogOpen(false)} >
        <MainOwingBalanceReq />
      </CDialog>
    </>
  );
}

export default Header;
