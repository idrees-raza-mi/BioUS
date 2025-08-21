import React from 'react';
 import { View, Text, Image, StyleSheet } from 'react-native';
  export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/profile1.jpg')}
                style={styles.profileImage}
      />
    
      <Text style={styles.name}>Idrees raza </Text>
      <Text style={styles.bio}>
        I am a React Native developer. I’m currently working on React Native projects and learning new technologies.
        Passionate about building mobile apps with beautiful UI and smooth user experience.
        Always eager to explore new libraries and tools in the React Native ecosystem.
        Enjoy collaborating with teams and sharing knowledge to solve challenging problems.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000ff',
  },
  profileImage: {
    width: 250,
    height: 350,
    borderRadius: 60, 
    marginBottom: 30,
  },
  name: {
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#efefefff',
  },
  bio: {
    fontSize: 19,
    textAlign: 'center',
    color: '#ffffffff',
  },
});