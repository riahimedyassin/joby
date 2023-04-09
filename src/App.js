import './App.css';
import FourthSection from './Components/FourthSection';
import HeadSection from './Components/HeadSection';
import NavComp from './Components/NavComp'
import SecondSection from './Components/SecondSection';
import SixthSection from './Components/SixthSection';
import ThirdSection from './Components/ThirdSection';
function App() {
  return (
    <div className="App">
      <NavComp />
      <HeadSection />
      <SecondSection />
      <ThirdSection />
      <SixthSection />
    </div>
  );
}

export default App;
