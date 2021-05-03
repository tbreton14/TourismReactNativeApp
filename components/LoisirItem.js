import React from 'react'
import {View, TextInput, Button, FlatList, Text, ImageBackground, TouchableOpacity} from 'react-native'

class LoisirItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        let loisir = this.props.loisir;
        const { navigate } = this.props.navigation;

        return (
            <View style={{height: 50, width: '50%', borderWidth: 0.5, borderColor: '#d7d7d7', margin: 5}}>
                <TouchableOpacity style={{height: '100%', width: '100%', alignItems:'center', justifyContent: 'center'}} onPress={() => navigate('LoisirsDetailsScreen')}>
                    <Text style={{textAlign: 'center'}}>{loisir['rdfs:label']['@value']}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoisirItem;
