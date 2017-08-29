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

class Suggestions extends React.Component {

    state = {data:null};

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
                <Text>Suggestions</Text>
				<Text>Horizontal ruling to go here.</Text>
				{this.state.data != null
					? (<ListView dataSource={this.state.data} renderRow={(item) => <Text>{item.acronym}</Text>}/>)
					: <Text></Text>}
            </View>
        );
    }
}

export default Suggestions;
