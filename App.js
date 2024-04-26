import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import splashScreen from './assets/src/screens/splashScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <Text> asdsad</Text>
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
