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
        console.log(this.props.navigation);
        this.state = {
            data: null
        }
    }

    componentWillMount() {
		global.dimensions = {width, height} = Dimensions.get('window');
	}

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={[styles.container, {minHeight:global.dimensions.height}]}>
                    <View>
                        <AcronymInput onChange={this.onInputChange.bind(this)}/>

                        <Suggestions acronym={this.state.acronym} context={this.state.context}></Suggestions>
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
        );
    }

    onInputChange(acronym, context) {
        
        // Search for context and acronym here
        console.log(acronym);
        console.log(context);
        console.log("---");
        this.setState({
            acronym: acronym,
            context: context
        }, () => {
            console.log(`state: ${this.state}, value: ${acronym}`);
        });
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flex: 1,
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    scroll: {
        flex: 1,
        flexGrow: 1
    },
});

export default BrowseScreen;
