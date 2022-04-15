import React, {useState, useEffect} from 'react'
import { TouchableOpacity, View, FlatList } from 'react-native'
import newAPI from '../APIs/MyAPI'
import StyleHomeScreen from './StyleHomeScreen'
import DetailsScreen from './DetailsScreen'

const HomeScreen = ({navigation}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsersFromAPI()
    }, [])


    function getUsersFromAPI() {
        newAPI.get('?results=100')
        .then(function(response) {
            setUsers(response.data);
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    if (!users) {
        return null
    }

    return (
        <View>
            <FlatList 
                data = {users.results}
                keyExtractor = {(item, index) => 'key' + index}
                renderItem = {({item}) =>
            
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <StyleHomeScreen item = {item}/>
                </TouchableOpacity>

                }
            />
        </View>
    )



}

export default HomeScreen