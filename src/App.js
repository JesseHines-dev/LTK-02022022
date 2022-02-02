import './app.css';
import Footer from './components/footer';
import DataTable from './components/search-form';
import ResponsiveAppBar from './components/top-nav';
import Main from './components/main';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar  />
      <Main />
      <DataTable />
      <Footer />
    </div>
  );
}

export default App;