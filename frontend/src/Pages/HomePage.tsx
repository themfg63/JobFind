import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";

const HomePage = () => {
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Header />
            <DreamJob />
            <Companies />
        </div>
    )
}

export default HomePage;