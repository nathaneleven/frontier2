import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const  AboutFiber = () => {
    return (
    <>
    
        <Box border="1" fontWeight="bold" bgColor="#f3f4f4" color="#141928" align="center">
        <Box p="8" bgColor="rgb(255, 0, 55)" color="#fff" align="center"  >
                <Box maxW="1272px" align="center">
                        <Text textAlign="center" fontSize="30px" >
                        Ask about our amazingly fast Fiber 2 Gig internet today for even more speed.
                        </Text>
                </Box>
            </Box>
            <Box backgroundColor="#141928" color="#fff" align="center">
            <Flex textAlign={{base:"center", md:"start"}} align={{base:"center", md:"start"}} p={{base:"8", xl:"50px 0"}} maxW="1272px" direction={{base: "column-reverse", md: "row"}} >
                <Box p="3">
                  <Heading as="h3" fontSize="30px" fontWeight="bold" pb="20px">Make the most of every tablet, gaming system, and smart device in your home.</Heading>
                    <Text fontSize="18px">
                    Frontier Fiber internet is built on a state-of-the-art fiber-optic network that delivers fast internet to enhance and empower your digital life. Where available, max wired download speeds can range as fast as 2,000 Mbps for uncompromised performance. Plus, Frontier Fiber internet plans feature both fast upload and download speeds to stream, game and video chat for an immersive online experience.
                    </Text>
                </Box>
                <Box p="3">
                  <Image maxW="325px" src="/game-controller-frontier.png"/>
                </Box>
            </Flex>
            </Box>
        </Box>
    </>
)}
export default AboutFiber