



// export async function jeweleryItems() {

   
//     const url = 'https://fakestoreapi.com/products/category/jewelery';
        
//           const res = await fetch(url);
//           const data = await res.json();
        
        
//       return data;
//     }





// const jeweleryurl = 'https://fakestoreapi.com/products/category/jewelery';

//     export async function saveData(MyData, key) {
//         try {
//         //   const existingData = await loadData();
      
//         //   const dataArray = Array.isArray(existingData) ? existingData : [];
      
//         //   dataArray.push(MyData);
      
//           const str = JSON.stringify(MyData);
      
//           await AsyncStorage.setItem(str, key);
//         } catch (e) {
//           console.log(`fail to save data`, e);
//         }
//       }
      

// const jeweleryData = saveData(jeweleryurl, 'JeweleryCat')



// export const loadData = async () => {
//     try {
//       const str = await AsyncStorage.getItem(key);
//       if (str != null) {
//         const MyData = JSON.parse(str);
//         return MyData;
//       }
//       return (dummyarry = []);
//     } catch (e) {
//       console.log(`fail ${key} `, e);
//       return console.log("error");
//     }
    
//   };
  
// console.log(loadData('JeweleryCat'))

// console.log(jeweleryData)