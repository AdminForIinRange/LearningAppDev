import React from "react";
import { Box, Button, Text, Link } from "native-base";

const BottomWellcome = ({
  clickSignup,
  setclickSignup,
  clickLogin,
  setclickLogin,
}) => {
  const buttons = [
    {
      name: "Sign up",
      bgcolor: "gray.200",
      textColor: "#3A3A3A",
      onClick: () => {
        setclickSignup(true); // Set Sign Up to true
        setclickLogin(false); // Set Login to false
      },
    },
    {
      name: "Login",
      bgcolor: "#0161F0",
      textColor: "white",
      onClick: () => {
        setclickLogin(true); // Set Login to true
        setclickSignup(false); // Set Sign Up to false
      },
    },
  ];

  return (
    <Box
      textAlign="center"
      display={clickSignup || clickLogin ? "none" : "flex"}
    >
      <Text
        fontSize="25px"
        fontWeight="600"
        color="#3A3A3A"
        textAlign={"center"}
      >
        Welcome to Hova!
      </Text>
      <Text fontSize="18px" color="gray.400" textAlign={"center"}>
        Access made easy
      </Text>

      <Box mt={5} />
      {buttons.map(({ name, onClick, bgcolor, textColor }) => {
        return (
          <Button
            key={name}
            mt={3}
            onPress={onClick}
            bg={bgcolor}
            borderRadius={30}
            h={50}
            w="100%"
            p={3}
            _text={{
              fontSize: [16, 14, 16],
              fontWeight: "400",
              color: textColor,
            }}
          >
            {name}
          </Button>
        );
      })}

      <Box mt={5} w={"100%"} textAlign={"center"} />
      <Text
        as={"a"}
        textAlign={"center"}
        fontSize="17px"
        fontWeight="500"
        color="gray.400"
        isExternal
        href="https://chakra-ui.com"
      >
        Terms of Use
      </Text>
    </Box>
  );
};

export default BottomWellcome;
