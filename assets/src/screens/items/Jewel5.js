import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const url = 'https://fakestoreapi.com/products';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native';
import BackButton from '../../components/BackButton';
import AddCart from '../../components/AddCart';


export default function Jewel5() {
  const [items, setItems] = useState()
  const navigation = useNavigation();
   const [isloading, setIsLoading] = useState(true);
   const [isSeperate, setIsSeparate] = useState(false);
 const [newItems, setnewItems] = useState();  

useEffect(()=>{
    const fetchData = async (url)=>{
      try{const res = await fetch(url);
      const data = await res.json();
    setItems(data);
    
    const filteredItem = data.find(item => item.id === 5);
         if (filteredItem) {
           setnewItems(filteredItem);
         }
         setIsLoading(false);
      }catch (error){   console.log(error)}
    }
    fetchData(url);
})


if(isloading=== true){
  return(

  <View style={styles.container}>
  {isloading === true && <ActivityIndicator style={styles.container} size="large" />}

  <StatusBar style="auto" />
    </View>
  )
}

  if(isloading === false){
    
    return (

    <View style={styles.container}>
             
          
     <View style={styles.imageBox}> 
       <Image style={styles.image} source={{ uri: newItems.image, }}/> 
       </View> 
      
<View style={styles.informationBox}> 

     <Text style={styles.titleText}>{newItems.title}</Text> 
     <Text style={styles.ratingText}>Rating: {newItems.rating.rate}</Text>
      <Text style={styles.descriptionText}>Description: {newItems.description}</Text>
     <Text style={styles.priceText}>Price: ${newItems.price}</Text>


      </View> 

    <View style={styles.buttonContainer}>
    <BackButton title=" Back" onPress={()=>navigation.goBack()}></BackButton>
     <AddCart title='Add to Cart'></AddCart>
   </View>
     
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
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

imageBox: {

height: 250,
width: 250,
padding:10,
backgroundColor: 'white',
justifyContent: 'center',
alignContent: 'center', 
marginTop: 20,
borderWidth:1,

},



  image:{

   padding: 10,
    height: 200,  
    width: 200, 
    resizeMode:'contain',
   

  },


  informationBox:{

height :250,
width:300,
marginTop:20,
// backgroundColor:'grey',
// alignContent:'center',
alignItems:'center',

  },
  

  buttonContainer:{

flexDirection:'row',
padding:10,

marginTop:5,
justifyContent:'space-evenly',
  width:300,  
// height:50,

  },

  buttonstyle:{
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    justifyContent: 'center', // Align text vertically in the button
    alignItems: 'center', // Align text horizontally in the button
    borderRadius: 10,
  },



  titleText:{
fontSize:20,
fontWeight:'bold',
borderWidth:1,
width:'100%',


  },


  descriptionText:{

marginTop:10,
borderWidth:1,
borderRadius:4,
padding:5,
backgroundColor:'grey',


  },


  priceText:{

borderWidth:2,
borderRadius:3,
marginTop:5,
backgroundColor:'lightblue',
padding:5,


  },
    

  ratingText:{

padding:5,
borderWidth:1,
backgroundColor:'lightblue',
borderRadius:5,
marginTop:10,


  },
    
    
    

});
