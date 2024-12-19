import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { useState } from "react";
import { CiAt } from "react-icons/ci";
import { FaCheck, FaLock } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { loginUser } from "../../services/UserService";
import { loginValidation } from "../../services/FormValidation";
import { notifications } from "@mantine/notifications";
import { FaX } from "react-icons/fa6";

const form = {
    email: "",
    password: ""
}

const Login = () => {
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
            newFormError[key] = loginValidation(key, data[key]);
            if(newFormError[key])valid=false;
        }
        setFormError(newFormError);
        if(valid){
            loginUser(data).then((res) => {
                console.log(res);
                notifications.show({
                    title: "Giriş Başarılı!",
                    message: "Ana Sayfaya Yönlendiriliyorsunuz...",
                    withCloseButton: true,
                    icon: <FaCheck style={{width:"90%",height:"90%"}} />,
                    color:"teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    navigate("/")
                }, 4000);
            }).catch((err) => {
                console.log(err);
                notifications.show({
                    title: "Giriş Yaparken Hata",
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <FaX style={{width:"90%",height:"90%"}} />,
                    color: "red",
                    withBorder: true,
                    className: "!border-red-500"
                })
            })
        }
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Giriş Yap</div>
        <TextInput
            name="email"
            value={data.email}
            onChange={handleChange}
            withAsterisk
            leftSection={<CiAt style={{width: rem(16), height: rem(16)}} />}
            label="Email"
            placeholder="Email Adresinizi Girin"
            error={formError.email}
        />
        <PasswordInput
            name="password"
            value={data.password}
            onChange={handleChange}
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre"
            placeholder="Şifrenizi Girin"
        />
        <Button onClick={handleSubmit} autoContrast variant="filled">Giriş Yap</Button>
        <div className="text-center">
            Bir Hesabınız Yok Mu? 
            <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={() => {navigate("/signup"); setFormError(form); setData(form)}}>
                Kayıt Ol
            </span>
        </div>
    </div>
}

export default Login;