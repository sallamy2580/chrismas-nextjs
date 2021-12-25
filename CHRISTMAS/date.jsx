import { Image } from '@chakra-ui/image';
import dateStyle from '../styles/date.module.css';
import Timer from "./timer";
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';
import {useWindowSize,} from '@react-hook/window-size';

function Date(){
    const [widthOFwindow, heightOFwindow] = useWindowSize({ fps: 60 });
    return(
        
        <div>
            <ParallaxProvider>
            <Parallax className="custom-class" y={[-5, 5]} tagOuter='figure'>
            <div className={dateStyle.section}>
                <div className={dateStyle.section_one}>
                    <center>
                    
                    <Image src="19.webp" className={dateStyle.santa} alt="img"/>
                    </center>
                    </div>
                <div className={dateStyle.section_one}><Timer /><h1 className={dateStyle.ready}>Ready for CHRISTMAS</h1></div>
            </div>
            </Parallax>
            </ParallaxProvider>
        </div>
    )
}
export default Date;
