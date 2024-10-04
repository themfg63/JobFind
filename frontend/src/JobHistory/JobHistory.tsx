import {  Tabs } from "@mantine/core";
import { jobList } from "../Data/Data";
import Card from "./Card";


const JobHistory = () => {
    return <div>
        <div className="text-2xl font-semibold mb-5">İş Geçmişi</div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="applied">
                <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="applied">Başvurulanlar</Tabs.Tab>
                    <Tabs.Tab value="saved">Kaydedilenler</Tabs.Tab>
                    <Tabs.Tab value="offered">Teklif Edilenler</Tabs.Tab>
                    <Tabs.Tab value="interviewing">Mülakatlar</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="applied">
                    <div className="flex mt-10 flex-wrap gap-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} applied />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="saved">
                <div className="flex mt-10 flex-wrap gap-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} saved />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="offered">
                <div className="flex mt-10 flex-wrap gap-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} offered />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="interviewing">
                <div className="flex mt-10 flex-wrap gap-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} interviewing />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default JobHistory;