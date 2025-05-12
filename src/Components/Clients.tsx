const Logos = [
  "/Logo1.png",
  "/Logo2.png",
  "/Logo3.png",
  "/Logo4.png",
  "/Logo5.png",
  "/Logo6.png",
];
const Clients = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-white py-6 px-4 space-y-2">
      <h1 className=" text-3xl font-semibold text-[#4D4D4D]">Our Clients</h1>
      <p className=" text-[#717171]">We have been working with some Fortune 500+ clients</p>
      <div className=" w-screen px-6 flex justify-evenly py-4 flex-wrap">
         {Logos.map((logo)=>(
             <img src={logo} alt="" className=" h-8" />
         ))}
      </div>
    </div>
  );
};

export default Clients;
