
import footerStyle from '../styles/footer.module.css';
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { VStack,HStack,Center,Image } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';

function Footer(){
return(
<div className={footerStyle.footer}>
    <div className={footerStyle.footer_one}>
        <Image src="5a1bbf36379195.1868186215117678622276.webp" className={footerStyle.svg} alt="img"/>

        <center>
            <p className={footerStyle.txt}>CHRISTMAS Event</p>
            <Center>
                <div className={footerStyle.location}>
                    <GoLocation className={footerStyle.location_ico} />
                    <p className={footerStyle.location_txt}>Location: Los Angeles,Santa Monica</p>
                </div>
            </Center>
            <p className={footerStyle.follow}>Follow us</p>
        </center>
        <Center>
            <HStack padding='1rem 0.5rem' spacing='1rem'>
                <div onClick={()=> window.open("https://github.com/sallamy2580", "_blank")}><BsGithub className={footerStyle.icon} /></div>
                <div onClick={()=> window.open("sallamy2580@gmail.com", "_blank")}><AiOutlineMail className={footerStyle.icon} /></div>
            </HStack>
        </Center>

    </div>
    <div className={footerStyle.footer_two}>

    <ParallaxProvider>
  <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
        <Image src="tree1.webp" className={footerStyle.tree} alt="img"/>
        </Parallax>
        </ParallaxProvider>
        <p style={{color:'white',fontSize:'0.7'}}>Created By Global Group</p>
    </div>
</div>
)
}
export default Footer;