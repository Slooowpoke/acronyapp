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

					<View style={{backgroundColor: 'rgba(0,0,0,0)'}}>
						<TextInput style={{
					  	  height: 40,
					  	  backgroundColor: 'rgba(0,0,0,0)',
					  }} style={styles.context} placeholder="Context eg: Remeber the rule, B.T.B" placeholderTextColor="#ddd"  onChangeText={(context) => this.onChange(this.state.acronym, context, this.state.meaning, this.state.description)}
						value={this.state.context} multiline={false}  maxLength={50} />
					</View>

				</View>

				{this.props.meaningInput && this.renderExtraInputs()}

            </View>
        );
    }

    renderExtraInputs() {
        return (
            <View>

				<Text style={{fontFamily: 'Ubuntu'}}>What does the acronym stand for?</Text>
                <TextInput style={{
                    height: 40,
					marginTop:10,
					fontFamily: 'Ubuntu'
                }} onChangeText={(meaning) => this.onChange(this.state.acronym, this.state.context, meaning, this.state.description)}
				 value={this.state.meaning} multiline={true}
			 	 placeholder="Be The Best" placeholderTextColor="#ddd"/>

                <TextInput style={{
                    height: 100,
					marginTop:5,
					fontFamily: 'Ubuntu'
                }} onChangeText={(description) => this.onChange(this.state.acronym, this.state.context, this.state.meaning, description)}
				 value={this.state.description} multiline={true}
			     placeholder="Description" placeholderTextColor="#ddd"/>

			</View>
        )
    }

	format(str, n) {
	    var ret = [];
	    var i;
	    var len;

	    for(i = 0, len = str.length; i < len; i += n) {
	       ret.push(str.substr(i, n))
	    }
	    return ret
	};

    onChange(acronym, context, meaning, description) {
        console.log(acronym.length);
        console.log(this.state.acronym.length);

		acronym = acronym.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g,'');
		acronym = this.format(acronym, 1).join('.');

        if (acronym.length < this.state.acronym.length) {
            acronym = acronym.substring(0, acronym.length - 1);
        }

		if(this.state.context != context && acronym){
			// context has changed, check if they are typing anything that looks like the acronym

			let strippedAcronym = (acronym.replace(/[.]/g,'')).toLowerCase();
			let lowercaseAcronym = acronym.toLowerCase();

			// Append a space to them to check for only when its not part of another word.

			// Check for undotted acronym
			var temp = new RegExp(strippedAcronym + " ", 'gim');
			context = context.replace(temp, acronym);

			// Check for dotted acronym
			temp = new RegExp(lowercaseAcronym + " ", 'gim');
			context = context.replace(temp, acronym);
		}

		if(this.state.meaning != meaning && acronym){

			let letters = acronym.split(".");
			meaning = meaning.replace(/^[a-z]/g, letters[0]);

			let totalSpaces = null;
			if(/([\s]+)/g.test(meaning)){
				totalSpaces = meaning.match(/([\s]+)/g).length;
			}

			// Then the meaning has changed and we can regex the acronym onto it
			// Count spaces
			if(/\s$/g.test(meaning)){
				if(totalSpaces != null && totalSpaces < letters.length){
					meaning = meaning.replace(/\s$/g, ' ' + letters[totalSpaces]);
				}

			}

		}

        this.setState({acronym: acronym, context: context, meaning: meaning, description: description});

        if (this.props.meaningInput) {
            this.props.onChange(this.state.acronym, this.state.context, this.state.meaning, this.state.description);
        } else {
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
	context:{
		marginBottom:20,
		fontFamily: 'Ubuntu',
	},

});

export default AcronymInput;
