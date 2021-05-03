import React from 'react'
import axios from 'axios'
import { View, TextInput, Button, FlatList, Text } from 'react-native'
import RestoItem from './RestoItem'
import getRestaurantsCalvados from '../api/DataTourismeAPI'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this._restos = []

        this.offset = 0;
        this.state = {
            loading: true,
            fetching_from_server: false,
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
                    isLoading: false,
                    page: 0,
                    dataSource: dataJson['@graph']
                }, function() {
                    //this.addRecords(0);
                })
            })
            .catch((error) => console.error(error))

    }



    render() {

        return (

            //On retourne quelque chose
            <View>
                <TextInput style={styles.textinput} placeholder='Rechercher un restaurant'/>
                <Button title='Rechercher' onPress={()=>{}}/>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <RestoItem resto={item}/>}
                    keyExtractor={(item) => item['@id'].toString()}
                    onEndReached={this.onScrollHandler}
                    onEndThreshold={0}
                />
            </View>
        )
    }

    addRecords = (page) => {
        console.log('addRecords');
        // assuming this.state.dataPosts hold all the records
        const newRecords = []
        for(var i = page * 12, il = i + 12; i < il && i <
        this.state.dataSource.length; i++){
            newRecords.push(this.state.dataSource[i]);
        }
        this.setState({
            dataSource: [this.state.dataSource, newRecords]
        });
    }

    onScrollHandler = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.addRecords(this.state.page);
        });
    }


}



const styles = {
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
}

export default Search;
