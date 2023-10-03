import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import InitialScreen from "./components/InitialScreen"
import HomePageSignUp from "./components/HomePageSignUp"
import HomePageSignIn from "./components/HomePageSignIn"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ThanksScreen from "./components/ThanksScreen"
import AfterLoginScreen from "./components/AfterLoginScreen"
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='InitialScreen'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitle: null,
        }}
      >
        <Stack.Screen name='InitialScreen' component={InitialScreen} />
        <Stack.Screen name='HomePageSignUp' component={HomePageSignUp} />
        <Stack.Screen name='HomePageSignIn' component={HomePageSignIn} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='AfterLoginScreen' component={AfterLoginScreen} />
        <Stack.Screen name='ThanksScreen' component={ThanksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
