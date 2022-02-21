import React from 'react'
import { Box, SimpleGrid, Heading, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

const FiberPlans = () => {
    return (
<>
<Box align="center" textColor="#fff" bgColor="#fff" p={{base:"10", md:"0 10 "}}>

  <SimpleGrid columns={{base:"1", md:"2"}} spacing={10} maxW="1250px">
    <Flex bgColor="#F3F4F4" rounded="xl" boxShadow="2xl" align="start" direction="column" >
      <Box p="10px" bgColor="#ff0037" roundedTop="xl" p="20px" w="100%"><Heading textAlign="center" textColor="#fff" as="h3" fontWeight="bold" fontSize="22px">$200 Visa Reward Card*
</Heading><Heading textAlign="center" textColor="#fff" as="h3" fontWeight="normal" fontSize="16px">Redemption requirements apply
</Heading></Box>

      <Box textColor="#040405" w="100%" p="20px" textAlign="start" >
      <Box textColor="#040405" w="150px" float="right" mb="-70px" align="end" rounded="xl" p="3" fontWeight="bold" backgroundColor="#96fff5"><Text textAlign="center" >3-YEAR PRICE<br/>
GUARANTEE</Text></Box>
            <Heading as="h2" fontWeight="bold" fontSize="21px">Frontier Fiber Gig Service</Heading>
      <Flex flexDirection="row" fontWeight="bold">
            <Text fontSize="38px" as="h2">$</Text>
            <Text mt="-25px" fontSize="82px" as="h2">74</Text>
            <Text fontSize="38px" as="h2">99</Text>
            <Text mt="50px" ml="-40px" fontSize="16px" as="h2">w/ Auto Pay</Text>
      </Flex>
      
      <Text pb="20px" fontSize="13px">per month for 36 mos. One-year agreement, early termination fee, and one-time charge apply. Max wired speed 940/880 Mbps. Wi-Fi, actual & average speeds vary.</Text>
      <Box style={{ textIndent: -12 }} textColor="#040405" fontSize="16px" ml="12px" textAlign="start" pb="20px" >
            <Text>+ Two-unit eero Pro 6 mesh Wi-Fi system for enhanced wireless connectivity throughout your home**</Text>
            <Text>+ Free activation, plus unlimited online time with no extra fees</Text>
            <Text>+ Free security software for up to 10 devices</Text>
            <Text>+ Free My Premium Tech Pro for 3 months</Text>
            <Text>+ Extreme bandwith to connect everyone in your home with everything they do online</Text>
      </Box>
      <Box align="center">
            <Button alignItems="center" fontWeight="black" fontSize="16px" colorScheme="red" bgColor="#ff0037" px="40px" size="lg" variant="solid" alignSelf="center" >CALL NOW 1.833.730.0303</Button>
      </Box>
      </Box>
      </Flex>

      <Flex bgColor="#F3F4F4" rounded="xl" boxShadow="2xl" align="start" direction="column" >
      <Box p="10px" bgColor="#ff0037" roundedTop="xl" p="20px" w="100%"><Heading textAlign="center" textColor="#fff" as="h3" fontWeight="bold" fontSize="22px">$50 Visa Reward Card*
</Heading><Heading textAlign="center" textColor="#fff" as="h3" fontWeight="normal" fontSize="16px">Redemption requirements apply
</Heading></Box>

      <Box textColor="#040405" w="100%" p="20px" textAlign="start" ><Heading as="h2" fontWeight="bold" fontSize="21px">Frontier Fiber Internet 500/500 Mbps</Heading>
      <Flex flexDirection="row" fontWeight="bold">
            <Text fontSize="38px" as="h2">$</Text>
            <Text mt="-25px" fontSize="82px" as="h2">49</Text>
            <Text fontSize="38px" as="h2">99</Text>
            <Text mt="50px" ml="-40px" fontSize="16px" as="h2">w/ Auto Pay</Text>
      </Flex>
      
      <Text pb="20px" fontSize="13px">per month for 12 mos. One-year agreement, early termination fee, and one-time charge apply. Max speeds are wired. Wi-Fi, actual & average speeds vary.</Text>
      <Box style={{ textIndent: -12 }} textColor="#040405" fontSize="16px" ml="12px" textAlign="start" pb="20px" >
            <Text>+ One-unit eero Pro 6 router with fast Wi-Fi 6 coverage for your home**</Text>
            <Text>+ Free activation, plus unlimited online time with no extra fees</Text>
            <Text>+ Free security software for up to 10 devices</Text>
            <Text>+ Free My Premium Tech Pro for 3 months</Text>
            <Text>+ Power for multiple users and smart-home devices to stream, game and share large files</Text>
      </Box>
      <Box align="center">
            <Button alignItems="center" fontWeight="black" fontSize="16px" colorScheme="red" bgColor="#ff0037" px="40px" size="lg" variant="solid" alignSelf="center" >CALL NOW 1.833.730.0303</Button>
      </Box>
      </Box>
      </Flex>

  </SimpleGrid>

</Box>
</>
    )}
export default FiberPlans