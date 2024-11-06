import {  Avatar, Divider, FileInput, Indicator} from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";


const Profile = () => {
    
    const [edit,setEdit] = useState([false,false,false,false,false]);
    const user = useSelector((state:any) => state.user);
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
                            <FileInput className="absolute bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent" variant="unstyled" size="lg" radius="xl" accept="image/png, image/jpeg" />
                        </Indicator>
                </div>
            </div>
            <div className="px-3 mt-16">
                <Info />
                <Divider my="xl" />
                <About />
                <Divider my="xl" />
                <Skills />
                <Divider my="xl" />
                <Experience />
                <Divider my="xl" />
            </div>
        </div>
   </div>
}

export default Profile;