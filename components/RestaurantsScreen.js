import React from 'react'
import axios from 'axios'
import { View, TextInput, Button, FlatList, Text } from 'react-native'
import RestoItem from "./RestoItem";


class RestaurantsScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            dataSource: []
        }


    }

    componentDidMount() {
        console.log('componentDidMount');

        const url = 'https://diffuseur.datatourisme.gouv.fr/webservice/538799b6af8c7e3f5ada7b5df196ad7d/f7a910eb-4c42-43fd-bdf8-e9257ccb9d2f';

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
                    renderItem={({item}) => <RestoItem resto={item} navigation={this.props.navigation} />}
                    keyExtractor={(item) => item['@id'].toString()}
                    numColumns={2}
                />
            </View>
        )
    }
}

export default RestaurantsScreen;
