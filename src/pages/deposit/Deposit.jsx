import cardImg from "../../assets/cards/bank-card.png";
import masterCardImg from "../../assets/cards/master-card.png";
import visaCardImg from "../../assets/cards/visa.png";
import bkashImg from "../../assets/ePayments/bkash.jpg";
import nagodImg from "../../assets/ePayments/nagod.jpg";
import rocketImg from "../../assets/ePayments/rocket.png";
import cashupImg from "../../assets/logo.png";
import cryptoImg from "../../assets/cryptocurencies/cryptocurency.png";
import bitcoinImg from "../../assets/cryptocurencies/bitcoin.png";
import ethereumImg from "../../assets/cryptocurencies/ethereum.png";
import usedt from "../../assets/cryptocurencies/usdt.png";
import binanceImg from "../../assets/cryptocurencies/binance.png";
import abBank from "../../assets/bankes/abBank.png";
import islamiBank from "../../assets/bankes/islami-bank.png";
import mtbBank from "../../assets/bankes/mutual-trust-bank.png";
import asiaBank from "../../assets/bankes/Bank_Asia.png";
import myPrimeBank from "../../assets/bankes/myPrime.png";
import southEastBank from "../../assets/bankes/south-east.png";
import eblSkyBank from "../../assets/bankes/ebl-sky.png";
import pMoneyBank from "../../assets/bankes/pmoney.png";
import iPayBank from "../../assets/bankes/iPay.jpg";
import fsibBank from "../../assets/bankes/First_Security_Islami_Bank.svg.png";
import meghnaBank from "../../assets/bankes/meghna.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import CDialog from "../../common/CDialog";
import { DialogActions, TextField } from "@mui/material";
import CButton from "../../common/CButton";
import AddDeposit from "./AddDeposit";


function Deposit() {
  const [depositDialogOpen, setDepositDialogOpen] = useState(false)
  const [depositMethod, setDepositMethod] = useState("")


  const handleMethodSelect = (method) => {
    setDepositDialogOpen(true);
    setDepositMethod(method);
  };


  return (
    <>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/dashboard">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-white">Deposit</h1>
        </div>
      </nav>

      {/* Deposit Form */}
      <CDialog open={depositDialogOpen} onClose={() => setDepositDialogOpen(false)} title="Deposit" maxWidth="sm">
        <AddDeposit method={depositMethod} closeDialog={() => setDepositDialogOpen(false)} />
      </CDialog>

      <main className="py-10 px-5 flex flex-col bg-[#1C232B] gap-14">
        {/* e-payments */}
        <section>
          <h1 className="flex text-[#A2AEB5] items-center gap-3 text-xl font-bold mb-5">
            <img className="w-10 h-10" src={cardImg} alt="" /> E-payments
          </h1>
          <div className="space-y-4">
            {[
              { name: "Bkash", img: bkashImg },
              { name: "Nagad", img: nagodImg },
              { name: "Rocket", img: rocketImg },
              { name: "Cashup", img: cashupImg },
            ].map((method) => (
              <div
                key={method.name}
                onClick={() => handleMethodSelect(method.name)}
                className={`w-full flex cursor-pointer items-center gap-5 bg-white shadow-lg p-4 rounded-md 
                  ${depositMethod === method.name ? "border-2 border-blue-500" : ""
                  }`}
              >
                <img className="w-10 h-10" src={method.img} alt="" />
                <span className="text-xl text-black/70 font-bold">{method.name}</span>
              </div>
            ))}
          </div>
        </section>
        {/* bank cards */}
        <section className=" mx-2 ">
          <div className="mb-5">
            <h1 className="flex text-[#A2AEB5] items-center gap-3 text-xl font-bold">
              {" "}
              <img className="w-10 h-10" src={cardImg} alt="" /> Bank Cards
            </h1>
          </div>
          <div className="space-y-4">
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={masterCardImg} alt="" />
              <span className="text-xl text-black/70 font-bold">
                MasterCard
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={visaCardImg} alt="" />
              <span className="text-xl text-black/70 font-bold">VisaCard</span>
            </div>
          </div>
        </section>
        {/* Net Banking */}
        <section className=" mx-2">
          <div className="mb-5">
            <h1 className="flex text-[#A2AEB5] items-center gap-3 text-xl font-bold">
              {" "}
              <img className="w-10 h-10" src={cardImg} alt="" /> Net Banking
            </h1>
          </div>
          <div className="space-y-4">
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={abBank} alt="" />
              <span className="text-xl text-black/70 font-bold">AB bank</span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={islamiBank} alt="" />
              <span className="text-xl text-black/70 font-bold">
                Islami bank
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={mtbBank} alt="" />
              <span className="text-xl text-black/70 font-bold">MTB bank</span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={asiaBank} alt="" />
              <span className="text-xl text-black/70 font-bold">Asia bank</span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={myPrimeBank} alt="" />
              <span className="text-xl text-black/70 font-bold">
                MYPrime bank
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={southEastBank} alt="" />
              <span className="text-xl text-black/70 font-bold">
                SouthEast bank
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={eblSkyBank} alt="" />
              <span className="text-xl text-black/70 font-bold">
                EBL Sky bank
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={pMoneyBank} alt="" />
              <span className="text-xl text-black/70 font-bold">
                Pmoney bank
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={iPayBank} alt="" />
              <span className="text-xl text-black/70 font-bold">Ipay bank</span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={fsibBank} alt="" />
              <span className="text-xl text-black/70 font-bold">FSIB bank</span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={meghnaBank} alt="" />
              <span className="text-xl text-black/70 font-bold">
                Meghna Bank
              </span>
            </div>
          </div>
        </section>

        {/* Cryptocurrencies */}
        <section className=" mx-2">
          <div className="mb-5">
            <h1 className="flex text-[#A2AEB5] items-center gap-3 text-xl font-bold">
              {" "}
              <img className="w-10 h-10" src={cryptoImg} alt="" />{" "}
              Cryptocurrencies
            </h1>
          </div>
          <div className="space-y-4">
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={bitcoinImg} alt="" />
              <span className="text-xl text-black/70 font-bold">
                MasterCard
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={ethereumImg} alt="" />
              <span className="text-xl text-black/70 font-bold">VisaCard</span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <div className="flex">
                <img className="w-10 h-10 relative z-10" src={usedt} alt="" />
                <img className="w-10 h-10 -ml-4" src={ethereumImg} alt="" />
              </div>
              <span className="text-xl text-black/70 font-bold">
                USD Tether (ERC-20)
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <div className="flex">
                <img className="w-10 h-10 relative z-10" src={usedt} alt="" />
                <img className="w-10 h-10 -ml-4" src={ethereumImg} alt="" />
              </div>
              <span className="text-xl text-black/70 font-bold">
                USD Tether (ERC-20)
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <div className="flex">
                <img className="w-10 h-10 relative z-10" src={usedt} alt="" />
                <img className="w-10 h-10 -ml-4" src={ethereumImg} alt="" />
              </div>
              <span className="text-xl text-black/70 font-bold">
                USD Tether (ERC-20)
              </span>
            </div>
            <div className="w-full flex  items-center gap-5 bg-white shadow-lg p-4 rounded-md">
              <img className="w-10 h-10" src={binanceImg} alt="" />
              <span className="text-xl text-black/70 font-bold">
                Binance Pay
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Deposit;
