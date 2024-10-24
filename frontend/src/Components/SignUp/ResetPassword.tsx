import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendMail, verifyMail } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props:any) => {
    const [email,setEmail] = useState("");
    const [otpSent,setOtpSent] = useState(false);
    const [otpSending,setOtpSending] = useState(false);
    const [verified,setVerified] = useState(false); 
    const [password,setPassword] = useState("");
    const [passErr,setPassErr] = useState("");
    const [resendLoader, setResendLoader] = useState(false);
    const [seconds, setSeconds] = useState(60);

    const interval = useInterval(() => {
        if(seconds === 0){
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        }else setSeconds((s) => s - 1)
    }, 1000);

    const handleSendOtp = () => {
        setOtpSending(true);
        sendMail(email).then((res) => {
            console.log(res);
            successNotification("Doğrulama Kodu Gönderildi.","Doğrulama Kodunu Girin");
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start(); 
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
            errorNotification("Doğrulama Kodu Gönderilemedi",err.response.data.errorMessage);
        })
    }

    const handleVeriftOtp = (otp:string) => {
        verifyMail(email,otp).then((res) => {
            console.log(res);
            successNotification("Kod Doğrulandı.", "Yeni Şifreyi Girin");
            setVerified(true); 
        }).catch((err) => {
            console.log(err);
            errorNotification("Doğrulama Yapılırken Bir Hata Oluştu!",err.response.data.errorMessage);
        })
    }

    const resendOtp = () => {
        if(resendLoader)return;
        handleSendOtp();
    }

    const changeEmail = () => {
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }

    const handleResetPassword = () => {
        changePass(email, password).then((res) => {
            console.log(res);
            successNotification("Şifre Değiştirildi!","Yeni Şifrenizi Girin");
            props.close();
        }).catch((err) => {
            console.log(err);
            errorNotification("Şifre Değiştirme Başarısız Oldu!", err.response.data.errorMessage);
        })
    }

    return <Modal opened = {props.opened} onClose={props.close} title="Şifreni Güncelle">
        <div className="flex flex-col gap-6">
            <TextInput 
                value={email} 
                name="email" 
                size="md" 
                onChange={(e) => setEmail(e.target.value)} 
                leftSection={<IconAt size={16} />} 
                label="Email"
                withAsterisk
                placeholder="Email Adresinizi Girin"
                rightSection={
                    <Button
                        loading={otpSending && !otpSent} 
                        size="xs"
                        className="mr-1"
                        onClick={handleSendOtp}
                        autoContrast
                        disabled={email === "" || otpSent}
                        variant="filled">
                            Onayla
                        </Button>
                }
                rightSectionWidth="xl"
            />
            {otpSent && <PinInput onComplete={handleVeriftOtp} length={6} className="mx-auto" size="md" gap="lg" type="number"/>}
            {otpSent && !verified &&
                <div className="flex gap-2">
                    <Button
                        fullWidth
                        loading={otpSending}
                        color="brightSun.4"
                        onClick={resendOtp}
                        autoContrast
                        variant="light"
                    >
                        {resendLoader?seconds:"Yeniden Gönder"}
                    </Button>
                    <Button
                        fullWidth
                        onClick={changeEmail}
                        autoContrast
                        variant="filled"
                    >
                        Email'i Değiştir
                    </Button>
                </div>
            }
            {verified && 
                <PasswordInput value={password} error={passErr} name="password" onChange={(e) => {setPassword(e.target.value); setPassErr(signupValidation("password",e.target.value))}}
                    leftSection={<IconLock size={16} />} label="Şifre" withAsterisk placeholder="Şifre" />
            }
            {
                verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Şifreyi Değiştir</Button>
            }
        </div>
    </Modal>
}

export default ResetPassword;