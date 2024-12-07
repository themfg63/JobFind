import { Button, Combobox, useCombobox } from "@mantine/core";
import { useState } from "react";
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";

const opt = ['En İlgili','En Son Yüklenen','Maaş (ARTAN)','Maaş (AZALAN)'];

const Sort = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = opt.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return(
        <Combobox
            store={combobox}
            width={250}
            position="bottom-start"
            withArrow
            onOptionSubmit={(val) => {
                setSelectedItem(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <div className="border border-bright-sun-400">
                    {selectedItem} <HiMiniAdjustmentsVertical />
                </div>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}

export default Sort;