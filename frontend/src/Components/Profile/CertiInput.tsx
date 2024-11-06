import { Button, TextInput } from "@mantine/core";
import { fields } from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const CertiInput = (props:any) => {
    const select = fields;
    const profile = useSelector((state:any) => state.profile);
    const dispatch = useDispatch();

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: '',
            issuer: '',
            issueDate: new Date(),
            certificateId: ''
        },
        validate: {
            name: isNotEmpty("Sertifika Adı Boş Bırakılamaz!"),
            issuer: isNotEmpty("Alınan Tarih Boş Bırakılamaz!"),
            issueDate: isNotEmpty("Geçerlilik Tarihi Boş Bırakılamaz!"),
            certificateId: isNotEmpty("Sertifika No Boş Bırakılamaz!")
        }
    });

    const handleSave = () => {
        form.validate();

        if(!form.isValid()){
            return;
        }

        let certi = [...profile.certifications];
        certi.push(form.getValues());
        certi[certi.length - 1].issueDate = certi[certi.length - 1].issueDate.toISOString();
        let updatedProfile = {...profile, certifications:certi};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Başarılı", "Sertifika Eklendi!");
    }

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Sertifika Ekle</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput {...form.getInputProps("name")} label="Sertifika Adı" withAsterisk placeholder="Sertifika Adı Girin" />
            <SelectInput form={form} name="issuer" {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk maxDate={new Date()} label="Veriliş Tarihi" placeholder="Tarih Seç"/>
            <TextInput {...form.getInputProps("certificateId")} label="Sertifika No" withAsterisk placeholder="Sertifika No" />
        </div>
        <div className="my-3 flex gap-5">
            <Button color="green.8" onClick={handleSave} variant="light">Kaydet</Button>
            <Button color="red.8" onClick={() => props.setEdit(false)} variant="light">İptal Et</Button>
        </div>
    </div>
}

export default CertiInput;