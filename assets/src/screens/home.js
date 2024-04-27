import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';




export default function Home() {
const [data, setData] = useState([]);
const [item, setItem] = useState('');
const url ='https://fakestoreapi.com/products/categories';
const navigation = useNavigation();
const [isloading, setIsLoading] = useState(true);

if(item === 'electronics'){
    navigation.navigate('Electronics');

setItem();

};

if(item === 'jewelery'){
    navigation.navigate('Jewelery');
    setItem();    
};
if(item === 'men\'s clothing'){
    navigation.navigate('MensClothing'); 
    setItem();
};
if(item === 'women\'s clothing'){
    
     navigation.navigate('WomensClothing');
     setItem();
    };
    

    useEffect(()=>{
        const fetchData = async (url)=>{
          try{const res = await fetch(url);
          const data = await res.json();
        setData(data);
        setIsLoading(false);
          }catch (error){   console.log(error)}
        }
        fetchData(url);
    })

  return (
    <View style={styles.container}>
       {isloading === true && <ActivityIndicator style={styles.container} size="large" />}
     <FlatList 
        data={data}
        renderItem={({ item }) => <View style={styles.itemBox}><Button title={item} onPress={()=>[setItem(item)]} style={styles.itemBox}><Text style={styles.item}>{item}</Text></Button></View>}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    fontSize: 24,
    fontWeight: 'bold'
    

  },

  itemBox: {
    padding: 5,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    width: 300,
    height: 50,
  },


});
