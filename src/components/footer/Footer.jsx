const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className="flex items-center gap-8 mb-3">
              {/* logo */}
              <div className="flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>Rahul</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">rahul.kharola111@gmail.com</span>
            </div>
            {/* description */}
            <div className="text-white">
              <p>Web designer and front-end developer based in Dehradun</p>
            </div>
          </div>
          {/* right */}
          <div className="mx-auto md:mx-0">
            {/* title */}
            <h2 className="text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://discord.com/">
                <img src={require("./imgs/Discord.png")} alt="" />
              </a>
              <a href="https://www.figma.com/">
                <img src={require("./imgs/Figma.png")} alt="" />
              </a>
              <a href="https://github.com/">
                <img src={require("./imgs/Github.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © 2023. Made by Rahul
        </div>
      </div>
    </>
  );
};

export default Footer;
