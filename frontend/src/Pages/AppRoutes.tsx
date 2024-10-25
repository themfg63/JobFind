import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"
import FindJobsPage from "./FindJobsPage"
import JobPage from "./JobPage"
import ApplyJobPage from "./ApplyJobPage"
import FindTalentPage from "./FindTalentPage"
import TalentProfilePage from "./TalentProfilePage"
import CompanyPage from "./CompanyPage"
import JobHistoryPage from "./JobHistoryPage"
import PostedJobPage from "./PostedJobPage"
import PostJobPage from "./PostJobPage"
import SignUpPage from "./SignUpPage"
import ProfilePage from "./ProfilePage"
import HomePage from "./HomePage"
import Footer from "../Components/Footer/Footer"
import { useSelector } from "react-redux"

const AppRoutes = () => {
    const user = useSelector((state:any) => state.user);

    return <BrowserRouter>
        <div className="relative">
            <Header />
            <Routes>
                <Route path='/find-jobs' element={<FindJobsPage />} />
                <Route path='/jobs' element={<JobPage />} />
                <Route path='/apply-job' element={<ApplyJobPage />} />
                <Route path='/find-talent' element={<FindTalentPage />} />
                <Route path='/talent-profile' element={<TalentProfilePage />} />
                <Route path='/company' element={<CompanyPage />} />
                <Route path='/job-history' element={<JobHistoryPage />} />
                <Route path='/posted-jobs' element={<PostedJobPage />} />
                <Route path='/post-job' element={<PostJobPage />} />
                <Route path='/signup' element={user ? <Navigate to="/" />:<SignUpPage />} />
                <Route path='/login' element={<SignUpPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
}

export default AppRoutes;