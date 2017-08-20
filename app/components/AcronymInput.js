import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import Config from 'react-native-config'

class AcronymInput extends React.Component {

    state = {acronym:"", context: ""};

    componentWillMount() {}

    render() {
        return (
            <View>
                <Text>Please enter the acronym:</Text>
				<TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }} onChangeText={(acronym) => this.onChange(acronym,this.state.context)} value={this.state.acronym} multiline={false}/>

				<Text>Please enter the context:</Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }} onChangeText={(context) => this.onChange(this.state.acronym,context)} value={this.state.context} multiline = {true}/>
            </View>
        );
    }

	onChange(acronym, context){
		this.setState({acronym:acronym, context:context});
		this.props.onChange(this.state.acronym, this.state.context);
	}
}

export default AcronymInput;
