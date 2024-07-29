import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Caritom from './components/Caritom';

export default function App() {
  return (
    <View style={styles.container}>

    <Caritom/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



asdfgbhnhbvcdxsaAZxcv