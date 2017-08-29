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

    saveAcronym() {
        // We can only do this if all the data is here
        if (this.state.meaning && this.state.context && this.state.acronym && this.state.description) {

            // We have all the data that we need
            // Proceed with saving

            // Create our acronym
            let data = {
                acronym: this.state.acronym,
                context: this.state.context,
                meaning: this.state.meaning,
                description: this.state.description,
                industries: global.industries
            };
            console.log("Saving");

            // Save the acronym
            NP.store('acronym', data).then((response) => {
                console.log(response);

                // After we have saved the acronym we can do fun things here.
                // Such as showing a toast

                this.setState({clearInput: true});

            });

        }
    }

    resetClearInput() {
        this.setState({clearInput: false});
    }

    onInputChange(acronym, context, meaning, description) {
        // Save the inputs to our state
        this.setState({acronym: acronym, context: context, meaning: meaning, description: description});
        console.log(this.state);
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flex: 1,
        flexGrow: 1,
        justifyContent: 'space-between',
    }
});

export default CreateScreen;
