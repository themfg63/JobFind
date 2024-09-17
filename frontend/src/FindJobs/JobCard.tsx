import { IconBookmark } from "@tabler/icons-react";

const JobCard = () => {
    return <div className="bg-mine-shaft-900 p-4 w-72">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src="/Companies/microsoft.png" alt="" />
                </div>
                <div>
                    <div className="font-semibold">Ürün Yöneticisi</div>
                    <div className="text-xs text-mine-shaft-300">Meta &#x2022; 25 Başvuru</div>
                </div>
            </div>
            <IconBookmark />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
            <div>Junior</div>
            <div>Full Time</div>
            <div>Uzaktan</div>
        </div>
    </div>
}

export default JobCard;