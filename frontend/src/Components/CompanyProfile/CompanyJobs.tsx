import { jobList } from "../../Data/Data"
import JobCard from "../FindJobs/JobCard"

const CompanyJobs = () => {
    return <div className="flex mt-10 flex-wrap gap-3">
        {
            jobList.map((job, index) => index <6 && <JobCard key={index} {...job} />)
        }
    </div>
}

export default CompanyJobs;