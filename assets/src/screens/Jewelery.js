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

export default function Jewelery() {
  const [newItems, setNewItems] = useState();
  const [id, setId] = useState();
  const navigation = useNavigation();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const firstLoad = async () => {
      try {
        const data = await loadData("allData");
        const resArray = [];
        for (let i = 5; i < 9; i++) {
          const filteredItem = data.find((item) => item.id === i);
          resArray.push(filteredItem);
        }
        setNewItems(resArray);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    firstLoad();
  }, []);

  if (id == "5") {
    navigation.navigate("Jewel5");
    setId();
  }
  if (id == "6") {
    navigation.navigate("Jewel6");
    setId();
  }

  if (id == "7") {
    navigation.navigate("Jewel7");
    setId();
  }
  if (id == "8") {
    navigation.navigate("Jewel8");
    setId();
  }
  

  return (
    <View style={styles.container}>
      {isloading === true && (
        <ActivityIndicator style={styles.container} size="large" />
      )}
      {isloading === false && (
        <View style={styles.categoryTitleBox}>
          <Text style={styles.categoryTitle}>Jewelery:</Text>
        </View>
      )}
      <FlatList
        data={newItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setId(item.id)}>
            <View style={styles.itemBox}>
              <View style={styles.imageBoxContainer}>
                <Image style={styles.imageBox} source={{ uri: item.image }} />
              </View>
              <View style={styles.informationBox}>
                <View style={styles.titleBox}>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
                <Text style={styles.ratingText}>
                  Rating: {item.rating.rate}
                </Text>
                <Text style={styles.priceText}>Price: ${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
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
    height: 160,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
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
    height: 120,
    width: 120,
    resizeMode: "contain",
    backgroundColor: "white",
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
