import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Config from "react-native-config";
import HomeScreen from "./src/screens/home-screen";
import { store } from "./src/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import BooksScreen from "./src/screens/books-screen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Books" component={BooksScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
