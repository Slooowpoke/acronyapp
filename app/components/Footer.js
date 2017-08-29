import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import Config from 'react-native-config'

class Footer extends React.Component {

    componentWillMount() {}

    render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.feedback} onPress={() => this.props.navigation.navigate('Options')}>Help and Feedback</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	footer:{
		marginBottom:15,
	},
	feedback:{
		textAlign:'center',
	}
});

export default Footer;
