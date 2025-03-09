import { Avatar, Button, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUser from "../hook/useUser";
import apiReq from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CDialog from "../common/CDialog";
import MainBalanceWithdraw from "../components/MainBalanceWithdraw";
import { useTranslation } from 'react-i18next';

function Header() {
  const [mainBalanceDialogOpen, setMainBalanceDialogOpen] = useState(false)
  const [withdrawReqDialogOpen, setWithdrawReqDialogOpen] = useState(false)

  const { t, i18n } = useTranslation('dashboard');

  const { user } = useUser();

  const changeLanguage = (lng) => {
    const language = lng.target.value;

    i18n.changeLanguage(language); // Change language
  };

  const { data: cashupOwingDeposit } = useQuery({
    queryKey: ['cashupOwingDeposit'],
    queryFn: () => apiReq.get('/api/cashup-owing-deposit/')
  })


  const handleOwingBalance = () => {
    Swal.fire(`Owing Balance ${cashupOwingDeposit?.data[0]?.cashup_owing_main_balance ?? "0.00"} BDT`);
  };

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

            <select value={i18n.language} onChange={changeLanguage}
              className="rounded-sm">
              <option value="bn">Bangla</option>
              <option value="en">English</option>
            </select>
            <Link
              to="/deposit"
            >
              <Button variant="contained" color="warning">
                Deposit
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
              Balance
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
                  Main Balance
                </button>
              </li>
              <li>
                <button
                  onClick={handleOwingBalance}
                  className="btn btn-secondary"
                >
                  Owing Balance
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

      {/* withdraw page dialog */}
      <CDialog title='Withdraw main Balance' open={withdrawReqDialogOpen} onClose={() => setWithdrawReqDialogOpen(false)}>
        <MainBalanceWithdraw />
      </CDialog>
    </>
  );
}

export default Header;
