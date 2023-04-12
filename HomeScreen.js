import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleNormalCalcPress = () => {
    navigation.navigate("NormalCalc");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graphing Calculator</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNormalCalcPress}>
          <AntDesign name="calculator" size={32} color="#fff" />
          <Text style={styles.buttonText}>Normal Calc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="book" size={32} color="#fff" />
          <Text style={styles.buttonText}>Scientific Calc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="linechart" size={32} color="#fff" />
          <Text style={styles.buttonText}>Graphing Calc</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7E7D8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#F78F8F",
    fontFamily: "Arial Rounded MT Bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#F78F8F",
    borderRadius: 20,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Arial Rounded MT Bold",
    textAlign: "center",
  },
});
