import {JobCard} from "@/components/JobCard";
import PageTitle from "@/components/PageTitle";
import {JobDescription, jobList} from "@/data/previous-jobs";
import circuit from "@/assets/images/circuit5.png"
import PageContentWrapper from "@/components/PageContentWrapper";

export default function PreviousJobs() {
    return (
        <>
            <PageTitle title="Previous Jobs" backgroundPic={circuit}/>
            <PageContentWrapper>

                <div className="flex flex-wrap justify-start">
                    {
                        jobList.sort(
                            (job1, job2) => job2.progressiveId - job1.progressiveId)
                            .map(
                                (job: JobDescription) => {
                                    return <div key={job.progressiveId}
                                                className="flex flex-col w-full lg:w-1/2 lg:px-4">
                                        <JobCard job={job}/>
                                    </div>
                                }
                            )
                    }
                </div>
            </PageContentWrapper>


        </>
    )
}