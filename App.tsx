import {StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202024' }}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <Text style={{ fontFamily: 'Roboto-Bold', fontWeight: '400', color: '#fff' }}>App</Text>
    </View>
  );
};

export default App;
