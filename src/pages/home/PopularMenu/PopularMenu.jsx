import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popularMenu = menu?.filter((data) => data.category === "popular");
  return (
    <div className="mb-8 md:mb-20 ">
      <SectionTitle heading="from our menu" subHeading="Check it out" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {popularMenu?.map((data) => (
          <section key={data._id}>
            <div className="flex space-x-2 items-center">
              <img
                className="h-[70px] w-[70px] rounded-b-full rounded-r-full"
                src={data.image}
                alt=""
              />
              <div>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">
                    {data.name}------------
                  </h3>
                  <p className="text-yellow-600 font-semibold">${data.price}</p>
                </div>
                <p>{data.recipe}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
