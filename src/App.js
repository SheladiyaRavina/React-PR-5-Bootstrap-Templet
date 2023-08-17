import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Service from './components/Service';
import Advice from './components/Advice';
import Counter from './components/Counter';
import About from './components/About';
import Client from './components/Client';
import Slide from './components/Slide';
import Footer from './components/Footer';
import Service2 from './components/Service2';
import './components/Header.css';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Service/>
      <Advice/>
      <Counter/>
      <About/>
      <Client/>
      <Slide/>
      <Service2/>
      <Footer/>
    </>
  );
}

export default App;
