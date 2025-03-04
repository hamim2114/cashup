import { Link } from "react-router-dom";

function Trx() {
  return (
    <>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/dashboard">
            <a href="index.html">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>

          <h1 className="text-2xl font-bold text-white">History</h1>
        </div>
      </nav>

      <main>
        <section className=" mx-2">
          <div className="max-w-7xl mx-auto bg-gray-300 rounded-lg shadow-lg mt-5  flex flex-col gap-2">
            <>
              <h1 className="text-center border-b border-[rgb(185,28,28)] py-2 font-bold">
                Deposit history
              </h1>

              <div
                className=" flex font-bold items-center justify-between border-b border-black gap-2 mt-2 p-4"
              >
                <div className="  flex items-center justify-start gap-2   rounded-full ">
                  <div className="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                    <i className="text-white fa-solid fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[rgb(185,28,28)] text-[14px]">
                     one@gmail.com
                    </span>
                    <span className="text-white border flex items-center justify-center py-1 bg-[rgb(33,54,68)] text-[14px] rounded-md">
                      12gshdghx
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h1>10$</h1>
                  <span className=" bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                    paid
                  </span>
                </div>
              </div>
            </>
            <div className="text-center p-3 border font-bold">
              <h1>No deposit history</h1>
            </div>
          </div>

          <div className="max-w-7xl mx-auto rounded-lg shadow-lg mt-10 bg-gray-300  flex flex-col gap-2">
            <>
              <h1 className="text-center font-bold border-b py-2 border-[rgb(185,28,28)]">
                Withdraw history
              </h1>

              <div className=" flex font-bold items-center border-b border-black  justify-between gap-2 mt-2 p-4">
                <div className="  flex items-center justify-start gap-2   rounded-full ">
                  <div className="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                    <i className="text-white fa-solid fa-arrow-right"></i>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h1 className="text-[12px]"> one@gmail.com </h1>
                    <span className=" bg-[rgb(33,54,68)] px-1 text-[15px]  text-white rounded-md">
                      12345678
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h1>100$</h1>
                  <span className="border bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                    paid
                  </span>
                </div>
              </div>
            </>

            <div className="text-center p-3 border font-bold">
              <h1>No withdraw history</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Trx;
