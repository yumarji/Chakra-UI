import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
};

const Button = {
  variants: {
    outline: {
      textTransform: "uppercase",
      fontWeight: "light",
      borderRadius: "0",
      color: "white",
      letterSpacing: "1px",
      _hover: {
        color: "black",
      },
    },
  },
};

const Heading = {
  variants: {
    banner: {
      color: "white",
      textTransform: "uppercase",
      textAlign: "center",
      fontWeight: "light",
      letterSpacing: "5px",
    },
  },
};

export const theme = extendTheme({ fonts, components: { Button, Heading } });
