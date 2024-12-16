import { Avatar, Menu, rem, Switch} from "@mantine/core";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import {  FaMoon, FaRegUserCircle, FaSun} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbMoonStars } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
    const [checked,setChecked] = useState(false);
    const [opened,setOpened] = useState(false);

    return(
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div>Muhammed Furkan</div>
                    <Avatar src="/photos/Avatar.png" alt="its me" />
                </div>
            </Menu.Target>
            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Link to="/profile">
                    <Menu.Item leftSection={<FaRegUserCircle style={{width: rem(14), height: rem(14)}} />}>
                        Profilim
                    </Menu.Item>
                </Link>
                <Menu.Item leftSection={<LuMessageCircleMore style={{width: rem(14), height: rem(14)}} />}>
                    Mesajlarım
                </Menu.Item>
                <Menu.Item leftSection={<FiFileText style={{width: rem(14), height: rem(14)}} />}>
                    Özgeçmişlerim
                </Menu.Item>
                <Menu.Item 
                    leftSection={<FaMoon style={{width: rem(14), height: rem(14)}} />}
                    rightSection={
                        <Switch checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)} size="md" color="dark.4" 
                            onLabel={<FaSun style={{width: rem(16), height: rem(16)}} stroke="2.5" color="yellow" />}
                            offLabel={<TbMoonStars style={{width: rem(16), height: rem(16)}} stroke="2.5" color="cyan" />}
                        />
                    }
                >
                    Koyu Tema
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                    color="red"
                    leftSection={<CiLogout style={{width: rem(14), height: rem(14)}} />}
                >
                    Çıkış Yap
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu;