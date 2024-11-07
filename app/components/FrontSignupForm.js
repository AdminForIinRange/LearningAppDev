import React, { useEffect, useState } from "react";
import { Box, HStack, Input, Select, Text, VStack, Button } from "native-base";
const FrontSignupForm = ({
  clickSignup,
  setclickSignup,
  clickLogin,
  setclickLogin,
  handleSubmit,
  setPhoneNumberStage,
  phoneNumberStage,
  setOPTstage,
  OPTstage,
  setverified,
  verified,
}) => {
  // useEffect(() => {
  //     if (verified) {
  //       navigation.navigate("Dashboard");
  //     }
  //   }, [verified, navigation]);
  return (
    <>
      {" "}
      <Box display={clickSignup ? "flex" : "none"}>
        <Text
          mt={"30px"}
          textAlign={"left"}
          fontSize={"25px"}
          fontWeight={"600"}
          textColor={"#3A3A3A"}
        >
          {phoneNumberStage
            ? "Enter your phone number "
            : OPTstage
            ? "Verify your phone number "
            : "Enter your information"}
        </Text>
        <Text fontSize={"18px"} color={"gray.400"}>
          You will receive a code to confirm your identity
        </Text>

        <Box display={phoneNumberStage ? "flex" : "none"}>
          <VStack rounded={"xl"} align={"center"} mt={"25px"}>
            <Box justify={"center"} w={"100%"} h={"100%"} align={"center"}>
              <Select
                w={"100%"}
                selectedValue="Australia" // Default selection
                fontSize={"16px"}
                accessibilityLabel="Select country"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <Text color="white">✔</Text>,
                }}
              >
                <Select.Item label="🇦🇺 +61" value="Australia" />
                <Select.Item label="🇺🇸 +1" value="United States" />
                <Select.Item label="🇬🇧 +44" value="United Kingdom" />
                <Select.Item label="🇨🇦 +1" value="Canada" />
                <Select.Item label="🇮🇳 +91" value="India" />
              </Select>
            </Box>
            <Box
              mt={"-20px"}
              justify={"center"}
              w={"100%"}
              h={"45px"}
              align={"center"}
            >
              <Input
                placeholder="123 456 789"
                id="phone"
                type="tel"
                w={"100%"}
                h={"100%"}
                autoCompleteType="tel"
                required
              />
            </Box>
          </VStack>
        </Box>

        <Box display={OPTstage ? "block" : "none"}>
          {" "}
          <HStack
            w={"100%"}
            rounded={"xl"}
            align={"center"}
            mt={"25px"}
            gap={"5px"}
          >
            <HStack
              justify={"center"}
              w={"100%"}
              h={"100%"}
              align={"center"}
              style={{ gap: "1.5px" }}
            >
              <Box
                borderRadius={"15px"}
                w={"60px"}
                h={"60px"}
                bg={"white"}
                borderColor={"gray.200"}
                borderWidth={2}
              >
                <Input
                  fontWeight={"500"}
                  fontSize={"24px"}
                  textAlign={"center"}
                  placeholder="1"
                  id="phone"
                  type="tel"
                  w={"100%"}
                  h={"100%"}
                  autoCompleteType="tel"
                  required
                  borderColor="transparent"
                  borderWidth={0}
                  _focus={{
                    borderColor: "transparent",
                    borderWidth: 0,
                  }}
                />
              </Box>{" "}
              <Box
                borderRadius={"15px"}
                w={"60px"}
                h={"60px"}
                bg={"white"}
                borderColor={"gray.200"}
                borderWidth={2}
              >
                <Input
                  fontWeight={"500"}
                  fontSize={"24px"}
                  textAlign={"center"}
                  placeholder="1"
                  id="phone"
                  type="tel"
                  w={"100%"}
                  h={"100%"}
                  autoCompleteType="tel"
                  required
                  borderColor="transparent"
                  borderWidth={0}
                  _focus={{
                    borderColor: "transparent",
                    borderWidth: 0,
                  }}
                />
              </Box>{" "}
              <Box
                borderRadius={"15px"}
                w={"60px"}
                h={"60px"}
                bg={"white"}
                borderColor={"gray.200"}
                borderWidth={2}
              >
                <Input
                  fontWeight={"500"}
                  fontSize={"24px"}
                  textAlign={"center"}
                  placeholder="1"
                  id="phone"
                  type="tel"
                  w={"100%"}
                  h={"100%"}
                  autoCompleteType="tel"
                  required
                  borderColor="transparent"
                  borderWidth={0}
                  _focus={{
                    borderColor: "transparent",
                    borderWidth: 0,
                  }}
                />
              </Box>{" "}
              <Box
                borderRadius={"15px"}
                w={"60px"}
                h={"60px"}
                bg={"white"}
                borderColor={"gray.200"}
                borderWidth={2}
              >
                <Input
                  fontWeight={"500"}
                  fontSize={"24px"}
                  textAlign={"center"}
                  placeholder="1"
                  id="phone"
                  type="tel"
                  w={"100%"}
                  h={"100%"}
                  autoCompleteType="tel"
                  required
                  borderColor="transparent"
                  borderWidth={0}
                  _focus={{
                    borderColor: "transparent",
                    borderWidth: 0,
                  }}
                />
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <VStack
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          mt={"50px"}
          onPress={() => {
            if (OPTstage) {
              setverified(true);
            } else {
              setOPTstage(true);
              setPhoneNumberStage(false);
            }
          }}
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
          onPress={() => {
            if (OPTstage) {
              setPhoneNumberStage(true);
              setOPTstage(false);
            } else {
              setclickSignup(false);
              setPhoneNumberStage(true);
              setOPTstage(false);
            }
          }}
        >
          Back
        </Button>
      </VStack>
    </>
  );
};

export default FrontSignupForm;
