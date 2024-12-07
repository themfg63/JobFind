
import { Divider } from "@mantine/core";
import SearchBar from "../components/FindJobs/SearchBar";
import Jobs from "../components/FindJobs/Jobs";


const FindJobs = () => {
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Divider size="xs" mx="md" />
            <SearchBar />
            <Jobs />
        </div>
    )
}

export default FindJobs;