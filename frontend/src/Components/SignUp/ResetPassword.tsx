import { Button, Modal, PinInput, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import { sendMail } from "../../Services/UserService";

const ResetPassword = (props:any) => {
    const [email,setEmail] = useState("");
    const [otpSent,setOtpSent] = useState(false);
    const [otpSending,setOtpSending] = useState(false);

    const handleSendOtp = () => {
        setOtpSending(true);
        sendMail(email).then((res) => {
            console.log(res);
            setOtpSent(true);
            setOtpSending(false);
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
        })
    }

    const handleVeriftOtp = (otp:string) => {
        console.log(otp);
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
                        loading={otpSending} 
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
        </div>
    </Modal>
}

export default ResetPassword;