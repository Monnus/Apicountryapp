import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect}from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View ,SafeAreaView,TextInput} from 'react-native';
import SetCard from './assets/components/countryCard';
//https://restcountries.com/v2/


export default function App() {
const [countryName,setCoutryName]=useState("");
const [data,getData]=useState([]);
const [execute,SetExecuted]=useState(false);
 
const getDataFromApi=async function (country){
  const request=await fetch(`https://restcountries.com/v2/name/${country}`);
const data =await request.json();
getData(data);

}
useEffect(()=>{
if(execute){

  return getDataFromApi(countryName)

}
 
},[execute])

useEffect(()=>{
  setInterval(() => {
    SetExecuted(false);
  }, 8000);
},[execute])
console.log(execute);
console.log(data);
 
function handleSearch(){
  SetExecuted(true);
}

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.searchbar}>
      <TextInput
      placeholder='Search Buy Name'
      onChangeText={setCoutryName}
      style={{color:"white"}}
      />
  <Button icon="click" mode="containe" onPress={()=>handleSearch()}>Search</Button>
      </View>
  <View style={{flex:3,width:"100%"}}>

<SetCard data={data}/>
  </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 0, 51,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar:{
  flexShrink:2,
  justifyContent:"space-between",
   width:"100%",
    backgroundColor:"navy",
    flexDirection:"row",
   alignItems:"center"
  },

  cardColor:{

  }
})