import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

class ChatScreen extends React.Component {
	static navigationOptions = {
		title: 'Options'
	};

	state = {
		counter:0,
	};

	componentWillMount(){

	}

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>


            </View>
        );
    }
}

export default ChatScreen;
