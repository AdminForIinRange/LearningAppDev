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
  clickSignup,
  setclickSignup,
  clickLogin,
  setclickLogin,
  handleSubmit,
}) => {
  return (
    <>
      <Box display={clickLogin ? "flex" : "none"}>
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
        
        <Box
          mt="45px"
          w="90%"
          maxW="500px"
          rounded="xl"
          textAlign="center"
          alignSelf="center"
        >
          <FormControl mt="25px" isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter your Email Address"
              type="email"
              w="100%"
              autoComplete="email"
            />
          </FormControl>

          <FormControl mt="25px" isRequired>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder="Enter your password"
              type="password"
              w="100%"
              autoComplete="password"
            />
          </FormControl>

          <HStack mt="15px" justifyContent="space-between">
            <Checkbox>Remember me</Checkbox>
            <Button variant="link" size="sm">
              Forgot password?
            </Button>
          </HStack>

          <Button
            h="50px"
            borderRadius="30px"
            bgColor="#0161F0"
            color="white"
            mt="30px"
            w="100%"
            onPress={handleSubmit}
          >
            Login
          </Button>

          <Button
            h="50px"
            borderRadius="30px"
            colorScheme="gray"
            mt="10px"
            w="100%"
            onPress={() => setclickLogin(false)}
          >
            Back
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FrontLoginForm;
