import { StatusBar } from 'expo-status-bar';
import  React,{useState}from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View ,SafeAreaView,TextInput} from 'react-native';

//https://restcountries.com/v2/


export default function App() {
const [countryName,setCoutryName]=useState("");

  const renderCountry=function(data){
    return(
      <View>
   <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Title>{data.name}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: `${data.flags.png}`}} />
      <Card.Actions>
        <Button icon="" mode="outlined">Cancel</Button>
        <Button icon="" mode="contained">Get nabour Country</Button>
      </Card.Actions>
    </Card>
  
      </View>
    )
  }
  const getCountryData=function(country){
    const request=fetch(`https://restcountries.com/v2/name/${country}`)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data[0]);
    })
  
  }
  getCountryData("portugal");
  
const handleSearch=function(data=""){
  if(data==="")return alert("insert a countries name")
 return renderCountry(data);
}


// console.log(handleSearch(countryName));

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.searchbar}>
      <TextInput
      placeholder='Search Buy Name'
      onChangeText={setCoutryName}
      style={{color:"white"}}
      />
  <Button icon="click" mode="contained" style={{height:"50px"}} onPress={()=>handleSearch(countryName)}>Search</Button>
      </View>
  <View>{}</View>
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
