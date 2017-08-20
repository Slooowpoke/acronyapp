import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({title: `Chat with ${navigation.state.params.user}`});
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

export default ChatScreen;
