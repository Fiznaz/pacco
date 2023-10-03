import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

const AppIcon = () => (
    <Image
      source={require("../assets/Pacco_Main.png")}
      style={{ width: 100, height: 100, right: 150, top: -20 }}
      resizeMode='contain'
    />
)

const HomePageSignIn = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <AppIcon />
      </View>
      <Text style={styles.greetingText}>Hi! {"\n"} We're glad you're here</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login", { userType: "driver" }) }
          style={styles.applyButton}>
          <Text
            style={styles.buttonText}
          >
            Login as driver
          </Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity onPress={() => navigation.navigate("Login", { userType: "customer" }) }
        style={styles.signUpButton}>
          <Text style={styles.buttonText}>Login as customer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#000", // Black background
    //width: "100%", // Set the width to 100%
  },
  greetingText: {
    color: "#fff", // Text color
    fontSize: 32,
    textAlign: "left",
    marginBottom: 200,
    right: 40,
    bottom: -140,
  },

  buttonContainer: {
    // width: '100%',
    // alignItems: 'center',
    marginTop: 0,
    // flex: 1,
    justifyContent: "flex-start",
    // Center buttons horizontally
    width: "90%",
  },
  applyButton: {
    backgroundColor: "#00CCCC", // Ocean blue background
    // borderRadius: 20, // Rounded corners
    // marginVertical: 10, // Vertical margin between buttons
    // paddingVertical: 10,
    // paddingHorizontal: 20,

    borderRadius: 35,
    padding: 15,
    alignItems: "center",
  },
  spacer: {
    height: 20,
  },
  signUpButton: {
    backgroundColor: "black",
    borderColor: "#00CCCC",
    borderWidth: 2,
    borderRadius: 35,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // Text color
    fontWeight: "bold",
    fontSize: 18,
  },
})

export default HomePageSignIn
