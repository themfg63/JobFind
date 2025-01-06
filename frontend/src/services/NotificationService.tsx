import { notifications } from "@mantine/notifications"
import { FaCheck } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const successNotification = (title:string, message:string) => {
    notifications.show({
        title: title,
        message: message,
        icon: <FaCheck style={{width: "90%" ,height: "90%"}} />,
        color: 'teal',
        withBorder: true,
        withCloseButton: true,
        className: "!border-green-500",
    })
}

const errorNotification = (title:string,message:string) => {
    notifications.show({
        title: title,
        message: message,
        icon: <FaX style={{width: "90%", height: "90%"}} />,
        color: "red",
        withBorder: true,
        withCloseButton: true,
        className: "!border-red-500",
    })
}

export {successNotification,errorNotification};