import { Box, Link, Typography } from "@mui/material";
import Image from "../../../../material-ui/src/Atoms/Avatars/Image";
import email from "./../../assets/logos/email.png";
import linkedin from "./../../assets/logos/linkedin.png";
import location from "./../../assets/logos/location.png";
import phone from "./../../assets/logos/phone.png";

export const SectionContainer = ({ children }: any) => {
  return <Box sx={{ padding: "2rem 2rem 1rem 2rem" }}>{children}</Box>;
};
export const SectionHeader = ({ Header }: { Header: string }) => {
  return (
    <Typography variant="h4" color="initial" sx={{ color: "#336699" }}>
      {Header}
    </Typography>
  );
};

export const Section = ({
  children,
  Header,
}: {
  children: any;
  Header: string;
}) => {
  return (
    <SectionContainer>
      <SectionHeader Header={Header} />
      {children}
    </SectionContainer>
  );
};

type BasicIntroPropsType = {
  Name: string;
  Position: string;
  About: string;
};
export const BasicIntro = ({ Name, Position, About }: BasicIntroPropsType) => {
  return (
    <SectionContainer>
      <Typography variant="h1" color="initial" sx={{ color: "#336699" }}>
        {Name}
      </Typography>
      <Typography variant="h3" color="initial" sx={{ color: "grey" }}>
        {Position}
      </Typography>
      <Typography variant="h6" color="initial">
        {About}
      </Typography>
    </SectionContainer>
  );
};

type ContactItemPropsType = {
  Logo: string;
  Alt: string;
  Text: string;
};
export const ContactItem = ({ Logo, Alt, Text }: ContactItemPropsType) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Image Src={Logo} Txt={Alt} Height="20px" Width="20px" />
      <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
        {Text}
      </Typography>
    </Box>
  );
};
export const Contact = () => {
  return (
    <Box>
      <HrLine />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <ContactItem Logo={email} Alt="email" Text="kjsdhkjh@gmail.com" />
        <ContactItem Logo={phone} Alt="email" Text="01894456813" />
        <ContactItem Logo={location} Alt="email" Text="Dhaka, Bangladesh" />
        <ContactItem Logo={linkedin} Alt="email" Text="in/jjhbbmnb" />
      </Box>
      <HrLine />
    </Box>
  );
};

export const HrLine = () => {
  return <Box sx={{ borderTop: "3px #336699 solid" }}></Box>;
};
type ExperienceItemPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
export const ExperienceItem = ({
  position,
  companyName,
  startAt,
  endAt,
}: ExperienceItemPropsType) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
      <Typography variant="h4">{`* ${position} `}</Typography>
      <Typography variant="h5">{`, ${companyName} `}</Typography>
      <Typography variant="h6">{`, ${startAt} to ${endAt}`}</Typography>
    </Box>
  );
};
type jobPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
export const WorkExperience = ({ experience }: any) => {
  return (
    <Section Header="WORK EXPERIENCE">
      {experience.map((job: jobPropsType, index: number) => {
        return (
          <ExperienceItem
            key={index}
            position={job.position}
            companyName={job.companyName}
            startAt={job.startAt}
            endAt={job.endAt}
          />
        );
      })}
    </Section>
  );
};

export const SkillItem = ({ name }: any) => {
  return (
    <Typography
      variant="h6"
      sx={{
        padding: "5px 10px",
        margin: "5px",
        backgroundColor: "#336699",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {name}
    </Typography>
  );
};

export const Skill = ({ skills }: any) => {
  type skillType = {
    id: string;
    name: string;
    thumbnail: string;
  };
  return (
    <Section Header="SKILLS">
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {skills.map((skill: skillType, index: number) => {
          return <SkillItem key={index} name={skill.name} />;
        })}
      </Box>
    </Section>
  );
};

export const Education = ({ Education }: any) => {
  const Data = Education[Education.length - 1];
  return (
    <Section Header="EDUCATION">
      <Typography variant="h6">{Data.title}</Typography>
      <Typography variant="h6">{Data.institute}</Typography>
      <Typography variant="h6">{Data.result}</Typography>
      <Typography variant="h6">{Data.passingyear}</Typography>
    </Section>
  );
};

type ProjectsItemPropsType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};
export const ProjectsItem = ({
  name,
  description,
  repoUrl,
  liveUrl,
}: ProjectsItemPropsType) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">{`# ${name}`}</Typography>
      <Typography variant="h5">{description}</Typography>
      <Link href={repoUrl} variant="h6">
        {repoUrl}
      </Link>
      <Link href={repoUrl} variant="h6">
        {liveUrl}
      </Link>
    </Box>
  );
};
type projectPropsType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};
export const Projects = ({ Projects }: any) => {
  return (
    <Section Header="PROJECTS">
      {Projects.map((project: projectPropsType, index: number) => {
        return (
          <ProjectsItem
            key={index}
            name={project.name}
            description={project.description}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        );
      })}
    </Section>
  );
};
