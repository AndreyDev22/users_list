import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const StyleHomeScreen = ({ item }) => {
    return (
        <View style={styles.cardView}>

            <Text style={styles.name}> {item.name['first']} {item.name['last']} </Text>

            <Text 
                style={styles.email}>{ item.email }
            </Text>

            <Text 
                style={styles.country}>Country | { item.location['country'] }
            </Text>
            <Text style={styles.date}> { item.registered['age'] } days ago</Text>

            <Image style={styles.image} source = {{uri: item.picture['large']}} />

        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        height: height*0.165,
        margin: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        

    },
    image: {
        width: width * 0.2,
        height: height/7,
        marginLeft: width * 0.02,
        // marginRight: width * 0.1,
        marginVertical: height * 0.01,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: -84
    }, 
    name: {
        // width: width,
        color: 'black',
        fontSize: 17,
        marginHorizontal: 85,
        marginVertical: 3,
        // marginLeft: 30,
        top: -90
        
    },
    email: {
        width: width,
        color: 'black',
        fontSize: 15,
        marginHorizontal: 90,
        marginVertical: 18,
        top: -90
    },
    country: {
        width: width,
        color: 'black',
        fontSize: 15,
        marginHorizontal: 90,
        marginVertical: -18,
        top: -90

    },
    date: {
        width: width,
        color: 'black',
        fontSize: 11,
        marginHorizontal: 295
        
        
        
        
        
    }
})

export default StyleHomeScreen