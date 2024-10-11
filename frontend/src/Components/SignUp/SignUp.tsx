import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT"
}

const SignUp = (props:any) => {
    const [data, setData] = useState(form);

    const handleChange = (event:any) => {
        if(typeof(event)=="string"){
            setData({...data, accountType:event});
        }else{
            setData({...data, [event.target.name]:event.target.value});
        }
    }

    const handleSubmit = () => {
        registerUser(data).then((res) => {
            console.log(res);
        }).catch((err) => console.log(err));
    }

   return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
    <div className="text-2xl font-semibold text-bright-sun-500">Hesap Oluştur</div>
    <TextInput
        name="name"
        value={data.name}
        onChange={handleChange}
        withAsterisk
        label="Ad Soyad"
        placeholder="Adınızı ve Soyadınızı Girin"
    />
    <TextInput
        name="email"
        value={data.email}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconAt style={{width: rem(16), height: rem(16)}}  />}
        label="Email"
        placeholder="Email Adresinizi Girin"
    />    
    <PasswordInput
        name="password"
        value={data.password}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5}/>}
        label="Şifre"
        placeholder="Şifrenizi Girin"
    />
    <PasswordInput
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5}/>}
        label="Şifre Tekrar"
        placeholder="Şifrenizi Tekrar Girin"
    />
    <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="Hesap Tipini Seçiniz"
        withAsterisk
    >
        <Group mt="xs">
            <Radio 
                className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
                autoContrast
                value="APPLICANT" label="İş Arayan"
            />
            <Radio
                className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
                autoContrast
                value="EMPLOYER" label="İş Veren"
            />
        </Group>
    </Radio.Group>
    <Checkbox 
        autoContrast 
        label={<><Anchor>Şartlar ve Koşulları</Anchor> Kabul Ediyorum {' '}</>}
    />
    <Button onClick={handleSubmit} autoContrast variant="filled">Kayıt Ol</Button>
    <div className="mx-auto">Zaten bir hesabınız var mı? <Link to="/login" className="text-bright-sun-400 hover:underline">Giriş Yap</Link></div>
   </div>
}

export default SignUp;