import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/Data";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([20,80]);
    return <div className="flex px-5 py-8">
        {
            dropdownData.map((item, index) =><> <div key={index} className="w-1/5">
                <MultiInput {...item} />
            </div>
            <Divider mr="xs" size="xs" orientation="vertical" />
            </>)
        }
        <div className="w-1/5">
        <div className="flex justify-between">
            <div>Maaş</div>
            <div>&#8378;{value[0]} - &#8378;{value[1]}</div>
        </div>
            <RangeSlider color="brightSun.4" size="xs" value={value} onChange={setValue} />
        </div>
    </div>
}

export default SearchBar;