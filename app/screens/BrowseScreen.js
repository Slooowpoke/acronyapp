import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ListView,
    ScrollView,
    Dimensions,
	TouchableOpacity
} from 'react-native'

import Config from 'react-native-config'

import NP from '../helper/NetworkProvider'

import AcronymInput from '../components/AcronymInput'

import Footer from '../components/Footer'

import Suggestions from '../components/Suggestions'
const {width, height} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons';
class BrowseScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const {state, setParams, navigate} = navigation;
		return {
			headerRight: (
				<TouchableOpacity onPress={() => navigate('Options')}>
					<Icon name="ios-options" style={{marginRight:20}} size={30} color='#000'/>
				</TouchableOpacity>
			),
			tabBarIcon: ({tintColor, focused}) => (<Icon name="ios-eye" size={30} color={focused ? "#ddd": "#eee"} />),
			showIcon: true,
			showLabel: false,
		}
	};

    constructor(props) {
        super(props)
		global.dimensions = {width, height} = Dimensions.get('window');

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.search();
    }

    render() {
        return (

                <AcronymInput onChange={this.onInputChange.bind(this)}/>

                <Suggestions></Suggestions>

                <Footer/>
            </View>
        );
    }

    search(acronym,context) {
		// Load all acronyms, change this later.
		NP.search('acronym',acronym,context).then((response) => {

			// Load the data for ListView
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.setState({data: ds.cloneWithRows(response)});
		});
    }

    onInputChange(acronym, context) {
        // Search for context and acronym here
        console.log(acronym);
        console.log(context);
        console.log("---");
		clearTimeout(this.state.requestTimeout);
        let timeout = setTimeout(() => {
            this.search(acronym,context)
        }, 2000);

        this.setState({requestTimeout: timeout});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default BrowseScreen;
