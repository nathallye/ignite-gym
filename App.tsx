import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";

import { THEME } from "./src/theme";

// import { Loading } from "./src/componets/Loading";
// import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
        
      {/* <Loading /> */}
      {/* <SignIn /> */}
      <SignUp />
    </NativeBaseProvider>
  );
};

export default App;
