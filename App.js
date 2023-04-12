//more cartoonish than the previus one

// import React from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import NormalCalcScreen from "./screens/NormalCalcScreen";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Graphing Calculator</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <AntDesign name="calculator" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Normal Calc</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <AntDesign name="book" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Scientific Calc</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <AntDesign name="linechart" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Graphing Calc</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F7E7D8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 50,
//     color: "#F78F8F",
//     fontFamily: "Arial Rounded MT Bold",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     marginTop: 50,
//   },
//   button: {
//     backgroundColor: "#F78F8F",
//     borderRadius: 20,
//     padding: 0,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 100,
//     height: 100,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     marginTop: 10,
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//     fontFamily: "Arial Rounded MT Bold",
//     textAlign: "center",
//   },
// });

//Second try

// import React from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import { createStackNavigator } from "react-navigation-stack";
// import NormalCalcScreen from "./NormalCalcScreen";

// const NormalCalcStack = createStackNavigator({
//   NormalCalc: { screen: NormalCalcScreen },
// });

// export default function HomeScreen(props) {
//   const { navigation } = props;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Graphing Calculator</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("NormalCalc")}
//         >
//           <AntDesign name="calculator" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Normal Calc</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <AntDesign name="book" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Scientific Calc</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <AntDesign name="linechart" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Graphing Calc</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F7E7D8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 50,
//     color: "#F78F8F",
//     fontFamily: "Arial Rounded MT Bold",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     marginTop: 50,
//   },
//   button: {
//     backgroundColor: "#F78F8F",
//     borderRadius: 20,
//     padding: 0,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 100,
//     height: 100,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     marginTop: 10,
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//     fontFamily: "Arial Rounded MT Bold",
//     textAlign: "center",
//   },
// });

//latest response from gpt
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import NormalCalcScreen from "./screens/NormalCalcScreen";
// import ScientificCalcScreen from "./screens/ScientificCalcScreen";
// import GraphingCalcScreen from "./screens/GraphingCalcScreen";
// const Stack = createStackNavigator();

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   const handleNormalCalcPress = () => {
//     navigation.navigate("NormalCalc");
//   };

//   const handleScientificCalcPress = () => {
//     // navigate to scientific calculator screen
//   };

//   const handleGraphingCalcPress = () => {
//     // navigate to graphing calculator screen
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Graphing Calculator</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleNormalCalcPress}>
//           <AntDesign name="calculator" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Normal Calc</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleScientificCalcPress}
//         >
//           <AntDesign name="book" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Scientific Calc</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleGraphingCalcPress}
//         >
//           <AntDesign name="linechart" size={32} color="#fff" />
//           <Text style={styles.buttonText}>Graphing Calc</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F7E7D8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 50,
//     color: "#F78F8F",
//     fontFamily: "Arial Rounded MT Bold",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     marginTop: 50,
//   },
//   button: {
//     backgroundColor: "#F78F8F",
//     borderRadius: 20,
//     padding: 0,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 100,
//     height: 100,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     marginTop: 10,
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//     fontFamily: "Arial Rounded MT Bold",
//     textAlign: "center",
//   },
// });

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NormalCalcScreen from "./NormalCalcScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NormalCalc" component={NormalCalcScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
