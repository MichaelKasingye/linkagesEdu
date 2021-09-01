import CardStyles from "./Opportunity.module.css";
import Link from 'next/link';

import { useRouter } from 'next/router'

function OpportunityCard({ Jid, jobTitle, company, location, paragraph, deadline }) {

 

  return (
    <Link href="/JobDecs/[JobId]" as={`/JobDecs/${Jid}`} passHref>
    <div className={CardStyles.card}>
      <p className={CardStyles.jobTitle}>{jobTitle}</p>
      <div className={CardStyles.companyDetails}>
        <p className={CardStyles.company}>{company}</p>
        <p className={CardStyles.location}>{location}</p>
      </div>
      <p className={CardStyles.paragraph}>{paragraph}</p>
      <p className={CardStyles.deadline}>Deadline: {deadline}</p>
    </div>
    </Link>
  );
}

export default OpportunityCard;
