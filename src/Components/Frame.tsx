const Frame = () => {
  return (
    <div className=" bg-white p-6 flex w-screen">
      <div className="px-12">
        <img src="/Frame.png" alt="" />
      </div>
      <div className=" w-1/2 self-center space-y-4">
        <h1 className=" text-[#4D4D4D] text-4xl font-semibold">The unseen of spending three years at Pixelgrade</h1>
        <p className=" text-[#717171] text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className=" bg-[#4caf4f] text-white px-4 py-2 cursor-pointer rounded-[0.4rem]">Learn More</button>
      </div>
    </div>
  );
};

export default Frame;
