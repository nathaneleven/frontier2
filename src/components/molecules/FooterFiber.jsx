import React from 'react'
import { Box, Flex, Link, Spacer, Text, VStack, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const  FooterFiber = () => {
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
                    *Visa Reward Card Offers: Not redeemable for cash. Up to $200 pro-rated early termination fee applies. Must maintain service for 90 days after install and pay first bill in full. Must redeem within 75 days of notification. Card delivered 30 days after redemption and expires 6 months after issuance. Visit RewardCenter.Frontier.com for Cardholder Agreement. The Frontier Visa Reward Card is issued by The Bancorp Bank pursuant to a license from Visa U.S.A. Inc. and can be used everywhere Visa debit cards are accepted. No cash access. The Bancorp Bank; Member FDIC. The Bancorp Bank does not endorse or sponsor and is not affiliated in any way with any product or service offered by Frontier Communications.<br/><br/>

                    **eero: Internet connection speeds depend on the current internet speed you have with Frontier. Maximum wireless signal rates are derived from IEEE standard 802.11 specification. Experienced speeds may vary based on network configuration. Coverage estimates are based on normal use conditions. Actual range and performance can vary, including due to factors such as interference, device usage, building materials, and obstructions. Some eero features require linking your Amazon account. See https://eero.com/legal for more details regarding terms for eero products, software and services. ©2022 Amazon.com, Inc. or its affiliates. eero and all related marks are trademarks of Amazon.com, Inc. or its affiliates. Amazon.com c/o eero LLC, 660 3rd St., San Francisco, CA.<br/><br/>

                    Exclusive offer for qualified addresses. For new residential internet customers only. Speed capable range as fast as 450/450 Mbps to 500/500 Mbps for 500 Mbps Internet. Speed capable range of 846 to 940 Mbps download and 792 to 880 Mbps upload for Gig Service Internet. Special 2 Gig equipment required. Speed capable 2Gbps symmetrical. Performance details: frontier.com/internetdisclosures. Requires Auto Pay or $5/mo. fee applies. Beginning January 2022, paper bill extra $2.99/mo., select customers excluded. A $10 fee applies when Internet is disconnected. Router return required at disconnection or up to $150 per device. Multi-Device Security covers up to 10 devices. Other applicable charges and additional services are extra. Subject to availability. Cannot be combined with other offers. Other restrictions, Frontier policies and service terms apply.
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
export default FooterFiber