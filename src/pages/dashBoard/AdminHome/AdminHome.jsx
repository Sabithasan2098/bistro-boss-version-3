import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { FaUsers, FaWallet } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { GiFoodTruck } from "react-icons/gi";
import { PieChart, Pie, Cell, Legend } from "recharts";

// install bar chart------------------------>
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

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
  // console.log({ chartData });

  // chart data----------------------->
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

  const pieChartData = chartData?.map((data) => {
    return { name: data.category, value: data.totalRevenue };
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#fc4c82"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          {chartData?.length > 0 ? (
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
          ) : (
            <p>Loading...........</p>
          )}
        </div>
        <div>
          {pieChartData?.length > 0 ? (
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          ) : (
            <p>Loading..........</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
