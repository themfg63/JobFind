import { createTheme, Divider, MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FindTalentPage from './pages/FindTalentPage';
import TalentProfilePage from './pages/TalentProfilePage';
import PostJobPage from './pages/PostJobPage';
import FindJobsPage from './pages/FindJobsPage';
import JobDescPage from './pages/JobDescPage';
import ApplyJobPage from './pages/ApplyJobPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';


function App() {
  const theme = createTheme({
    focusRing: "never",
    primaryColor: 'brightSun',
    primaryShade: 4,
    colors: {
      'brightSun': ['#effaff','#def4ff','#b6ebff','#75deff','#2ccfff','#00bfff','#0095d4','#0076ab','#00638d','#065374','#04344d',],
      'mineShaft' : ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d']
    },
    fontFamily: "poppins, sans-serif"
  })
  return(
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <div className='relative'>
      <Header />
      <Divider size="xs" mx="md" />
        <Routes>
          <Route path='/find-jobs' element={<FindJobsPage />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/jobs' element={<JobDescPage />} />
          <Route path='/apply-job' element={<ApplyJobPage />} />
          <Route path='/post-job' element={<PostJobPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='/company' element={<CompanyPage/>} />
          <Route path='/posted-job' element={<PostedJobPage />} /> 
          <Route path='*' element={<HomePage />} /> 
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App;
