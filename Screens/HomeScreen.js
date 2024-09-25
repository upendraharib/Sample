import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    
      <Image
        source={require('../assets/icons/app_logo.png')} // Replace with your logo or image
        style={styles.logo}
    
      />
    
      <Text style={styles.title}>Welcome Main page</Text>
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
  logo: {
    width: 48,
    height: 48, // Adjust size according to your logo
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
