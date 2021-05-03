import React from 'react'
import {View, TextInput, Button, FlatList, Text, ImageBackground, TouchableOpacity} from 'react-native'


class RestoItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        let resto = this.props.resto;
        const { navigate } = this.props.navigation;

        //Affichage conditionnel de la streetAdress
        let streetAddress = null;
        if(resto.hasOwnProperty("hasContact")) {
            let hasContact = resto["hasContact"];
            if(hasContact.hasOwnProperty("schema:address")) {
                let schemaAddress = resto["hasContact"]["schema:address"];
                if(schemaAddress.hasOwnProperty("schema:streetAddress")) {
                    streetAddress = schemaAddress["schema:streetAddress"];
                }
            }
        }

        return (
            <View style={{height: 50, width: '50%', borderWidth: 0.5, borderColor: '#d7d7d7', margin: 5}}>
                <TouchableOpacity style={{height: '100%', width: '100%', alignItems:'center', justifyContent: 'center'}} onPress={() => navigate('RestaurantsDetailsScreen',{restoDetails:resto})}>
                    <Text style={{textAlign: 'center'}}>{resto['rdfs:label']['@value']}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default RestoItem;
