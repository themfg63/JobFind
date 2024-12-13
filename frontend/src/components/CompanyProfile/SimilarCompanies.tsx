import { similar } from "../../data/Company"
import CompanyCard from "./CompanyCard"

const SimilarCompanies = () => {
    return <div className="w-1/4">
        <div className="text-xl font-semibold mb-5">Benzer Firmalar</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {
                similar.map((company,index) => <CompanyCard key={index} {...company} />)
            }
        </div>
    </div>
}

export default SimilarCompanies;