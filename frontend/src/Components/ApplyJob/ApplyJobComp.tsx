import { Divider } from "@mantine/core";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../../Services/Utilities";

const ApplyJobComp = (props:any) => {
    return <div className="w-2/3 m-auto">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
                    <img className="h-14" src={`/Companies/google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">{props.jobTitle}</div>
                    <div className="text-lg text-mine-shaft-300">{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Başvuru</div>
                </div>
            </div>
        </div>
        <Divider size="xs" my="xl" />
        <ApplicationForm />
    </div>
}

export default ApplyJobComp;