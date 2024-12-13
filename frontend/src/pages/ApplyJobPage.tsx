import { Button } from "@mantine/core"
import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import ApplyJobComp from "../components/ApplyJob/ApplyJobComp"

const ApplyJobPage = () => {
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-5 inline-block" to="/jobs">
                <Button color="brightSun.4" leftSection={<FaArrowLeft size={20} />} variant="light">Geri Dön</Button>
            </Link>
            <ApplyJobComp />
        </div>
    )
}

export default ApplyJobPage;