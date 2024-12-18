import { Button, TextInput } from "@mantine/core";
import fields from "../../data/Profile"
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
            <MonthPickerInput withAsterisk maxDate={new Date()} label="Veriliş Tarihi" placeholder="Tarih Seçin" value={issueDate} onChange={setIssueDate} />
            <TextInput label="Sertifika No" withAsterisk placeholder="Sertifika No Girin" />
        </div>
        <div className="flex gap-5">
            <Button onClick={() => props.setEdit(false)} color="brightSun.4" variant="outline">Kaydet</Button>
            <Button color="red.8" onClick={() => props.setEdit(false)} variant="light">İptal Et</Button>
        </div>
    </div>
}

export default CertiInput;