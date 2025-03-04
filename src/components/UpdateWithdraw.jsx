import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiReq from "../utils/axiosInstance";
import Toast from "../plugin/Toast";

function UpdateWithdraw() {
  const { pk } = useParams();
  console.log(pk);
  const navigate = useNavigate();
  const [status, setStatus] = useState("APPROVED");

  const handleWithdrawSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiReq.put(
        `package/withdraw_status_update/${pk}/`,
        { status }
      );

      Toast().fire({
        icon: "success",
        title: "Status updated successfully.",
      });

      navigate("/admin_dashboard");
    } catch (error) {
      Toast().fire({
        icon: "error",
        title: "Failed to update status.",
      });
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <h1 className="text-center font-bold">Update Withdraw Status</h1>
              <form className="mt-5" onSubmit={handleWithdrawSubmit}>
                <div className="mt-1 pb-4">
                  <input
                    name="status"
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Enter status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[rgb(33,54,68)] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateWithdraw;
