import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import LogoHeader from "../atoms/Logo";
import TelephoneHeader from '../atoms/TelephoneHeader'

// Instalar fonte Fr Guide

export default function Gslr() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" maxW="1272px" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Frontier Home Page"
              display="flex"
              alignItems="center"
            >
              <LogoHeader />
              <VisuallyHidden>Frontier</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button fontSize="20px" variant="ghost">Fiber Internet</Button>
              <Button fontSize="20px" variant="ghost">Frontier Internet</Button>
            </HStack>
            <Button fontSize="20px" variant="ghost" size="md">
                <TelephoneHeader/>    
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                Fiber Internet
                </Button>
                <Button w="full" variant="ghost">
                Frontier Internet
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}