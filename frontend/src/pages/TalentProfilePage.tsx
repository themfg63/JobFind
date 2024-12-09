import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Profile from "../components/TalentProfile/Profile";
import { profile } from "../data/TalentData";
import RecommendTalent from "../components/TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs" />
            <Link className="my-4 inline-block" to="/find-talent">
                <Button leftSection={<FaArrowLeft size={20} />} color="brightSun.4" variant="light">Geri Dön</Button>
            </Link>
            <Divider size="xs" />
            <div className="flex gap-5">
                <Profile {...profile}/>
                <RecommendTalent />
            </div>
        </div>
    )
}

export default TalentProfilePage;