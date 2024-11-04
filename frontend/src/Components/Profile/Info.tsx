import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../Data/Profile";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const Info = () => {
    const select = fields;
    const [edit,setEdit] = useState(false);
    const profile = useSelector((state:any) => state.profile);
    const user = useSelector((state:any) => state.user);
    const dispatch = useDispatch();

    const handleClick = () => {
        if(!edit){
            setEdit(true);
            form.setValues({jobTitle: profile.jobTitle, company: profile.company, location: profile.location});
        }else{
            setEdit(false);
            let updatedProfile = {...profile, ...form.getValues()};
            dispatch(changeProfile(updatedProfile));
            successNotification("Başarılı", "Profil Güncellemesi Başarılı!");
        }
    }

    const form = useForm({
        mode: 'controlled',
        initialValues: {jobTitle: '',company: '', location:''}
    });

    return <>
    <div className="text-3xl font-semibold flex justify-between">
        {user.name}
        <ActionIcon onClick={handleClick} variant="subtle" color="brightSun.4" size="lg">
            {edit ? <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
        </ActionIcon>
    </div>
    {
        edit ? <> <div className="flex gap-10 [&>*]:w-1/2 my-3">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
        </div>
            <SelectInput form={form} name="location" {...select[2]} />
        </> : <>
        <div className="text-xl flex gap-1 items-center">
            <IconBriefcase className="w-5 h-5" stroke={1.5} />
            {profile.jobTitle} &bull; {profile.company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {profile.location}
        </div>
        </>
    }
    </>
}

export default Info;