import Sort from "./Sort";

const Jobs = () => {
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Önerilen İş İlanları</div>
            <Sort />
        </div>
    </div>
}

export default Jobs;