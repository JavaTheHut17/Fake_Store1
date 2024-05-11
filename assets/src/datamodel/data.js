

import AsyncStorage from "@react-native-async-storage/async-storage";
const key = 'allData';
const url = 'https://fakestoreapi.com/products';

export async function dataload(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log('data fetch', error);
      return null;
    }
  }

  export async function saveData(MyData, key) {
    const str = JSON.stringify(MyData);
    try {
      await AsyncStorage.setItem(key, str); 
      console.log('saveddata:', MyData)
    }catch{
        console.log('failed to save data');
    }
}

export async function loadData(key){
    try{
        str = await AsyncStorage.getItem(key);
        if(str!=null){
            const MyData = JSON.parse(str);
            
            return MyData;
        }
    }catch{
        console.log('failed to load data');
    }

};


