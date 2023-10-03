import React from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"

const AppIcon = () => (
  <Image
    source={require("../assets/Pacco_Main.png")}
    style={{ width: 200, height: 200 }}
    resizeMode='contain'
  />
)

const InitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <AppIcon />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("HomePageSignUp")}>
          <Text
            style={styles.getStartedText}
          >
            Get Started!
          </Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate("HomePageSignIn")}>
          <Text
            style={styles.signinText}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#000",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 0,
    flex: 1,
    justifyContent: "flex-start",
  },
  spacer: {
    height: 20,
  },
  getStartedButton: {
    backgroundColor: "#00CCCC",
    borderRadius: 35,
    padding: 20,
    alignItems: "center",
  },

  signInButton: {
    backgroundColor: "black",
    borderColor: "#00CCCC",
    borderWidth: 2,
    borderRadius: 35,
    padding: 20,
    alignItems: "center",
  },
  getStartedText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },

  signinText: {
    color: "#00CCCC",
    fontWeight: "bold",
    fontSize: 18,
  },
})

export default InitialScreen
