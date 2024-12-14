import { Button, Divider, Text } from "@mantine/core";
import { CiBookmark } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { TbBookmarkFilled, TbClockHour3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = (props:any) => {
    return <Link to="/jobs" className="p-4 rounded-xl bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-300 ease-in-out w-72 flex flex-col gap-3">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/photos/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &bull; {props.applicants} Başvuru</div>
                </div>
            </div>
            {
                props.saved?<TbBookmarkFilled  className="cursor-pointer text-bright-sun-400" stroke="1.5"/> : 
                <CiBookmark className="cursor-pointer text-mine-shaft-300" stroke="1.5" />
            }
        </div>
        <div className="flex gap-2">
            <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{props.experience}</div>
            <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{props.jobType}</div>
            <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{props.location}</div>
        </div>
        <div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.description}</Text>
        </div>
        <Divider color="mineShaft.7" size="xs" />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">{props.package} TL</div>
            <div className="text-xs flex gap-1 items-center text-mine-shaft-400">
                <TbClockHour3 className="h-5 w-5" stroke="1.5" />
                {props.postedDaysAgo} Gün Önce {props.applied || props.interviewing?"Başvuruldu":props.offered?"Mülakat Yapıldı":"Kaydedildi"}
            </div>
        </div>
        {
            (props.offered || props.interviewing) && <Divider color="mineShaft.7" size="xs" />
        }
        {
            props.offered && <div className="flex gap-2">
                <Button color="brightSun.4" variant="outline" fullWidth>Kabul Et</Button>
                <Button color="red.5" variant="light" fullWidth>Red Et</Button>
            </div>    
        }
        {
            props.interviewing && <div className="flex gap-1 text-sm items-center">
                <MdCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke="1.5" />
                16 Aralık Salı &bull; <span className="text-mine-shaft-400">10:00</span>
            </div>
        }

    </Link>
}

export default Card;