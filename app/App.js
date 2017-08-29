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

import {StackNavigator, TabNavigator} from 'react-navigation';

import BrowseScreen from './screens/BrowseScreen';
import OptionScreen from './screens/OptionScreen';
import CreateScreen from './screens/CreateScreen';

global.industries = [];
global.industries.push({name: 'General'});

const MainScreenNavigator = TabNavigator({
    Browse: {
        screen: BrowseScreen
    },
    Create: {
        screen: CreateScreen
    }
}, {tabBarPosition: 'bottom'});

const ApplicationNavigator = StackNavigator({
    Primary: {
        screen: MainScreenNavigator
    },
    Options: {
        screen: OptionScreen
    }
});

AppRegistry.registerComponent('DemoProject', () => ApplicationNavigator);
