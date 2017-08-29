import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView
} from 'react-native';

import Config from 'react-native-config'
import NP from '../helper/NetworkProvider'

import Accordion from 'react-native-collapsible/Accordion';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

class Suggestions extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: null,
            requestTimeout: null,
			sections:null,
        };
    }

    _renderHeader(section) {
        return (
            <View style={styles.suggestion}>
                <Text style={styles.headerText}>{section.title}</Text>
				<Icon name="ios-arrow-down-outline" size={30} color="#000" />
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.suggestionInner}>
                <Text>{section.content}</Text>
            </View>
        );
    }

    componentWillMount() {
		// Fetch the data
		NP.search('acronym', 'terms').then((response) => {

			// Load the data for ListView
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.setState({data:ds.cloneWithRows(response)});
        });
	}
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Search
        if (nextProps.acronym != this.props.acronym || nextProps.context != this.props.context) {
            this.search(nextProps.acronym, nextProps.context);

        }

		this.props = nextProps;
        return true;
    }
    search(acronym, context) {
        if (acronym != null && context != null && acronym != "" && context != "") {
			this.state.sections = null;
            clearTimeout(this.state.requestTimeout);

            let timeout = setTimeout(() => {

                NP.search('acronym', acronym, context).then((response) => {
                    console.log(response);

                    this.setState({data: response});

					let newSections = [];
					for(let i = 0; i < this.state.data.length; i++){
						newSections.push({
							title: this.state.data[i].meaning,
							content: this.state.data[i].description,
							example: this.state.data[i].context,
						})
						console.log(this.state.data[i]);
					}
					this.setState({sections: newSections});
                });
            }, 2000);

            this.setState({requestTimeout: timeout});
        }
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={{	fontFamily: 'Ubuntu'}}>Suggestions</Text>
                </View>
				{this.state.sections != null
					? (<Accordion sections={this.state.sections} renderHeader={this._renderHeader} renderContent={this._renderContent}/>)
					: (this.renderInProgress())}

            </View>
        );
    }

	renderInProgress(){

		if(this.props.acronym && this.props.acronym.trim() != '' && this.props.acronym.length > 2
			&& this.props.context && this.props.context.trim() != '' && this.props.context.length > 2){
			return(
				<Progress.Circle size={40} indeterminate={true} style={{alignSelf:'center',marginTop:20}} />
			);
		}else{
			return(
				<Text style={{fontFamily: 'Ubuntu',textAlign:'center', fontSize:11}}>( Start by typing in an acronym and context. )</Text>
			);
		}

	}
}

export default Suggestions;
