import React from 'react'
import { View, TextInput, Button, FlatList, Text } from 'react-native'
import axios from "axios";
import LoisirItem from "./LoisirItem";


class LoisirsScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dataSource: []
        }


    }

    componentDidMount() {
        console.log('componentDidMount');

        const url = 'https://diffuseur.datatourisme.gouv.fr/webservice/9f01f74109cc3d028f6e3ed2e4dd4994/f7a910eb-4c42-43fd-bdf8-e9257ccb9d2f';

        axios.get(url)
            .then((responseJson) => {
                let dataJson = responseJson.data;
                //console.log(dataJson['@graph']);
                this.setState({
                    dataSource: dataJson['@graph']
                }, function() {
                    //this.addRecords(0);
                })
            })
            .catch((error) => console.error(error))

    }


    render() {

        return (
            <View style={{flex: 1, paddingLeft: 5, paddingRight: 5}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <LoisirItem loisir={item} navigation={this.props.navigation} />}
                    keyExtractor={(item) => item['@id'].toString()}
                    numColumns={2}
                />
            </View>
        )
    }
}

export default LoisirsScreen;
