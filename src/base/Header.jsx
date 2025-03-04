import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUser from "../hook/useUser";

function Header() {

  const { user } = useUser();

  const handleMainBalance = () => {
    Swal.fire(`Main Balance ${user?.main_balance} BDT`);
  };
  const handleOwingBalance = () => {
    Swal.fire("Owing Balance 0.00 BDT");
  };

  return (
    <>
      <nav className="bg-fuchsia-600 pt-5 pb-10 px-3 ">
        <div className="flex items-start justify-between">
          <di className="flex gap-3 pb-3">
            <Link to={"/profile"}>
              <Avatar src={user?.buyer_Image ?? ''} />
            </Link>

            <div className="text-white">
              <h1 to={"/profile"} className="font-bold text-sm">
                {user?.name}
              </h1>
              <span className="text-xs font-medium">
                {user?.phone_number}
              </span>
            </div>
          </di>
          <div>
            <Link
              to="/deposit"
            >
              <Button variant="contained" color="warning">
                Deposit
              </Button>
            </Link>
          </div>
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
              className="btn m-1 p-2 bg-white text-black/80 font-bold w-[200px] rounded-full"
            >
              Balance
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-30 w-52 p-2 shadow space-y-3"
            >
              <li>
                <button
                  onClick={handleMainBalance}
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
    </>
  );
}

export default Header;
