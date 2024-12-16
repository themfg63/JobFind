import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { TbDeviceFloppy } from "react-icons/tb";
import fields from "../../data/Profile";
import SelectInput from "./SelectInput";
import { FaBriefcase } from "react-icons/fa";
    import { RiMapPin2Line } from "react-icons/ri";
import ExpCard from "./ExpCard";
import { profile } from "../../data/TalentData";

const Profile = () => {
    const select = fields;
    const [skills,setSkills] = useState(["React","Java","MongoDB"]);
    const [edit,setEdit] = useState([false,false,false,false,false]);
    const [about,setAbout] = useState('I am a graduate of İskenderun Technical University with a degree in Computer Engineering. I am looking for a job as a backend developer with Java and .Net. I completed my training TEDAS');

    const handleEdit = (index:any) => {
        const newEdit = [...edit];
        newEdit[index] =! newEdit[index];
        setEdit(newEdit);
    }

    return <div className="w-4/5 mx-auto">
        <div className="">
            <div className="relative">
                <img className="rounded-t-2xl" src="/photos/Profile/banner.jpg" alt="" />
                <img className="w-48 h-48 border-mine-shaft-950 border-8 absolute -bottom-1/3 left-3 rounded-full" src="/photos/Avatar.png" alt="" />
            </div>
            <div className="p-x3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    Muhammed Furkan GÜNEŞ
                    <ActionIcon onClick={() => handleEdit(0)} size="lg" color="brightSun.4" variant="subtle">
                        {
                            edit[0]?<TbDeviceFloppy className="h-4/5 w-4/5" />:<FaPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit[0]?<><div className="flex gap-10 [&>*]:w-1/2">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                    </div>
                    <SelectInput {...select[2]} />
                    </>:<><div className="text-xl flex gap-1 items-center">
                        <FaBriefcase className="h-5 w-5" stroke="1.5" />
                        Software Engineer &bull; Google
                    </div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <RiMapPin2Line className="h-5 w-5" stroke="1.5" />
                        Ankara, Türkiye
                    </div>
                    </>
                }
                <Divider my="xl" />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        Hakkımda
                        <ActionIcon onClick={() => handleEdit(1)} size="lg" color="brightSun.4" variant="subtle">
                            {
                                edit[1]?<TbDeviceFloppy className="h-4/5 w-4/5" />:<FaPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    {
                        edit[1]?<Textarea value={about} placeholder="Kendinizden Bahsedin.." autosize minRows={3} onChange={(event) => setAbout(event.currentTarget.value)} /> : 
                        <div className="text-sm text-mine-shaft-300 text-justify">{about}</div>
                    }
                </div>
                <Divider my="xl" />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        Yeteneklerim
                        <ActionIcon onClick={() => handleEdit(2)} size="lg" color="brightSun.4" variant="subtle">
                            {
                                edit[2]?<TbDeviceFloppy className="h-4/5 w-4/5" />:<FaPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    {
                        edit[2]?<TagsInput value={skills} onChange={setSkills} placeholder="Yetenek Ekle" splitChars={[',',' ','|']} /> : 
                        <div className="flex flex-wrap gap-2">
                            {
                                skills.map((skill,index) => <div key={index} className="bg-bright-sun-300 rounded-3xl px-3 py-1 text-sm font-medium bg-opacity-15 text-bright-sun-400">{skill}</div>)
                            }
                        </div>
                    }
                </div>
                <Divider my="xl" />
                <div>
                    <div className="text-2xl font-semibold mb-4 flex justify-between">
                        Deneyimlerim
                        <ActionIcon onClick={() => handleEdit(3)} size="lg" color="brightSun.4" variant="subtle">
                            {
                                edit[3] ? <TbDeviceFloppy className="h-4/5 w-4/5" /> : <FaPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    <div className="flex flex-col gap-8">
                        {
                            profile.experience.map((exp,index) => <ExpCard key={index} {...exp} edit={edit[3]} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;