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
