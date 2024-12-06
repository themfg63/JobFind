import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">Hiçbir <span className="text-bright-sun-400">İş Haberini</span> kaçırmak istemezsiniz</div>
        <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
            <TextInput
                className="[&_input]:text-mine-shaft-100 font-semibold"
                variant="unstyled"
                placeholder="email adresiniz"
                size="xl"
            />
            <Button className="!rounded-lg" size="lg" color="brightSun.4" variant="filled">Alarm Oluştur</Button>
        </div>
    </div>
}

export default Subscribe;