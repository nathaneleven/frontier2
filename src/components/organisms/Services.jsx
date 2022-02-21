import React from 'react'
import { Box, SimpleGrid, Heading, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

const Services = () => {
    return (
<>
<Box align="center" textColor="#fff" bgColor="#fff" p={{base:"10", md:"0 10 "}}>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex p="10" rounded="xl" boxShadow="2xl" bgColor="#141928" align="start" direction="column" >
      <Heading pb="10px" textAlign="start" textColor="#96fff5" as="h3" fontWeight="bold" fontSize="19px">Frontier Fiber Internet</Heading>
      <Text align="start" pb="20px" fontSize="18px">Advanced fiber-optic network to the home<br/>
Fast download and upload speeds</Text>
            <Button fontWeight="black" fontSize="16px" colorScheme="red" bgColor="#ff0037" px="40px" size="lg" variant="solid" alignSelf="center" >LEARN MORE</Button>
      </Flex>

      <Flex p="10" rounded="xl" boxShadow="2xl" bgColor="#141928" align="start" direction="column" >
      <Heading pb="10px" textAlign="start" textColor="#96fff5" as="h3" fontWeight="bold" fontSize="19px">Frontier Internet</Heading>
      <Text align="start" pb="20px" fontSize="18px">Stay connected
Browse, share and more<br/>
Fast download and upload speeds</Text>
            <Button fontWeight="black" fontSize="16px" colorScheme="red" bgColor="#ff0037" px="40px" size="lg" variant="solid" alignSelf="center" >LEARN MORE</Button>
      </Flex>

      <Flex p="10" rounded="xl" boxShadow="2xl" bgColor="#141928" align="start" direction="column" >
      <Heading pb="10px" textAlign="start" textColor="#96fff5" as="h3" fontWeight="bold" fontSize="19px">Home Phone Bundles</Heading>
      <Text align="start" pb="20px" fontSize="18px">Add calling plans with helpful features
Stay more in touch<br/>
Fast download and upload speeds</Text>
            <Button fontWeight="black" fontSize="16px" colorScheme="red" bgColor="#ff0037" px="40px" size="lg" variant="solid" alignSelf="center" >CALL NOW</Button>
      </Flex>
  </SimpleGrid> 

</Box>
</>
    )}
export default Services