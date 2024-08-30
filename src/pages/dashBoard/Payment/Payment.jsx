import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: give a pk key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"payment"}
        subHeading={"Please pay to eat"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
