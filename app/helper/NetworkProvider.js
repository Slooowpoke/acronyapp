import Config from 'react-native-config'

class NetworkProvider {
    // Add your own optional parameters to each method
    // eg: in the case of needing authentication

    static fetch(endpoint, id) {
		return this.netRequest(Config.API_URL + '/' + endpoint + '/','GET', id);
    }

    static search(endpoint, acronym,context) {
		return this.netRequest(Config.API_URL + `/` + endpoint +`/search/${acronym}/context/${context}`,'GET', null);
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

		if(data){
			parameters.body = JSON.stringify(data);
		}

		return fetch(url, {
			parameters
		}).then((response) => {
			console.log(response);
			return response.json();
		}).then((json) => {
			console.log(json);
			return json;
		}).catch((error) => {
			console.log("Error");
			console.error(error);
		});
	}
}

export default NetworkProvider;
