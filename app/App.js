import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

import {StackNavigator, TabNavigator} from 'react-navigation';

import BrowseScreen from './screens/BrowseScreen';
import OptionScreen from './screens/OptionScreen';
import CreateScreen from './screens/CreateScreen';

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
