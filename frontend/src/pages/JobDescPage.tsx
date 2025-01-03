import { Button } from "@mantine/core"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import RecommendedJobs from "../components/JobDesc/RecommendedJob";
import Job from "../components/JobDesc/Job";

const JobDescPage = () => {
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-5 inline-block" to="/find-jobs">
                <Button color="brightSun.4" leftSection={<FaArrowLeft size={20} />} variant="light">Geri Dön</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <Job />
                <RecommendedJobs />
            </div>
        </div>
    )
}

export default JobDescPage;