import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const DictionaryScreen = () => {

    return (
        <View style={styles.screen}>
       
            <View style={styles.word}>
                <Text style={styles.wordText}>makura - машина</Text>
                <View style={styles.btn}><Button title='x' color='red' /></View>
            </View>
            <View style={styles.word}>
                <Text style={styles.wordText}>neko - кот</Text>
                <View style={styles.btn}><Button title='x' color='red' /></View>
            </View>
            <View style={styles.word}>
                <Text style={styles.wordText}>watashi - я</Text>
                <View style={styles.btn}><Button title='x' color='red' /></View> 
            </View>
        
        
        </View>
    )
}

DictionaryScreen.navigationOptions = navData => ({
    headerTitle: 'Japanese',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Exerciese' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer() } />
    </HeaderButtons>)
})

const styles = StyleSheet.create({
    screen: {
        textAlign: 'center',
        padding: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 20
    },
    word: {
        paddingTop: 40,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    wordText: {
        fontSize:20
    },
    btn: {
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 150
    }
   
})

export default DictionaryScreen;
