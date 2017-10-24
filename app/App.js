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

import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';

// Import our screens

import BrowseScreen from './screens/BrowseScreen';
import OptionScreen from './screens/OptionScreen';
import CreateScreen from './screens/CreateScreen';
import NotificationScreen from './screens/NotificationScreen';

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
    },
    Notification: {
        screen: NotificationScreen
    }
});

class App extends React.Component {
	componentWillMount(){
		global.alert = {visibility: true, message: "App has begun."}
		this.setState({alerts: global.alerts});

		global.industries = [];
		global.industries.push("General");
	}

	constructor(props) {
        super(props)

        this.state = {
            alert:global.alert,
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ApplicationNavigator ref={nav => {
                    this.navigator = nav;
                }} />
            </View>
        );
    }
}

AppRegistry.registerComponent('DemoProject', () => App);
