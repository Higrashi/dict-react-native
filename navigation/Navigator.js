import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DictionariesScreen from '../screens/DictionariesScreen';
import DictionaryScreen from '../screens/DictionaryScreen';
import WriteWordScreen from '../screens/WriteWordScreen';
import BuildWordScreen from '../screens/BuildWordScreen';
import GuessCardScreen from '../screens/GuessCardScreen';
import Colors from '../constants/constants';

const dictionaryOptions = {
    
    headerStyle: {
        backgroundColor: '#00BFFF',
    },
    headerTitleStyle: {
        textAlign: 'center'
    }
   
}

const Navigator = createStackNavigator({

    Dictionaries:DictionariesScreen,
    Dictionary: {
        screen:  DictionaryScreen,
        navigationOptions: dictionaryOptions
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }
})

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Navigator
    },
    WriteWord: {
        screen: WriteWordScreen
    },
    BuildWord: {
        screen: BuildWordScreen
    },
    GuessWord: {
        screen: GuessCardScreen
    }
})

export default createAppContainer(DrawerNavigator);