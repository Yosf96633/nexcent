const Pana = () => {
  return (
    <div className=" bg-white p-6 flex w-screen">
      <div className="px-12">
        <img src="/pana.png" alt="" />
      </div>
      <div className=" w-1/2 self-center space-y-4">
        <h1 className=" text-[#4D4D4D] text-4xl font-semibold">
          How to design your site footer like we did
        </h1>
        <p className=" text-[#717171] text-base font-light">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className=" bg-[#4caf4f] text-white px-4 py-2 cursor-pointer rounded-[0.4rem]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Pana;
