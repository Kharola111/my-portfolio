const AboutSection = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className="flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className="mb-12">
              <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div>
                  <span className="text-[#C778DD]">#</span>About-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF]">
              Hello, I’m Rahul Kharola
              <br />
              <br />
              I’m a self-taught Full Stack Developer based in Dehradun, Uttarakhand. I
              can develop responsive websites from scratch and turn them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into websites has been
              my passion for over a year. I have been helping various clients
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="#"
                className="duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white"
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div className="mx-auto">
            <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
