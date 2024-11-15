import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
    const navigate = useNavigate();

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Divider size="xs" mb="xs" />
        <Button color="brightSun.4" onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} variant="light">
            Geri Dön
        </Button>
        <ApplyJobComp />
    </div>
}

export default ApplyJobPage;