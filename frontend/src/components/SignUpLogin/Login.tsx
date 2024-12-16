import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { CiAt } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Giriş Yap</div>
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
        <Button autoContrast variant="filled">Giriş Yap</Button>
        <div className="mx-auto">Bir Hesabınız Yok Mu? <Link to="/signup" className="text-bright-sun-400 hover:underline">Kayıt Ol</Link> </div> 
    </div>
}

export default Login;