import React,{useEffect,useState} from "react";

import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions,Alert } from 'react-native';
const { width, height } = Dimensions.get('window');
import { ApiService } from "../Api/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createUserTable} from "../Database/database"


const LoginScreen = () => {
  const [userId, setUserId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    createUserTable();
  }, []);
  const handleLogin = async () => {
    console.log("userid ",userId," mobile ",mobileNumber)
    if (!userId || !mobileNumber) {
      Alert.alert('Error', 'Please enter both userid and mobile number');
      return;
    }

    setIsLoading(true);  // Show loading spinner

    try {
      // Call the login API using the ApiService class
      const response = await ApiService.login(userId, mobileNumber);

      // If login is successful, navigate to the home screen
      if (response.success) {
        Alert.alert('Success', 'Login successful');
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.replace('Home');  // Replace with Home Screen after successful login
      } else {
        // If login fails, show an error message
        Alert.alert('Login Failed', response.message || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login. Please try again later.');
    } finally {
      setIsLoading(false);  // Hide loading spinner
    }
  };
    return (
      <View style={styles.container}>
      
        <Image
          source={require('../assets/icons/app_logo.png')} // Replace with your logo or image
          style={styles.topRightImage}
        
        />
  
      
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User ID"
            placeholderTextColor="#aaa"
            onChangeText={setUserId}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            onChangeText={setMobileNumber}
          />
        </View>
  
      
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText} onPress={handleLogin}>Login</Text>

        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topRightImage: {
      position: 'center',
      top: 0,
      right: 0,
      width: 64,     // Set the width of the image
      height: 64,    // Set the height of the image
      margin: 10,     // Optional: Add margin to separate it from the edges
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    logo: {
      width: 48,
      height: 48,
    },
    inputContainer: {
      width: '80%',
      marginBottom: 40,
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 16,
      marginVertical: 10,
      elevation: 2, // Adds shadow for Android
      shadowColor: '#000', // iOS shadow settings
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
    },  
    loginButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default LoginScreen;