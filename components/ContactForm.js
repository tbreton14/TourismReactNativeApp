import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'

class ContactForm extends React.Component {
    render() {
        const {
            fields: { firstName, lastName, email, message },
            handleSubmit
        } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <Field name="message" component="input" type="textarea" />
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'contactForm',
    fields: ['firstName', 'lastName', 'email', 'message']
})(MyForm)
