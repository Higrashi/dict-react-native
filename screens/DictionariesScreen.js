import React from 'react';
import {View, FlatList, ScrollView, StyleSheet, Button} from 'react-native';
import DictionaryCard from '../components/DictionaryCard';
import {dictJap} from '../data';
const DictionariesScreen = (props) => {

    return (
        <View style={styles.screen}>
            <ScrollView>
                <Button title='To Dectionary' onPress={() => props.navigation.navigate('Dictionary')} />
             
              <DictionaryCard name='Japanese' description='random japadese words' nav={props.navigation}/>
              <DictionaryCard name='Italian' description='random italian words' nav={props.navigation}/>
              <DictionaryCard name='Arabic' description='random arabic words' nav={props.navigation}/>
              <DictionaryCard name='Norwegian' description='random norwegian words' nav={props.navigation}/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
        borderColor: 'red',
        borderWidth: 2
    }
})


export default DictionariesScreen;