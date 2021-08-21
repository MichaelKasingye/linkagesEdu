import opportStyles from "../styles/body/AllOpportunities.module.css";
import OpportunityCard from "../components/Opportunity/OpportunityCard";
import SearchBar from "../components/SearchBar/SearchBar";

const opport = [
  {
    key: "1",
    jobTitle: "Software Engineer",
    company: "Andela",
    location: "Rwanda",
    paragraph:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    deadline: "23/08/2021",
  },
  {
    key: "2",
    jobTitle: "Software Engineer",
    company: "Andela",
    location: "Rwanda",
    paragraph:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    deadline: "23/08/2021",
  },
  {
    key: "3",
    jobTitle: "Software Engineer",
    company: "Andela",
    location: "Rwanda",
    paragraph:
      "hhdjsdhs hjhas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    deadline: "23/08/2021",
  },
  {
    key: "2",
    jobTitle: "Software Engineer",
    company: "Andela",
    location: "Rwanda",
    paragraph:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    deadline: "23/08/2021",
  },
  {
    key: "2",
    jobTitle: "Software Engineer",
    company: "Andela",
    location: "Rwanda",
    paragraph:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    deadline: "23/08/2021",
  },
];

function Opportunities() {
  return (
    <div className={opportStyles.allApportunities}>
      <h2>Job Opportunities</h2>
      <SearchBar />
      <div className={opportStyles.flexitem}>
        {opport.map(
          ({ key, jobTitle, company, location, paragraph, deadline }) => (
            <OpportunityCard
              key={key}
              jobTitle={jobTitle}
              company={company}
              location={location}
              paragraph={paragraph}
              deadline={deadline}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Opportunities;
