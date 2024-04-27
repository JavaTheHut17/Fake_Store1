import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { jeweleryItems } from '../datamodel/data';
import { useState } from 'react';
import { Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react';
const url = 'https://fakestoreapi.com/products/category/jewelery';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Jewelery() {
    const [items, setItems] = useState()
    const [id, setId] = useState();
    const navigation = useNavigation();
   const [isloading, setIsLoading] = useState(true);

useEffect(()=>{
    const fetchData = async (url)=>{
      try{const res = await fetch(url);
      const data = await res.json();
    setItems(data);
    setIsLoading(false);
      }catch (error){   console.log(error)}
    }
    fetchData(url);
})

// useEffect(()=>{

//     const fetchData = async (url)=>{


//     try{
//         const res = await fetch(url);
//       const data = await res.json();
//     setItems(data);
//     }catch (error){
//         console.log(error)
    
//     }
//     fetchData(url);
// ),[]}

// console.log(id)



    if(id == '5'){  
    navigation.navigate('Jewel5');
    setId();
    }
if(id == '6'){
    navigation.navigate('Jewel6');
    setId();
    }

    if(id == '7'){
        navigation.navigate('Jewel7');
        setId();
        }
        if(id == '8'){
            navigation.navigate('Jewel8');
            setId();
            }
    



  return (
    <View style={styles.container}>
       {isloading === true && <ActivityIndicator style={styles.container} size="large" />}
    <FlatList 
        data={items}
        renderItem={({ item }) => 

        <View style={styles.itemBox}>
            <View style={styles.imageBoxContainer}>
        <Image
        style={styles.imageBox}
        source={{ uri: item.image, }}/>
        </View>

            {/* <Text style={styles.item}>{item.id}</Text> */}
            <View style={styles.informationBox}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.ratingText}>Rating:{item.rating.rate}</Text>
                <Text style={styles.priceText}>Price: {item.price}</Text>
                <Text>{item.id}</Text>
                <Button title='Go-To' onPress={()=>setId(item.id)}></Button>
            </View>
           
            </View>}


        keyExtractor={(item) => item.id}
      ></FlatList>
      <Button title='Go Back' onPress={()=>navigation.goBack()}></Button>
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
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:1,
    borderRadius: 10,
    width: 350,
    height: 150,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexDirection:'row',
  },
imageBoxContainer:{

height:130,
width:130,
padding:3,
justifyContent:'center',
alignItems:'center',
backgroundColor:'lightblue',


},
informationBox:{

height:100,
width:195,
justifyContent:'flex-start',
alignItems:'flex-start',
flexDirection:'column',

},


imageBox: {
    // padding: 10,
    // margin: 10,
    // borderRadius: 10,
    height:120,
    width:120,
    resizeMode:'contain',
    backgroundColor:'white',
// justifyContent: 'center',
// alignItems: 'center',
  },

  titleText:{

    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    width:200,
    marginTop:10,
    marginLeft:10,
    
  },

  ratingText:{
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    width:200,
    marginTop:15,
    marginLeft:10,
   
  },


  priceText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    width:200,
    marginTop:15,
    marginLeft:10,
  },




});
