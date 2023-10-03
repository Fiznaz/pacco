import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { loginUser } from "../database" // Import the loginUser function from your database.js
import { useRoute } from "@react-navigation/native";
const Login = ({ navigation }) => {
  const route = useRoute();
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (route.params && route.params.userType) {
      setUserType(route.params.userType);
    }
  }, [route.params]);

  const handleLogin = async () => {
    try {
      // Call the loginUser function to verify the user's details
      const isValidUser = await loginUser({ email, password }, userType)

      if (isValidUser) {
        // Navigate to the success page if the user details are valid
        navigation.navigate("AfterLoginScreen", {
          userType,
          email,
        })
      } else {
        // Handle invalid credentials (e.g., show an alert)
        alert("Invalid email or password")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const AppIcon = () => (
    <Image
      source={require("../assets/Pacco_Main.png")}
      style={{ width: 100, height: 100, right: 150, top: -280 }}
      resizeMode='contain'
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <AppIcon style={styles.image}/>
      </View>
      <Text style={styles.userTypeText}>Login as {userType}</Text>

      <TextInput
        style={styles.input}
        placeholder='Email ID'
        placeholderTextColor='#A9A9A9'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#A9A9A9'
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.nextButton} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

// Define your styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",

  },
  userTypeText: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
    bottom: 90,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#00CCCC",
    color: "#fff",
    bottom: 70,
  },
  nextButton: {
    backgroundColor: "#00CCCC",
    borderRadius: 20,
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    bottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
})

export default Login
