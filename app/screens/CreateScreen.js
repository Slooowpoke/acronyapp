import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

import AcronymInput from '../components/AcronymInput'

import Header from '../components/Header'
import Footer from '../components/Footer'

class CreateScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
		const {state, setParams, navigate} = navigation;
		return {
			headerRight: (
				<TouchableOpacity onPress={() => navigate('Options')}>
					<Icon name="ios-options" style={{marginRight:20}} size={30} color='#000'/>
				</TouchableOpacity>
			),
			tabBarIcon: ({tintColor, focused}) => (<Icon name="ios-create" size={30} color={focused ? "#ddd" : "#eee"}/>),
			showIcon: true,
			showLabel: false,
		}
    };

	state = {
		acronym:'',
		meaning:'',
		context:'',

	}

    render() {
        return (

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
