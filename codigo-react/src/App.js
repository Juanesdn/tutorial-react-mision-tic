import "./App.css";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import PostingPhoto from "./assets/images/undraw_posting_photo.svg";

import Layout from "./components/Layout";
import BorderCard from "./components/BorderCard";
import GraphCard from "./components/GraphCard";
import ColorCard from "./components/ColorCard";

const data = [
  {
    name: "Jan",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Mar",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "May",
    uv: 2000,
    amt: 2290,
  },
  {
    name: "Jul",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Sep",
    uv: 1890,
    amt: 2181,
  },
  {
    name: "Nov",
    uv: 2390,
    amt: 2500,
  },
];

const pieData = [
  { name: "Direct", value: 55 },
  { name: "Social", value: 15 },
  { name: "Referal", value: 30 },
];
const COLORS = ["#4e73df", "#1cc88a", "#36b9cc"];

function App() {
  return (
    <div id="wrapper">
      <Layout>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="/"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            {/* <!-- Earnings (Monthly) Card Example --> */}
            <BorderCard
              titulo="Earnings (Monthly)"
              texto="$40,000"
              icon={<i className="fas fa-calendar fa-2x text-gray-300"></i>}
              borderColor="border-left-primary"
            />

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <BorderCard
              titulo="Earnings (Annual)"
              texto="$215,000"
              icon={<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}
              borderColor="border-left-success"
            />

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <BorderCard
              titulo="Tasks"
              texto="50%"
              progress
              icon={
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              }
              borderColor="border-left-info"
              porcentaje="50"
            />

            {/* <!-- Pending Requests Card Example --> */}

            <BorderCard
              titulo="Pending Requests"
              texto="18"
              icon={<i className="fas fa-comments fa-2x text-gray-300"></i>}
              borderColor="border-left-warning"
              progress
            />
          </div>

          {/* <!-- Content Row --> */}

          <div className="row">
            {/* <!-- Area Chart --> */}
            <GraphCard
              className="col-xl-8 col-lg-7"
              dropdown
              titulo="Earnings Overview"
            >
              <div className="chart-area">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#4e73df"
                      fill="#F6F8FD"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GraphCard>

            {/* <!-- Pie Chart --> */}
            <GraphCard
              className="col-xl-4 col-lg-5"
              dropdown
              titulo="Revenue Sources"
            >
              <div className="chart-pie pt-4 pb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={90}
                      outerRadius={120}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info"></i> Referral
                </span>
              </div>
            </GraphCard>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            {/* <!-- Content Column --> */}
            <div className="col-lg-6 mb-4">
              <GraphCard titulo="Projects">
                <h4 className="small font-weight-bold">
                  Server Migration <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Sales Tracking <span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Customer Database <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Payout Details <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Account Setup <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </GraphCard>
              {/* <!-- Project Card Example --> */}

              {/* <!-- Color System --> */}
              <div className="row">
                <ColorCard
                  titulo="Primary"
                  classColor="bg-primary"
                  hexcode="#4e73df"
                />
                <ColorCard
                  titulo="Success"
                  classColor="bg-success"
                  hexcode="#1cc88a"
                />
                <ColorCard
                  titulo="Info"
                  classColor="bg-info"
                  hexcode="#36b9cc"
                />
                <ColorCard
                  titulo="Warning"
                  classColor="bg-warning"
                  hexcode="#f6c23e"
                />
                <ColorCard
                  titulo="Danger"
                  classColor="bg-danger"
                  hexcode="#e74a3b"
                />
                <ColorCard
                  titulo="Secondary"
                  classColor="bg-secondary"
                  hexcode="#858796"
                />
                <ColorCard
                  titulo="Light"
                  classColor="bg-light"
                  hexcode="#f8f9fc"
                />
                <ColorCard
                  titulo="Dark"
                  classColor="bg-dark"
                  hexcode="#5a5c69"
                />
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              {/* <!-- Illustrations --> */}

              <GraphCard titulo="Illustrations">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "25rem" }}
                    src={PostingPhoto}
                    alt="..."
                  />
                </div>
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of{" "}
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">
                    unDraw
                  </a>
                  , a constantly updated collection of beautiful svg images that
                  you can use completely free and without attribution!
                </p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                  Browse Illustrations on unDraw &rarr;
                </a>
              </GraphCard>

              {/* <!-- Approach --> */}
              <GraphCard titulo="Development Approach">
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility
                  classNamees in order to reduce CSS bloat and poor page
                  performance. Custom CSS classNamees are used to create custom
                  components and custom utility classNamees.
                </p>
                <p className="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility
                  classNamees.
                </p>
              </GraphCard>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
