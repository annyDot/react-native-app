import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Navigation";
import { useTheme } from "../contexts/ThemeContext";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#2c3e50" : "#ecf0f1" },
      ]}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text
        style={[styles.title, { color: theme === "dark" ? "#fff" : "#000" }]}
      >
        Welcome to the Home Screen
      </Text>
      <Text
        style={[
          styles.paragraph,
          { color: theme === "dark" ? "#ddd" : "#333" },
        ]}
      >
        Discover amazing books and dive into the world of knowledge.
      </Text>

      <Button
        title="Go to Books"
        onPress={() => navigation.navigate("Books")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
});
