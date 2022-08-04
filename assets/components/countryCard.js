import { View,Text,StyleSheet } from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';






export default function  SetCard({data}){
function noData(){
    return (
        <View style={styles.container}>

            <Text styel={styles.containerTxt}>Search for a country</Text>

        </View>
    )
}

return (
    <View style={styles.cardView}>
{data==false?noData():data.map(item=>{
return(
     <Card key={item.name + "Flag"} mode="outlined">
    <Card.Cover source={{ uri: `${item.flags.png}` }} />
    <Card.Title title={item.name + "Flag"}   />
    <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph>
        Welcom to {item.name}, we are a country with a population of {item.population},
      {item.capital? `our capitals name is ${item.capital}`:"we dont have a capital"}, our countries name is 
      spelled {item.altSpellings?item.altSpellings.join(" , "):"no other way"}

{item.currencies[0]==true?`our currency symbol looks like ${item.currencies[0].symbol}`:""}
      </Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
  </Card>
)
})}

</View>
)
    
}

const styles=StyleSheet.create({
cardView:{
    
    width:"70%",
    height:400,
   backgroundColor:"rgba(138, 0, 230, 0.5)"
},

    container:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        alightItems:"center",
     
        backgroundColor:"#F5F5f5"

    },
    containerTxt:{
        fontSize:30,
        fontWeight:500,
        alignSelf:"center"
    }
})