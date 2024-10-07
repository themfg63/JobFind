import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../Data/Profile";
import { profile } from "../Data/TalentData";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";


const Profile = () => {
    const select = fields;
    const [edit,setEdit] = useState([false,false,false,false,false]);
    const [about,setAbout] = useState('Merhaba, Ben Muhammed Furkan GÜNEŞ. İskenderun Tekin Üniversitesi Bilgisayar Mühendislği Mezunuyum.'+
        'Java Spring Boot ağırlık olmak üzere kendimi backend teknolojileriyle geliştirmekteyim. Stajımı da Jr. JAVA DEVELOPER olarak TEDAŞ Genel Müdürlüğünde yaptım. Şu anda iş arayışım devam etmektedir.'+
    'İlgilenip geri dönüş sağlarsanız sevinirim. İyi günler dilerim herkese..');
    const [skills,setSkills] = useState(["Java","React","MySQL","Spring Boot","TypeScript", "Docker","Postman","HTML","CSS","PostgreSQL"]);
    const [addExp,setAddExp] = useState(false);
    const [addCerti,setAddCerti] = useState(false);

    const handleEdit = (index:any) => {
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }

   return <div className="w-4/5 mx-auto">
    <div className="">
        <div className="relative">
            <img className="rounded-t-2xl" src="/kapakgün.jpg" alt="" />
            <img className="w-48 h-48 border-mine-shaft-950 border-8 absolute -bottom-1/3 left-3 rounded-full" src="/avatar.png" alt="" />
        </div>
        <div className="px-3 mt-16">
            <div className="text-3xl font-semibold flex justify-between">
                Muhammed Furkan GÜNEŞ
                <ActionIcon onClick={()=>handleEdit(0)} variant="subtle" color="brightSun.4" size="lg">
                    {edit[0]?<IconDeviceFloppy className="h-4/5 w-4/5" stroke={1.5} />:<IconPencil className="h-4/5 w-4/5" stroke={1.5} />}
                </ActionIcon>
            </div>
            {
                edit[0]?<>
                    <div className="flex gap-10 [>&*]:w-1/2">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                    </div>
                    <SelectInput {...select[2]} />
                </>:<>
                    <div className="text-xl flex gap-1 items-center">
                        <IconBriefcase className="h-5 w-5" stroke={1.5} />
                        Backend Developer &bull; Google
                    </div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <IconMapPin className="h-5 w-5" stroke={1.5} />
                        Ankara, Türkiye
                    </div>
                </>
            }
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
                            Merhaba, Ben Muhammed Furkan GÜNEŞ. İskenderun Tekin Üniversitesi Bilgisayar Mühendislği Mezunuyum.
                            Java Spring Boot ağırlık olmak üzere kendimi backend teknolojileriyle geliştirmekteyim. Stajımı da Jr. JAVA DEVELOPER olarak TEDAŞ Genel Müdürlüğü'nde yaptım. Şu anda iş arayışım devam etmektedir. 
                            İlgilenip geri dönüş sağlarsanız sevinirim. İyi günler dilerim herkese..
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
                                skills.map((skill,index) => <div key={index} className="bg-bright-sun-300 rounded-3xl px-3 py-1 text-sm font-medium bg-opacity-15 text-bright-sun-400">
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
                            profile.experience.map((exp,index) => <ExpCard key={index} {...exp} edit={edit[3]} />)
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
                            profile.certifications.map((certi, index) => <CertiCard key={index} edit={edit[4]} {...certi} />)
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