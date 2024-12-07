import { useState } from "react";
import { dropdownData } from "../../data/JobsData";
import MultiInput from "./MultiInput";
import { Divider, RangeSlider } from "@mantine/core";

const SearchBar = () => {
   const [value, setValue] = useState<[number,number]>([0,50]);
   
   return <div className="flex px-5 py-8">
    {
        dropdownData.map((item,index) => <><div key={index} className="w-1/5">
            <MultiInput {...item} />
        </div>
            <Divider mr="xs" size="xs" orientation="vertical" />
        </>)
    }
    <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between">
            <div>Maaş</div>
            <div>{value[0]} TL - {value[1]} TL</div>
        </div>
        <RangeSlider
            color="brightSun.4"
            size="xs"
            value={value}
            labelTransitionProps={{
                transition: 'skew-down',
                duration: 150,
                timingFunction: 'linear'
            }}
            onChange={setValue}
        />
    </div>
   </div>
}

export default SearchBar;