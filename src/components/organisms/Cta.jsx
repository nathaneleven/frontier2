import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const Cta = () => {
    return (
<>
<Box p="8" backgroundColor="#141928" color="white" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
            <Text fontWeight="bold" fontSize="28px" >
            Find Frontier Deals In Your Area:
            </Text>
            </Box>
            <Spacer/>
            <Flex align="center">
                <Input w="80%" backgroundColor="#fff" focusBorderColor='#ff0037' textColor="#141928" colorScheme="red" placeholder="ZIP Code" size="lg" mr="3" />
                <Button fontWeight="black" fontSize="16px" colorScheme="red" bgColor="#ff0037" px="40px" size="lg" variant="solid" >CHECK AVAILABILITY</Button>
            </Flex>
        </Flex>
</Box>
</>
    )}


export default Cta