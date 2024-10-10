import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core";
import {  IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {

    const [preview, setPreview] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [sec,setSec] = useState(5);
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({top:0, behavior:'smooth'})
    }
    
    const handleSubmit = () => {
        setSubmit(!submit);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if(x==0) navigate('/find-jobs');
        },1000)
    }

    return <> <div className="w-2/3 mx-auto">
        <LoadingOverlay
            className="!fixed "
            visible={submit}
            zIndex={1000}
            overlayProps={{radius:'sm',blur:2}}
            loaderProps={{color: 'brightSun.4', type: 'bars'}}
        />
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/Companies/google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Backend Developer</div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 Gün Önce &bull; 13 Başvuru</div>
                </div>
            </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">Başvurunuzu Gönderin</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    label="Ad Soyad"
                    withAsterisk
                    placeholder="Ad Soyad Giriniz"
                />
                <TextInput
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    label="Email" 
                    withAsterisk 
                    placeholder="Email Adresinizi Giriniz" 
                />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput 
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    label="Telefon Numarası" 
                    withAsterisk 
                    placeholder="Telefon Numaranızı Giriniz" 
                    hideControls 
                    min={0} 
                    max={9999999999} 
                    clampBehavior="strict"
                />
                <TextInput 
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    label="Kişisel Web Sitesi" 
                    placeholder="Lütfen URL Giriniz"
                    withAsterisk
                />
            </div>
            <FileInput 
                readOnly={preview}
                variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                leftSection={<IconPaperclip stroke={1.5} />} 
                label="Öz Geçmişiniz" 
                withAsterisk
                placeholder="CV Seçin" 
                leftSectionPointerEvents="none" 
            />
            <Textarea 
                readOnly={preview}
                variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                placeholder="Kendiniz hakkında bir şeyler yazın.." 
                label="Ön Yazı"
                withAsterisk
                autosize 
                minRows={4}
            />
            {!preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Başvuru Yap</Button>}
            {
                preview &&
                <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Düzenle</Button>
                    <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light">Kaydet</Button>
                </div>
            }
        </div>
    </div>
    <Notification 
        className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"}`}
        icon={<IconCheck style={{width: rem(20), height: rem(20)}}/>}
        color="teal"
        withBorder
        title="Başvurun Tamamlandı!"
        mt="md" 
        withCloseButton={false}>
            Başvurunuz Başarıyla Gönderilmiştir! {sec}
    </Notification>
    </>
}

export default ApplyJobComp;