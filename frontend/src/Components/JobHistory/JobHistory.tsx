import {  Tabs } from "@mantine/core";
import { jobList } from "../../Data/Data";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import { useSelector } from "react-redux";

const JobHistory = () => {
    const [activeTab,setActiveTab] = useState<any>('APPLIED')
    const [jobList,setJobList] = useState<any>([])
    const [showList,setShowList] = useState<any>([])
    const profile = useSelector((state:any) => state.profile);
    const user = useSelector((state:any) => state.user);

    useEffect(() => {
        getAllJobs().then((res) => {
            setJobList(res);
            setShowList(res.filter((job:any) => {
                let found = false;
                job.applicants?.forEach((appliant:any) => {
                    if(appliant.applicantId === user.id && appliant.applicantStatus === "APPLIED"){
                        found = true;
                    }
                })
                return found;
            }));
        }).catch((err) => {
            console.log(err);
        })
    },[])

    const handleTabChange = (value:string | null) => {
        setActiveTab(value);
        if(value === "SAVED"){
            setShowList(jobList.filter((job:any) => profile.savedJobs?.includes(job.id)));
        }else{
            setShowList(jobList.filter((job:any) => {
                let found = false;
                job.applicants?.forEach((applicant:any) => {
                    if(applicant.applicantId === user.id && applicant.applicantStatus === value){
                        found = true;
                    }
                })
                return found;
            }));
        }
    }

    return <div>
        <div className="text-2xl font-semibold mb-5">Başvurularım</div>
        <div>
            <Tabs value={activeTab} onChange={handleTabChange} radius="lg" autoContrast variant="outline">
                <Tabs.List className="font-semibold [&_button[data-active='true']]:!border-b-mine-shaft-950 [&_button]:!text-xl mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="APPLIED">Başvurduklarım</Tabs.Tab>
                    <Tabs.Tab value="SAVED">Kaydettiklerim</Tabs.Tab>
                    <Tabs.Tab value="OFFERED">Tekliflerim</Tabs.Tab>
                    <Tabs.Tab value="INTERVIEWING">Mülakatlarım</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value={activeTab} className="[&>div]:w-full">
                    <div className="flex mt-10 flex-wrap gap-5">
                        {
                            showList.map((item:any,index:any) => <Card key={index} {...item} {...{[activeTab.toLowerCase()]:true}} />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}


/*
const JobHistory = () => {
    return <div>
        <div className="text-2xl font-semibold mb-5">İş Geçmişi</div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="applied">
                <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="applied">Başvurulanlar</Tabs.Tab>
                    <Tabs.Tab value="saved">Kaydedilenler</Tabs.Tab>
                    <Tabs.Tab value="offered">Görüntülenler</Tabs.Tab>
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
*/
export default JobHistory;