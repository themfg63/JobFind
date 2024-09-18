import { Divider, RangeSlider } from "@mantine/core";


import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1,100]);
    return(
        <div className="px-5 py-8 items-center !text-mine-shaft-100 flex">
            {
                searchFields.map((item, index) => {
                    return <>
                        <div key={index} className="w-1/5">
                            <MultiInput title={item.title} icon={item.icon} options={item.options} />
                        </div>
                        <Divider mr="xs" size="xs" orientation="vertical" />
                    </>
                })
            }
            <div className="w-1/5 text-sm text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between">
                    <div>Maaş</div>
                    <div>&#8378; {value[0]}K - &#8378; {value[1]}K</div>
                </div>
                <RangeSlider color="brightSun.4" size="xs" value={value} labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} onChange={setValue} />
            </div>
        </div>
    )
}

export default SearchBar;