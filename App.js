import React from 'react';
import { Image,  StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import logo from './assets/bp.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}> Hey You</Text>
      <Image source={logo} style={styles.logo} /> 


      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159
  },
  instructions: {
    color: 'deeppink',
    fontSize: 36,
    marginHorizontal: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
