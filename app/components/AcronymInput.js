import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

import Config from 'react-native-config'

class AcronymInput extends React.Component {

    state = {
        acronym: "",
        context: "",
		meaning: "",
    };

    componentWillMount() {}

    render() {
        return (
            <View>
                <Text>Please enter the acronym:</Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }} onChangeText={(acronym) => this.onChange(acronym, this.state.context, this.state.meaning)} value={this.state.acronym} multiline={false}/>

                <Text>Please enter the context:</Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }} onChangeText={(context) => this.onChange(this.state.acronym, context, this.state.meaning)} value={this.state.context} multiline={true}/>

				<Text>Please enter the meaning:</Text>
				{this.props.meaningInput
                    ? (<TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }} onChangeText={(meaning) => this.onChange(this.state.acronym, this.state.context, meaning)} value={this.state.meaning} multiline={true}/>): <View></View>}
            </View>
        );
    }

    onChange(acronym, context,meaning) {
        this.setState({acronym: acronym,context: context,meaning: meaning});

		if(this.props.meaningInput){
			this.props.onChange(this.state.acronym, this.state.context, this.state.meaning);
		}else{
			this.props.onChange(this.state.acronym, this.state.context);
		}
    }
}

export default AcronymInput;
