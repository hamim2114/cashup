import { Link } from "react-router-dom";

function Help() {
  return (
    <>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/dashboard">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-white">Help</h1>
        </div>
      </nav>

      <main>
        <section className="mx-2">
          <div className="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">
            <h1 className="text-2xl font-bold">Help section coming soon.</h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default Help;
