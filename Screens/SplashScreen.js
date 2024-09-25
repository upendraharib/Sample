import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    
      <Image
        source={require('../assets/icons/app_logo.png')} // Replace with your logo or image
        style={styles.logo}
        resizeMode="contain"
      />
    
      <Text style={styles.title}>TroopMessenger</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF', // Splash background color
  },
  topRightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,     // Set the width of the image
    height: 100,    // Set the height of the image
    margin: 10,     // Optional: Add margin to separate it from the edges
  },
  logo: {
    width: 150,
    height: 150, // Adjust size according to your logo
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default SplashScreen;
