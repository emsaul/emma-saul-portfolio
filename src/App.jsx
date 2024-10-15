import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './Components/Card/Card';
import Home from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import './App.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <MainBackground> */}
          
          <Card>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Card>
        {/* </MainBackground> */}
      </BrowserRouter>
    </>
  )
}

export default App
