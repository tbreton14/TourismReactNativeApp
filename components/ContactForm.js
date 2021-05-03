import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import { Text, Button, TextInput, View } from 'react-native'

class ContactForm extends Component {
    render() {
        return (
            <View style={{padding: 15}}>
                <Field
                    name="firstName"
                    label="firstName"
                    placeholder="Prénom"
                    textContentType="firstName"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    style={{backgroundColor: 'white', paddingLeft: 15, height: 40, marginBottom: 15}}
                />
                <Field
                    name="lastName"
                    placeholder="Nom"
                    textContentType="lastName"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    style={{backgroundColor: 'white', paddingLeft: 15, height: 40, marginBottom: 15}}
                />
                <Field
                    name="email"
                    placeholder="Email"
                    textContentType="email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    style={{backgroundColor: 'white', paddingLeft: 15, height: 40, marginBottom: 15}}
                />
                <Field
                    name="message"
                    placeholder="Message"
                    textContentType="message"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    multiLine={true}
                    rows={5}
                    style={{backgroundColor: 'white', paddingLeft: 15, height: 200, marginBottom: 15}}
                />
                <Button title="Submit" full warning rounded onPress={this.props.handleSubmit}>

                </Button>
            </View>
        )
    }
}

export default reduxForm({
    form: "contact",
})(ContactForm);
