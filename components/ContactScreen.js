import React from 'react'
import axios from 'axios'
import { View, TextInput, Button, FlatList, Text, Platform, Linking } from 'react-native'
import { Field, reduxForm } from 'redux-form'

class ContactScreen extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const { email } = this.props.route.params;
        const { navigate } = this.props.navigation;


        return (
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>Formulaire de contact</Text>
                <View style={{flex: 1, marginTop: 50}}>
                    <form onSubmit={() => ""}>

                        <button type="submit">Submit</button>
                    </form>
                </View>
            </View>
        )
    }


}

export default ContactScreen;
