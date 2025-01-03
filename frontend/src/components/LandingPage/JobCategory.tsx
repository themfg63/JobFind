import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../data/Data";

const JobCategory = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100"><span className="text-bright-sun-400">Kategorilere</span> Göz Atın</div>
        <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">Becerilerinize Göre Uyarlanmış Çeşitli İş Fırsatlarını Keşfedin. Kariyer Yolculuğunuza Bugün Başlayın!</div>
        <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        >
            {
                jobCategory.map((category,index) => <Carousel.Slide>
                    <div className="flex flex-col items-center w-64 gap-1 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">
                        <div className="p-2 bg-bright-sun-300 rounded-full">
                            <img className="h-8 w-8" src={`/photos/Category/${category.name}.png`} alt={category.name} />
                        </div>
                        <div className="text-mine-shaft-100 text-xl font-semibold">{category.name}</div>
                        <div className="text-sm text-center text-mine-shaft-300">{category.desc}</div>
                        <div className="text-bright-sun-300 text-lg">{category.jobs}+ Yeni İş İlanı</div>
                    </div>
                </Carousel.Slide>)
            }
        </Carousel>
    </div>
}

export default JobCategory;