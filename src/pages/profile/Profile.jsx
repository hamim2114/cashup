import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Avatar, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";
import CDialog from "../../common/CDialog";
import EditProfile from "./EditProfile";
import useUser from "../../hook/useUser";
import { FaCartArrowDown } from "react-icons/fa6";
import { SettingsBackupRestore, ShoppingCartCheckout } from "@mui/icons-material";
import { AiOutlineEdit } from "react-icons/ai";
import { useTranslation } from "react-i18next";


function Profile() {
  const [profileEditDialogOpen, setProfileEditDialogOpen] = useState(false)
  const [language, setLanguage] = useState('BN');

  const { user } = useUser()

  const { t } = useTranslation('profile')

  const { logout } = useAuth()
  return (
    <>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/dashboard">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>

          <h1 className="text-2xl font-bold text-white">Profile</h1>
        </div>
      </nav>

      {/* update profile */}
      <CDialog
        open={profileEditDialogOpen}
        onClose={() => setProfileEditDialogOpen(false)}
        title='Update Profile'
      >
        <EditProfile onClose={() => setProfileEditDialogOpen(false)} />
      </CDialog>

      <main>
        <section className="pb-10">
          <div className="bg-fuchsia-600 flex flex-col p-5">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box />
              <IconButton color="secondary" onClick={() => setProfileEditDialogOpen(true)} variant="contained">
                <AiOutlineEdit />
              </IconButton>
            </Stack>

            <div className="flex flex-col items-center">
              <Avatar sx={{ width: '100px', height: '100px', mb: 2 }} src={user?.buyer_image} />
              <h1 className="font-semibold text-lg text-white">
                {user?.name}
              </h1>
              <p className="text-white">{user?.phone_number}</p>
              <p className="text-white">{user?.address}</p>
            </div>
          </div>
          <div className="pt-3">
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 0 0 0-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
              </svg>
              <p className="text-md">{t('balance_inquiry')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z"></path>
              </svg>
              <p className="text-md">{t('mini_statement')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"></path>
              </svg>
              <p className="text-md">{t('transaction_limit')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z"></path>
              </svg>
              <p className="text-md">{t('service_charge')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z"></path>
              </svg>
              <p className="text-md">{t('my_qr')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none shadow-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
              </svg>
              <p className="text-md">{t('store_location')}</p>
            </button>
            <Link to='/order-history'>
              <button className="btn w-full justify-start bg-white border-none shadow-none">
                <ShoppingCartCheckout sx={{ color: '#7F22CE' }} />
                <p className="text-md">{t('order_history')}</p>
              </button>
            </Link>
            <Link to='/main-balance-withdraw-history'>
              <button className="btn w-full justify-start bg-white border-none shadow-none">
                <SettingsBackupRestore sx={{ color: '#7F22CE' }} />
                <p className="text-md">{t('main_balance_withdraw_history')}</p>
              </button>
            </Link>
            <Link to='/cashup-withdraw-history'>
              <button className="btn w-full justify-start bg-white border-none shadow-none">
                <SettingsBackupRestore sx={{ color: '#7F22CE' }} />
                <p className="text-md">{t('cashup_withdraw_history')}</p>
              </button>
            </Link>
            <Link to='/compounding-withdraw-history'>
              <button className="btn w-full justify-start bg-white border-none shadow-none">
                <SettingsBackupRestore sx={{ color: '#7F22CE' }} />
                <p className="text-md">{t('compounding_withdraw_history')}</p>
              </button>
            </Link>
          </div>
          <div className="divider"></div>
          <div className="shadow-lg pb-3">
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
              </svg>
              <p className="text-md">{t('about_us')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"></path>
              </svg>
              <p className="text-md">{t('contact')}</p>
            </button>
            <button className="btn w-full justify-start bg-white border-none">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                ></path>
              </svg>
              <p className="text-md">{t('complain')}</p>
            </button>
            <button onClick={() => logout()} className="btn w-full justify-start bg-whiteimport">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-xl text-purple-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
              </svg>
              <p className="text-md">{t('logout')}</p>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
