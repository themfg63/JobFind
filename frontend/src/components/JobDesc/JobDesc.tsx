const JobDesc = () => {
    return <div  className="w-2/3">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/photos/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer III </div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 Gün Önce &bull; 48 Başvuru</div>
                </div>
            </div>
        </div>
    </div>
}

export default JobDesc;