import { createTheme, MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './pages/FindJobs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FindTalentPage from './pages/FindTalentPage';
import TalentProfilePage from './pages/TalentProfilePage';


function App() {
  const theme = createTheme({
    colors: {
      'brightSun': ['#effaff','#def4ff','#b6ebff','#75deff','#2ccfff','#00bfff','#0095d4','#0076ab','#00638d','#065374','#04344d',],
      'mineShaft' : ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d']
    },
    fontFamily: "poppins, sans-serif"
  })
  return(
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='*' element={<HomePage />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App;
