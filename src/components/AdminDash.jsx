import Header from "../base/Header";
import { Link } from "react-router-dom";

function AdminDash() {
  return (
    <>
      <Header></Header>

      <section className=" mx-2">
        <div className="max-w-7xl bg-gray-400 mx-auto rounded-md shadow-lg mt-5  flex flex-col gap-2">
          <>
            <h1 className="text-center border-b p-2 border-red-800 font-bold text-[20px]">
              Deposits for approval
            </h1>

            <div className=" flex font-bold items-center justify-between  border-b border-black gap-2 mt-2 p-4">
              <div className="flex items-center justify-start gap-2 rounded-full">
                <div className=" bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2">
                  <Link to={`/update_status/${1}`}>
                    <i className="text-white fa-regular fa-pen-to-square"></i>
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[rgb(185,28,28)] text-[14px]">
                    one@gmail.com
                  </span>
                  <span className="text-white  flex items-center justify-center  bg-[rgb(33,54,68)] text-[14px] rounded-md">
                    12dcf
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1>+10$</h1>
                <span className=" bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                  paid
                </span>
              </div>
            </div>
          </>
          <div className="text-center p-3 border font-bold">
            <h1>No deposit for approval</h1>
          </div>
        </div>

        {/* Withdraw for approval */}
        <div className="max-w-7xl bg-gray-400 mx-auto rounded-lg shadow-md mt-10  flex flex-col gap-2">
          <>
            <h1 className="text-center border-b p-2 border-red-800 font-bold text-[20px]">
              Withdrawals for approval
            </h1>
            <div className=" flex font-bold items-center justify-between border-b border-black gap-2 mt-2 p-4">
              <div className="flex items-center justify-start gap-2 rounded-full">
                <div className="bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2">
                  <Link to={`/update_withdraw_status/${1}`}>
                    <i className="text-white fa-regular fa-pen-to-square"></i>
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[12px]"> one@gmail.com </h1>
                  <span className="flex items-center justify-center bg-[rgb(33,54,68)] px-1 text-[14px]  text-white rounded-md">
                    01406632822
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1>10 Tk</h1>
                <span className=" bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                  paid
                </span>
              </div>
            </div>
          </>

          <div className="text-center p-3 border font-bold">
            <h1>No withdraw for approval</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDash;
