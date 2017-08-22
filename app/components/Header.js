import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import Config from 'react-native-config'

class Header extends React.Component {

    componentWillMount() {}

    render() {
        return (
            <View>
				<Button onPress={() => this.props.navigation.navigate('Options')} title="Options"/>

                <Text>This is a header</Text>
            </View>
        );
    }
}

export default Header;
