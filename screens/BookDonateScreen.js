import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View , Text,Button,Image} from 'react-native';
import {  ListItem,  Icon } from 'react-native-elements'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
//import { Card } from 'react-native-paper';
//import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');

export default class BookDonateScreen extends React.Component {
  render() {
    return (

      <View style={{flex:1,backgroundColor:"#021710"}}>
        <ScrollView horizontal={true}>
     <Card style={{padding: 10,marginTop:10,backgroundColor:"#021710",color:"#82152b"}}
     isDark>
          <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50 }}
           
           title ="EmergencyIssues"
           source={require('../assets/images.png')}
        />
             <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50 }}
            title ="SecurityIssues"
            source={{ uri:"data:image/jpeg;base64,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"}}
          />
            <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50 }}
           
           title ="Maintainence issues"
           source={{ uri:"data:image/jpeg;base64,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"}}
          />
           <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50}}
           
           title ="PowerIssues"
           source={{ uri:"data:image/jpeg;base64,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" }}
          />
         
    
   
 
</Card>

</ScrollView>
</View>
 );
}
}

const styles = StyleSheet.create({
home: {
  width: width, 
  backgroundColor:"teal"   
},
search: {
  height: 48,
  width: width - 32,
  marginHorizontal: 16,
  borderWidth: 1,
  borderRadius: 3,
},
paragraph: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 20
},
header: {
  backgroundColor: "white",
  shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 2
  },
  
  shadowRadius: 8,
  shadowOpacity: 0.2,
  elevation: 4,
  zIndex: 2,
},
tabs: {
  marginBottom: 24,
  marginTop: 10,
  elevation: 4,
},
tab: {
 
  width: width * 0.50,
  borderRadius: 0,
  borderWidth: 0,
  height: 24,
  elevation: 0,
},
tabTitle: {
  lineHeight: 19,
  fontWeight: '300'
},
divider: {
  borderRightWidth: 0.3,
  
},
products: {
  width: width - 50 * 2,
  paddingVertical:50 * 2,
},

productTitle: {
  flex: 1,
  flexWrap: 'wrap',
  paddingBottom: 6,
},
productDescription: {
  padding: 50,
},
imageStyles:
{
width:200,
height:200
},
shadow: {
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  shadowOpacity: 0.1,
  elevation: 2,
},
imageContainer: {
  elevation: 1,
},
});