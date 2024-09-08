import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

const JobCategory = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">Kategorilere<span className="text-bright-sun-400"> göz</span> atın </div>
        <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">Yeteneklerinize uygun çeşitli iş fırsatlarını keşfedin. Kariyer Yolculuğunuza Bugün başlayın!</div>
        <Carousel slideSize="22%" slideGap="md" loop>
            {
                jobCategory.map((category, index) => <Carousel.Slide>
                    <div className="flex flex-col items-center w-64">
                        <div className="p-2 bg-bright-sun-300 rounded-full">
                            <img className="h-8 w-8" src="/Category/digitalMarketing.png" alt="" />
                        </div>
                        <div className="text-mine-shaft-100 text-xl font-semibold">Dijital Pazarlama</div>
                        <div className="text-sm text-center text-mine-shaft-300">Bu alanda bir kariyer mi hedefliyorsunuz?</div>
                        <div className="text-bright-sun-300 text-lg">1K+ Yeni İş İlanı</div> 
                    </div>
                </Carousel.Slide>)
            }
        </Carousel>
    </div>
}

export default JobCategory;