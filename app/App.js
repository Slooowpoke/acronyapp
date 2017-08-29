import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions
} from 'react-native';

// Import our config

import Config from 'react-native-config'

// Import our navigation

import {StackNavigator, TabNavigator} from 'react-navigation';

// Import our screens

import BrowseScreen from './screens/BrowseScreen';
import OptionScreen from './screens/OptionScreen';
import CreateScreen from './screens/CreateScreen';

import StatusBarAlert from 'react-native-statusbar-alert'

// Declare some globals, TODO check if these globals are pulled through or whether they have to be in the react instance first
global.dimensions = {
    width,
    height
} = Dimensions.get('window');
global.suitableForWork = false;

const MainScreenNavigator = TabNavigator({
    Browse: {
        screen: BrowseScreen
    },
    Create: {
        screen: CreateScreen
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true
    }
});

const ApplicationNavigator = StackNavigator({
    Primary: {
        screen: MainScreenNavigator
    },
    Options: {
        screen: OptionScreen
    }
});

class App extends React.Component {
	componentWillMount(){
		global.alerts = [];
		global.alerts.push({message: "Hello, app has begun.", visibility:true});
		this.setState({alerts: global.alerts});
	}

    someEvent() {
        // call navigate for AppNavigator here:
        this.navigator && this.navigator.dispatch({type: 'Navigate', routeName, params});
    }

	constructor(props) {
        super(props)

        this.state = {
            alerts:global.alerts,
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBarAlert
					visible={global.alerts[0].visibility}
					message={global.alerts[0].message}
					backgroundColor="#3CC29E"
					color="white"
					onPress={() => this.closeAlert()}/>
                <ApplicationNavigator ref={nav => {
                    this.navigator = nav;
                }}/>
            </View>

        );
    }

	closeAlert(){
		let temp = this.state.alerts;
		temp[0].visibility = false;
		this.setState({alerts: temp});
		global.alerts = temp;
	}
}

AppRegistry.registerComponent('DemoProject', () => App);
