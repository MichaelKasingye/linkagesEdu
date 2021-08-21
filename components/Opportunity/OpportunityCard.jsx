import CardStyles from "./Opportunity.module.css";

function OpportunityCard({ jobTitle, company, location, paragraph, deadline }) {
  return (
    <div className={CardStyles.card}>
      <h4 className={CardStyles.jobTitle}>{jobTitle}</h4>
      <p className={CardStyles.company}>{company}</p>
      <p className={CardStyles.location}>{location}</p>
      <p className={CardStyles.paragraph}>{paragraph}</p>
      <p className={CardStyles.deadline}>Deadline: {deadline}</p>
    </div>
  );
}

export default OpportunityCard;
