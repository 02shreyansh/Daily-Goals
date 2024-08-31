import './App.css'
import Header from './Components/Header'
import Home from './Components/Home';

function App() {
  const p={
    paragraph1:"Get Ready to Complete Your Goals",
    paragraph2:"A Daily Goal App to Complete Your Goals"
  };
  return (
    <>
      <Header paragraph={Math.random() < 0.5 ? p.paragraph1 : p.paragraph2}/>
      <Home/>
    </>
  )
}

export default App
