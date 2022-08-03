import { Appbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import  React,{useState,useEffect}from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View ,SafeAreaView,TextInput} from 'react-native';

//https://restcountries.com/v2/


export default function App() {
const [countryName,setCoutryName]=useState("");
const [display,setDisplay]=useState({})
const [text,setText] =useState("")


 const getCountryData= function(country){
  const response= fetch(`https://restcountries.com/v2/name/${country}`)
  .then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data[0]);
    return data[0]
  })

  
  return response;
 
  }
  
  getCountryData("portugal")

  function displayCountry(data){

    return(
      <View>
         <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
      <Title>{data.name}</Title>
      <Paragraph>
        {data.name} is country that speakes {data.languages[0].nativeName},
        {data.name} region is {data.regiion}
      </Paragraph>
       </Card.Content>
        <Card.Cover source={{ uri: `${data.flags.png}` }} />
       <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
      </Card>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
       <Appbar.Header style={{marginTop:40, backgroundColor:'blue'}}>
      
      <Appbar.Content title="Home" />
      
    </Appbar.Header>
     <View style={styles.searchbar}>
      <TextInput
      placeholder='Search Buy Name'
      onChangeText={setCoutryName}
      style={{color:"white"}}
      />
              <Button icon="search" mode="contained" style={{height:"50px"}} onPress={()=>setDisplay(true)}>Search</Button>
      </View>
                  <View>

                  </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
});
