import Intro from './Components/Intro';
import Header from './Components/Header';
import About from './Components/About';
import MyWork from './Components/MyWork';
import Footer from './Components/Footer';
import "animate.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <About />
        <MyWork />
      <Footer />
    </div>
  );
}

export default App;
