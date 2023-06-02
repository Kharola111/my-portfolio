import ProjectCard from "../project_card/Projectcard";
import first from "./imgs/hirehub.jfif";
import second from "./imgs/StaySense-Logo.png";
import third from "./imgs/Rectangle 22.jfif";

const Projects = () => {
  const projects = [
    {
      img: first,
      langs: ["HTML", "CSS", "Javascript", "React", "MongoDb"],
      title: "HireHub",
      disc: "HireHub website for recruiting",
    },
    {
      img: second,
      langs: ["HTML", "CSS", "Javascript", "Node.js"],
      title: "StaySense",
      disc: "StaySense website for hotel booking",
    },
    {
      img: third,
      langs: ["HTML", "CSS", "Javascript", "Node.js", "Python"],
      title: "NewsWire",
      disc: "News website using React and Redux",
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
        <div className="text-white font-medium">
          <a href="">
            <span>View all ~~&gt;</span>
          </a>
        </div>
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
