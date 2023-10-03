// expo install expo-sqlite

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("pacco.db")

// Create tables for customer and driver details
db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT, username TEXT, dob TEXT, password TEXT);"
  )
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS drivers (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT, username TEXT, dob TEXT, password TEXT);"
  )
})

// Function to create a new user in the database
export const createUser = (user, userType) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${userType}s (firstName, lastName, email, username, dob, password) VALUES (?, ?, ?, ?, ?, ?);`,
        [
          user.firstName,
          user.lastName,
          user.email,
          user.username,
          user.dob,
          user.password,
        ],
        (_, result) => {
          if (result.rowsAffected > 0) {
            resolve() // Resolve the promise if the insertion is successful
          } else {
            reject("Error inserting data") // Reject the promise if there is an error
          }
        }
      )
    })
  })
}

// Function to verify user credentials and return true if valid
export const loginUser = (userCredentials, userType) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${userType}s WHERE email = ? AND password = ?;`,
        [userCredentials.email, userCredentials.password],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(true) // User with valid credentials found
          } else {
            resolve(false) // User not found or invalid credentials
          }
        },
        (_, error) => {
          reject(error) // Error occurred during the database query
        }
      )
    })
  })
}
