import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });
  //   delete a user----------
  const handleDeleteUser = (user) => {
    console.log(user);
  };
  //   create admin------------
  const handleCreateAdmin = (user) => {
    console.log(user);
  };
  return (
    <div>
      <SectionTitle subHeading={"How many??"} heading={"manage all users"} />
      <div className="text-center">
        <h1>Total Users:{users.length}</h1>
        <div className="overflow-x-auto max-w-full mx-auto">
          <table className="table mt-5">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>
                      <p>{index + 1}</p>
                    </label>
                  </th>
                  <td>
                    <p>{user.name}</p>
                  </td>
                  <td>
                    <h3>{user.email}</h3>
                  </td>
                  <td>
                    <button
                      onClick={() => handleCreateAdmin(user)}
                      className="btn btn-ghost bg-[#d1a054] px-4 py-2 text-2xl text-white"
                    >
                      <FaUsers className="" />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost bg-red-600 px-4 py-2 text-2xl text-white"
                    >
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
