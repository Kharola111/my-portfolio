import ProjectCard from "../project_card/Projectcard";
import first from "./imgs/hirehub.png";
import second from "./imgs/staysense.jpg";
import third from "./imgs/newswire.jfif";

const Projects = () => {
  const projects = [
    {
      img: first,
      langs: ["HTML", "CSS", "Bootstrap","MongoDb","Express.js","React.js","Node.js"],
      title: "HireHub",
      disc: "Welcome to HireHub, the ultimate destination for job seekers and employers to connect and discover exciting career opportunities. Our user-friendly recruiting website is designed to simplify the job search process and streamline the hiring process for employers, making it a win-win platform for both candidates and companies.",
    },
    {
      img: second,
      langs: ["HTML", "CSS", "Bootstrap","MongoDb","Express.js","React.js","Node.js"],
      title: "StaySense",
      disc: "StaySense is a cutting-edge hotel booking website that aims to revolutionize the way travelers find and book accommodations worldwide. With an intuitive and user-friendly interface, StaySense provides a seamless experience for users, making their journey from search to booking hassle-free and enjoyable.",
    },
    {
      img: third,
      langs: ["HTML", "CSS", "Bootstrap","MongoDb","Express.js","React.js","Node.js"],
      title: "NewsWire",
      disc: "Welcome to Newswire, the go-to platform for the latest news and updates from around the world. Our website harnesses the power of React and Redux to provide users with a seamless and interactive news browsing experience. With a clean and intuitive interface, Newswire offers a modern approach to consuming news content.",
    },
  ];

  return (
    <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
      {/* top */}
      <div className="flex justify-between items-center gap-5">
        {/* left */}
        <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
          <div>
            <span className="text-[#C778DD]">#</span>Projects
          </div>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>
        {/* right */}
    
      </div>
      {/* bottom */}
      <div className="flex flex-wrap justify-between gap-4 my-12">
        {/* cards */}
        {projects.map(({ img, langs, title, disc }, index) => (
          <ProjectCard
            key={index}
            img={img}
            langs={langs}
            title={title}
            disc={disc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
