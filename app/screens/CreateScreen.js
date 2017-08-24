import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

import AcronymInput from '../components/AcronymInput'

import Header from '../components/Header'
import Footer from '../components/Footer'

class CreateScreen extends React.Component {
	static navigationOptions = {
		title: 'Create',
		header: null,
		tabBarPosition: 'bottom'
	};

	state = {
		acronym:'',
		meaning:'',
		context:'',

	}

    render() {
        return (
            <View>
				<Header />

				<AcronymInput onChange={this.onInputChange.bind(this)} meaningInput={true}/>

				<Button/>

				<Footer />
            </View>
        );
    }

	onInputChange(acronym, context,meaning){
		// Search for context and acronym here
		console.log(acronym);
		console.log(context);
		console.log("---");
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
