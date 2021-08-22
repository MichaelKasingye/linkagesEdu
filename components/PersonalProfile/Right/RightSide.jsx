import React from "react";
import rightCss from "../../../styles/body/RightBody.module.css";
import ProfileHeader from "../../ProfileHeader/ProfileHeader";
import SkillsTags from "../../Skills/Skills";
import BioParagraph from "../../Paragraph/Paragraph";
import Border from "../../Border/Border";
import profileStyle from "../../../styles/body/Profile.module.css";
import TitleRight from "../../TitleRight/TitleRight";

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
  email: "jb@email.com",
};

function RightSide() {
  return (
    <section className={rightCss.right}>
      <ProfileHeader profileDetails={profileDetails} />
      <div className={profileStyle.border}></div>
      <div>
        <TitleRight title="Bio" />
        <BioParagraph text="Diligent software developer with experience in web applications development. Am a graduate of OUTBOX EDU." />
      </div>
      <Border />
      <SkillsTags skillsTitle="technical skills" allSkills={techSkills} />
      <Border />
      <SkillsTags skillsTitle="other skills" allSkills={otherSkills} />
      <Border />
      <SkillsTags skillsTitle="certications" allSkills={certificates} />
      <Border />
    </section>
  );
}

export default RightSide;
