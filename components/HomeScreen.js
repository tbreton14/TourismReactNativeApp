import React from 'react'
import {
    View,
    TextInput,
    Button,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native'
import Icon from "react-native-elements/dist/icons/Icon";
import {StatusBar} from "expo-status-bar";


class HomeScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                    backgroundColor: "white",
                    width: '100%'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{height: 20, width: 20, marginRight: 10}} source={require("../assets/logo.jpg")}/>
                        <Text style={{fontSize: 16}}>Tourisme Calvados</Text>
                    </View>
                    <Icon size={16} name='search' type='font-awesome'/>
                </View>
                <View style={{flex: 1, backgroundColor: "#f5f5f5", borderTop: '1px solid #d7d7d7'}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantsScreen')}
                                          style={styles.homeButton}>
                            <View style={styles.viewHomeText}>
                                <Text style={{fontSize: 30, color: '#FFFFFF'}}>Restaurants</Text>
                            </View>
                            <ImageBackground source={require("../assets/restaurants.jpg")} style={styles.homeImage}
                                             resizeMode='cover'/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HotelsScreen')} style={styles.homeButton}>
                            <View style={styles.viewHomeText}>
                                <Text style={{fontSize: 30, color: '#FFFFFF'}}>Hébergements</Text>
                            </View>
                            <ImageBackground source={require("../assets/hotels.jpg")} style={styles.homeImage}
                                             resizeMode='cover'/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoisirsScreen')}
                                          style={styles.homeButton}>
                            <View style={styles.viewHomeText}>
                                <Text style={{fontSize: 30, color: '#FFFFFF'}}>Activités</Text>
                            </View>
                            <ImageBackground source={require("../assets/loisirs.jpg")} style={styles.homeImage}
                                             resizeMode='cover'/>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="auto"/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text1: {
        fontSize: 40
    },
    homeButton: {
        height: '100%',
        backgroundColor: '#000000',
    },
    viewHomeText: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 1000,
        textAlign: 'center'
    },
    homeImage: {
        flex: 1,
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        opacity: 0.6,
        //backgroundColor: 'rgba(0,0,0,0.9)',
        height: '100%',
        width: '100%',
        zIndex: 900
    },

});

export default HomeScreen;
