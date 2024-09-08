import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
   return(
    <div className="flex items-center px-16">
        <div className="flex flex-col w-[45%] gap-3">
            <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                Bizimle Birlikte <span>Hayalinizdeki</span><span> İşi</span> Bulun.
            </div>
            <div className="text-lg text-mine-shaft-100">
                İyi hayat iyi bir işle başlar. Binlerce İş fırsatını tek bir yerden, kolayca keşfedin.
            </div>
            <div className="flex gap-3 mt-5">
                <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" 
                variant="unstyled" label="Pozisyon" placeholder="Yazılım Mühendisi" />
                <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" 
                variant="unstyled" label="Çalışma Şekli" placeholder="Tam Zamanlı" />
                <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 
                hover:bg-bright-sun-500 cursor-pointer">
                    <IconSearch className="h-[85%] w-[85%]" />
                </div>
            </div>
        </div>
        <div className="w-[55%] flex items-center justify-center">
            <div className="w-[30rem] relative">
                <img src="/kapak.png" alt="kapak" />
                <div className="absolute -right-20 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                    <div className="text-center mb-1 text-sm text-mine-shaft-100">10 Binden fazla İŞ Bulan</div>
                    <Avatar.Group>
                        <Avatar src="avatar-png.webp" />
                        <Avatar src="kapak.png" />
                        <Avatar src="image.png" />
                        <Avatar src="avatar-png.webp" />
                        <Avatar>+10K</Avatar>
                    </Avatar.Group>
                </div>
                <div className="absolute -left-20 w-fit top-[30%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 p-1 rounded-lg">
                            <img src="google.png" alt="" />
                        </div>
                        <div className="text-sm text-mine-shaft-100">
                            <div>Software Developer</div>
                            <div className="text-mine-shaft-200 text-xs">İstanbul</div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-arround text-mine-shaft-200 text-xs">
                        <span>1 Gün Önce</span>
                        <span>120 Başvuru</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default DreamJob;