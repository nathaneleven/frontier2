import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

const HeroHome = () => {
    return (
        <>
        <Box w="100%" align="center"  backgroundColor="#ff0037">
        <Flex p={["4","5","6","7","8"]} py="80px !important" maxW="1272px" textAlign="left" flexDirection={['column', 'column', 'column', 'row',"row"]} >

        <Flex w={["100%","100%","100%","50%","50%"]} flexDirection={["column"]}>
            <Heading pb="20px" fontWeight="bold" fontSize="45px" color="#fff" as="h1">
            Switch to Frontier® and<br/> get internet your way. 
            </Heading>
            <Text pb="20px" color="#fff" fontSize="20px" as="h3">
            Check to see which internet plan is available at your address.
            </Text>
            <Button w="inherit" h="50px" fontWeight="black" color="#141928" fontSize="18px" colorScheme="teal" backgroundColor="#96fff5" variant="solid">CALL NOW 1.833.730.0303</Button>
        </Flex>

        <Flex w={["100%","100%","100%","50%","50%"]} flexDirection={["column"]} fontWeight="normal">
        <Text color="#fff" pb="20px" fontSize="25px" as="h2">
        Connect all you want, what you want, when you want with:<br/>
        </Text>
        <Text color="#fff" fontSize="25px" as="h2">
        + No data caps or overage charges<br/>
        + Security software included for multiple devices<br/>
        + Fully optimized Wi-Fi router included<br/>
        + Available monthly Auto Pay savings
        </Text>
        </Flex>

        </Flex>
        </Box>
        </>
    )
}

export default HeroHome
