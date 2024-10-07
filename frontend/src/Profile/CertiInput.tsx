import { Button, TextInput } from "@mantine/core";
import { fields } from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const CertiInput = (props:any) => {
    const select = fields;
    const [issueDate,setIssueDate] = useState<Date | null>(new Date());

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Sertifika Ekle</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput label="Sertifika Adı" withAsterisk placeholder="Sertifika Adı Girin" />
            <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={new Date()} label="Veriliş Tarihi" placeholder="Tarih Seç" value={issueDate} onChange={setIssueDate} />
            <TextInput label="Sertifika No" withAsterisk placeholder="Sertifika No" />
        </div>
        <div className="flex gap-5">
            <Button onClick={() => props.setEdit(false)} color="brightSun.4" variant="outline">Kaydet</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">İptal Et</Button>
        </div>
    </div>
}

export default CertiInput;