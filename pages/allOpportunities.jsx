import opportStyles from "../styles/body/AllOpportunities.module.css";
import OpportunityCard from "../components/Opportunity/OpportunityCard";
import SearchBar from "../components/SearchBar/SearchBar";

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
