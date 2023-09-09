import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/componets/Loading';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
        
    </NativeBaseProvider>
  );
};

export default App;
