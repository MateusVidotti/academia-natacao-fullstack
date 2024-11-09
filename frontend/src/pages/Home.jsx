import Navbar from '../components/layout/navbar';
import "../styles/Home.css";
import BasicBars from '../components/charts/BarChart';
import FinancialDashboard from '../components/layout/FinancialDashboard';


function Home() {
     return (
        <div>
            <Navbar/>
            <FinancialDashboard/>
            
        </div>
    );
}

export default Home;
