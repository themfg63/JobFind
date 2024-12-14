import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { CiHeart } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdCalendarMonth } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";

const TalentCard = (props:any) => {
    const [opened,{open,close}] = useDisclosure(false);
    const [value,setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    return <div className="p-4 rounded-xl bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-300 ease-in-out w-96 flex flex-col gap-3">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                    <Avatar size="lg" src={`/photos/${props.image}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.role} &bull; {props.company}</div>
                </div>
            </div>
            <CiHeart className="cursor-pointer text-mine-shaft-300" stroke="1.5" />
        </div>
        <div className="flex gap-2">
            {
                props.topSkills?.map((skill:any,index:any) => <div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>)
            }
        </div>
        <div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>
        </div>
        <Divider color="mineShaft.7" size="xs" />
        {
            props.invited?<div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                <MdCalendarMonth stroke="1.5" />Görüşme: 17 Aralık Salı, Saat: 10:00
            </div>:<div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">{props.expectedCtc}</div>
                <div className="text-xs flex gap-1 items-center text-mine-shaft-400">
                    <FiMapPin className="h-5 w-5" stroke="1.5" /> {props.location}
                </div>
            </div>
        }
        <Divider color="mineShaft.7" size="xs" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            {
                !props.invited && <>
                    <Link to="/talent-profile">
                        <Button color="brightSun.4" variant="outline" fullWidth>Profil</Button>
                    </Link>

                    <div>
                        {
                            props.posted?<Button onClick={open} rightSection={<MdCalendarMonth className="w-5 h-5" />} color="brightSun.4" variant="light" fullWidth>Takvim</Button>:
                            <Button color="brightSun.4" variant="light" fullWidth>İletişime Geç</Button>
                        }
                    </div>
                </>
            }
            {
                props.invited && <>
                    <div>
                        <Button color="brightSun.4" variant="outline" fullWidth>Kabul Et</Button>
                    </div>
                    <div>
                        <Button color="red.5" variant="light" fullWidth>Red Et</Button>
                    </div>
                </>
            }
        </div>
        <Modal opened={opened} onClose={close} title="Görüşme Takvimi" centered>
            <div className="flex flex-col gap-4">
                <DateInput
                    value={value}
                    minDate={new Date()}
                    onChange={setValue}
                    label="Görüşme Tarihi"
                    placeholder="Tarih Girin"
                />
                <TimeInput
                    label="Görüşme Saati"
                    ref={ref}
                    onClick={() => ref.current?.showPicker()}
                />
                <Button color="brightSun.4" variant="light" fullWidth>Görüşmeyi Kaydet</Button>
            </div>
        </Modal>
    </div>
}

export default TalentCard;