const Hero = () => {
  return (
    <div className=" flex p-12 justify-around bg-[#f5f7fa]">
      <div className=" space-y-6 self-center">
        <h1 className=" text-[#4d4d4d] text-7xl font-semibold">
          Lessons and insights <br />
          <span className="text-[#4caf4f] ">from 8 years</span>
        </h1>
        <p className=" text-gray-700">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className=" text-white bg-[#4caf4f] px-8 py-3 cursor-pointer rounded-[0.4rem]">
            Register
        </button>
      </div>
      <div>
        <img src="/illustration.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
