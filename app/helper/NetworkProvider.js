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
		if(method === 'GET'){
			return fetch(url, {
				method: method,
				headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
			}).then((response) => {
				console.log(response);
				
				if (response.ok) {
                   return response.json();
               } else {
                   // If there is an error, parse it to the catch
                   var contentType = response.headers.get("content-type");

                   if (contentType && contentType.indexOf("application/json") !== -1) {
                       return response.json().then(err => {
                           throw err;
                       });
                   } else {
                       return response.text().then(err => {
                           throw err;
                       });
                   }
               }

			}).then((json) => {
				console.log(json);
				return json;
			}).catch((error) => {
				console.log("Error");
				console.error(error);
			});
		}else{
			return fetch(url, {
				method: method,
				headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
				body: JSON.stringify(data)
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
}

export default NetworkProvider;
