import { View, StyleSheet, Text} from "react-native";




export default function Cart() {


return (

<View style={styles.container}>
    <Text>cart</Text>

</View>



);

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'Blue',
      alignItems: 'center',
      justifyContent: 'center',
    },

});