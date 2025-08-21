import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Page</Text>
      <Text style={styles.text}>Email: idrees@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  title: { fontSize: 28, color: '#fff', marginBottom: 10 },
  text: { fontSize: 18, color: '#aaa' },
});
