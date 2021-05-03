import React from 'react'
import axios from 'axios'
import { View, TextInput, Button, FlatList, Text, Platform, Linking } from 'react-native'

class RestaurantsDetailsScreen extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const { restoDetails } = this.props.route.params;
        const { navigate } = this.props.navigation;

        //Affichage conditionnel du téléphone
        let phone = null;
        let phoneText = null;
        if(restoDetails.hasOwnProperty("hasContact")) {
            let hasContact = restoDetails["hasContact"];
            if(hasContact.hasOwnProperty("schema:telephone")) {
                phoneText = hasContact["schema:telephone"];
            }
        }

        //Affichage conditionnel du téléphone
        let email = null;
        if(restoDetails.hasOwnProperty("hasContact")) {
            let hasContact = restoDetails["hasContact"];
            if(hasContact.hasOwnProperty("schema:email")) {
                email = hasContact["schema:email"];
            }
        }

        return (
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>{restoDetails['rdfs:label']['@value']}</Text>
                <View style={{flex: 1, marginTop: 50}}>
                    <Text style={{textAlign: 'left', fontWeight: 'bold', textDecorationLine: 'underline'}}>Coordonnées</Text>
                    <Text onPress={()=>{Linking.openURL(`tel:${phoneText}`);}}>{phoneText}</Text>
                </View>
                <View style={{flex: 1, marginTop: 20, textAlign: 'center'}}>
                    <Button title='Contactez-nous' onPress={()=> navigate('ContactScreen',{email:email})}/>
                </View>
            </View>
        )
    }


}

export default RestaurantsDetailsScreen;
