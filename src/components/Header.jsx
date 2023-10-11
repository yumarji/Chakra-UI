import React from "react";
import { Box, Button, Heading, Flex, Stack } from "@chakra-ui/react";
import imagen from "../assets/images/banner.jpeg";

export default function Header() {
  return (
    <Box
      height="40vh"
      bg="grey"
      bgImage={imagen}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100%"}
        bg="rgb(0 0 0 /40%)"
        p={["0 5%", null, "0 20%"]}
      >
        <Heading variant="banner">DOMINA EL TERRENO</Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" size="lg">
            VER DETALLES
          </Button>
          <Button variant="outline" size="lg">
            VER VIDEOS
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
// <Image src="./src/components/bicycle.JPG"></Image>
