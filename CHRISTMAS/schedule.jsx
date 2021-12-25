import { Tabs, TabList, TabPanels, Tab, TabPanel,Center,Image } from '@chakra-ui/react';
import { BiTime } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import scheduleStyle from '../styles/schedule.module.css';
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';
import '../CHRISTMAS/vanilla-tilt.min'

function Schedule(){
return(
<div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js" ></script>
<ParallaxProvider>
  <Parallax className="custom-class" y={[10, -10]} tagOuter="figure">
    <center>
        <h1 className={scheduleStyle.head}>Event Schedule</h1>
    </center>

    <Tabs className={scheduleStyle.tabs} colorScheme='red'>
        <Center>
        <TabList>
            <Tab>December 25</Tab>
            <Tab>December 26</Tab>
            <Tab>December 27</Tab>
        </TabList>
        </Center>

        <TabPanels>
            <TabPanel>
                <center>
                <div class={scheduleStyle.twintyfive}>
                    <div className={scheduleStyle.twintyfive_one}><div class="your-element" data-tilt data-tilt-scale="1.1"><Image src="c21a648f3f79f0714c65c6f8ce07d36b.webp" alt="img"/></div></div>
                    <div className={scheduleStyle.twintyfive_two}><h1 className={scheduleStyle.twintyfive_title}>Cookies with santa</h1><p className={scheduleStyle.twintyfive_discribtion}>Celebrtion with santa and cookies festival</p><div className={scheduleStyle.time}><BiTime/><p className={scheduleStyle.time_txt}>15:00 until 23:00</p></div><div className={scheduleStyle.location_box}><GoLocation  className={scheduleStyle.location}/><p className={scheduleStyle.location_txt}>Location: Los Angeles,Santa Monica</p></div></div>
                    <div className={scheduleStyle.twintyfive_tree}><button className={scheduleStyle.seemore}>See more</button></div>
                </div>
                </center>
            </TabPanel>
            <TabPanel>
            <center>
                <div class={scheduleStyle.twintyfive}>
                    <div className={scheduleStyle.twintyfive_one}><div class="your-element" data-tilt data-tilt-scale="1.1"><Image src="13954900.webp" alt="img"/></div></div>
                    <div className={scheduleStyle.twintyfive_two}><h1 className={scheduleStyle.twintyfive_title}>Christmas tree and santa</h1><p className={scheduleStyle.twintyfive_discribtion}>Gifs with santa and new Year ceremony</p><div className={scheduleStyle.time}><BiTime/><p className={scheduleStyle.time_txt}>16:30 until 21:00</p></div><div className={scheduleStyle.location_box}><GoLocation  className={scheduleStyle.location}/><p className={scheduleStyle.location_txt}>Location: Los Angeles,Santa Monica</p></div></div>
                    <div className={scheduleStyle.twintyfive_tree}><button className={scheduleStyle.seemore}>See more</button></div>
                </div>
                </center>
            </TabPanel>
            <TabPanel>
            <center>
                <div class={scheduleStyle.twintyfive}>
                    <div className={scheduleStyle.twintyfive_one}><div class="your-element" data-tilt data-tilt-scale="1.1"><Image src="333111.webp" alt="img"/></div></div>
                    <div className={scheduleStyle.twintyfive_two}><h1 className={scheduleStyle.twintyfive_title}>Live Concert</h1><p className={scheduleStyle.twintyfive_discribtion}>Music festival with theweeknd</p><div className={scheduleStyle.time}><BiTime/><p className={scheduleStyle.time_txt}>18:00 until 01:00</p></div><div className={scheduleStyle.location_box}><GoLocation  className={scheduleStyle.location}/><p className={scheduleStyle.location_txt}>Location: Los Angeles,Santa Monica</p></div></div>
                    <div className={scheduleStyle.twintyfive_tree}><button className={scheduleStyle.seemore}>See more</button></div>
                </div>
                </center>
            </TabPanel>
        </TabPanels>
    </Tabs>
    </Parallax>
    </ParallaxProvider>
</div>
)
}
export default Schedule;