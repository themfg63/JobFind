import { useState } from "react"
import { signupValidation } from "../../Services/FormValidation";
import { registerUser } from "../../Services/UserService";
import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const form={
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT"
    }

    const [data,setData] = useState<{[key:string]:string}>(form);
    const [formError,setFormError] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();

    const handleChanhe = (event:any) => {
        if(typeof(event) == "string"){
            setData({...data, accountType:event});
            return;
        }
        let name = event.target.name, value=event.target.value;
        setData({...data, [name]:value});
        setFormError({...formError, [name]:signupValidation(name,value)})
        
        if(name === "password" && data.confirmPassword !== ""){
            let err="";
            if(data.confirmPassword !== value){
                err = "Şifreler Uyuşmuyor!";
            }
            setFormError({...formError, [name]:signupValidation(name,value), confirmPassword:err});
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
        let valid = true, newFormError:{[key:string]:string} = {};
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
                    title: 'Kayıt Başarıyla Oluştu',
                    message: 'Giriş Sayfasına Yönlendiriliyorsunuz...',
                    withCloseButton: true,
                    icon: <IconCheck style={{width: "90%", height:"90%"}} />,
                    color: "teal",
                    withBorder: true,
                    className:"!border-green-500"
                })
                setTimeout(() => {
                    navigate("/login");
                },4000)
            }).catch((err) => {
                console.log(err);
                notifications.show({
                    title: 'Kayıt Oluşturulurken Bir Hata Oluştu!',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{width: "90%", height:"90%"}} />,
                    color: "red",
                    withBorder: true,
                    className: "!border-red-500"
                })
            });
        }
    }

    return <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold">Hesap Oluştur</div>
        <TextInput
            value={data.name}
            error={formError.name}
            name="name"
            onChange={handleChanhe}
            label="Ad Soyad"
            withAsterisk
            placeholder="Ad Soyad Girin"
        />
        <TextInput
            value={data.email}
            error={formError.email}
            name="email"
            onChange={handleChanhe}
            leftSection={<IconAt size={16}/>}
            label="Email"
            withAsterisk
            placeholder="Email Adresinizi Girin"
        />
        <PasswordInput
            value={data.password}
            error={formError.password}
            name="password"
            onChange={handleChanhe}
            leftSection={<IconLock size={16} />}
            label="Şifre"
            withAsterisk
            placeholder="Şifrenizi Girin"
        />
        <PasswordInput
            value={data.confirmPassword}
            error={formError.confirmPassword}
            name="confirmPassword"
            onChange={handleChanhe}
            leftSection={<IconLock size={16} />}
            label="Şifre Tekrar"
            withAsterisk
            placeholder="Şifrenizi Tekrar Girin"
        />
        <Radio.Group 
            value={data.accountType}
            onChange={handleChanhe}
            label="Hesap Tipi?"
            withAsterisk
        >
            <Group mt="xs">
                <Radio
                    name="accountType"
                    className="py-6 px-6 hover:bg-mine-shaft-900 border-mine-shaft-800 border rounded-lg has-[:checked]:!border-bright-sun-400"
                    autoContrast
                    value="APPLICANT"
                    label="İş Arayan"
                />
                <Radio
                    name="accountType"
                    className="py-6 px-6 hover:bg-mine-shaft-900 border-mine-shaft-800 border rounded-lg has-[:checked]:!border-bright-sun-400"
                    autoContrast
                    value="EMPLOYER"
                    label="İş Veren"
                />
            </Group>
        </Radio.Group>
        <Checkbox autoContrast label={<><Anchor>Gizlilik ve Kullanım Koşullarını</Anchor> Kabul Ediyorum{' '}</>} />
        <Button onClick={handleSubmit} autoContrast variant="field">Kayıt Ol</Button>
        <div className="text-center">Bir Hesabınız yok mu ? <span className="text-bright-sun-400 hover:underline" onClick={() => {navigate("/login"); setFormError(form);setData(form)} }>Giriş Yap</span></div>
    </div>
}

export default SignUp;