import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";



const Login = () => {
    const form = {
        email: "",
        password: ""
    }
    
    const [data,setData] = useState<{[key:string]:string}>(form);
    const [formError,setFormError] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();

    const handleChange = (event:any) => {
        setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () => {
        let valid = true, newFormError:{[key:string]:string}={};
        for(let key in data){
            newFormError[key] = loginValidation(key,data[key]);
            if(newFormError[key])valid=false;
        }
        setFormError(newFormError);
        if(valid){
            loginUser(data).then((res) => {
                console.log(res);
                notifications.show({
                    title: 'Giriş Başarılı',
                    message: 'Ana Sayfaya Yönlendiriliyorsunuz...',
                    withCloseButton: true,
                    icon: <IconCheck style={{width: "90%",height:"90%"}}/>,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
            })
        }
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold text-bright-sun-500">Giriş Yap</div>
        <TextInput
            error={formError.email}
            name="email"
            value={data.email}
            onChange={handleChange}
            withAsterisk
            leftSection={<IconAt style={{width: rem(16), height: rem(16) }} />}
            label="Email"
            placeholder="Email Adresinizi Girin"
        />
        <PasswordInput
            error={formError.password}
            name="password"
            value={data.password}
            onChange={handleChange}
            withAsterisk
            leftSection={<IconLock style={{width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Şifre"
            placeholder="Şifrenizi Girin"
        />
        <Button onClick={handleSubmit} autoContrast variant="filled">Giriş Yap</Button>
        <div className="mx-auto">Hesabınız yok mu? Hemen <Link to="/signup" className="text-bright-sun-400 hover:underline">Kayıt Ol</Link></div>
    </div>
}

export default Login;