import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, Dimensions, Switch} from 'react-native';

import Config from 'react-native-config'

import Footer from '../components/Footer'

global.dimensions = {width, height} = Dimensions.get('window');

class NotificationScreen extends React.Component {
    constructor(props){
        super(props);

    	this.state = {};
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View style={[styles.container, {minHeight:global.dimensions.height}]}>
                <Text>{navigate.state.params.text}</Text>

				<Footer/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flex: 1,
        flexGrow: 1,
		justifyContent:'space-around'
    },
	header:{
		fontSize: 18,
		marginTop:30,
		textAlign:'center',
		fontFamily: 'Ubuntu'
	},
});

export default NotificationScreen;
