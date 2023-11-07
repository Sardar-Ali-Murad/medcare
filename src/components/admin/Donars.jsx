import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
const Donars = () => {
  let [loading, setLoading] = React.useState(false);
  let [data, setData] = React.useState([]);
  let [updater, setUpdater] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    const getDonars = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get("https://medicare-nodejs.vercel.app/api/v1/donar");
        setData(data?.donars);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getDonars();
  }, [updater]);

  const handleApprove = async (id, verification) => {
    setLoading(true);
    try {
      await axios.patch(
        `https://medicare-nodejs.vercel.app/api/v1/donar/${id}`,
        { verification: verification },
        { withCredentials: true }
      );
      toast.success("Donar Verified successfully");
      setLoading(false);
      setUpdater((pre) => !pre);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setLoading(false);
    }
  };

  function handlePage(page) {
    setCurrentPage(page);
  }

  return (
    <section className="min-h-[85vh]">
      <ToastContainer />
      {loading ? (
        <Skeleton count={5} />
      ) : data?.length === 0 ? (
        <p className="text-[20px] text-gray-900">
          There is no new request to show
        </p>
      ) : (
        data
          ?.slice((currentPage - 1) * 3, 3 * (currentPage - 1) + 3)
          .map((item) => {
            return (
              <div class="icons-container mb-[20px]">
                <div class="icons">
                  <h3>{item?.group}</h3>
                  <div className="flex flex-col gap-[12px]">
                    <p className="text-[12px] text-gray-700">{item?.name}</p>
                    <p className="text-[12px] text-gray-700">{item?.number}</p>
                    <p className="text-[12px] text-gray-700">{item?.city}</p>
                    <p className="text-[12px] text-gray-700">{item?.state}</p>
                    <p className="text-[12px] text-gray-700">{item?.email}</p>
                      {item?.isVerified === false && (
                        <input
                          value="Approve"
                          class="btn w-[120px] flex items-center ml-[50%] translate-x-[-50%] text-center"
                          onClick={() => handleApprove(item?._id, true)}
                        />
                      )}
                      {item?.isVerified === true && (
                        <input
                          value="Disapprove"
                          class="btn w-[120px] flex items-center ml-[50%] translate-x-[-50%] text-center"
                          onClick={() => handleApprove(item?._id, false)}
                        />
                      )}
                  </div>
                </div>
              </div>
            );
          })
      )}
      <div className="my-[30px]">
        <ResponsivePagination
          current={currentPage}
          total={Math.ceil(data?.length / 3)}
          onPageChange={(page) => handlePage(page)}
        />
      </div>
    </section>
  );
};

export default Donars;
