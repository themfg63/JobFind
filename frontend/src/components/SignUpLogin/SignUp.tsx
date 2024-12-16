import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { CiAt } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Hesap Oluştur</div>
        <TextInput
            withAsterisk
            label="Ad Soyad"
            placeholder="Ad Soyad Girin"
        />
        <TextInput
            withAsterisk
            leftSection={<CiAt style={{width: rem(16), height: rem(16)}} />}
            label="Email"
            placeholder="Email Adresinizi Girin"
        />
        <PasswordInput
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre"
            placeholder="Şifrenizi Girin"
        />
        <PasswordInput
            withAsterisk
            leftSection={<FaLock style={{width: rem(18), height: rem(18)}} />}
            label="Şifre Tekrar"
            placeholder="Şifrenizi Tekrar Girin"
        />
        <Checkbox autoContrast label={<><Anchor>Koşul ve Şartları</Anchor> Kabul Ediyorum.</>} />
        <Button autoContrast variant="filled">Kayıt Ol</Button>
        <div className="mx-auto">Bir Hesabınız Var Mı? <Link to="/login" className="text-bright-sun-400 hover:underline">Giriş Yap</Link> </div>
    </div>
}

export default SignUp;