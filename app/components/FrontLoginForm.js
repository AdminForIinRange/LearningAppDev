import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  VStack,
  HStack,
  Checkbox,
  useToast,
} from "native-base";

const FrontLoginForm = ({
  setverified,
  verified,
  clickSignup,
  setclickSignup,
  clickLogin,
  setclickLogin,
  handleSubmit,
}) => {
  return (
    <>
      <Box display={clickLogin ? "flex" : "none"} w={"100%"}>
        <Text
          mt="30px"
          textAlign="center"
          fontSize="25px"
          fontWeight="600"
          color="#3A3A3A"
        >
          Login
        </Text>
        <Text fontSize="18px" color="gray.400" textAlign="center">
          Login and get started
        </Text>

        <VStack
        style={{gap:"5px"}}
         
          w="100%"
          maxW="500px"
          rounded="xl"
          textAlign="center"
          alignSelf="center"
        >
          <FormControl mt="25px" isRequired w={"100%"} h={"45px"}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter your Email Address"
              type="email"
              autoComplete="email"
              w={"100%"}
              h={"45px"}
            />
          </FormControl>

          <FormControl w={"100%"} h={"45px"} mt="25px" isRequired>
            <FormControl.Label w={"100%"}>Password</FormControl.Label>
            <Input
              h={"45px"}
              placeholder="Enter your password"
              type="password"
              w="100%"
              autoComplete="password"
            />
          </FormControl>

          <HStack mt="15px" justifyContent="space-between"></HStack>
        </VStack>
      </Box>

      <VStack
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
        mt={"25px"}
          
          onPress={() => setverified(true)}
          bg="#0161F0"
          borderRadius={30}
          h={50}
          w="100%"
          p={3}
          _text={{
            fontSize: [16, 14, 16],
            fontWeight: "400",
            color: "white",
          }}
        >
          Next
        </Button>
        <Button
          mt={"8px"}
          h="50px"
          borderRadius="30px"
          colorScheme="gray"
          w="100%"
          onPress={() => setclickLogin(false)}
        >
          Back
        </Button>
      </VStack>
    </>
  );
};

export default FrontLoginForm;
