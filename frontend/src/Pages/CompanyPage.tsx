import { Button, } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Company from "../CompanyProfile/Company"
import SimilarCompanies from "../CompanyProfile/SimilarCompanies"

const CompanyPage = () => {
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Link className="my-5 inline-block" to="/jobs">
            <Button color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">Geri Dön</Button>
        </Link>
        <div className="flex gap-5 justify-between">
            <Company />
            <SimilarCompanies />
        </div>
    </div>
}

export default CompanyPage;