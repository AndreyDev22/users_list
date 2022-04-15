import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';


const DetailsScreen = function({navigation, route}) {
    // const { itemId, otherParam } = route.params;
    return (
        <View>
          <Image />
          <Text style={{marginTop: 30, fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>{route.params.name['first']} {route.params.name['last']}</Text>
          <Text style={{textAlign: 'center'}}>Email: {route.params.email}</Text>
          <Text style={{textAlign: 'center'}}>Date joined: {route.params.registered['age']} days ago</Text>
          <Text style={{textAlign: 'center'}}>DOB: {route.params.dob['date']}</Text>
          <Text style={{marginTop: 20, textAlign: 'center', fontWeight: 'bold'}}>LOCATION</Text>
          <Text style={{textAlign: 'center'}} >City: {route.params.location['city']}</Text>
          <Text style={{textAlign: 'center'}}>State: {route.params.location['state']}</Text>
          <Text style={{textAlign: 'center'}}>Country: {route.params.location['country']}</Text>
          <Text style={{textAlign: 'center'}}>Postcode: {route.params.location['postcode']}</Text>
        </View>
    );
}



export default DetailsScreen

