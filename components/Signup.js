import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { createUser } from "../database"

const AppIcon = () => (
  <Image
    source={require("../assets/Pacco_Main.png")}
    style={{ width: 10, height: 10, right: 50, top: -5 }}
    resizeMode='contain'
  />
)

const Signup = ({ route, navigation }) => {
  const { userType } = route.params

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [dob, setDob] = useState("")
  const [email, setEmail] = useState("")

  const handleLogin = async () => {
    const user = {
      firstName,
      lastName,
      email,
      username,
      dob,
      password,
    }
    try {
      await createUser(user, userType) // Insert the user data into the database
      setFirstName("")
      setLastName("")
      setUsername("")
      setPassword("")
      setDob("")
      setEmail("")
      navigation.navigate("ThanksScreen") // Navigate to ThanksScreen after successful insertion
    } catch (error) {
      alert(error) // Handle any errors that occur during data insertion
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.userTypeText}>Sign up as {userType}</Text>
      <Text style={styles.questionText}>What's your name?</Text>

      <TextInput
        style={styles.input}
        placeholder='First Name'
        placeholderTextColor='#A9A9A9'
        value={firstName}
        onChangeText={(text) => setFirstName(text)} // Store first name in state
      />

      <TextInput
        style={styles.input}
        placeholder='Last Name'
        placeholderTextColor='#A9A9A9'
        value={lastName}
        onChangeText={(text) => setLastName(text)} // Store last name in state
      />

      <TextInput
        style={styles.input}
        placeholder='Username'
        placeholderTextColor='#A9A9A9'
        value={username}
        onChangeText={(text) => setUsername(text)} // Store username in state
      />

      <TextInput
        style={styles.input}
        placeholder='Date of Birth (MM/DD/YYYY)'
        placeholderTextColor='#A9A9A9'
        value={dob}
        onChangeText={(text) => setDob(text)} // Store Date of Birth in state
      />

      <TextInput
        style={styles.input}
        placeholder='Email ID'
        placeholderTextColor='#A9A9A9'
        value={email}
        onChangeText={(text) => setEmail(text)} // Store Email in state
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#A9A9A9'
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)} // Store password in state
      />

      <TouchableOpacity style={styles.nextButton} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    opacity: "100%",
  },
  questionText: {
    color: "#fff", // Text color
    fontSize: 40,
    marginBottom: 20,
    left: -5,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1, // Bottom border width
    borderBottomColor: "#00CCCC", // Bottom border color (blue)
    color: "#fff", // Text color
  },
  nextButton: {
    backgroundColor: "#00CCCC", // Ocean blue background
    borderRadius: 35, // Rounded corners
    width: "80%", // Full width
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center", // Center text within the button
  },
  buttonText: {
    color: "#fff", // Text color
    fontWeight: "bold",
    fontSize: 18,
  },
  userTypeText: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
})

export default Signup
