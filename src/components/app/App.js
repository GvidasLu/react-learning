import Tasks from "../tasks/Tasks";
// kaip prideti img folderio importa ???

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <img src="./components/img/rocket-logo.svg"></img>
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link red" href="#">
                Red
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blue
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#">
                Green
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">
                Yellow
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pink
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Purple
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 class="display-4 fw-normal text-white">I love Color</h1>
              <p class="fs-5 text-white">
                Color really isnt that difficult to get right, if you know where to start.
                Learn by doing and you'll be a master in no time.
              </p>

              <a class="btn btn-md rounded-pill bg-secondary text-white" href="#">Over to you</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center ">
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm not-rounded">
              <div class="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="p-5 "
                  viewBox="0 0 512 512"
                >
                  <title>Browsers</title>
                  <rect
                    x="48"
                    y="64"
                    width="416"
                    height="384"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2z" />
                </svg>
                <p class="fw-bold">Blue</p>
                <p class="fs-6">
                  Blue is the color of the skv and sea. It is often associated
                  with depth and stability. It symbolizes trust, loyalty,
                  wisdom, confidence,
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm not-rounded">
              <div class="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="p-5 "
                  viewBox="0 0 512 512"
                >
                  <title>Browsers</title>
                  <rect
                    x="48"
                    y="64"
                    width="416"
                    height="384"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2z" />
                </svg>
                <p class="fw-bold">Green</p>
                <p>
                  Green is the color of nature. It symbolizes growth, harmony,
                  freshness, and fertility. Green has strong emotional
                  correspondence with safety
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm not-rounded">
              <div class="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="p-5 "
                  viewBox="0 0 512 512"
                >
                  <title>Browsers</title>
                  <rect
                    x="48"
                    y="64"
                    width="416"
                    height="384"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2z" />
                </svg>
                <p class="fw-bold">Red</p>
                <p>
                  Red is the color of fire and blood, so it is associated with
                  energy, war, danger, strength, power, determination as well as
                  passion desire, and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
