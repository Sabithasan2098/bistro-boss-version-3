import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const {
    data: payments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["payments", user?.email], // Include email in the query key to refetch if the email changes
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  if (error) return <div>Error fetching payments</div>;

  return (
    <div>
      <SectionTitle
        subHeading={"At a Glance!"}
        heading={"payment history"}
      ></SectionTitle>
      {isLoading ? (
        <span className="loading loading-bars loading-xs"></span>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#d1a054] text-white">
              <tr>
                <th>Email</th>
                <th>Tranjection Id</th>
                <th>Total Price</th>
                <th>Payment date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments?.map((payment) => (
                <tr key={payment._id}>
                  <th>{payment?.email}</th>
                  <td>{payment?.transectionId}</td>
                  <td>{payment?.price}</td>
                  <td>{new Date(payment?.date).toLocaleDateString()}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
