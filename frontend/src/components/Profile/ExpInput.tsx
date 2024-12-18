import { useState } from "react";
import fields from "../../data/Profile"
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props:any) => {
    const select = fields;
    const [desc,setDesc] = useState("Google, internet ile ilgili hizmetler ve ürünler konusunda uzmanlaşmış, teknoloji alanında küresel bir liderdir. Misyonumuz, dünyanın bilgilerini düzenlemek ve evrensel olarak erişilebilir ve kullanışlı hale getirmektir. Larry Page ve Sergey Brin tarafından kurulan Google, dünyanın en etkili şirketlerinden biri haline geldi ve dünya çapında milyarlarca insana yardımcı olan yenilikçi araçlar ve hizmetler sunuyor.");
    const [startDate,setStartDate] = useState<Date | null>(new Date());
    const [endDate,setEndDate] = useState<Date | null>(new Date());
    const [checked,setChecked] = useState(false);

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Deneyim {props.add?"Ekle":"Düzenle"}</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea label="Deneyim Görüşleriniz" value={desc} placeholder="Deneyim Hakkındaki Görüşleriniz..." autosize minRows={3} onChange={(event) => setDesc(event.currentTarget.value)} />
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput
                withAsterisk
                maxDate={endDate || undefined}
                label="Başlama Tarihi"
                placeholder="Tarih Seçin"
                value={startDate}
                onChange={setStartDate}
            />
            <MonthPickerInput
                withAsterisk
                minDate={startDate || undefined}
                maxDate={new Date()}
                label="Bitiş Tarihi"
                placeholder="Tarih Seçin"
                value={endDate}
                onChange={setEndDate}
                disabled={checked}
            />
        </div>
        <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} autoContrast label="Hala çalışıyorum" />
        <div className="flex gap-5">
            <Button onClick={() => props.setEdit(false)} color="brightSun.4" variant="outline">Kaydet</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">İptal Et</Button>
        </div>
    </div>
}

export default ExpInput;