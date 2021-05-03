import React from 'react'
import { View, TextInput, Button, FlatList, Text } from 'react-native'
import axios from "axios";
import HotelItem from "./HotelItem";


class HotelsScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dataSource: []
        }


    }

    componentDidMount() {
        console.log('componentDidMount');

        const url = 'https://diffuseur.datatourisme.gouv.fr/webservice/7f3dd3d42fbfb9cda7020146dc48828a/f7a910eb-4c42-43fd-bdf8-e9257ccb9d2f';

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
                    renderItem={({item}) => <HotelItem hotel={item} navigation={this.props.navigation} />}
                    keyExtractor={(item) => item['@id'].toString()}
                    numColumns={2}
                />
            </View>
        )
    }
}

export default HotelsScreen;
