import CardStyles from "./Opportunity.module.css";

function OpportunityCard({ jobTitle, company, location, paragraph, deadline }) {
  return (
    <div className={CardStyles.card}>
      <p className={CardStyles.jobTitle}>{jobTitle}</p>
      <div className={CardStyles.companyDetails}>
        <p className={CardStyles.company}>{company}</p>
        <p className={CardStyles.location}>{location}</p>
      </div>
      <p className={CardStyles.paragraph}>{paragraph}</p>
      <p className={CardStyles.deadline}>Deadline: {deadline}</p>
    </div>
  );
}

export default OpportunityCard;
