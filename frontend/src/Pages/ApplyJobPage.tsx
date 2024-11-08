import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp"
import { useEffect, useState } from "react"
import { getJob } from "../Services/JobService"

const ApplyJobPage = () => {
    const {id} = useParams();
    const [job,setJob] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
        getJob(id).then((res) => {
            setJob(res);
        }).catch((err) => {
            console.log(err);
        })
    },[id])

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Divider size="xs" />
        <Link className="my-5 inline-block" to="/jobs" >
            <Button color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">Geri Dön</Button>
        </Link>
        <ApplyJobComp {...job}/>
    </div>
}

export default ApplyJobPage;