import Navbar from "../CHRISTMAS/navbar"
import Event from "../CHRISTMAS/event"
import Date from "../CHRISTMAS/date"
import Schedule from "../CHRISTMAS/schedule"
import Footer from "../CHRISTMAS/footer"

import Snowfall from 'react-snowfall';      
function App(){
  return (
    <div style={{}}>
      <Snowfall snowflakeCount='250' speed={[0,5]} color="#eff2f9" style={{zIndex:'9999'}}/>
      <Navbar />
      <center>
      <Event />
      <Date />
      </center>
      <Schedule />
      <Footer />
    </div>
  )
}
export default App
