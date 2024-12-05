import { createTheme, MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const theme = createTheme({
    colors: {
      'brightSun': ['#effaff','#def4ff','#b6ebff','#75deff','#2ccfff','#00bfff','#0095d4','#0076ab','#00638d','#065374','#04344d',],
      'mineShaft' : ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d']
    }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
