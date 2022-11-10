import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './assets/CSS/base.scss';
import './assets/CSS/header.scss';
import Footer from './layout/Footer';
import Header from './layout/Header';
import LoadingPage from './views/loadding/LoadingPage';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    {/* <LoadingPage/> */}
    </>
  );
}

export default App;
