import { Button } from "@mantine/core";

const ExpCard = (props:any) => {
    return <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Companies/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300">
                {props.startDate} - {props.endDate}
            </div>
        </div>
        <div className="text-sm text-mine-shaft-300 text-justify">
            {props.description}
        </div>
        {props.edit&&<div className="flex gap-5">
            <Button color="brightSun.4" variant="outline">Düzenle</Button>
            <Button color="red.8" variant="light">Sil</Button>
        </div>}
    </div>
}

export default ExpCard;