import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import CertiCard from "./CertiCard";
import { useSelector } from "react-redux";
import CertiInput from "./CertiInput";

const Certificate = () => {
    const [edit,setEdit] = useState(false);
    const [addCerti,setAddCerti] = useState(false);
    const profile = useSelector((state:any) => state.profile);

    const handleClick = () => {
        setEdit(!edit);
    }

    return <div>
        <div className="text-2xl font-semibold mb-4 flex justify-between">
            Sertifikalarım
            <div className="flex gap-2">
                <ActionIcon onClick={()=>setAddCerti(true)} variant="subtle" color="brightSun.4" size="lg">
                    <IconPlus className="w-4/5 h-4/5" stroke={1.5} />
                </ActionIcon>
                <ActionIcon onClick={handleClick} variant="subtle" color={edit ? "red.8":"brightSun.4"} size="lg">
                    {edit ? <IconX className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5}/>}
                </ActionIcon>
            </div>
        </div>
        <div className="flex flex-col gap-8">
            {
                profile?.certifications?.map((certi:any, index:number) => <CertiCard edit={edit} key={index} index={index} {...certi} />)
            }
            {addCerti && <CertiInput setEdit = {setAddCerti} />}
        </div>
    </div>
}

export default Certificate;