import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

class RecentChatsScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome'
	};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Test Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }

	// Fetch some data from the API server
    componentWillMount() {
        fetch(Config.API_URL + '/acronym', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((json) => {
            console.log(json);
        }).catch((error) => {
            console.error(error);
        });
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

export default RecentChatsScreen;
