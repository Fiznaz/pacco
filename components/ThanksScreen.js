import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const PopupScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Show the modal only if it's not already visible
    if (!isModalVisible) {
      setModalVisible(true);
    }
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.thanksText}>Thanks for Applying!</Text>
            <Image
              source={require("../assets/pacco.png")} // Replace with the actual path to your icon
              style={styles.icon}
              resizeMode="contain"
            />

            <Text style={styles.modalText}>
              We'll notify you when the background verification is done. You
              won't be able to complete any deliveries during this process!
            </Text>

            <TouchableOpacity style={styles.button} onPress={toggleModal}>
              <Text
                onPress={() => navigation.navigate("HomePageSignIn")}
                style={styles.buttonText}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#000", // Black background
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%", // Adjust the width as needed
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#fff", // White text color
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  thanksText: {
    fontSize: 20, // Larger font size
    fontWeight: "bold", // Bold font weight
    color: "#fff", // White text color
    marginBottom: 10, // Adjust spacing if needed
  },
});

export default PopupScreen;
