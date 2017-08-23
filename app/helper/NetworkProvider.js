import Config from 'react-native-config'

class NetworkProvider {
    // Add your own optional parameters to each method
    // eg: in the case of needing authentication

    static fetch(endpoint, id) {
		return this.netRequest(Config.API_URL + '/' + endpoint + '/' + id,'GET', null);
    }

    static search(endpoint, terms) {
		return this.netRequest(Config.API_URL + '/' + endpoint + '/search/'+ terms,'GET', null);
    }

    static store(endpoint, data) {
		return this.netRequest(Config.API_URL + '/' + endpoint + '/save','POST', data);
    }

	static netRequest(url, method, data){
		// Generate the paramters
		let parameters = {
			method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
		}

		if(data) parameters.body = JSON.stringify(data);

		return fetch(url, {
			parameters
		}).then((response) => response.json()).then((json) => {
			return json;
		}).catch((error) => {
			console.error(error);
		});
	}
}

export default NetworkProvider;
