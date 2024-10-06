import { ActionIcon, Divider } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import { useState } from "react";

const Profile = () => {
    const [edit,setEdit] = useState([false,false,false,false,false]);
    
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
            <div className="text-xl flex gap-1 items-center">
                <IconBriefcase className="h-5 w-5" stroke={1.5} />
                Backend Developer &bull; Google
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} />
                Ankara, Türkiye
            </div> 
            <Divider my="xl" />
        </div>
    </div>
   </div>
}

export default Profile;