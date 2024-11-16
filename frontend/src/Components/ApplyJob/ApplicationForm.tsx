import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
    const [preview,setPreview] = useState(false);
    const [submit,setSubmit] = useState(false);
    const {id} = useParams();
    const user = useSelector((state:any) => state.user);
    const navigate = useNavigate();

    const handlePreview = () => {
        form.validate();
        window.scrollTo({top: 0, behavior: 'smooth'})
        if(!form.isValid())return;
        setPreview(!preview);
    }

    const handleSubmit = async() => {
        setSubmit(true);
        let resume:any = await getBase64(form.getValues().resume);
        let applicant = {...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};

        applyJob(id,applicant).then((res) => {
            setSubmit(false);
            successNotification("Başarılı","Başvurunuz Tamamlandı!");
            navigate("/job-history");
        }).catch((err) => {
            setSubmit(false);
            errorNotification("Hata!", err.response.data.message);
        })
    }
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            website: '',
            resume: null,
            coverLetter: ''
        },
        validate: {
            name: isNotEmpty('Ad Soyad Boş Bırakılamaz!'),
            email: isNotEmpty('Email Adresi Boş Bırakılamaz!'),
            phone: isNotEmpty('Telefon No Boş Bırakılamaz!'),
            website: isNotEmpty('Kişisel Websitesi Boş Bırakılamaz!'),
            resume: isNotEmpty('Özgeçmiş Boş Bırakılamaz!')
        }
    });
    
    return <div>
        <LoadingOverlay className="[&>span]:!fixed [&>span]:top-1/2" visible={submit} zIndex={1000} overlayProps={{radius: "sm",blur: 2}}
        loaderProps={{color: 'brightSun.4', type: 'bars'}} />
        <div className="text-xl font-semibold mb-5">Başvuru Yap</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    {...form.getInputProps("name")}
                    readOnly={preview}
                    className={`${preview?"text-mine-shaft-300 font-semibold": ""}`}
                    variant={preview?"unstyled":"default"}
                    label="Ad Soyad"
                    withAsterisk
                    placeholder="Ad Soyad Girin"
                />
                <TextInput
                    {...form.getInputProps("email")}
                    readOnly={preview}
                    className={`${preview?"text-mine-shaft-300 font-semibold": ""}`}
                    variant={preview?"unstyled":"default"}
                    label="Email"
                    withAsterisk
                    placeholder="Email Adresinizi Girin"
                />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput
                    {...form.getInputProps("phone")}
                    variant={preview?"unstyled":"default"}
                    readOnly={preview}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    clampBehavior="strict"
                    min={0}
                    max={9999999999}
                    label="Telefon No"
                    withAsterisk
                    placeholder="Telefon Numaranızı Girin"
                    hideControls
                />
                <TextInput
                    {...form.getInputProps("website")}
                    variant={preview?"unstyled":"default"}
                    readOnly={preview}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    label="Kişisel Websitesi"
                    withAsterisk
                    placeholder="Github/LinkedIn"
                />
            </div>
            <FileInput
                {...form.getInputProps("resume")}
                variant={preview?"unstyled":"default"}
                readOnly={preview}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                withAsterisk
                leftSection={<IconPaperclip stroke={1.5} />}
                label="Özgeçmiş/CV"
                placeholder="Bir Belge Seçin"
                leftSectionPointerEvents="none"
                accept="application/pdf"
            />
            <Textarea
                {...form.getInputProps("coverLetter")}
                variant={preview?"unstyled":"default"}
                readOnly={preview}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                placeholder="Kendinizden Bahsedin.."
                label="Ön Yazı"
                autosize
                minRows={4}
            />
            {
                !preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Ön İzle</Button>
            }
            {
                preview && <div className="flex gap-10">
                    <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Düzenle</Button>
                    <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light">Başvur</Button>
                </div>
            }
        </div>
    </div>
}

export default ApplicationForm;