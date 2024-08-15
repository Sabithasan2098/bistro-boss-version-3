import Cover from "../../shered/Cover/Cover";
import contactUsImg from "../../../assets/contact/banner.jpg";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={contactUsImg}
        description={"Would you like to try our dish?"}
        title={"Contact us"}
      />
    </div>
  );
};

export default ContactUs;
