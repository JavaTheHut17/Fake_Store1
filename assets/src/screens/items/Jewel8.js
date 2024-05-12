import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../../components/BackButton";
import AddCart from "../../components/AddCart";
import { loadData } from "../../datamodel/data";
import { useDispatch } from "react-redux";
import { addItemCart } from "../../redux/cartSlice";

export default function Jewel8() {
  const navigation = useNavigation();
  const [isloading, setIsLoading] = useState(true);
  const [newItems, setnewItems] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const firstLoad = async () => {
      try {
        const data = await loadData("allData");
        const filteredItem = data.find((item) => item.id === 8);
        if (filteredItem) {
          setnewItems(filteredItem);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    firstLoad();
  }, []);

  if (isloading === true) {
    return (
      <View style={styles.container}>
        {isloading === true && (
          <ActivityIndicator style={styles.container} size="large" />
        )}

        <StatusBar style="auto" />
      </View>
    );
  }

  if (isloading === false) {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: newItems.image }} />
        </View>
        <View style={styles.informationBox}>
          <Text style={styles.titleText}>{newItems.title}</Text>
          <View style={styles.priceboxes}>
            <Text style={styles.ratingText}>
              Rating: {newItems.rating.rate}
            </Text>
            <Text style={styles.priceText}>Price: ${newItems.price}</Text>
          </View>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <ScrollView>
            <Text style={styles.descriptionText}>{newItems.description}</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <BackButton title=" Back" onPress={() => navigation.goBack()} />
            <AddCart onPress={() => dispatch(addItemCart(newItems))} title="Add to Cart" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "Blue",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
  },

  priceboxes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 200,
    marginBottom: 10,
    marginTop: 10,
  },

  itemBox: {
    padding: 10,
    margin: 10,
    backgroundColor: "lightblue",
    borderRadius: 10,
    width: 300,
    height: 50,
  },

  imageBox: {
    height: 200,
    width: 200,
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
  },

  image: {
    padding: 10,
    height: 150,
    width: 150,
    resizeMode: "contain",
  },

  informationBox: {
    height: 360,
    width: 370,

    marginTop: 20,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    padding: 10,

    marginTop: 5,
    justifyContent: "space-evenly",
    width: 300,
  },

  buttonstyle: {
    backgroundColor: "blue",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    borderWidth: 1,
    width: "100%",
  },

  descriptionText: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    height: 200,
    backgroundColor: "grey",
  },

  priceText: {
    borderWidth: 2,
    borderRadius: 3,
    marginTop: 5,
    backgroundColor: "lightblue",
    padding: 5,
  },

  ratingText: {
    borderWidth: 2,
    borderRadius: 3,
    marginTop: 5,
    backgroundColor: "lightblue",
    padding: 5,
    paddingLeft: 5,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
