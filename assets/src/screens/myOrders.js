import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { useState } from "react";
  import { FlatList } from "react-native-gesture-handler";
  import { useEffect } from "react";
  import { Image } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { loadData } from "../datamodel/data";
  import BackButton from "../components/BackButton";
  import { UseDispatch } from "react-redux";
 import { useSelector } from "react-redux";
import { addOrder } from "../redux/myOrdersSlice";


  export default function MyOrders({route}) {
    const [newItems, setNewItems] = useState();
    const [id, setId] = useState();
    const navigation = useNavigation();
    const [isloading, setIsLoading] = useState(false);
    // const dispatch = useDispatch();
    const unpaidOrders = useSelector((state) => state.myOrders.unpaidOrders);
    const resUnpaidOrders = useSelector((state) => state.myOrders.resUnpaidOrders);
const cartItems = useSelector((state) => state.myOrders.cartItems);


// console.log('cart Items ', cartItems )

// console.log('unpaidOrders: ', unpaidOrders)
let prodData = [];

console.log(unpaidOrders)
unpaidOrders.forEach(order => {
  try {
  
    const jsonData = JSON.parse(order.order_items);
    const orderProdData = jsonData.map((item) => ({
      item_id: item.prodID,
      quantity: item.quantity,
      price: item.price,
      orderId: order.id,
    }));

    const newprodData = prodData.concat(orderProdData);
// console.log('new prod data', newprodData)
    
  } catch (e) {
    console.error(`Error parsing JSON for order ID ${order.id}:`, e);
  }
});
// console.log('prod data', prodData)

const newData = unpaidOrders.map((item)=>({
orderId: item.uid,
is_delivered: item.is_delivered,
is_paid: item.is_paid,
item_numbers: item.item_numbers,
total_price: (item.total_price/100).toFixed(2),
id: item.id,

}))




const combData = newData.forEach((order) => {

const combData = newData.concat(cartItems)

return combData
})




    return (
      <View style={styles.container}>
        {isloading === true && (
          <ActivityIndicator style={styles.container} size="large" />
        )}
        {isloading === false && (
          <View style={styles.categoryTitleBox}>
            <Text style={styles.categoryTitle}>My Orders:</Text>
          </View>
        )}
   
<FlatList
data={newData}
renderItem={({ item }) => (

<View>
  <View style={styles.itemBox}>
  <Text>Order Id: {item.id}</Text>
  <Text>Is Delivered: {item.is_delivered}</Text>
  <Text>Item Numbers: {item.item_numbers}</Text>
  <Text>Total Price: {item.total_price}</Text>
  </View>
</View>
)}></FlatList>



        {isloading === false && (
          <View style={styles.buttonBox}>
            <BackButton title="Go Back" onPress={() => navigation.goBack()} />
          </View>
        )}
        <StatusBar style="auto" />
  
  
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "Blue",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      fontSize: 24,
      fontWeight: "bold",
    },
  
    itemBox: {
      padding: 10,
      margin: 10,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
      width: 350,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    imageBoxContainer: {
      height: 130,
      width: 130,
      padding: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    informationBox: {
      height: 130,
      width: 195,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  
    imageBox: {
      height: 80,
      width: 80,
      resizeMode: "contain",
      backgroundColor: "white",
    },
    image: {
      padding: 10,
      height: 80,
      width: 80,
      resizeMode: "contain",
    },
  
  
    titleText: {
      fontSize: 13,
      fontWeight: "bold",
      color: "black",
      textAlign: "left",
      width: 200,
      marginTop: 3,
      marginLeft: 5,
      marginRight: 10,
    },
  
    titleBox: {
      height: 80,
      width: 200,
    },
  
    ratingText: {
      fontSize: 12,
      fontWeight: "bold",
      color: "black",
      textAlign: "left",
      width: 200,
      marginTop: 2,
      marginLeft: 10,
    },
  
    priceText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      justifyContent: "flex-end",
      width: 150,
      marginTop: 10,
      marginLeft: 2,
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: "lightgrey",
    },
  
    buttonBox: {
      height: 30,
      width: 350,
      justifyContent: "center",
      alignItems: "center",
    },
    categoryTitleBox: {
      padding: 5,
      margin: 10,
      backgroundColor: "skyblue",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      width: 350,
      height: 50,
      marginTop: 25,
      marginBottom: 5,
    },
  
    categoryTitle: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  