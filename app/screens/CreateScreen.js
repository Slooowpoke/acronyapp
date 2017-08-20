import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

import AcronymInput from '../components/AcronymInput'

class CreateScreen extends React.Component {
	static navigationOptions = {
		title: 'Create',
		header: null,
		tabBarPosition: 'bottom'
	};

    render() {
        return (
            <View>
                <Text>List of all Tes</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default CreateScreen;
