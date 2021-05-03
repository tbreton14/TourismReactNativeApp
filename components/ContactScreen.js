import React from 'react'
import axios from 'axios'
import { View, TextInput, Button, FlatList, Text, Platform, Linking } from 'react-native'
import ContactForm from "./ContactForm";

class ContactScreen extends React.Component {

    submit = values => {
        // print the form values to the console
        console.log(values)

        alert("Votre message a été envoyé")
    }

    render() {

        const { email } = this.props.route.params;
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>Formulaire de contact</Text>
                <View style={{flex: 1, marginTop: 50}}>
                    <ContactForm onSubmit={this.submit} />
                </View>
            </View>
        )
    }


}

export default ContactScreen;
