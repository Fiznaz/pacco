import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"

const AfterLoginScreen = ({ route }) => {
  const { email, userType } = route.params
  const capitalizedUserType =
    userType.charAt(0).toUpperCase() + userType.slice(1)

  return (
    <View style={styles.container}>
      <Text style={styles.userTypeText}>{capitalizedUserType} logged in successfully</Text>
      <Text style={styles.labelText}>Email:</Text>
      <Text style={styles.detailText}>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  userTypeText: {
    color: "#00CCCC",
    fontSize: 24,
    marginBottom: 20,
  },
  labelText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
  },
  detailText: {
    color: "#00CCCC",
    fontSize: 20,
  },
})

export default AfterLoginScreen
