import { View, StyleSheet, Text, FlatList, Button, Image} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increaseItemCount, decreaseItemCount, totalItemCount} from "../redux/cartSlice";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const totalItems =() =>{
  return totalItemCount;
}



export default function Cart() {
const dispatch = useDispatch();

const itemsWithCount = useSelector(state => state.cart.itemsWithCount);
const cartTotal = useSelector(state => state.cart.cartTotal);
const totalItemCount = useSelector(state => state.cart.totalItemCount);


return (

<View style={styles.container}>

<View style={styles.cartTitleBox}>
<Text style={styles.cartTitle}> Shopping Cart</Text>
</View>

{itemsWithCount.length === 0  &&<View style={styles.container}><Text>Your Cart is Empty... </Text>
<Text>Buy something will ya!</Text></View>}


<FlatList
data={itemsWithCount}
renderItem={({ item }) => (
<View style={styles.container}>

  <View style={styles.itemBox}>

  <View style={styles.imageBox}>
 <Image style={styles.image} source={{ uri: item.image }} />
 </View>

    <View style={styles.titleBox}>
      <Text style={styles.titleText}>{item.title}</Text> 
      <Text>Item Count: {item.ItemCount}</Text>
    <View style={styles.buttonBox}>
    <Ionicons name='add-circle' size={20} color='blue' onPress={()=> dispatch(increaseItemCount(item.id))} />
    <Ionicons name='close-circle' color='red' size={20} onPress={()=> dispatch(decreaseItemCount(item.id))} />
    </View>

</View>
   
  </View>
 
</View>

)}>
</FlatList>
<Text>Cart Total: ${cartTotal}</Text>
<Text>Total Items: {totalItemCount}</Text>
</View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'Blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemBox:{

width:330,
height:100,
borderWidth:2,
borderRadius:4,
borderColor:'black',
margin:5,
flexDirection:'row',
padding:10,

  },


  titleBox:{

width: 200,
height:50,
justifyContent:'center',
marginLeft:20,
// marginBottom:40,
marginTop:20,



  },


  titleText:{

fontSize: 13,


  },
  buttonBox:{

flexDirection:'row',
justifyContent:'space-around',
marginTop:5,
// marginLeft:80,
width:200,
  },


  cartTitle:{

    fontSize:25,
    fontWeight:'bold',
   
    
  },

  cartTitleBox:{
    borderWidth:1,
    width:250,
    height:50,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop:30,
    backgroundColor:'skyblue',
    borderRadius:4,
    // marginBottom:20,

  },
  imageBox:{

    height:60,
    width:60,
    resizeMode: "contain",
    
  },


  image:{

    height:60,
    width:60,
    resizeMode: "contain",
  }

});