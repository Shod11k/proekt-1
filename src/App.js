import Navbar from './pages/NavbarHead'
import Header from './pages/Header'
import Swiper from './pages/Swiperslider' 
import Courser from './pages/Course'

import './App.css';

function App() {
 return (
<>
 <Navbar />
 <Header />
 <Swiper />
 <Courser />
 {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route path="/course" element={<Courser />}/>
          <Route path="*" element={<NoPahe />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
</>
  );
}

export default App;
