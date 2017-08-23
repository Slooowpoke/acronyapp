import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ListView
} from 'react-native'

import Config from 'react-native-config'

import NP from '../helper/NetworkProvider'

import AcronymInput from '../components/AcronymInput'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Suggestions '../components/Suggestions'


class BrowseScreen extends React.Component {
    static navigationOptions = {
        title: 'Browse',
        header: null
    };

    state = {
        data: null
    }

    constructor() {
        super();
    }

    componentWillMount() {
		// Load all acronyms, change this later.
        NP.search('acronym').then((response) => {

			// Load the data for ListView
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.setState({data:ds.cloneWithRows(response)});
        });
    }

    render() {
        return (
            <View>
				<Header />

				<AcronymInput onChange={this.onInputChange}/>

				<Suggestions></Suggestions>

				<Footer />
            </View>
        );
    }

	onInputChange(acronym, context){
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

export default BrowseScreen;
