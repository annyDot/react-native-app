import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { store } from "./src/store";
import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
