import { useState, useEffect } from "react";
import apiReq from "../utils/axiosInstance";
import { Link } from "react-router-dom";

function Package() {
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const res = await apiReq.get(`package/list/`);

      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/dashboard">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-white">Package</h1>
        </div>
      </nav>

      <section className="mx-2">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {packages?.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={p.image}
                  alt="Package"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between  text-lg font-medium text-gray-800 mb-2">
                  <h1>{p?.title}</h1>
                  <div className="flex flex-col gap-1">
                    <h1 className="mx-auto">{p?.price} $</h1>
                    <h1 className="border bg-black text-white px-2 rounded-md">
                      {p?.price_taka} Tk.
                    </h1>
                  </div>
                </div>
                <hr />
                <p className="text-gray-500 text-sm mt-2">{p?.description}</p>

                <div className="border mt-2 text-center text-white py-2 rounded-xl bg-[rgb(33,54,68)]">
                  <Link to="/deposit">
                    <button>BUY NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Package;
