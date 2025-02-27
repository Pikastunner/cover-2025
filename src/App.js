import logo from './assets/logo.png';

import './App.css'

const buildings = [
  {
    building: "AGSM",
    num: 9
  }, 
  {
    building: "Ainsworth Building",
    num: 16
  },           {
    building: "Antia B Lawrence Centre",
    num: 44
  },           {
    building: "Biological Science",
    num: 6
  },           {
    building: "Biological Science (West)",
    num: 8
  },           {
    building: "Blockhouse",
    num: 42
  },           {
    building: "Business School",
    num: 18
  },           {
    building: "Civil Engineering Building",
    num: 8
  },           {
    building: "Colombo Building",
    num: 5
  },           {
    building: "Computer Science & Eng (K17)",
    num: 7
  },
]

function App() {
  return (
    <div className='body'>
      <div className='header'>
        <div className='logo-area'>
          <img className='logo' src={logo} />
          <p>Freerooms</p>
        </div>
        <div className='header-buttons'>
          {
            ["🔍", "▦", "📖", "🌙"].map((icon) => {
              return (
                <div className='header-button'>
                  {icon}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='line'></div>
      <div className='search-area'>
        <div className='button'>
          <p>🔦</p>
          <p style={{paddingLeft: "10px"}}>Filters</p>
        </div>
        <div className='search-bar'>
          <p>🔍  Search for a building...</p>
        </div>
        <div className='button'>
          <p>📊</p>
          <p style={{paddingLeft: "10px"}}>Sort</p>
        </div>
      </div>
      <div className='grid-container'>
        {
          buildings.map((building) => {
            return (
              <div className='grid-item'>
                <div className='availability-area'>
                  <div className='availbility'>🟢 {building.num} rooms available</div>
                </div>
                <div className='building-name-area'>
                  <div className='building-name'>{building.building}</div>
                  </div>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
