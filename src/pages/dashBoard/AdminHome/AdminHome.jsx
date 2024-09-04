import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { FaUsers, FaWallet } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { GiFoodTruck } from "react-icons/gi";

// install bar chart------------------------>
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
// install for pi chart-------------------->

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

  // load the chart data---------
  const { data: chartData } = useQuery({
    queryKey: ["order-charts"],
    queryFn: async () => {
      const res = await axiosSecure.get("order-stats");
      return res.data;
    },
  });
  console.log({ chartData });

  // chart data----------------------->
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  // for pi chart------------->
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Wlcome</span> {user?.displayName ? user.displayName : "Back"}{" "}
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="rounded-md bg-gradient-to-r from-[#bd3af0] to-[#fdd9ff] px-7 py-4 max-w-48 md:w-full">
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
        <div className="rounded-md bg-gradient-to-r from-[#d5a55b] to-[#fef2db] px-7 py-4 max-w-48 md:w-full">
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
        <div className="rounded-md bg-gradient-to-r from-[#fc4c82] to-[#ffc9e6] px-7 py-4 max-w-48 md:w-full">
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
        <div className="rounded-md bg-gradient-to-r from-[#6bb0fd] to-[#b6f5fd] px-7 py-4 max-w-48 md:w-full">
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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-1/2">
          {" "}
          <BarChart
            width={450}
            height={250}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 5]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
