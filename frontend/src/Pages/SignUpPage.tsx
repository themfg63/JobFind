import { IconAnchor } from "@tabler/icons-react";
import Login from "../SignUp/Login";
import SignUp from "../SignUp/SignUp";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {

    const location = useLocation()

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
        <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000  flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
            <Login />
            <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-16 w-16" stroke={2.5} />
                    <div className="text-6xl font-semibold">JobFind</div>
                </div>
                <div className="text-2xl text-mine-shaft-200 font-semibold">Aradığınızı Bizimle Bulun.</div>
            </div>
            <SignUp/>
        </div>
    </div>
}

export default SignUpPage;