import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "../contexts/ThemeContext";
import HomeScreen from "../screens/home-screen";
import BooksScreen from "../screens/books-screen";

export type RootStackParamList = {
  Home: undefined;
  Books: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: theme === "dark" ? "#2c3e50" : "#ecf0f1", // applies to ALL screens
          },
          headerStyle: {
            backgroundColor: theme === "dark" ? "#1e3a5f" : "#3498db",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          },
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              <Button
                title={
                  theme === "dark"
                    ? "Light theme"
                    : "Dark theme"
                }
                onPress={toggleTheme}
                color={theme === "dark" ? undefined : "#1e3a8a"}
              />
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="Books"
          component={BooksScreen}
          options={{
            title: "My Book List",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
