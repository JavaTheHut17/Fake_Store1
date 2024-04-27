import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Jewel8() {
    
  return (
    <View style={styles.container}>
     <Text>jewel8</Text>
     <Text>asdasdasdasd</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    fontSize: 24,
    fontWeight: 'bold'
    

  },

  itemBox: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    width: 300,
    height: 50,
  },


});
