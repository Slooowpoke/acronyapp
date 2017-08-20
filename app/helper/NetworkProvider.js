import Config from 'react-native-config'

class NetworkProvider{
	// Add your own optional parameters to each method
	// eg: in the case of needing authentication

	static view(endpoint){
		console.log("Viewing");
	}

	static index(endpoint){
		return fetch(Config.API_URL + '/' + endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((json) => {
			return json;
        }).catch((error) => {
            console.error(error);
        });
	}

	static create(endpoint){
		console.log("Creating");
	}

	static update(endpoint){
		console.log("Updating");
	}

	static delete(endpoint){
		console.log("Deleting");
	}

}

export default NetworkProvider;
