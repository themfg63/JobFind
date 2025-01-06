import { useState } from "react"
import { sendMail } from "../../services/UserService";
import { Button, Modal, PinInput, TextInput } from "@mantine/core";
import { FaAt } from "react-icons/fa";

const ResetPassword = (props:any) => {
    const [email, setEmail] = useState("");
    const [otpSend, setOtpSend] = useState(false);
    const [otpSending, setOtpSending] = useState(false);

    const handleSendOtp = () => {
        setOtpSending(true);
        sendMail(email).then((res) => {
            console.log(res);
            setOtpSend(true);
            setOtpSending(false);
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
        })
    }

    const handleVerifyOtp = (otp:string) => {
        console.log(otp);
        setOtpSend(false); 
    }

    return <Modal opened={props.opened} onClose={props.close} title="Şifreni Güncelle">
        <div className="flex flex-col gap-6">
            <TextInput
                value={email}
                name="email"
                size="md"
                onChange={(e) => setEmail(e.target.value)}
                leftSection={<FaAt size={16} />}
                label="Email"
                withAsterisk
                placeholder="Email Adresinizi Girin"
                rightSection={<Button loading={otpSending} size="xs" className="mr-1" onClick={handleSendOtp} autoContrast disabled={email === "" || otpSend} variant="filled">Gönder</Button>}
                rightSectionWidth="xl"
            />
            {
                otpSend && <PinInput onComplete={handleVerifyOtp} length={6} className="mx-auto" size="md" gap="lg" type="number" />
            }
        </div>
    </Modal>
}

export default ResetPassword;