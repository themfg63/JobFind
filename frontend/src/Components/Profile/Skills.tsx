import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";

const Skills = () => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state:any) => state.profile);
    const [skills, setSkills] = useState<string[]>([]);

    const handleClick = () => {
        if(!edit){
            setEdit(true);
            setSkills(profile.skills);
        }
        else setEdit(false);
    }

    const handleSave = () => {
        setEdit(false);
        let updatedProfile = {...profile, skills:skills};
        dispatch(changeProfile(updatedProfile));
        successNotification("Başarılı", "Yetenekler Güncellendi!");
    }

    return <div>
        <div className="text-2xl font-semibold mb-3 flex justify-between">
            Yeteneklerim
            <div>
                {edit && <ActionIcon onClick={handleSave} variant="subtle" color="green.8" size="lg">
                    <IconCheck className="w-4/5 h-4/5" stroke={1.5} />
                </ActionIcon>}
                <ActionIcon onClick={handleClick} variant="subtle" color={edit ? "red.8" : "brightSun.4"} size="lg">
                    {edit ? <IconX className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
                </ActionIcon>
            </div>
        </div>
        {edit ? <TagsInput placeholder="Yetenek Ekle" value={skills} onChange={setSkills} splitChars={[',','','|']} /> :
        <div className="flex flex-wrap gap-2">
            {
                profile?.skills?.map((skill:any, index:number) => <div key={index} className="bg-bright-sun-300 rounded-3xl px-3 py-1
                text-sm font-medium bg-opacity-15 text-bright-sun-400">{skill}</div>)
            }
        </div>}
    </div>
}

export default Skills;