import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
    const select = fields;
    const navigate = useNavigate();

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues:{
            jobTitle: '',
            company: '',
            experience: '',
            jobType: '',
            location: '',
            packageOffered: '',
            skillsRequired: [],
            about: '',
            description: content
        },
        validate: {
            jobTitle: isNotEmpty('İş Başlığı Boş Bırakılamaz'),
            company: isNotEmpty('Şirket Adı Boş Bırakılamaz'),
            experience: isNotEmpty('Deneyim Süresi Boş Bırakılamaz'),
            jobType: isNotEmpty('İş Tipi Boş Bırakılamaz'),
            location: isNotEmpty('İş Yeri Konumu Boş Bırakılamaz'),
            packageOffered: isNotEmpty('Maaş Bilgisi Boş Bırakılamaz'),
            skillsRequired: isNotEmpty('Aranan Beceriler Boş Bırakılamaz'),
            about: isNotEmpty('İş Tanımı Boş Bırakılamaz'),
            description: isNotEmpty('İş Açıklaması Boş Bırakılamaz')
        }
    })

    const handlePost = () => {
        form.validate();
        if(!form.isValid()){
            return;
        }
        postJob(form.getValues()).then((res) => {
            successNotification("Başarılı!","İş İlanı Oluşturuldu!");
            navigate("/posted-jobs");
        }).catch((err) => {
            console.log(err);
            errorNotification("Hata!",err.response.data.errorMessage);
        });

    }

   return <div className="px-16 py-5">
    <div className="text-2xl font-semibold mb-5">
        İş İlanı Oluştur
    </div>
    <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="experience" {...select[2]} />
            <SelectInput form={form} name="jobType" {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="location" {...select[4]} />
            <NumberInput 
                {...form.getInputProps('packageOffered')} 
                label="Maaş" 
                min={1} max={300} 
                placeholder="Maaş Miktarı Girin" 
                clampBehavior="strict" 
                hideControls 
                withAsterisk 
            />
        </div>
        <TagsInput 
            {...form.getInputProps('skillsRequired')} 
            withAsterisk 
            label="Beceriler" 
            placeholder="İstenilen Becerileri Girin"
            splitChars={[',','','|']}
            clearable
        />
        <Textarea
            {...form.getInputProps("about")}
            withAsterisk
            className="my-3"
            label="İş Açıklaması"
            autosize
            minRows={2}
            placeholder="İş Açıklasını Girin..."
        />
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
            <div className="text-sm font-medium">İş Tanımı</div>
            <TextEditor form={form} />
        </div>
        <div className="flex gap-4">
            <Button color="brightSun.4" onClick={handlePost} variant="light">İlanı Yayınla</Button>
            <Button color="brightSun.4" variant="outline">Taslaklara Kaydet</Button>
        </div>
    </div>
   </div>
}

export default PostJob;