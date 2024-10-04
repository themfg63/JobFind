import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobPage = () => {
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-5 inline-block" to="/find-jobs">
                <Button color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">Geri Dön</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc />
                <RecommendedJobs />
            </div>
        </div>
    )
}

export default JobPage;