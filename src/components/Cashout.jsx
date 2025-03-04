import { Link } from "react-router-dom";
import bkashLogo from "../assets/regular/bkash.png";
function Cashout() {
  return (
    <>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/dashboard">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>

          <h1 className="text-2xl font-bold text-white">Withdraw</h1>
        </div>
      </nav>

      <main className="">
        <section className="mx-2">
          <div className="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">
            <h1 className="text-xl">
              <span className="text-blue-600 font-bold">নোটিশ :</span> ডিপোজি
              করার ৭২ ঘন্টা পরে উইথড্র দিতে পারবেন আপনার মূলধন কৃত টাকা, কিন্তু
              আপনার প্রতিদিনের ইনকাম উইথড্র দিতে হবে না। বিকাশ
              নাম্বারে অটো চলে যাবে।
            </h1>
          </div>

          <div className="max-w-7xl mx-auto py-6 border  mt-5 rounded-2xl bg-white">
            <form action="">
              <div className="px-6 mb-3">
                <label className="font-semibold" htmlFor="">
                  Amount
                </label>
                <input
                  type="text"
                  className="border border-black w-full p-2 text-black rounded-xl"
                  placeholder="Amount"
                />
              </div>

              <div className="px-6 mb-3">
                <label className="font-semibold" htmlFor="">
                  Bkash Number
                </label>
                <input
                  type="text"
                  className="border border-black w-full p-2 text-black rounded-xl"
                  placeholder="Bkash Number (Personal)"
                />
              </div>

              <div className="px-6">
                <label className="font-semibold" htmlFor="">
                  Message
                </label>
                <input
                  type="text"
                  className="border border-black w-full p-2 text-black rounded-xl"
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                />
              </div>

              <div className="max-w-7xl mx-auto   text-center   ">
                {/* <Link to='/history'>

</Link> */}
                <div className="px-6 mt-3">
                  <button className="flex w-full justify-center rounded-xl  border border-transparent bg-[rgb(33,54,68)] py-3 text-MD  font-bold text-white shadow-sm hover:bg-opacity-90">
                    Withdraw
                  </button>
                </div>
                <p className="text-[rgb(239,68,68)] text-lg  font-semibold  text-center my-1">
                  *Minimum withdraw 100$
                </p>
              </div>
            </form>
          </div>

          <div className="max-w-7xl mx-auto py-4 border text-center mt-2 rounded-2xl bg-white">
            <h1 className="text-center text-xl font-semibold mt-1">We use</h1>
            <div className="mt-2 w-[100px] mx-auto h-auto border-[5px] border-gray p-2 rounded-lg">
              <img src={bkashLogo} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cashout;
