import { ActionIcon, Avatar, Divider, FileInput, Indicator, TagsInput, Textarea } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import { error } from "console";


const Profile = () => {
    
    const [edit,setEdit] = useState([false,false,false,false,false]);
    const [about,setAbout] = useState('Merhaba, Ben Muhammed Furkan GÜNEŞ. İskenderun Tekin Üniversitesi Bilgisayar Mühendislği Mezunuyum.'+
        'Java Spring Boot ağırlık olmak üzere kendimi backend teknolojileriyle geliştirmekteyim. Stajımı da Jr. JAVA DEVELOPER olarak TEDAŞ Genel Müdürlüğünde yaptım. Şu anda iş arayışım devam etmektedir.'+
    'İlgilenip geri dönüş sağlarsanız sevinirim. İyi günler dilerim herkese..');
    const [skills,setSkills] = useState(["Java","React","MySQL","Spring Boot","TypeScript", "Docker","Postman","HTML","CSS","PostgreSQL"]);
    const [addExp,setAddExp] = useState(false);
    const [addCerti,setAddCerti] = useState(false);
    const user = useSelector((state:any) => state.user);
    const profile = useSelector((state:any) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        getProfile(user.id).then((data:any) => {
            dispatch(setProfile(data));
        }).catch((error:any) => {
            console.log(error);
        });
    },[])

    const handleEdit = (index:any) => {
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }

   return <div className="w-4/5 mx-auto">
    <div className="">
        <div className="relative">
            <img className="rounded-t-2xl" src="/kapakgün.jpg" alt="" />
            <div className="absolute -bottom-1/3 left-3">
                <Indicator className="[&_.mantine-Indicator-indicator]:!border-4 [&_img]:hover-opacity-80" autoContrast inline offset={30}
                    label={<IconPencil className="w-4/5 h-4/5" />} size={45} position="bottom-end" color="brightSun.4" withBorder>
                        <Avatar className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full" src="/avatar.png" alt="" />
                        <FileInput className="absolute bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent" variant="unstyled" size="lg" radius="xl"
                        accept="image/png,image/jpeg" />
                    </Indicator>
            </div>
        </div>
        <div className="px-3 mt-16">
            <Info />
            <Divider my="xl" />
            <div>
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Hakkımda
                    <ActionIcon onClick={()=>handleEdit(1)} size="lg" color="brightSun.4" variant="subtle">
                        {edit[1] ? <IconDeviceFloppy className="h-4/5 w-/45"/> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[1]?<Textarea value={about} placeholder="Kendinizden Bahsedin.." autosize minRows={3} onChange={(event) => setAbout(event.currentTarget.value)}/>:
                        <div className="text-sm text-mine-shaft-300 text-justify">
                            {profile?.about}
                        </div>
                }
                <Divider my="xl" />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        Yetenekler
                        <ActionIcon onClick={()=>handleEdit(2)} size="lg" color="brightSun.4" variant="subtle">
                            {edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                        </ActionIcon>
                    </div>
                    {
                        edit[2] ? <TagsInput value={skills} onChange={setSkills} placeholder="Yetenek Ekle" splitChars={[',',' ','|']} />:
                        <div className="flex flex-wrap gap-2">
                            {
                                profile?.skills?.map((skill:any,index:number) => <div key={index} className="bg-bright-sun-300 rounded-3xl px-3 py-1 text-sm font-medium bg-opacity-15 text-bright-sun-400">
                                    {skill} </div>)
                            }
                        </div>
                    }
                </div>
                <Divider my="xl" />
                <div>
                    <div className="text-2xl font-semibold mb-4 flex justify-between">
                        Deneyimlerim
                        <div className="flex gap-2">
                            <ActionIcon onClick={()=> setAddExp(true)} size="lg" color="brightSun.4" variant="subtle">
                                <IconPlus className="h-4/5 w-4/5" />
                            </ActionIcon>
                            <ActionIcon onClick={() => handleEdit(3)} size="lg" color="brightSun.4" variant="subtle">
                                {edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
                            </ActionIcon>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {
                            profile?.experience?.map((exp:any,index:number) => <ExpCard key={index} {...exp} edit={edit[3]} />)
                        }
                        {addExp && <ExpInput add setEdit={setAddExp} />}
                    </div>
                </div>
                <Divider my="xl" />
                <div>
                    <div className="text-2xl font-semibold mb-4 flex justify-between">
                        Sertifikalarım
                        <div className="flex gap-2">
                            <ActionIcon onClick={() => setAddCerti(true)} size="lg" color="brightSun.4" variant="subtle">
                                <IconPlus className="h-4/5 w-4/5" />
                            </ActionIcon>
                            <ActionIcon onClick={() => handleEdit(4)} size="lg" color="brightSun.4" variant="subtle">
                                {edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                            </ActionIcon>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {
                            profile?.certifications?.map((certi:any, index:number) => <CertiCard key={index} edit={edit[4]} {...certi} />)
                        }
                        {
                            addCerti && <CertiInput setEdit={setAddCerti} />
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
}

export default Profile;