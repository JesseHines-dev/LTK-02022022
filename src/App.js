import './app.css';
import Footer from './components/footer';
import ResponsiveAppBar from './components/top-nav';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar  />
      <Footer />
    </div>
  );
}

export default App;