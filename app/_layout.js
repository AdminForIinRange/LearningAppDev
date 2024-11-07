import { Stack} from "expo-router/stack";
import { NativeBaseProvider } from "native-base";

const Layout = () => {
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{ headerShown: false }}
      />
    </NativeBaseProvider>
  );
};

export default Layout;



// import React, { useEffect, useState } from "react";
// import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
// import BottomWellcome from "./components/BottomWellcome";
// import FrontLoginForm from "./components/FrontLoginForm";
// import FrontSignupForm from "./components/FrontSignupForm";

// const Phone = () => {
//   const [phoneNumberStage, setPhoneNumberStage] = useState(false);
//   const [OPTstage, setOPTstage] = useState(false);
//   const [show, setShow] = useState(false);
//   const [clickLogin, setclickLogin] = useState(false);
//   const [clickSignup, setclickSignup] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     console.log("hello");
//   };

//   useEffect(() => {
//     setTimeout(() => setShow(true), 2000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleContainer}>
//         {show && !clickSignup && !clickLogin && (
//           <Text style={styles.title}>Rewards</Text>
//         )}
//       </View>
//       <View style={styles.formContainer}>
//         <View
//           style={[
//             styles.formBox,
//             clickSignup || clickLogin ? styles.formBoxExpanded : styles.formBoxCollapsed,
//           ]}
//         >
//           {clickLogin && (
//             <FrontLoginForm
//               setclickSignup={setclickSignup}
//               setclickLogin={setclickLogin}
//               clickSignup={clickSignup}
//               clickLogin={clickLogin}
//               handleSubmit={handleSubmit}
//             />
//           )}
//           {clickSignup && (
//             <FrontSignupForm
//               setclickSignup={setclickSignup}
//               setclickLogin={setclickLogin}
//               clickSignup={clickSignup}
//               clickLogin={clickLogin}
//               handleSubmit={handleSubmit}
//               setPhoneNumberStage={setPhoneNumberStage}
//               phoneNumberStage={phoneNumberStage}
//               setOPTstage={setOPTstage}
//               OPTstage={OPTstage}
//             />
//           )}
//           <BottomWellcome
//             setclickSignup={setclickSignup}
//             setclickLogin={setclickLogin}
//             clickSignup={clickSignup}
//             clickLogin={clickLogin}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0161F0",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   titleContainer: {
//     position: "absolute",
//     top: 200,
//     zIndex: 1,
//   },
//   title: {
//     color: "white",
//     fontSize: 70,
//     fontWeight: "bold",
//     letterSpacing: -5,
//     textAlign: "center",
//   },
//   formContainer: {
//     flex: 1,
//     width: "100%",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   formBox: {
//     width: "100%",
//     padding: 30,
//     backgroundColor: "white",
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     transition: "all 0.8s ease",
//   },
//   formBoxExpanded: {
//     height: "100%",
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   formBoxCollapsed: {
//     height: 400,
//   },
// });

// export default Phone;
