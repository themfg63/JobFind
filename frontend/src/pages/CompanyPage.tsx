import { Button, Divider } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Company from "../components/CompanyProfile/Company";
import SimilarCompanies from "../components/CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
    const navigate = useNavigate();

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Divider size="xs" />
        <Button
            color="brightSun.4"
            my="md"
            onClick={() => navigate(-1)}
            leftSection={<FaArrowLeft size={20} />}
            variant="light"
        >
            Geri Dön
        </Button>
        <div className="flex gap-5 justify-between">
            <Company />
            <SimilarCompanies />
        </div>
    </div>
}

export default CompanyPage;