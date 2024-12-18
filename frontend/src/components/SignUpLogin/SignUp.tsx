import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { useState } from "react";
import { CiAt } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/UserService";

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const SignUp = () => {
    const [data,setData] = useState(form);

    const handleChange = (event:any) => {
        if(typeof(event) === "string"){
            setData({...data, accountType:event});
        }else{
            setData({...data,[event.target.name]:event.target.value})
        }
    }

    const handleSubmit = () => {
        registerUser(data).then((res) => {
            console.log(res);
        }).catch((err) => console.log(err));
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Hesap Oluştur</div>
        <TextInput
            name="name"
            withAsterisk
            label="Ad Soyad"
            placeholder="Ad Soyad Girin"
            value={data.name}
            onChange={handleChange}
        />
        <TextInput
            name="email"
            withAsterisk
            leftSection={<CiAt style={{width: rem(16), height: rem(16)}} />}
            label="Email"
            placeholder="Email Adresinizi Girin"
            value={data.email}
            onChange={handleChange}
        />
        <PasswordInput
            name="password"
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre"
            placeholder="Şifrenizi Girin"
            value={data.password}
            onChange={handleChange}
        />
        <PasswordInput
            name="confirmPassword"
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre Tekrar"
            placeholder="Şifrenizi Tekrar Girin"
            value={data.confirmPassword}
            onChange={handleChange}
        />
        <Radio.Group
            value={data.accountType}
            onChange={handleChange}
            label="Hesap Türü"
            withAsterisk
        >
            <Group mt="xs">
                <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="İş Arayan" />
                <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="İş Veren" />
            </Group>
        </Radio.Group>
        <Checkbox autoContrast label={<><Anchor>Koşul ve Şartları</Anchor> Kabul Ediyorum.</>} />
        <Button onClick={handleSubmit} autoContrast variant="filled">Kayıt Ol</Button>
        <div className="mx-auto">Bir Hesabınız Var Mı? <Link to="/login" className="text-bright-sun-400 hover:underline">Giriş Yap</Link> </div>
    </div>
}

export default SignUp;