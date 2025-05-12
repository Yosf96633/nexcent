const Header = () => {
  return (
    <header className=" bg-[#f5f7fa] flex justify-between px-10 py-6 items-center">
          <div>
             <img src="/Logo.png" alt="" />
          </div>
          <nav className=" space-x-12">
             <a href="">Home</a>
             <a href="">Service</a>
             <a href="">Feature</a>
             <a href="">Product</a>
             <a href="">Testimonial</a>
             <a href="">FAQ</a>
          </nav>
          <div className=" space-x-8">
              <button className=" text-[#4caf4f] cursor-pointer">Login</button>
              <button className=" bg-[#4caf4f] text-white px-4 py-2 cursor-pointer rounded-[0.4rem]">Sign up</button>
          </div>
    </header>
  )
}

export default Header