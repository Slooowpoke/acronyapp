import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import Config from 'react-native-config'

class Footer extends React.Component {

    componentWillMount() {}

    render() {
        return (
            <View>
                <Text onPress={() => this.props.navigation.navigate('Options')}>Help and Feedback</Text>
            </View>
        );
    }
}

export default Footer;
