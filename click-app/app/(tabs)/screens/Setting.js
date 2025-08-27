import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [tab, setTab] = useState("profile");
  const [name, setName] = useState("Idrees Raza");
  const [bio, setBio] = useState(
    "I am a React Native developer learning Expo. I love building mobile apps and exploring new technologies."
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Settings</Text>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile Tab */}
      {tab === "profile" && (
        <View style={styles.centered}>
          <Image source={require("@/assets/profile1.jpg")} style={styles.image} />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: "top" }]}
            value={bio}
            onChangeText={setBio}
            placeholder="Enter your bio"
            placeholderTextColor="#aaa"
            multiline
          />
        </View>
      )}

      {/* Privacy Tab */}
      {tab === "privacy" && (
        <View>
          <Text style={styles.tabTitle}>Privacy</Text>
          <Text style={styles.tabText}>- Your data is safe.</Text>
          <Text style={styles.tabText}>- We don’t share personal info.</Text>
          <Text style={styles.tabText}>- End-to-end encryption enabled.</Text>
        </View>
      )}

      {/* Menu Modal */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => {
                setTab("privacy");
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuItem}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTab("profile");
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuItem}>Profile</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pageTitle: { fontSize: 28, fontWeight: "bold", color: "#fff" },
  centered: { alignItems: "center" },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  input: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  tabTitle: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  tabText: { fontSize: 16, color: "#ccc", marginBottom: 6 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: { backgroundColor: "#222", borderRadius: 10, padding: 15, width: 180 },
  menuItem: { fontSize: 18, color: "#fff", paddingVertical: 10 },
});
