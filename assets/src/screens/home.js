import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { dataload} from "../datamodel/data";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



  const Tabs = createBottomTabNavigator();
export default function Home() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const url = "https://fakestoreapi.com/products/categories";
  const navigation = useNavigation();
  const [isloading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataload(url);
      setData(data);
      setIsLoading(false); // Log the fetched data
    };

    fetchData();
  }, []);
  console.log(data);
console.log(data)

  return (
    <View style={styles.container}>
      {isloading === true && (
        <ActivityIndicator style={styles.container} size="large" />
      )}
      {isloading === false && (
        <View style={styles.categoryTitleBox}>
          <Text style={styles.categoryTitle}>Categories:</Text>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item)}>
          <View style={styles.itemBox}
            
              title={item}
            
            >
              <Text style={styles.item}>{item}</Text>
            </View>
          
        </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <StatusBar style="auto" />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  item: {
    fontSize: 24,
    fontWeight: "bold",
  },

  itemBox: {
    padding: 5,
    margin: 10,
    backgroundColor: "lightblue",
    borderRadius: 10,
    width: 300,
    height: 50,
    marginTop: 20,
  },

  categoryTitleBox: {
    padding: 5,
    margin: 10,
    backgroundColor: "skyblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 60,
    marginTop: 20,
    marginBottom: 20,
  },

  categoryTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
