import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";

 const TalentProfilePage = () => {
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs" />
            <Link className="my-4 inline-block" to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light">Yeteneklere Dön</Button>
            </Link>
            <Divider size="xs" />
            <div className="flex gap-5">
                <Profile />
            </div>
        </div>
    )
 }

 export default TalentProfilePage;