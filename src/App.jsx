
// import './App.css';
// import { Navbar } from './Component/NavBar';
// import { MainContent } from './Component/MainContent';
// import { Footer } from './Component/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={
//             <>
//             <Navbar/>
//             <MainContent/>
//             <Footer/>
//             </>}>

//           </Route>
//         </Routes>
//       </Router>
//       {/* <Navbar />
//       <MainContent />
//       <Footer /> */}
//     </div>
//   );
// }
// export default App;


import './App.css';
import { Navbar } from './Component/NavBar';
import { MainContent } from './Component/MainContent';
import { Footer } from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeIndex } from './Component/HomeIndex';
import { Workers } from './Component/Workers';
import { Services } from './Component/Services';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Services />}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/:serviceType' element={<Workers/>}></Route>
          <Route path='/:serviceType/:name' element={<Profile/>}></Route>

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
