import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../Services/FormValidation";
import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock,} from "@tabler/icons-react";
import { loginUser } from "../../Services/UserService";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { setUser } from "../../Slices/UserSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);

    const form = {
        email: "",
        password: "",
    }

    const [data,setData] = useState<{[key:string]:string}>(form);
    const [formError,setFormError] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();
    const [opened, {open, close}] = useDisclosure(false);

    const handleChange = (event:any) => {
        setFormError({...formError, [event.target.name]:""});
        setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () => {
        let valid = true, newFormError:{[key:string]:string} = {};
        for(let key in data){
            newFormError[key] = loginValidation(key,data[key]);
            if(newFormError[key]){
                valid = false;
            }
        }
        setFormError(newFormError);
        if(valid){
            setLoading(true); 
            loginUser(data).then((res) => {
                console.log(res);
                successNotification("Giriş Başarılı!", "Ana Sayfaya Yönlendiriliyorsunuz...");
                setTimeout(() => {
                    setLoading(false);
                    dispatch(setUser(res));
                    navigate("/");
                },4000)
            }).catch((err) => {
                setLoading(false);
                console.log(err);
                errorNotification("Giriş Yapılamadı!", err.response.data.errorMessage);
            });
        }
    }
    

    return <>
    <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{radius: 'sm',blur: 2}}
        loaderProps={{color: 'brightSun.4', type: 'bars'}}
    /> 
    <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold">Giriş Yap</div>
        <TextInput
            value={data.email}
            error={formError.email}
            name="email"
            onChange={handleChange}
            leftSection={<IconAt size={16} />}
            label="Email"
            withAsterisk
            placeholder="Email Adresinizi Girin"
        />
        <PasswordInput
            value={data.password}
            error={formError.password}
            name="password"
            onChange={handleChange}
            leftSection={<IconLock size={16} />}
            label="Şifre"
            withAsterisk
            placeholder="Şifrenizi Girin"
        />
        <Button
            loading={loading}
            onClick={handleSubmit}
            autoContrast
            variant="filled"
        >
            Giriş Yap
        </Button>
        <div className="text-center">
            Bir Hesabınız yok mu?
            <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>{navigate("/signup");setFormError(form);setData(form)}}> Hesap Oluştur</span>
            <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Şifrenizi mi Unuttunuz ?</div>
        </div>
    </div>
    <ResetPassword opened={opened} close={close} />
    </>
}

export default Login;