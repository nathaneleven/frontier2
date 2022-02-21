import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

const HeroFiber = () => {
    return (
        <>
        <Box w="100%" align="center"  backgroundColor="#ff0037">
        <Flex p={["4","5","6","7","8"]} py="80px !important" maxW="1272px" textAlign="left" flexDirection={['column', 'column', 'column', 'row',"row"]} >

        <Flex w={["100%","100%","100%","50%","50%"]} flexDirection={["column"]}>
            <Heading pb="20px" fontSize="45px" fontWeight="bold" color="#fff" as="h1">
            Frontier® Fiber Gig Service
            </Heading>
            <Flex flexDirection="row" fontWeight="bold">
                <Text pb="20px" color="#fff" fontSize="58px" as="h2">$</Text>
                <Text pb="20px" color="#fff" mt="-30px" fontSize="126px" as="h2">74</Text>
                <Text pb="20px" color="#fff" fontSize="58px" as="h2">99</Text>
                <Text pb="20px" color="#fff" mt="90px" ml="-60px" fontSize="20px" as="h2">w/ Auto Pay</Text>
            </Flex>
            <Text pb="20px" color="#fff" fontSize="12px">per month for 36 mos. One-year agreement, early termination fee, and one-time charge apply. Max wired speed 940/880 Mbps. Wi-Fi, actual & average speeds vary.</Text>
            <Button w="inherit" h="50px" fontWeight="black" color="#141928" fontSize="18px" colorScheme="teal" backgroundColor="#96fff5" variant="solid">CALL NOW 1.833.730.0303</Button>
        </Flex>
        <Flex w={["100%","100%","100%","50%","50%"]} flexDirection={["column"]} fontWeight="normal">
        <Box pb="20px">
            <Text color="#fff" fontSize="25px" as="h2">
            Sign up today and get a $200 Visa® Reward Card*
            </Text>
            <Text display="inline" color="#fff" fontSize="15px" as="h2">
            (redemption requirements apply),
            </Text>
            <Text display="inline" color="#fff" pb="20px" fontSize="25px" as="h2"> plus:</Text>
        </Box>
        
        <Text color="#fff" fontSize="25px" as="h2">
        + eero Pro 6 mesh Wi-Fi system**<br/>
        + Free activation​<br/>
        + Free Multi-Device Security<br/>
        + 3-year price guarantee
        </Text>
        </Flex>

        </Flex>
        </Box>
        </>
    )
}

export default HeroFiber
