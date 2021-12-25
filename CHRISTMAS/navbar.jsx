import navbarStyle from '../styles/navbar.module.css';
import { Image } from "@chakra-ui/image";
import {useWindowSize,} from '@react-hook/window-size';
import {
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
ChakraProvider,
Button
} from '@chakra-ui/react';
import { useDisclosure,VStack } from "@chakra-ui/react";
import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";

function Navbar(){
const [widthOFwindow, heightOFwindow] = useWindowSize({ fps: 60 });
const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = React.useRef()
return(
<div>

  <div className={navbarStyle.navbar}>
    { widthOFwindow > 700 &&
    <>
      <a href="#">Home</a>
      <a href="#">Sign up</a>
      <a href="#">Contact</a>
    </>
    }
    { widthOFwindow < 699 && <>
      <ChakraProvider >
        <button ref={btnRef}  onClick={onOpen}>
          <HiMenuAlt1 className={navbarStyle.burger}/>
        </button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}  width="40%" colorScheme='red'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><Image src="5a1bcbb5bfe725.539635021511771061786.webp" className={navbarStyle.cart} alt="img"/></DrawerHeader>

            <DrawerBody>
            <center>
              <VStack>
              <a href="#" className={navbarStyle.burger_link}>Home</a>
      <a href="#" className={navbarStyle.burger_link}>Sign up</a>
      <a href="#" className={navbarStyle.burger_link}>Contact</a>
              </VStack>
            </center>
            </DrawerBody>

            <DrawerFooter>
<p style={{color:'white',fontSize:'0.7rem'}}>created by Global Group</p>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
    }
    <Image src="sep.webp" className={navbarStyle.jing} alt="img"/>
  </div>
  <ParallaxProvider>
  <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
  <Image src="529889.webp" className={navbarStyle.header} alt="img"/>
  <Marquee className={navbarStyle.marquee} gradientColor='0, 2, 92'>
  Learn more abou where and when this years CHRISTMAS Event will take place(This website Created By Global Group)
</Marquee>
  </Parallax>
  </ParallaxProvider>

</div>
)
}
export default Navbar