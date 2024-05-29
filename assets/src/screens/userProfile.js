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
import { getUserOrders } from "../Services/Serverfetch";
import profileSlice from "../redux/profileSlice";
  import { useSelector
   } from "react-redux";
   import { logInState, logOutState } from "../redux/profileSlice";
import { useDispatch } from "react-redux";
import { addOrder, tokenGrab } from "../redux/myOrdersSlice";



  export default function UserProfile() {
    const [newItems, setNewItems] = useState('');
    const [id, setId] = useState();
    const navigation = useNavigation();
    const [isloading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [LogInSwitch, setLogInSwitch] = useState(true);
    const [SignUpSwitch,setSignUpSwitch] = useState(false);
    const isAuthenticated = useSelector((state) => state.profileSlice.isAuthenticated);

const dispatch = useDispatch();



    const signUp = async () => {
      const newData = {
        name,
        email,
        password,
      };
      try {
        const res = await postUserSignUp(newData);
        setResponse(res);
    
        if (res.status === 'OK') {
          alert('Account Created Successfully');
        } else if (res.status === 'error') {
          alert(res.message);
        }
      } catch (error) {
        console.error('Sign up failed:', error);
        alert('An error occurred during sign up.');
      }
    };


const logInSwitchFunc =()=>{
setLogInSwitch(false);
setSignUpSwitch(true);
}

const signUpSwitchFunc =()=>{
setSignUpSwitch(false);
setLogInSwitch(true);
}


const logIn = async () => {
  const newData = { email, password };

  try {
    const res = await postUserLogIn(newData);
    setResponse(res);
    // console.log(res);

    if (res.status === 'OK') {
      const tokenHold = {
        token: res.token,
        email: res.email,
        name: res.name,
        id: res.id,
      };
      dispatch(logInState());
      // navigation.navigate('userAccount', { tokenHold });
     setNewItems(tokenHold);
    dispatch(tokenGrab(tokenHold.token));
    
      try{
        const res1 = await getUserOrders(tokenHold.token);
        if(res1.status === 'OK'){ 
          
          dispatch(addOrder(res1.orders))
      }else if (res1.status === 'error'){
        alert(res1.message);
      }
    }catch(error){
      console.error('Get Orders failed:', error);
      alert('An error occurred during Get Orders.');
    }

    } else if (res.status === 'error') {
      alert(res.message);
    }
  } catch (error) {
    console.error('Login failed:', error);
    alert('An error occurred during login.');
  } 
  
 


};

  const signOut = () => {
dispatch(logOutState());
setNewItems('');

  }



    return (

      <View style={styles.container}>
        
        {isloading === true && isAuthenticated === false && (
          <ActivityIndicator style={styles.container} size="large" />
        )}
            
            {SignUpSwitch === true && (
        <View style={styles.container}>
          <View style={styles.categoryTitleBox}>
            <Text style={styles.categoryTitle}>Sign Up:</Text>
          </View>  

            <View style={styles.logInWindow}>
            
            <TextInput
            style={styles.textWindow}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
            style={styles.textWindow}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
            style={styles.textWindow}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={() => signUp()} />
            <Button title='Log In?' onPress={() => signUpSwitchFunc()} />
                </View> 
                </View>
)}

            

{LogInSwitch === true && isAuthenticated === false && (
        <View style={styles.container}>
          <View style={styles.categoryTitleBox}>
            <Text style={styles.categoryTitle}>Log In:</Text>
          </View>  

            <View style={styles.logInWindow}>
            
            <TextInput
            style={styles.textWindow}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
            style={styles.textWindow}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button style={styles.buttonBox} title="Log In" onPress={() => logIn()} />
            <Button title='Sign Up?' onPress={() => logInSwitchFunc()} />
            
                </View> 
                </View>
)}


{isAuthenticated === true &&
  <View style={styles.container}>
  <View style={styles.categoryTitleBox}>
    <Text style={styles.categoryTitle}>User Profile:</Text>
  </View>  
    <Text style={styles.textWindow}>Name:  {newItems.name}</Text>
   <Text style={styles.textWindow}>Email:  {newItems.email}</Text>
<Button title="Sign Out" onPress={() => signOut()} />
<Button title='Update Profile' />

</View>
}

  
  
  


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
        width: 230,
        padding:5,
        marginTop:5,
        textAlign: "center",
        borderWidth:1,
        






    }
  });
  