import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { THEME } from './src/theme';

import { Loading } from './src/componets/Loading';

const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
        
      {/* <Loading /> */}
    </NativeBaseProvider>
  );
};

export default App;
