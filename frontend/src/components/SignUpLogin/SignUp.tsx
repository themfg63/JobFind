import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { useState } from "react";
import { CiAt } from "react-icons/ci";
import { FaCheck, FaLock } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "../../services/UserService";
import { signupValidation } from "../../services/FormValidation";
import { notifications } from "@mantine/notifications";
import { FaX } from "react-icons/fa6";

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const SignUp = () => {
    const [data,setData] = useState<{[key:string]:string}>(form);
    const [formError,setFormError] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();

    const handleChange = (event:any) => {
        if(typeof(event) === "string"){
            setData({...data, accountType:event});
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({...data, [name]:value});
        setFormError({...formError, [name]:signupValidation(name,value)})
        if(name === "password" && data.confirmPassword !== ""){
            let err = "";
            if(data.confirmPassword !== value){
                err = "Şifreler Uyuşmuyor!";
            }
            setFormError({...formError, [name]:signupValidation(name,value) , confirmPassword: err});
        }
        if(name === "confirmPassword"){
            if(data.password !== value){
                setFormError({...formError, [name]:"Şifreler Uyuşmuyor!"});
            }else{
                setFormError({...formError, confirmPassword: ""});
            }
        }
    }

    const handleSubmit = () => {
        let valid = true, newFormError:{[key:string]:string}={};
        for(let key in data){
            if(key === "accountType")continue;
            if(key !== "confirmPassword")newFormError[key] = signupValidation(key,data[key]);
            else if(data[key] !== data["password"])newFormError[key] = "Şifreler Uyuşmuyor!";
            if(newFormError[key])valid=false;
        }
        setFormError(newFormError);
        if(valid === true){
            registerUser(data).then((res) => {
                console.log(res);
                setData(form);
                notifications.show({
                    title: "Kayıt Başarılı",
                    message:"Giriş Sayfasına Yönlendiriliyorsunuz...",
                    withCloseButton: true,
                    icon: <FaCheck style={{width: "90%",height: "90%"}} />,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    navigate("/login");
                },4000);
            }).catch((err) => {
                console.log(err);
                notifications.show({
                    title: "Beklenmedik Bir Hata Oluştu!",
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <FaX style={{width:"90%",height:"90%", color: 'red'}} />,
                    withBorder: true,
                    className:"!border-red-500"
                })
            });
        }
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
            error={formError.name}
        />
        <TextInput
            name="email"
            withAsterisk
            leftSection={<CiAt style={{width: rem(16), height: rem(16)}} />}
            label="Email"
            placeholder="Email Adresinizi Girin"
            value={data.email}
            onChange={handleChange}
            error={formError.email}
        />
        <PasswordInput
            name="password"
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre"
            placeholder="Şifrenizi Girin"
            value={data.password}
            onChange={handleChange}
            error={formError.password}
        />
        <PasswordInput
            name="confirmPassword"
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre Tekrar"
            placeholder="Şifrenizi Tekrar Girin"
            value={data.confirmPassword}
            onChange={handleChange}
            error={formError.confirmPassword}
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
        <div className="text-center">
            Hesabınız Var Mı? 
            <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={() => {navigate("/login");setFormError(form);setData(form)}}>
                 Giriş Yap
            </span>
        </div>
    </div>
}

export default SignUp;