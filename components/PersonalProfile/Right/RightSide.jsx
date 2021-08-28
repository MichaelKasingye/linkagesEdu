import rightCss from "../../../styles/body/RightBody.module.css";
import ProfileHeader from "../../ProfileHeader/ProfileHeader";
import SkillsTags from "../../Skills/Skills";
import BioParagraph from "../../Paragraph/Paragraph";
import Border from "../../Border/Border";
import profileStyle from "../../../styles/body/Profile.module.css";
import TitleRight from "../../TitleRight/TitleRight";
import ProjectCard from "../../ProjectCard/ProjectCard";

const techSkills = ["HTML", "CSS", "JavaScript", "React", "Nextjs"];

const otherSkills = [
  "Critical thinking",
  "Attention to detail",
  "High level of communication",
];

const certificates = ["Outbox EDU Fullstack", "Udacity React"];

const profileDetails = {
  name: "John Magale",
  title: "FullStack Developer",
  phoneNumber: "0700-000000",
  email: "john@email.com",
};

const projectDetails = [
  {
    key: "1",
    projectName: "Food app",
    projectDescription: "Allows to make orders for foods online",
    projectLink: "/",
  },
  {
    key: "2",
    projectName: "Food delivery",
    projectDescription: "Allows to make orders for foods online",
    projectLink: "/",
  },
  {
    key: "3",
    projectName: "Food website",
    projectDescription: "Allows to make orders for foods online",
    projectLink: "/",
  },
];

function RightSide() {
  return (
    
    <section className={rightCss.right}>
      {/* {console.log(data)} */}
      <ProfileHeader profileDetails={profileDetails} />
      <div className={profileStyle.border}></div>
      <div>
        <TitleRight title="Bio" />
        <BioParagraph text="Diligent software developer with experience in web applications development. Am a graduate of OUTBOX EDU." />
      </div>
      <Border />
      <div>
        <TitleRight title="Technical Skills" />
        <SkillsTags allSkills={techSkills} />
      </div>
      <Border />
      <div>
        <TitleRight title="Other Skills" />
        <SkillsTags allSkills={otherSkills} />
      </div>
      <Border />
      <div>
        <TitleRight title="Certifications" />
        <SkillsTags allSkills={certificates} />
      </div>
      <Border />
      <div className={profileStyle.allProjects}>
        <TitleRight title="Portfolio" />
        <div className={profileStyle.flexitem}>
          {projectDetails.map(
            ({ projectName, projectDescription, projectLink, key }) => (
              <ProjectCard
                key={key}
                projectName={projectName}
                projectLink={projectLink}
                projectDescription={projectDescription}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default RightSide;
