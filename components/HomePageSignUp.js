import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

const AppIcon = () => (
  <Image
    source={require("../assets/Pacco_Main.png")}
    style={{ width: 100, height: 100, right: 150, top: -20 }}
    resizeMode='contain'
  />
)

const HomePageSignUp = ({ navigation }) => {
  const navigateToLogin = (userType) => {
    navigation.navigate("Signup", { userType })
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <AppIcon style={styles.image}/>
      </View>
      <Text style={styles.greetingText}>Hi! {"\n"} We're glad you're here</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigateToLogin("driver")}
        >
          <Text style={styles.buttonText}>Apply as driver</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigateToLogin("customer")}
        >
          <Text style={styles.buttonText}>Sign up as customer</Text>
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

export default HomePageSignUp
