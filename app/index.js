// src/screens/Home.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  Checkbox,
  Divider,
  useToast,
} from "native-base";
import BottomWellcome from "./components/BottomWellcome";
import FrontLoginForm from "./components/FrontLoginForm";
import FrontSignupForm from "./components/FrontSignupForm";
const Home = () => {
  const [show, setShow] = useState(false);
  const [clickLogin, setclickLogin] = useState(false);
  const [clickSignup, setclickSignup] = useState(false);
  const [phoneNumberStage, setPhoneNumberStage] = useState(true);
  const [OPTstage, setOPTstage] = useState(false);
  const [verified, setverified] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (verified) {
  //     navigation.navigate("Dashboard");
  //   }
  // }, [verified, navigation]);

  const toast = useToast();
  const handleSubmit = () => {
    console.log("hello");
  };

  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);
  return (

    <>
    

    <Box display={verified ? "none" : "flex"} flex={1} bg="#0161F0" style={{ transition: "all 0.8s ease" }}>
      <VStack
        justifyContent="center"
        flex={1}
       
      >
        <VStack  display={clickSignup || clickLogin ? "none" : "flex"}
          justifyContent="center"
          // position={show ? "relative" : "absolute"}
          position={"relative"}
          top={show ? (clickSignup || clickLogin ? 100 : 100) : 0}
          zIndex={1}
          alignItems="center"
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 70,
              fontWeight: "bold",
              letterSpacing: -5,
              color: "white",
            }}
            className="animate__animated animate__zoomIn"
          >
            Hova
          </Text>
        </VStack>

        <VStack
          flex={1}
          style={{ transition: "all 0.8s ease" }}
          display={show ? "flex" : "none"}
          transform={show ? "translateY(0)" : ""}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box
            borderRadius={clickSignup || clickLogin ? 0 : "40px"}
            borderBottomRadius={"0"}
            h={clickSignup || clickLogin ? "100%" : 400}
            w="100%"
            bg="white"
            p={30}
            style={{ transition: "all 0.8s ease" }}
          >
            <VStack
              justifyContent={clickSignup ? "flex-start" : "center"}
              alignItems="center"
              gap={0}
            >
              {clickLogin && (
                <FrontLoginForm
                  setclickSignup={setclickSignup}
                  setclickLogin={setclickLogin}
                  clickSignup={clickSignup}
                  clickLogin={clickLogin}
                  handleSubmit={handleSubmit}
                />
              )}
              {clickSignup && (
                <FrontSignupForm
                  setclickSignup={setclickSignup}
                  setclickLogin={setclickLogin}
                  clickSignup={clickSignup}
                  clickLogin={clickLogin}
                  handleSubmit={handleSubmit}
                  setPhoneNumberStage={setPhoneNumberStage}
                  phoneNumberStage={phoneNumberStage}
                  setOPTstage={setOPTstage}
                  OPTstage={OPTstage}
                  setverified={setverified}
                  verified={verified}
                />
              )}
              <BottomWellcome
                setclickSignup={setclickSignup}
                setclickLogin={setclickLogin}
                clickSignup={clickSignup}
                clickLogin={clickLogin}
              />
            </VStack>
          </Box>
        </VStack>
      </VStack>
    </Box>

    </>
  );
};

export default Home;
