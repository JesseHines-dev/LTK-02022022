import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Main from './components/main';
import Footer from './components/footer';
import ResponsiveAppBar from './components/top-nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar  />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;