import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { IoQrCode } from "react-icons/io5";
import deposit from "../../assets/hero/deposit.png";
import cashout from "../../assets/hero/cashout.png";
import plan from "../../assets/hero/plan.png";
import profile from "../../assets/hero/profile.png";
import transaction from "../../assets/hero/transaction.png";
import help from "../../assets/hero/help.png";
import task from "../../assets/hero/task.png";
import refer from "../../assets/hero/refer.png";

import sendMoney from "../../assets/services/send.png";
import mobileRecharge from "../../assets/services/recharge.png";
import cashOut from "../../assets/services/loan.png";
import shoppingCart from "../../assets/services/shopping-cart.png";
import cashIn from "../../assets/services/money-in-wallet.png";
import payBil from "../../assets/services/payment.png";
import bankTransfer from "../../assets/services/bank-transfer.png";
import linkAccount from "../../assets/services/networking.png";
import exchange from "../../assets/services/exchange.png";
import eToll from "../../assets/services/toll.png";
import donation from "../../assets/services/donation.png";
import pension from "../../assets/services/retirement.png";

import educationImg from "../../assets/paybill/graduation.png";
import electricityImg from "../../assets/paybill/electrical-energy.png";
import gasImg from "../../assets/paybill/gas.png";
import tapImg from "../../assets/paybill/tap.png";
import vatImg from "../../assets/paybill/government.png";
import internetImg from "../../assets/paybill/internet.png";
import insuranceImg from "../../assets/paybill/healthcare.png";
import cableTv from "../../assets/paybill/cable-tv.png";
import telephone from "../../assets/paybill/telephone.png";
import microfinance from "../../assets/paybill/financial-inclusion.png";
import others from "../../assets/paybill/other.png";
import CashupDeposite from "./cashupDeposit/CashupDeposite";
import Header from "../../base/Header";
import Footer from "../../base/Footer";
import CashupOwingDeposite from "./cashupOwingDeposit/CashupOwingDeposite";


function Dashboard() {
  const services = [
    {
      id: 1,
      title: "টাকা পাঠান",
      img: sendMoney,
    },
    {
      id: 2,
      title: "মোবাইল রিচার্জ",
      img: mobileRecharge,
    },
    {
      id: 3,
      title: "ক্যাশ আউট",
      img: cashOut,
    },
    {
      id: 4,
      title: "কেনাকাটা",
      img: shoppingCart,
    },
    {
      id: 5,
      title: "টাকা আনুন",
      img: cashIn,
    },
    {
      id: 6,
      title: "বিল পরিশোধ",
      img: payBil,
    },
    {
      id: 7,
      title: "ব্যাংক ট্রান্সফার",
      img: bankTransfer,
    },
    {
      id: 8,
      title: "লিঙ্ক অ্যাকাউন্ট",
      img: linkAccount,
    },
    {
      id: 9,
      title: "বিনিময়",
      img: exchange,
    },
    {
      id: 10,
      title: "ই-টোল",
      img: eToll,
    },
    {
      id: 11,
      title: "ডোনেশন",
      img: donation,
    },
    {
      id: 12,
      title: "পেনশন",
      img: pension,
    },
  ];

  const payBills = [
    {
      id: 1,
      title: "এডুকেশন",
      img: educationImg,
    },
    {
      id: 2,
      title: "ইলেকট্রিসিটি",
      img: electricityImg,
    },
    {
      id: 3,
      title: "গ্যাস",
      img: gasImg,
    },
    {
      id: 4,
      title: "পানি",
      img: tapImg,
    },
    {
      id: 5,
      title: "সরকারি ফি",
      img: vatImg,
    },
    {
      id: 6,
      title: "ইন্টারনেট",
      img: internetImg,
    },
    {
      id: 7,
      title: "ইন্স্যুরেন্স",
      img: insuranceImg,
    },
    {
      id: 8,
      title: "ক্যাবল টিভি ",
      img: cableTv,
    },
    {
      id: 9,
      title: "টেলিফোন ",
      img: telephone,
    },
    {
      id: 10,
      title: "মাইক্রোফাইনান্স",
      img: microfinance,
    },
    {
      id: 11,
      title: "অন্যান্য",
      img: others,
    },
    {
      id: 12,
      title: "পেনশন",
      img: pension,
    },
  ];
  const suggetions = [
    {
      id: 1,
      title: "বিটিসিএল",
      img: educationImg,
    },
    {
      id: 2,
      title: "চক্রবৃদ্ধি লাভ",
      img: electricityImg,
    },
    {
      id: 3,
      title: "পল্লী বিদ্যুৎ",
      img: gasImg,
    },
    {
      id: 4,
      title: "চক্রবৃদ্ধি লাভ",
      img: tapImg,
    },
  ];

  const cashupDeposite = [
    {
      id: 1,
      title: "মেইন ব্যালেন্স",
      img: educationImg,
    },
    {
      id: 2,
      title: "দৈনিক লাভ",
      img: electricityImg,
    },
    {
      id: 3,
      title: "মাসিক লাভ",
      img: gasImg,
    },
    {
      id: 4,
      title: "চক্রবৃদ্ধি লাভ",
      img: tapImg,
    },
    {
      id: 5,
      title: "দৈনিক চক্রবৃদ্ধি",
      img: vatImg,
    },
    {
      id: 6,
      title: "মাসিক চক্রবৃদ্ধি",
      img: internetImg,
    },
    {
      id: 7,
      title: "উইথড্র",
      img: insuranceImg,
    },
    {
      id: 8,
      title: "পণ্যের লাভ",
      img: cableTv,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* পরিষেবা সমূহ */}
        <section className="bg-white mb-10 py-5 rounded-t-3xl -mt-5">
          <div className="mx-2">
            <h1 className="font-bold text-black text-lg mb-3">পরিষেবা সমূহ</h1>
            <div className="grid grid-cols-4 gap-5">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="stat flex flex-col items-center justify-center"
                >
                  <div className="stat-figure text-secondary mb-2">
                    <div className="avatar">
                      <div className="w-10">
                        <img src={service.img} />
                      </div>
                    </div>
                  </div>
                  <div className="stat-title text-black text-center text-xs font-medium">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* বিল পে */}
        <section className="bg-white mb-10 py-5 -mt-5">
          <div className="mx-2">
            <h1 className="font-bold text-black text-lg mb-3">বিল পে</h1>
            <div className="grid grid-cols-4 gap-5">
              {payBills.map((service) => (
                <div
                  key={service.id}
                  className="stat flex flex-col items-center justify-center"
                >
                  <div className="stat-figure text-secondary mb-2">
                    <div className="avatar">
                      <div className="w-10">
                        <img src={service.img} />
                      </div>
                    </div>
                  </div>
                  <div className="stat-title text-black text-center text-xs font-medium">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*  */}
        {/* সাজেশন */}
        <section className="bg-white mb-10 py-5 -mt-5">
          <div className="mx-2">
            <h1 className="font-bold text-black text-lg mb-3">সাজেশন</h1>
            <div className="grid grid-cols-4 gap-5">
              {suggetions.map((service) => (
                <div
                  key={service.id}
                  className="stat flex flex-col items-center justify-center"
                >
                  <div className="stat-figure text-secondary mb-2">
                    <div className="avatar">
                      <div className="w-10">
                        <img src={service.img} />
                      </div>
                    </div>
                  </div>
                  <div className="stat-title text-black text-center text-xs font-medium">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ক্যাশআপ ডিপোজিট */}
        <CashupDeposite />

        {/* নগদ জমা (ঋণ) */}
        <CashupOwingDeposite />
        {/*  */}

        <section className="mx-2">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[rgb(33,54,68)] py-2 text-white   flex items-center justify-start gap-10  rounded-md">
              <div className="bg-[rgb(33,54,68)] z-10">
                <i className="px-3  text-2xl  fa-solid fa-bell bell-animation"></i>
              </div>

              <div className="marquee-container">
                <h1 className="marquee text-xl font-semibold text-white">
                  Welcome to cashup.com (
                  <span className="text-red-600">
                    Closed : Saturday and Sunday
                  </span>
                  )
                </h1>
              </div>
            </div>
            <div className=" border border-black mt-5 rounded-md">
              <h1 className="p-3 text-[rgb(33,54,68)] text-xl font-bold">
                Cashup
              </h1>
              <hr className="border-b-1 border-black" />
              <div className="container mx-auto mt-2 max-w-7xl">
                <div className="py-3 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
                  {/* <!-- Card 1 --> */}
                  <Link to="/task">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full mx-auto border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img className="bell-animation" src={task} alt="" />
                        </div>
                        <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                          Task
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 2 --> */}
                  <Link to="/deposit">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img
                            className="bell-animation"
                            src={deposit}
                            alt=""
                          />
                        </div>
                        <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                          Deposit
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 3 --> */}
                  <Link to="/cashout">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img
                            className="bell-animation"
                            src={cashout}
                            alt=""
                          />
                        </div>
                        <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                          Withdraw
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 4 --> */}
                  <Link to="/package">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img className="bell-animation" src={plan} alt="" />
                        </div>
                        <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                          Plan
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 5 --> */}
                  <Link to="/profile">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img
                            className="bell-animation"
                            src={profile}
                            alt=""
                          />
                        </div>
                        <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                          Profile
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 6 --> */}
                  <Link to="/history">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-cente mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img
                            className="bell-animation"
                            src={transaction}
                            alt=""
                          />
                        </div>
                        <p className="text-md capitalize text-black lg:text-lg md:text-base">
                          Trx
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 7 --> */}
                  <Link to="/refer">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img className="bell-animation" src={refer} alt="" />
                        </div>
                        <p className="text-md capitalize text-black lg:text-lg md:text-base">
                          Refer
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* <!-- Card 8 --> */}
                  <Link to="/help">
                    <a
                      href=""
                      className="flex flex-col items-center text-center"
                    >
                      <div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                          <img className="bell-animation" src={help} alt="" />
                        </div>
                        <p className="text-md capitalize text-black lg:text-lg md:text-base">
                          Help
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-2">
          <div className="max-w-7xl mx-auto">
            <div className=" border border-black mt-5 rounded-md">
              <h1 className="p-3 text--[rgb(33,54,68)] text-xl font-bold">
                Statement
              </h1>
              <hr className="border-b-1 border-black" />
              <div className="p-3 text-black font-semibold container text-lg mx-auto mt-2 max-w-7xl">
                <h1>My Plan : No Plan</h1>
                <h1 className="my-3"> Remain Ads For Today : 0</h1>
                <h1>Complete Ads For Today : 0</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-2 mb-10">
          <div className="max-w-7xl mx-auto">
            <div className=" border border-black mt-5 rounded-md">
              <h1 className="p-3 text-[rgb(33,54,68)] text-xl font-bold">
                Contact
              </h1>
              <hr className="border-b-1 border-black" />
              <div className="container mx-auto mt-2 max-w-7xl">
                <div className="py-3 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
                  {/* <!-- Card 1 --> */}

                  <a
                    href="#"
                    className="flex flex-col items-center text-center"
                  >
                    <div>
                      <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                        <i className="bell-animation text-white text-2xl fa-solid fa-gear"></i>
                      </div>
                      <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                        Setting
                      </p>
                    </div>
                  </a>

                  {/* <!-- Card 2 --> */}
                  <a
                    href="#"
                    className="flex flex-col items-center text-center"
                  >
                    <div>
                      <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                        <i className="bell-animation text-white text-2xl fa-brands fa-whatsapp"></i>
                      </div>
                      <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                        Whatsapp
                      </p>
                    </div>
                  </a>

                  {/* <!-- Card 3 --> */}
                  <a
                    href="#"
                    className="flex flex-col items-center text-center"
                  >
                    <div>
                      <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                        <i className="bell-animation text-white text-2xl fa-brands fa-youtube"></i>
                      </div>
                      <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                        Youtube
                      </p>
                    </div>
                  </a>

                  {/* <!-- Card 4 --> */}
                  <a
                    href="https://t.me/Exnessforex2"
                    className="flex flex-col items-center text-center"
                  >
                    <div>
                      <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                        <i className="bell-animation text-white text-2xl fa-brands fa-telegram"></i>
                      </div>
                      <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                        Telegram
                      </p>
                    </div>
                  </a>

                  {/* <!-- Card 5 --> */}
                  <a
                    href="https://www.tiktok.com/@tradersadnan?_t=ZS-8sJJ2neboKw&_r=1"
                    target="_blank"
                    className="flex flex-col items-center text-center"
                  >
                    <div>
                      <div className="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                        <i className="bell-animation text-white text-2xl fa-brands fa-tiktok"></i>
                      </div>
                      <p className="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                        Tiktok
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-2 mb-20">
          <div className="max-w-7xl mx-auto border border-black mt-5 rounded-md">
            <h1 className="p-3 text-[rgb(33,54,68)] text-xl font-bold">
              Our Partner
            </h1>
            <hr className="border-b-1 border-black" />
            <div className="grid grid-cols-4 py-3 gap-2"></div>
          </div>
        </section>

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}

export default Dashboard;
