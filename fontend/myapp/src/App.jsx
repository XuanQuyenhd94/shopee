import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './assets/CSS/base.scss';
import './assets/CSS/header.scss';
import Footer from './layout/Footer';
import Header from './layout/Header';


function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
