
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Overview from './Components/Overview/Overview';

import SalesReport from './Components/SalesReport/SalesReport';
function App() {
  return (
    
      <div>
        <Header/>
        <div style ={{display: `flex`}}>
          <SalesReport></SalesReport>
          <Overview></Overview>

        </div>
        <Footer></Footer>
      </div>
    
  );
}

export default App;
