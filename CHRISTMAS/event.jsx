import { Image } from '@chakra-ui/image';
import { GoLocation } from 'react-icons/go';
import { MdDateRange } from 'react-icons/md';
import eventStyle from '../styles/event.module.css';
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';
//import '../CHRISTMAS/vanilla-tilt'


function Event(){
    
    return(
        <div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js" ></script>
            <ParallaxProvider>
            <Parallax className="custom-class" y={[10, -10]} tagOuter="figure">
            
            <div className={eventStyle.event}>
                <div className={eventStyle.event_box1}>
                    <center>
                    <h1 className={eventStyle.event_box1_title}>About Our Event</h1>
                    </center>
                    <p className={eventStyle.event_box1_discription}>Learn more abou where and when this years</p>
                    <p className={eventStyle.event_box1_discription}>CHRISTMAS Event will take place.</p><br />
                    <div className={eventStyle.location_box}><GoLocation  className={eventStyle.location}/><p className={eventStyle.location_txt}>Location: Los Angeles,Santa Monica</p></div>
                    <div className={eventStyle.location_box}><MdDateRange className={eventStyle.date}/><p className={eventStyle.data_txt}>Data: December 25-27</p></div>
                    <center>
                    <div class="your-element" data-tilt>
                        <button className={eventStyle.contactus} >Contact us</button></div>
                    </center>
                    </div>
                <div className={eventStyle.event_box2}>
                
                    <Image src="21065a29a62f2be15debd3f4acfc08e2.webp" alt="img"/>
                </div>
            </div>
            </Parallax>
            </ParallaxProvider>
        </div>
    )
}
export default Event;