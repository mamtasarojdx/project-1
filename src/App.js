import './App.css';
import './Components/HomePage.css';
import './MediaQuery/TabletMQ.css';
import './MediaQuery/MobileMQ.css';
import './MediaQuery/Medium_Mobile.css';
import './MediaQuery/Small_Mobile.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage';
import Hospital_Treatment from './Components/Hospital_Treatment';
import Doctors from './Components/Doctors';
import Sign_Up from './Components/Sign_Up';
import TestimonialPage from './Components/TestimonialPage';
import About_Page from './Components/About_Page';
import LoginPage from "./Components/LoginPage"
import Header from './Components/Header'
import Contact_Us from './Components/Contact_Us';


function App() {
  return (
    <div className="App">
     <Header/>
      <HomePage/>
      <Contact_Us/>
      <About_Page/>
      <Hospital_Treatment/>
      <Doctors/>
      <TestimonialPage/>
      <LoginPage/>
      <Sign_Up/>
     

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={< About_Page />}></Route>
          <Route exact path="/treatment" element={<Hospital_Treatment />}></Route>
          <Route exact path="/doctors" element={<Doctors />}></Route>
          <Route exact path="/testimonial" element={<TestimonialPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/sign-up" element={<Sign_Up />}></Route>
        </Routes>
       </BrowserRouter> */}

    </div>
  );
}

export default App;
