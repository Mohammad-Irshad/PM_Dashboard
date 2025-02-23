import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import BudgetStatusCard from './components/BudgetStatusCard';
import TeamMood from './components/TeamMood';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);


function App() {

  const revenueData = {
    labels: ["19 June", "20 June", "21 June", "22 June", "23 June", "24 June", "25 June"],
    datasets: [
      {
        label: "Total Revenue",
        data: [0, 2000, 3500, 4000, 5500, 6000, 7000],
        borderColor: "#17a2b8",
        borderWidth: 2,
        fill: false,
      },
    ],
  };



  const budgetData = {
    labels: ["Over Budget", "On Budget", "Under Budget"],
    datasets: [
      {
        label: "Budget Status",
        data: [19, 33, 48],
        backgroundColor: ["#dc3545", "#ffc107", "#28a745"],
      },
    ],
  };



  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className='row'>
            <div className='col-md-10'>
              <div className="row">
                <div className="col-md-2"><div className="card p-3 text-center"><strong>5</strong> Total Projects</div></div>
                <div className="col-md-2"><div className="card p-3 text-center"><strong>1</strong> Completed</div></div>
                <div className="col-md-2"><div className="card p-3 text-center"><strong>3</strong> Ongoing</div></div>
                <div className="col-md-2"><div className="card p-3 text-center text-white bg-danger"><strong>1</strong> Delayed</div></div>
                <div className="col-md-2"><div className="card p-3 text-center"><strong>5</strong> Total Employee </div></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-5">
                  <div className='card'>
                    <div className='card-body'>
                      <h5>Total Revenue</h5>
                      <Line data={revenueData} />
                    </div>
                  </div>
                </div>
                <div className="col-md-5" style={{ width: "450px", height: "450px" }}>
                  <div className='card'>
                    <div className='card-body'>

                      <h5>Budget Status</h5>
                      <Doughnut data={budgetData} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <div className="row">
                <div className="col">
                  <TeamMood />
                </div>
              </div>
            </div>
          </div>

          <div className='container mt-5'>
            <div className='d-flex align-items-center gap-3 flex-wrap'>
              <h2>Budget Status</h2>
              <button className='btn btn-success border border-success px-3'>+ Add New Project</button>
              <button className='btn btn-light border border-success px-3'>Download Report</button>
              <input type='date' className='form-control border border-success' style={{ width: '180px' }} />
              <select className='form-select border border-success' style={{ width: '120px' }}>
                <option>Filter</option>
              </select>
            </div>
          </div>


          <div className="row my-4">
            <BudgetStatusCard title="Insurance App" budget="70,000" profit="-2,500" hours="1100" />
            <BudgetStatusCard title="Neo" budget="70,000" profit="4,000" hours="1000" />
            <BudgetStatusCard title="VR Website" budget="70,000" profit="4,000" hours="2000" />
            <BudgetStatusCard title="VR Website" budget="70,000" profit="4,000" hours="1100" />
          </div>

        </div>

      </main >
    </>
  )
}

export default App
