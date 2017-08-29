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
        description: "",
		autocomplete:"",
    };

    componentWillMount() {}

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.clearInput) {
            this.setState({acronym: "", context: "", meaning: "", description: ""});
            this.props.resetClearInput();
        }
        return true;
    }

    render() {
        return (
            <View>
                <TextInput style={styles.acronym} placeholder="B.T.B"
					placeholderTextColor="#eee" autoCapitalize={"characters"}
					onChangeText={(acronym) => this.onChange(acronym, this.state.context, this.state.meaning, this.state.description)} value={this.state.acronym}
					multiline={false}  maxLength={25} />
				<View>
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
        console.log(acronym.length);
        console.log(this.state.acronym.length);

		acronym = acronym.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g,'');
		acronym = this.format(acronym, 1).join('.');

        if (acronym.length < this.state.acronym.length) {
            acronym = acronym.substring(0, acronym.length - 1);
        }

		if(this.props.meaningInput){
			this.props.onChange(this.state.acronym, this.state.context, this.state.meaning);
		}else{
			this.props.onChange(this.state.acronym, this.state.context);
		}
    }
}

    acronym: {
        backgroundColor: '#fff',
		textAlign:'center',
		fontSize:34,
		marginTop:50,
		fontFamily: 'Ubuntu',
    },
export default AcronymInput;
