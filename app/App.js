import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import Config from 'react-native-config'

import {StackNavigator, TabNavigator} from 'react-navigation';

import RecentChatsScreen from './screens/RecentChatsScreen';
import ChatScreen from './screens/ChatScreen';

class AllContactsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})} title="Chat with Lucy"/>
            </View>
        );
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {
        screen: RecentChatsScreen
    },
    All: {
        screen: AllContactsScreen
    }
});

const SimpleApp = StackNavigator({
    Home: {
        screen: MainScreenNavigator
    },
    Chat: {
        screen: ChatScreen
    }
});

AppRegistry.registerComponent('DemoProject', () => SimpleApp);
