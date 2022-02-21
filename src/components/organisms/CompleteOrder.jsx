import React from 'react'
import { Flex, Box, Heading, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const About = () => {
    return (
        <>
        <Box w="100%" align="center"  backgroundColor="#fff">
        <Flex p={["4","5","6","7","8"]} maxW="1272px" textAlign="left" flexDirection={['column', 'column', 'row', 'row',"row"]} >

        <Flex m="auto" w={["100%","100%","50%","50%","50%"]} flexDirection={["column"]}>
            <Heading pb="20px" fontSize="30px" color="#141928" as="h2">
            Complete your order in minutes and get connected. 
            </Heading>
            <Text color="#141928" fontSize="16px">
            Choose internet from Frontier today. It only takes a few minutes to get started, so place your order now.
            </Text>
        </Flex>

        <Box align="center" w={["100%","100%","50%","50%","50%"]} >
            <Image maxW="442px" src='/image-home.png' />
        </Box>
        </Flex>
        </Box>
        </>
    )}

export default About