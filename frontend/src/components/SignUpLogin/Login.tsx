import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../services/FormValidation";
import { loginUser } from "../../services/UserService";
import { notifications } from "@mantine/notifications";
import { FaAt, FaCheck, FaLock } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import ResetPassword from "./ResetPassword";

const Login = () => {
    const form = {
        email: "",
        password: "",
    }

    const [data,setData] = useState<{[key: string]: string}>(form);
    const [formError,setFormError] = useState<{[key: string]: string}>(form);
    const [opened, {open, close}] = useDisclosure(false);
    const navigate = useNavigate();

    const handleChange = (event:any) => {
        setFormError(form);
        setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () => {
        let valid = true, newFormError: {[key: string]: string} = {};

        for(let key in data){
            newFormError[key] = loginValidation(key,data[key]);
            if(newFormError[key]){
                valid = false;
            }
        }

        setFormError(newFormError);

        if(valid){
            loginUser(data).then((res) => {
                notifications.show({
                    title: 'Giriş Başarılı',
                    message: 'Giriş Yapılıyor...',
                    icon: <FaCheck style={{width: "90%", height: "90%"}} />,
                    color: 'teal',
                    withBorder: true,
                    withCloseButton: true,
                    className: "!border-green-500",
                })
                setTimeout(() => {
                    navigate("/");
                },3000)
            }).catch((err) => {
                notifications.show({
                    title: 'Giriş Yaparken Hata Oluştu!',
                    message: err.response.data.errorMessage,
                    icon: <FaX style={{width: "90%", height: "90%"}}/>,
                    color: 'red',
                    withBorder: true,
                    withCloseButton: true,
                    className: "!border-red-500",
                })
            });
        }
    }

    return <> <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold">Giriş Yap</div>
        <TextInput
            value={data.email}
            name="email"
            error={formError.email}
            onChange={handleChange}
            leftSection={<FaAt size={16} />}
            label="Email"
            withAsterisk
            placeholder="Email Adresinizi Giriniz"
        />
        <PasswordInput
            value={data.password}
            error={formError.password}
            name="password"
            onChange={handleChange}
            leftSection={<FaLock size={16} />}
            label="Şifre"
            withAsterisk
            placeholder="Şifrenizi Girin"
        />
        <Button onClick={handleSubmit} autoContrast variant="filled">Giriş Yap</Button>
        <div className="text-center">Bir hesabınız yok mu ? <span className="text-bright-sun-400 cursor-pointer hover:underline" onClick={() => {setData(form); navigate("/signup")}}>Kayıt Ol</span></div>
        <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Şifremi Unuttum</div>
    </div>
    <ResetPassword opened={opened} close={close} />
    </>
}

export default Login;