const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-8 max-w-72 mx-auto">
      <p className=" text-center text-yellow-400 mb-2">---{subHeading}---</p>
      <h3 className="uppercase text-center py-2 text-2xl border-y-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
