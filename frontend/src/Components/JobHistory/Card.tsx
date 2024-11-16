import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = (props:any) => {
    const profile = useSelector((state:any) => state.profile);
    const dispatch = useDispatch();

    const handleSaveJob = () => {
        // savedJobs'i boş bir dizi olarak başlatıyoruz
        let savedJobs = profile.savedJobs ? [...profile.savedJobs] : [];
        
        if (savedJobs.includes(props.id)) {
            // Eğer iş kaydedilmişse, kaydı kaldır
            savedJobs = savedJobs.filter((id: any) => id !== props.id);
        } else {
            // Eğer iş kaydedilmemişse, listeye ekle
            savedJobs = [...savedJobs, props.id];
        }

        // Güncellenmiş profile objesi
        let updatedProfile = { ...profile, savedJobs: savedJobs };
        dispatch(changeProfile(updatedProfile));
    }
    return <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
        <div className="flex justify-between">
            <div className="flex gap-2 item-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Companies/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">
                        <Link className="hover:text-mine-shaft-200" to="/company">{props.company}</Link>
                        &bull; {props.applicants?props.applicants.length: 0} Başvuru
                    </div>
                </div>
            </div>
            {
                profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400" stroke={1.5} /> : 
                <IconBookmark onClick={handleSaveJob} className="cursor-pointer hover:text-bright-sun-400 text-mine-shaft-300" stroke={1.5} />
            }
        </div>
        <div className="flex gap-2">
            <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{props.experience}</div>
            <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{props.jobType}</div>
            <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{props.location}</div>
        </div>
        <div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>
        </div>
        <Divider color="mineShaft.7" size="xs" />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">{props.packageOffered} TL</div>
            <div className="text-xs flex gap-1 items-center text-mine-shaft-400">
                <IconClockHour3 className="h-5 w-5" stroke={1.5} />
                {props.applied || props.interviewing? "Başvuruldu": props.offered ? "Görüntülendi":"Yayınlandı"}
                {timeAgo(props.postTime)}
            </div>
        </div>
        {(props.offered || props.interviewing) && <Divider color="mineShaft.7" size="xs" />}
        {
            props.offered && <div className="flex gap-2">
                <Button color="brightSun.4" variant="outline" fullWidth>Kabul Et</Button>
                <Button color="brightSun.4" variant="light" fullWidth>Red Et</Button>
            </div>
        }
        {
            props.interviewing && <div className="flex gap-1 text-sm">
                <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} />
                8 Ekim 2024 &bull; <span className="text-mine-shaft-400">10:00</span>
            </div>
        }
        <Link to={`/jobs/${props.id}`}>
            <Button fullWidth color="brightSun.4" variant="outline">Detaylı İncele</Button>
        </Link>
    </div>
}

/*
const Card = (props:any) => {
    return <Link to="/jobs" className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Companies/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &#x2022; {props.applicants} Başvuru</div>
                </div>
            </div>
            {props.saved?<IconBookmarkFilled className="cursor-pointer text-bright-sun-400" stroke={1.5} />:<IconBookmark className="cursor-pointer text-mine-shaft-300" stroke={1.5} />}
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
            {props.description}
        </Text>
        <Divider size="xs" color="mineShaft.7" />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                &#8378; {props.package} / saat
            </div>
            <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                <IconClockHour3 stroke={1.5} className="h-5 w-5"/> {props.postedDaysAgo} Gün Önce {props.applied?"Başvuruldu":props.offered?"Görüntülendi":"Yayınlandı"}
            </div>
        </div>
        {(props.offered || props.interviewing) && <Divider color="mineShaft.7" size="xs" />}
        {
            props.offered && <div className="flex gap-2">
                <Button color="brightSun.4" variant="outline" fullWidth>Kabul Et</Button>
                <Button color="brightSun.4" variant="light" fullWidth>Red Et</Button>
            </div>
        }
        {
            props.interviewing && <div className="flex gap-1 text-sm items-center">
                <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} /> 8 Ekim 2024 &bull; <span className="text-mine-shaft-400">10:00</span>
            </div>
        }
    </Link>
}
*/
export default Card;