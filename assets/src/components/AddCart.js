import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddCart({ title, onPress, color }) {
  return (
    <View style={styles.ButtonBox}>
      <TouchableOpacity style={{ backgroundColor: color }} onPress={onPress}>
        <AntDesign name="shoppingcart" size={20} color="white">
          <Text style={styles.ButtonText}>{title}</Text>
        </AntDesign>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonBox: {
    // flexDirection:'row',
    justifyContent:'center',
    // alignContent: "center",
    alignItems:'center',
    backgroundColor: "blue",
    // top: 80,
    width: "40%",
    // marginRight: 30,
    padding: 3,
    borderRadius: 8,
  },

  ButtonText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    color: "white",
  },
});