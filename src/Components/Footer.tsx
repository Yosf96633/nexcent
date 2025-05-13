const Footer = () => {
  return (
    <div className=" pt-8">
      <OK />
      <Actual />
    </div>
  );
};

export default Footer;

const OK = () => {
  return (
    <div className=" flex flex-col items-center justify-center space-y-4 py-12 bg-[#F5F7FA]">
      <h1 className=" text-6xl font-semibold  text-center tracking-wider">
        Pellentesque suscipit <br />
        fringilla libero eu.
      </h1>
      <button className=" bg-[#4caf4f] text-white px-4 py-2 cursor-pointer rounded-[0.4rem]">
        Get a Demo
      </button>
    </div>
  );
};

const Actual = () => {
  return (
    <footer className=" bg-[#263238] text-white py-16 px-9 grid grid-cols-2">
      <div className=" flex flex-col space-y-4">
        <div className=" flex space-x-2">
          <img src="/Icon.png" alt="" className=" h-6" />
          <h1 className=" text-lg font-semibold">Nexcent</h1>
        </div>
        <p className=" text-sm font-light">Copyright © 2020 Nexcent ltd.</p>
        <p className=" text-sm font-light">All rights reserved</p>
      </div>
      <div className=" grid grid-cols-3">
        <div className=" flex flex-col text-sm font-light space-y-4">
          <h1 className=" text-sm font-medium">Company</h1>
          <a href="">About us</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
        </div>
         <div className=" flex flex-col text-sm font-light space-y-4">
          <h1 className=" text-sm font-medium">Support</h1>
          <a href="">Help center</a>
          <a href="">Term of services</a>
          <a href="">Legal</a>
          <a href="">Privacy Policy</a>
          <a href="">Status</a>
        </div>
        <div className=" space-y-4">
             <h1 className=" text-xl font-semibold ">
                Stay up to date
             </h1>
             <input type="text" placeholder="Your email address" className="bg-[#717171] px-4 placeholder:text-white py-1 rounded-sm" name="" id="" />
        </div>
      </div>
    </footer>
  );
};
