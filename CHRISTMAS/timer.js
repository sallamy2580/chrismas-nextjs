import timerStyle from '../styles/timer.module.css';
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';
function Timer(){

        var countDownDate = new Date("january 1, 2022 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Marry Christmas";
  }
}, 1000);
const xxx = Math.floor((new Date("january 1, 2022 15:37:25").getTime() - new Date().getTime() % (1000 * 60)) / 1000);
return(

    <>
     <ParallaxProvider>
            <Parallax className="custom-class" x={[10, -10]} tagOuter="figure">
    <p id="demo" className={timerStyle.time}></p>
    </Parallax>
    </ParallaxProvider>

    </>
)
}
export default Timer;