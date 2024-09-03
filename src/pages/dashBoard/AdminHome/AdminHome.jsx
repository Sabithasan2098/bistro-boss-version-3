import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { FaUsers, FaWallet } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { GiFoodTruck } from "react-icons/gi";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log({ stats });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Wlcome</span> {user?.displayName ? user.displayName : "Back"}{" "}
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="rounded-md bg-gradient-to-r from-[#bd3af0] to-[#fdd9ff] px-7 py-4">
          <div className="flex gap-5 items-center  text-white ">
            <h2>
              <FaWallet className="text-3xl " />
            </h2>
            <div>
              <h1 className="text-2xl font-bold">{stats?.revinue}</h1>
              <p className="text-xl">Revenue</p>
            </div>
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-r from-[#d5a55b] to-[#fef2db] px-7 py-4">
          <div className="flex gap-5 items-center  text-white ">
            <h2>
              <FaUsers className="text-3xl " />
            </h2>
            <div>
              <h1 className="text-2xl font-bold">{stats?.users}</h1>
              <p className="text-xl">Customers</p>
            </div>
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-r from-[#fc4c82] to-[#ffc9e6] px-7 py-4">
          <div className="flex gap-5 items-center  text-white ">
            <h2>
              <SiCodechef className="text-3xl " />
            </h2>
            <div>
              <h1 className="text-2xl font-bold">{stats?.menuItems}</h1>
              <p className="text-xl">Products</p>
            </div>
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-r from-[#6bb0fd] to-[#b6f5fd] px-7 py-4">
          <div className="flex gap-5 items-center  text-white ">
            <h2>
              <GiFoodTruck className="text-3xl " />
            </h2>
            <div>
              <h1 className="text-2xl font-bold">{stats?.orders}</h1>
              <p className="text-xl">Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
