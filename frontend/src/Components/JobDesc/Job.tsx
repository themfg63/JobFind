import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card} from "../../Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify';
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";

const JobDesc = (props:any) => {
    const cleanHTML = DOMPurify.sanitize(props.description);
    const profile = useSelector((state:any) => state.profile);
    const user = useSelector((state:any) => state.user);
    const dispatch = useDispatch();
    const [applied,setApplied] = useState(false);
   

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

    useEffect(() => {
        if(props.applicants?.filter((applicant:any) => applicant.applicantId === user.id).length > 0){
            setApplied(true);
        }else{
            setApplied(false);
        }
    },[props])

    return <div className="w-2/3">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
                    <img className="h-14" src={`/Companies/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">
                        {props.jobTitle}
                    </div>
                    <div className="text-lg text-mine-shaft-300">
                        {props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Başvuru
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                {
                    (props.edit || !applied) && <Link to={`/apply-job/${props.id}`}>
                        <Button color="brightSun.4" size="sm" variant="light">
                            {props.edit?"Düzenle":"Başvur"}
                        </Button>
                    </Link>
                }
                {
                    applied && <Button color="green.8" size="sm" variant="light">Başvuruldu</Button>
                }
                {
                    props.edit? <Button color="red.4" size="sm" variant="light">Sil</Button> : 
                    profile.savedJobs?.includes(props.id)? <IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400" stroke={1.5} /> :
                    <IconBookmark onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400 text-mine-shaft-300" stroke={1.5} />
                }
            </div>
        </div>
        <Divider size="xs" my="xl" />
        <div className="flex justify-between">
            {
                card.map((item,index) => <div key={index} className="flex flex-col text-sm gap-1 items-center">
                    <ActionIcon className="!h-12 !w-12" variant="light" color="brightSun.4" radius="xl">
                        <item.icon className="h-4/5 w-4/5" />
                    </ActionIcon>
                    <div className="text-mine-shaft-300"> {item.name} </div>
                    <div className="text-base font-semibold">{props?props[item.id]:"NA"} {item.id === "packageOffered" && <>TL</>}</div>
                </div>)
            }
        </div>
        <Divider size="xs" my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">İstenilen Beceriler</div>
            <div className="flex flex-wrap gap-2">
                {
                    props?.skillsRequired?.map((skill:any,index:number) =>
                        <ActionIcon key={index} className="!h-fit !w-fit font-medium !text-sm" variant="light" color="brightSun.4" p="xs"    radius="xl">
                            {skill}
                        </ActionIcon>)
                }
            </div>
        </div>
        <Divider size="xs" my="xl" />
        <div className="[&>h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-300 [&_li]:mb-1 [&>h4]:text-mine-shaft-200 [&>h4]:font-semibold [&>h4]:my-5 [&_p]:text-justify" dangerouslySetInnerHTML={{
            __html: cleanHTML
        }}>
        </div>
        <Divider size="xs" my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">Şirket Hakkında</div>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
                        <img className="h-8" src={`/Companies/${props.company}.png`} alt="" /> 
                    </div>
                    <div>
                        <div className="text-lg font-medium">{props.company}</div>
                        <div className="text-mine-shaft-300">10K+ Çalışan</div>
                    </div>
                </div>
                <Link to={`/company/${props.company}`}>
                    <Button color="brightSun.4" variant="light">Firma Sayfası</Button>
                </Link>
            </div>
        </div>
    </div>
}

export default JobDesc;