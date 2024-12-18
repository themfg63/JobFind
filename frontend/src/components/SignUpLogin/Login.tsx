import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { useState } from "react";
import { CiAt } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/UserService";

const form = {
    email: "",
    password: ""
}

const Login = () => {
    const [data,setData] = useState(form);

    const handleChange = (event:any) => {
        setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit = () => {
        loginUser(data).then((res) => {
            console.log(res);
        }).catch((err) => console.log(err.response.data));
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
        <div className="mx-auto">Bir Hesabınız Yok Mu? <Link to="/signup" className="text-bright-sun-400 hover:underline">Kayıt Ol</Link> </div> 
    </div>
}

export default Login;