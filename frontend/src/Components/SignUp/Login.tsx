import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { loginValidation } from "../../Services/FormValidation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { loginUser } from "../../Services/UserService";
import { notifications } from "@mantine/notifications";

const Login = () => {
    const form = {
        email: "",
        password: "",
    }

    const [data,setData] = useState<{[key:string]:string}>(form);
    const [formError,setFormError] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();

    const handleChange = (event:any) => {
        setFormError({...formError, [event.target.name]:""});
        setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () => {
        let valid = true, newFormError:{[key:string]:string} = {};
        for(let key in data){
            newFormError[key] = loginValidation(key,data[key]);
            if(newFormError[key]){
                valid = false;
            }
        }
        setFormError(newFormError);
        if(valid){
            loginUser(data).then((res) => {
                console.log(res);
                notifications.show({
                    title: "Giriş Başarılı",
                    message: "Ana Sayfaya Yönlendiriliyorsunuz...",
                    withCloseButton: true,
                    icon: <IconCheck style={{width: "90%",height:"90%"}}/>,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    navigate("/");
                }, 4000);
            }).catch((err) => {
                console.log(err);
                notifications.show({
                    title: "Giriş Yaparken Beklenmedik Bir Hata Oluştu",
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{width: "90%",height:"90%"}}/>,
                    color: "red",
                    withBorder: true,
                    className: "!border-red-500"
                })
            })
        }
    }

    return <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold">Giriş Yap</div>
        <TextInput
            value={data.email}
            error={formError.email}
            name="email"
            onChange={handleChange}
            leftSection={<IconAt size={16} />}
            label="Email"
            withAsterisk
            placeholder="Email Adresinizi Girin"
        />
        <PasswordInput
            value={data.password}
            error={formError.password}
            name="password"
            onChange={handleChange}
            leftSection={<IconLock size={16} />}
            label="Şifre"
            withAsterisk
            placeholder="Şifrenizi Girin"
        />
        <Button onClick={handleSubmit} autoContrast variant="filled">Giriş Yap</Button>
        <div className="text-center">
            Bir Hesabınız yok mu?
            <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>{navigate("/signup");setFormError(form);setData(form)}}> Hesap Oluştur</span>
        </div>
    </div>
}

export default Login;