import { ActionIcon, Textarea } from "@mantine/core";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";

const About = () => {
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state:any) => state.profile);
    const [about, setAbout] = useState("");
    const dispatch = useDispatch();
    
    const handleClick = () =>{
        if(!edit){
            setEdit(true);
            setAbout(profile.about);
        }else setEdit(false);
    }

    const handlSave = () => {
        setEdit(false);
        let updatedProfile = {...profile, about : about};
        dispatch(changeProfile(updatedProfile));
        successNotification("Başarılı","Profil Güncellendi!")
    }

    return <div>
        <div className="text-2xl font-semibold mb-3 flex justify-between">
            Hakkımda
            <div>
                {edit && <ActionIcon onClick={handlSave} variant="subtle" color="green.8" size="lg">
                    <IconCheck className="w-4/5 h-4/5" stroke={1.5} />
                </ActionIcon>}
                <ActionIcon onClick={handleClick} variant="subtle" color={edit ? "red.8" : "brightSun.4"} size="lg">
                    {edit ? <IconX className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
                </ActionIcon>
            </div>
        </div>
        {edit ? <Textarea value={about} onChange={(e) => setAbout(e.target.value)} autosize minRows={2} placeholder="Kendinizden Bahsedin..." /> : 
            <div className="text-sm text-mine-shaft-300 text-justify">{profile?.about}</div>}
    </div>
}

export default About;