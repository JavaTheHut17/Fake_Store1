import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { jeweleryItems } from '../datamodel/data';
import { useState } from 'react';
import { Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react';
const url = 'https://fakestoreapi.com/products/category/electronics';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dataload } from '../datamodel/data';

export default function Electronics() {
    const [items, setItems] = useState()
    const [id, setId] = useState();
    const navigation = useNavigation();
    const [isloading, setIsLoading] = useState(true);

    // useEffect(()=>{
    //     const fetchData = async (url)=>{
    //       try{const res = await fetch(url);
    //       const data = await res.json();
    //     setItems(data);
    //     setIsLoading(false);
    //       }catch (error){   console.log(error)}
    //     }
    //     fetchData(url);
    // })

    useEffect(() => {
      const fetchData = async () => {
       try{const data = await dataload(url);
        setItems(data)
        setIsLoading(false);}
        catch{
          console.log('error')
        } // Log the fetched data
      };
    
      fetchData();
    }, []);

console.log(id)
    if(id == '9'){  
    navigation.navigate('Elec9');
    setId();
    }
if(id == '10'){
    navigation.navigate('Elec10');
    setId();
    }

    if(id == '11'){
        navigation.navigate('Elec11');
        setId();
        }
        if(id == '12'){
            navigation.navigate('Elec12');
            setId();
            }
         if(id == '13'){
          navigation.navigate('Elec13');
          setId();
          }
          if(id == '14'){
              navigation.navigate('Elec14');
              setId();
              }
      



  return (
    <View style={styles.container}>
       
       {isloading === true && <ActivityIndicator style={styles.container} size="large" />}
       <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setId(item.id)}>
            <View style={styles.itemBox}>
              <View style={styles.imageBoxContainer}>
                <Image style={styles.imageBox} source={{ uri: item.image }} />
              </View>
              {/* <Text style={styles.item}>{item.id}</Text> */}
              <View style={styles.informationBox}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.ratingText}>Rating:{item.rating.rate}</Text>
                <Text style={styles.priceText}>Price: {item.price}</Text>
                <Text>{item.id}</Text>
                {/* <Button title='Go-To' onPress={()=>setId(item.id)}></Button> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
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
