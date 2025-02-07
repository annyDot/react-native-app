import React from "react";
import { View, Text, Button } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "../contexts/ThemeContext";
import { RootStackParamList } from "../navigation/Navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
      }}
    >
      <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
        Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <Button
        title="Go to Books"
        onPress={() => navigation.navigate("Books")}
      />
    </View>
  );
}
