const features = [
  {
    icon: `/F1.png`,
    title: `Membership Organisations`,
    description: `Our membership management software provides full automation of membership renewals and payments`,
  },
  {
    icon: `/F2.png`,
    title: `National Associations`,
    description: `Our membership management software provides full automation of membership renewals and payments`,
  },
  {
    icon: `/F3.png`,
    title: `Clubs And Groups`,
    description: `Our membership management software provides full automation of membership renewals and payments`,
  },
];

const Features = () => {
  return (
    <div className=" py-6 flex flex-col items-center  bg-white px-4 space-y-2">
      <h1 className=" text-3xl font-semibold text-[#4D4D4D] text-center">
        Manage your entire community <br />
        in a single system
      </h1>
      <p className=" text-[#717171] text-center">
        Who is Nextcent suitable for?
      </p>
     <div className="w-full flex justify-center">
  <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-20 px-6 py-4 max-w-6xl w-full">
    {features.map((feature, i) => (
      <div className="bg-white shadow-md flex flex-col items-center p-4 rounded-xl" key={i}>
        <img src={feature.icon} alt="" />
        <h1 className="text-2xl text-center font-semibold text-[#4D4D4D]">
          {feature.title}
        </h1>
        <p className="text-center text-[#717171]">{feature.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Features;
