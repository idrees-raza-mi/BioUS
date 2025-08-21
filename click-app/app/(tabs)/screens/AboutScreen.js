import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Page Title */}
      <Text style={styles.pageTitle}>BIO</Text>

      {/* Profile Image */}
      <Image   source={require('@/assets/profile.jpg')} style={styles.profileImage} />

      {/* Name */}
      <Text style={styles.name}>Idrees Raza</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        I am a React Native developer learning Expo. I love building mobile apps and exploring new technologies.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#000' },
  pageTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  profileImage: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  name: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#efefef' },
  bio: { fontSize: 17, textAlign: 'center', color: '#fff' },
});
