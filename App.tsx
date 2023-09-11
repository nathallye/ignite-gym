import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";

import { THEME } from "./src/theme";

import { Routes } from "@routes/index";

const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
