import { useDispatch, useSelector } from "react-redux";
import { fields } from "../../Data/Profile"
import { useEffect } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import {  MonthPickerInput } from "@mantine/dates";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const ExpInput = (props:any) => {
    const select = fields;
    const profile = useSelector((state:any) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!props.add){
            form.setValues({
                title: props.title,
                company: props.company,
                location: props.location,
                description: props.description,
                startDate: new Date(props.startDate),
                endDate: new Date(props.endDate),
                working: props.working
            })
        }
    },[])

    const handleSave = () => {
        form.validate();
        if(!form.isValid()){
            return;
        }
        let exp = [...profile.experiences];
        if(props.add){
            exp.push(form.getValues());
            exp[exp.length-1].startDate = exp[exp.length-1].startDate.toISOString();
            exp[exp.length-1].endDate = exp[exp.length-1].endDate.toISOString();
        }else{
            exp[props.index] = form.getValues();
            exp[props.index].startDate = exp[props.index].startDate.toISOString();
            exp[props.index].endDate = exp[props.index].endDate.toISOString();
        }

        let updatedProfile = {...profile, experiences:exp};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Başarılı",`Deneyim ${props.add ? "Eklendi": "Güncellendi"}`);
    }

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            title: '',
            company: '',
            location: '',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            working: false
        },
        validate: {
            title: isNotEmpty("İş Başlığı Boş Bırakılamaz!"),
            company: isNotEmpty("Şirket Adı Boş Bırakılamaz!"),
            location: isNotEmpty("Şirket Konumu Boş Bırakılamaz!"),
            description: isNotEmpty("İş Açıklaması Boş Bırakılamaz!"),
        }
    })

    return <div>
        <div className="text-lg font-semibold">
            {props.add ? "Ekle":"Düzenle"}
            Deneyimlerim
        </div>
        <div className="flex gap-10 [&>*]:w-1/2 my-3">
            <SelectInput form={form} name="title" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
        </div>
        <SelectInput form={form} name="location" {...select[2]} />
        <Textarea 
            {...form.getInputProps('description')}
            withAsterisk
            className="my-3"
            label="Açıklama"
            autosize
            minRows={2}
            placeholder="Açıklama Girin"
        />
        <div className="flex gap-10 [&>*]:w-1/2 my-3">
            <MonthPickerInput
                {...form.getInputProps("startDate")}
                maxDate={form.getValues().endDate || undefined}
                withAsterisk
                label="Giriş Tarihi"
                placeholder="Tarih Seçin"
            />
            <MonthPickerInput
                {...form.getInputProps("endDate")}
                disabled={form.getValues().working}
                minDate={form.getValues().startDate || undefined}
                maxDate={new Date()}
                withAsterisk
                label="Çıkış Tarihi"
                placeholder="Tarih Seçin"
            />
        </div>
        <Checkbox
            checked={form.getValues().working}
            onChange={(event) => form.setFieldValue("working", event.currentTarget.checked)}
            autoContrast
            label="Şu an da Burada Çalışıyorum."
        />
        <div className="my-3 flex gap-5">
            <Button color="brightSun.4" onClick={() => props.setEdit(false)} variant="outline">Kaydet</Button>
            <Button color="red.8" onClick={() => props.setEdit(false)} variant="light">İptal Et</Button>
        </div>
    </div>
}

export default ExpInput