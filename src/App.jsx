import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './Components/Card/Card';
import Home from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Biography from './Components/Biography/Biography';
import MainBackground from './Components/MainBackground/MainBackground';
import Links from './Components/Links/Links';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import './App.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <MainBackground>
          <Card>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Biography />
            <Links />
            <ProjectsSection />
          </Card>
        </MainBackground>
      </BrowserRouter>
    </>
  )
}

export default App
