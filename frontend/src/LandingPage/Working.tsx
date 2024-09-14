const Working = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">Nasıl <span className="text-bright-sun-400">Çalışır?</span></div>
        <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">Süreçte zahmetsizce ilerleyin ve hayalinizdeki işe kavuşun.</div>
        <div className="flex px-16 justify-between items-center">
            <div>
                <img className="w-[30rem]" src="/Working/girl.png" alt="girl" />
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-bright-sun-300 rounded-full">
                        <img className="h-12 w-12" src="/Working/register.png" alt="" />
                    </div>
                    <div>
                        <div className="text-mine-shaft-200 text-xl font-semibold">Öz Geçmişinizi Oluşturun</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Working;