import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";



const SignUp = () => {
    const form={
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        accountType:"APPLICANT"
    }

    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);

    const handleChange = (event:any) => {
        if(typeof(event) == "string"){
            setData({...data, accountType:event});
            return;
        }
        let name = event.target.name,
        value = event.target.value;
        setData({...data, [name]:value});
        setFormError({...formError, [name]:signupValidation(name,value)})
        
        if(name === "password" && data.confirmPassword !== ""){
            let err= "";
            if(data.confirmPassword !== value){
                err = "Şifreler Uyuşmuyor!";
            }
            setFormError({...formError, [name]:signupValidation(name,value), confirmPassword: err});
        }

        if(name === "confirmPassword"){
            if(data.password !== value){
                setFormError({...formError, [name]: "Şifreler Uyuşmuyor!"});
            }else{
                setFormError({...formError, confirmPassword: ""});
            }
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
        error={formError.name}
    />
    <TextInput
        name="email"
        value={data.email}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconAt style={{width: rem(16), height: rem(16)}}  />}
        label="Email"
        placeholder="Email Adresinizi Girin"
        error={formError.email}
    />    
    <PasswordInput
        name="password"
        value={data.password}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5}/>}
        label="Şifre"
        placeholder="Şifrenizi Girin"
        error={formError.password}
    />
    <PasswordInput
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5}/>}
        label="Şifre Tekrar"
        placeholder="Şifrenizi Tekrar Girin"
        error={formError.confirmPassword}
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