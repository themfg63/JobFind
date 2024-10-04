import { Avatar, Divider, Tabs, } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

const Company = () => {
    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl" src="kapakgün.jpg" alt="" />
            <img className="w-36 h-36 border-mine-shaft-950 border-8 p-2 absolute -bottom-1/4 left-5 rounded-3xl bg-mine-shaft-950" src="/Companies/google.png" alt="" />
        </div>
        <div className="px-3 mt-12">
            <div className="text-3xl font-semibold flex justify-between">
                Google
                <Avatar.Group>
                    <Avatar src="avatar.png" />
                    <Avatar src="avatar1.png" />
                    <Avatar src="avatar2.png" />
                    <Avatar>10K+</Avatar>
                </Avatar.Group>
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} />Ankara, Türkiye
            </div>
            <Divider my="xl" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="about">Hakkında</Tabs.Tab>
                        <Tabs.Tab value="jobs">İş İlanları</Tabs.Tab>
                        <Tabs.Tab value="employees">Çalışanlar</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about">Hakkında</Tabs.Panel>
                    <Tabs.Panel value="jobs">İş İlanları</Tabs.Panel>
                    <Tabs.Panel value="employees">Çalışanlar</Tabs.Panel>
                </Tabs>
            </div>
        </div>
    </div>
}

export default Company;