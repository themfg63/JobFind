import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
   return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
    <div className="text-2xl font-semibold text-bright-sun-500">Hesap Oluştur</div>
    <TextInput
        withAsterisk
        label="Ad Soyad"
        placeholder="Adınızı ve Soyadınızı Girin"
    />
    <TextInput
        withAsterisk
        leftSection={<IconAt style={{width: rem(16), height: rem(16)}}  />}
        label="Email"
        placeholder="Email Adresinizi Girin"
    />    
    <PasswordInput
        withAsterisk
        leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5}/>}
        label="Şifre"
        placeholder="Şifrenizi Girin"
    />
    <PasswordInput
        withAsterisk
        leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5}/>}
        label="Şifre Tekrar"
        placeholder="Şifrenizi Tekrar Girin"
    />
    <Checkbox autoContrast label={<><Anchor>Şartlar ve Koşulları</Anchor> Kabul Ediyorum {' '}</>} />
    <Button autoContrast variant="filled">Kayıt Ol</Button>
    <div className="mx-auto">Zaten bir hesabınız var mı? <Link to="/login" className="text-bright-sun-400 hover:underline">Giriş Yap</Link></div>
   </div>
}

export default SignUp;