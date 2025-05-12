const stats = [
  {
    icons: `/s1.png`,
    numbers: `2,245,341`,
    text: `Members`,
  },
  {
    icons: `/s3.png`,
    numbers: `46,328`,
    text: `Clubs`,
  },
  {
    icons: `/s2.png`,
    numbers: `828,867`,
    text: `Evemt Bookings`,
  },
  {
    icons: `/s4.png`,
    numbers: `1,926,436`,
    text: `Payments`,
  },
];

const Stats = () => {
  return (
    <div className=" py-16 bg-[#f5f7fa] flex justify-evenly">
      <div className=" space-y-4">
        <h1 className=" text-[#4D4D4D] text-4xl font-semibold">
          Helping a local <br />{" "}
          <span className=" text-[#4caf4f] ">business reinvent itself</span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className=" grid grid-cols-2 gap-12">
           {stats.map((stat , i)=>(
            <div key={i} className=" flex items-center space-x-4">
                  <img src={stat.icons} alt=""  className=" h-10"/>
                  <div className=" space-x-2">
                       <p className=" text-2xl font-semibold">{stat.numbers}</p>
                        <p className=" text-gray-500">{stat.text}</p>
                  </div>
            </div>
           ))}
      </div>
    </div>
  );
};

export default Stats;
