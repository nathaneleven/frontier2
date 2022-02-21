import React from 'react'
import { Box, Flex, Link, Spacer, Text, VStack, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const  Footer = () => {
    return (
    <>
    
        <Box border="1" fontWeight="bold" bgColor="#f3f4f4" color="#141928" align="center">
        <Box p="8" bgColor="#ff0037" color="#fff" align="center"  >
                <Flex maxW="1272px" align="center" direction={{base: "column", lg: "row"}} >
                    <Box pb={{base:5, md:0}}>
                        <Text textAlign={{base: "center", lg: "start"}} fontSize="37px" >
                        Call Now To Speak With One Of Our Experts
                        </Text>
                    </Box>
                    <Spacer/>
                    <Flex align="center">
                        <Link href="tel:+18337300303" fontSize="37px" >
                        1.833.730.0303
                        </Link>
                    </Flex>
                </Flex>
            </Box>
            <Flex p={{base:"8", xl:"50px 0"}} maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
                <Box p="3">
                    <Text align={{base:"center", md:"start"}} fontSize="12px">
                    Multi-Device Security covers up to 10 devices. Must order new Frontier Internet service to receive $6 off monthly charge.<br/><br/>
                    For new residential Internet customers only. Max speeds are wired. Wi-Fi, actual & average speeds vary. Performance details: frontier.com/internetdisclosures. Subject to availability. Cannot be combined with other offers. Other restrictions, Frontier policies and service terms apply.
                    </Text>
                </Box>
            </Flex>
            
        <Box p="3" bgColor="#000" color="white" align="center"  >
          <HStack alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline" }}
              w="100%"
            >
              <Button fontSize="20px" variant="ghost">Privacy Policy</Button>
              <Button fontSize="20px" variant="ghost">Terms and Conditions</Button>
              <Button fontSize="20px" variant="ghost">Do Not Sell My Info</Button>
              <Button fontSize="20px" variant="ghost">Eleven Rush</Button>
            </HStack>
            <Box  w="100%" display={{ base: "inline", md: "none" }}>
              <VStack>
                <Button variant="ghost">
                Privacy Policy
                </Button>
                <Button variant="ghost">
                Terms and Conditions
                </Button>
                <Button variant="ghost">
                Do Not Sell My Info
                </Button>
                <Button variant="ghost">
                Eleven Rush
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Box>
        </Box>
    </>
)}
export default Footer