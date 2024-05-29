import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Button,
    

  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { useState } from "react";
  import { FlatList } from "react-native-gesture-handler";
  import { useEffect } from "react";
  import { Image } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { loadData } from "../datamodel/data";
  import BackButton from "../components/BackButton";
  import { fetchGetUsers } from "../Services/Serverfetch";
 import { TextInput } from "react-native-gesture-handler";
import { postUserSignUp } from "../Services/Serverfetch";
import { postUserLogIn } from "../Services/Serverfetch";
import { useDispatch } from "react-redux";
  
  export default function UserAccount({route}) {
    const [newItems, setNewItems] = useState();
    const [id, setId] = useState();
    const navigation = useNavigation();
    const [isloading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [LogInSwitch, setLogInSwitch] = useState(true);
    const [SignUpSwitch,setSignUpSwitch] = useState(false);
    const {tokenHold} = route.params;
    const dispatch = useDispatch();

    // dispatch(tokenHold)




    return (
      <View style={styles.container}>
        {isloading === true && (
          <ActivityIndicator style={styles.container} size="large" />
        )}
            
            <View style={styles.container}>
          <View style={styles.categoryTitleBox}>
            <Text style={styles.categoryTitle}>User Profile:</Text>
          </View>  
            </View>

            <Text style={styles.textWindow}>Name: {tokenHold.name}</Text>
            <Text style={styles.textWindow}>Name: {tokenHold.email}</Text>
            
        <Button title="Sign Out" onPress={() => signOut()} />
        <Button title='Update Profile' />

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
  
    logInWindow: {
    //   padding: 10,
    //   margin: 10,
      backgroundColor: "skyblue",
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 2,
      width: 350,
      height: 200,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
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
      borderWidth: 1,
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
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    categoryTitleBox: {
    //   padding: 5,
    //   margin: 10,
      backgroundColor: "skyblue",
      borderRadius: 2,
      justifyContent: "center",
      alignItems: "center",
      width: 350,
      height: 50,
      marginTop: 25,
      borderWidth: 2,
    
    },
  
    categoryTitle: {
      fontSize: 30,
      fontWeight: "bold",
    },


    textWindow: {

        backgroundColor: "white",
        width: 170,
        padding:5,
        marginTop:5,
        textAlign: "center",
        borderWidth:1,






    }
  });
  