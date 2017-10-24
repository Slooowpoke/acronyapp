import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, Dimensions, Switch} from 'react-native';

import Config from 'react-native-config'

import Footer from '../components/Footer'

import TagInput from 'react-native-tag-input';
global.dimensions = {width, height} = Dimensions.get('window');

class OptionScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <Text style={{marginLeft:20}}>Dashboard</Text>
	};

	state = {
		suitableForWork: false,
		industries: [],
	};

	componentWillMount(){
		console.log(global.dimensions);

		this.setState({industries: global.industries});

	}

    render() {
        return (
            <View style={[styles.container, {minHeight:global.dimensions.height}]}>

				<Text style={styles.header}>Options here will affect the creation and browsing of acronyms.</Text>

				<View style={styles.industrySelector}>
					<TagInput
						tagTextStyle={{fontFamily: 'Ubuntu'}}
					  value={this.state.industries}
					  onChange={(industries) => this.onIndustryChange(industries)} placeholder="Type industry here."/>
				</View>

				<View style={styles.suitable}>

					<View style={styles.label}>
						<Text style={{fontFamily: 'Ubuntu'}}>{this.state.suitableForWork ? "Showing: Suitable for work. (SFW)" : "Showing: Not suitable for work. (NSFW)"}</Text>
					</View>

					<View style={styles.switch}>
						<Switch onValueChange={this.toggleSwitch} value={this.state.suitableForWork}/>
					</View>
				</View>

				<Button style={styles.save} title="Save changes" onPress={() => this.saveOptions()} />

				<Footer/>
            </View>
        );
    }

	onIndustryChange(industries){
		this.setState({industries: industries});
	}

 	toggleSwitch = (value) => {
		this.setState({ suitableForWork: value })
		// We also need to set the glob\al too
		global.suitableForWork = value;
	}

	saveOptions(){
		// Save the options state to either json or some form of persistent storage?
		// TODO decide SQLLite or just regular json
		global.industries = this.state.industries;
		console.log(global.industries);
	}

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flex: 1,
        flexGrow: 1,
		justifyContent:'space-around'
    },
	header:{
		fontSize: 18,
		marginTop:30,
		textAlign:'center',
		fontFamily: 'Ubuntu'
	},
	industrySelector:{
		borderWidth:1,
		borderColor:'#ddd',
		height:140,
		padding:16,
		marginTop:20,
		marginBottom:10,
	},
	suitable:{
		flexDirection:'row',
	},
	label:{
		marginTop:10,
		alignItems:'flex-start',
		width: (global.dimensions.width/2)+80,
	},
	switch:{
		marginTop:5,
		width: (global.dimensions.width/2)-120,
		alignItems:'flex-end',
	},
	save:{
		marginTop:30,
	}
});

export default OptionScreen;
