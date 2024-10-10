import { useState } from "react";
import { fields } from "../../Data/Profile"
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props:any) => {
    const select = fields;
    const [desc, setDesc] = useState("As a software engineer at google. I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational effeciency.");
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Deneyim {props.add?"Ekle":"Düzenle"}</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
            <SelectInput {...select[2]} />
        <Textarea withAsterisk value={desc} placeholder="İş Deneyiminiz Hakkında Bahsedin.." autosize minRows={3} onChange={(event) => setDesc(event.currentTarget.value)} />
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={endDate || undefined} label="Başlama Tarihi" placeholder="Tarih Seçin" value={startDate} onChange={setStartDate} />
            <MonthPickerInput withAsterisk disabled={checked} minDate={startDate || undefined} maxDate={new Date()} label="Çıkış Tarihi" placeholder="Tarih Seçin" value={endDate} onChange={setEndDate} />
        </div>
        <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} autoContrast label="Hala Çalışıyorum" />
        <div className="flex gap-5">
            <Button onClick={() => props.setEdit(false)} color="brightSun.4" variant="outline">Düzenlemeyi Kaydet</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Düzenlemeyi İptal Et</Button>
        </div>
    </div>
}

export default ExpInput;