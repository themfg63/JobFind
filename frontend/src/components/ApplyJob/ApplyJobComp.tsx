import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview,setPreview] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [sec,setSec] = useState(3);
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const hanldeSubmit = () => {
        setSubmit(true);
        let x = 3;
        setInterval(() => {
            x--;
            setSec(x);
            if(x===0)navigate('/find-jobs');
        },1000);
    }

    return <> <div className="w-2/3 mx-auto">
        <LoadingOverlay
            className="!fixed"
            visible={submit}
            zIndex={1000}
            overlayProps={{radius:'sm',blur:2}}
            loaderProps={{color: 'brightSun.4',type:'bars'}}
        />

        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/photos/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer III</div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 Gün Önce &bull; 48 Başvuru</div>
                </div>
            </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">Başvurunu Tamamla</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`} 
                    withAsterisk
                    label="Ad Soyad" 
                    placeholder="Ad Soyad Girin" 
                />
                <TextInput
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    withAsterisk
                    label="Email"
                    placeholder="Email Adresinizi Girin"
                />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    withAsterisk
                    label="Telefon Numarası"
                    placeholder="Telefon No Girin"
                    hideControls
                    min={0}
                    max={99999999999}
                    clampBehavior="strict"
                />
                <TextInput
                    readOnly={preview}
                    variant={preview?"unstyled":"default"}
                    className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                    withAsterisk
                    label="Kişisel Web Sitesi"
                    placeholder="Github/LinkedIn"
                />
            </div>
            <FileInput
                readOnly={preview}
                variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                withAsterisk
                leftSection={<FaPaperclip stroke="1.5" />}
                label="Öz Geçmişinizi Yükleyin"
                placeholder="Dosya Seçin"
                leftSectionPointerEvents="none"
            />
            <Textarea
                readOnly={preview}
                variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                withAsterisk
                placeholder="Kendinizden Bahsedin.."
                label="Ön Yazı"
                autosize
                minRows={4}
            />
            {
                !preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Önizleme</Button>
            }
            {
                preview && <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Düzenle</Button>
                    <Button fullWidth onClick={hanldeSubmit} color="brightSun.4" variant="light">Onayla</Button>
                </div>
            }
        </div>
    </div>
    <Notification
        className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%]  z-[10001] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"}`}
        icon={<FaCheck style={{width: rem(20),height: rem(20)}} />}
        color="teal"
        withBorder
        title="Başvurunuz Tamamlandı!"
        mt="md"
        withCloseButton={false}
    >
        {sec} Saniye Sonra, Önerilen İlanlara Yönlendiriliyorsunuz...
    </Notification>
    </>
}

export default ApplyJobComp;