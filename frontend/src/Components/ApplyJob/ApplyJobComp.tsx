import { Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";

const ApplyJobComp = () => {
    const navigate = useNavigate();

    return <div className="w-2/3 m-auto">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
                    <img className="h-14" src={`/Companies/google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Backend Developer</div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 gün Önce &bull; 12 Başvuru</div>
                </div>
            </div>
        </div>
        <Divider size="xs" my="xl" />
        <ApplicationForm />
    </div>
}

export default ApplyJobComp;