import { Avatar, Divider, Tabs } from "@mantine/core";
import { LuMapPin } from "react-icons/lu";
import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl" src="/photos/Profile/banner.jpg" alt="" />
            <img className="w-36 h-36 border-mine-shaft-950 border-8 p-2 absolute -bottom-1/4 left-5 rounded-3xl bg-mine-shaft-950" src="/photos/Icons/Google.png" alt="" />
        </div>
        <div className="px-3 mt-12">
            <div className="text-3xl font-semibold flex justify-between">
                Google
                <Avatar.Group>
                    <Avatar src="/photos/avatar.png" />
                    <Avatar src="/photos/avatar1.png" />
                    <Avatar src="/photos/avatar2.png" />
                    <Avatar>+10K</Avatar>
                </Avatar.Group>
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <LuMapPin className="h-5 w-5"  />
                Ankara,Türkiye
            </div>
            <Divider my="xl" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="about">Hakkında</Tabs.Tab>
                        <Tabs.Tab value="jobs">İlanlar</Tabs.Tab>
                        <Tabs.Tab value="employees">Çalışanlar</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="about"><AboutCompany /></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJobs /></Tabs.Panel>
                    <Tabs.Panel value="employees"><CompanyEmployees /></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    </div>
}

export default Company;