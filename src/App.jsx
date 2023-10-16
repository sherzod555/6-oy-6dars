import './app.scss';

import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import IntroDetails from './components/intro_details/intro_details';
import Episodes from './components/episodes/episodes';



function App() {
  return <>
  <div className="bg-no-repeat bg-cover bg-top-center intro_bg">
    <Header />
    <Intro />
  </div>
    <IntroDetails />
    <Episodes/>

  </>
}

export default App
