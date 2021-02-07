import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';


const DictionaryCard = (props) => {
    return (
        <TouchableOpacity onPress={() => props.nav.navigate('Dictionary')}>
        <View style={styles.card}>
            <View style={styles.closeBtn}>
             <Button title='X' color='#f08080'/>
            </View>
            <Text style={styles.text}>{props.name}</Text>
           
            <View>
            <Text style={styles.textSmall}>{props.description}</Text>   
            </View>
          
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
    width: 250,
    borderColor: '#0199a7',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 70,
    position: 'relative',
    margin: 10
    },
    closeBtn: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 40,
        
    },
    text: {
        textAlign: 'center'
    },
    textSmall: {
        fontSize: 11,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default DictionaryCard;