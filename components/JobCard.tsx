import { JobDescription } from "@/data/previous-jobs";
import Card, {CardBody, CardHeader} from "@/components/Card";

export function JobCard({ job }: { job: JobDescription }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <h5>{job.companyName}</h5>
                </CardHeader>
                <CardBody>
                    <p><b>{job.jobTitle}</b></p>
                    <p>{job.years}</p>
                    <br/>
                    <p className="text-justify max-w-prose">{job.jobDescription}</p>
                </CardBody>
            </Card>


        </>
    );
}