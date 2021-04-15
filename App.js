import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Search from './components/Search';
import { Icon } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import RestaurantsScreen from './components/RestaurantsScreen';
import RestaurantsDetailsScreen from './components/RestaurantsDetailsScreen';
import LoisirsScreen from './components/LoisirsScreen';
import HotelsScreen from './components/HotelsScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} options={{ title: 'Liste des restaurants' }} />
                <Stack.Screen name="RestaurantsDetailsScreen" component={RestaurantsDetailsScreen} options={{ title: 'Détails' }} />
                <Stack.Screen name="HotelsScreen" component={HotelsScreen} options={{ title: 'Liste des hébergements' }} />
                <Stack.Screen name="LoisirsScreen" component={LoisirsScreen} options={{ title: 'Liste des activités' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
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

export default App;
