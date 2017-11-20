let api = {
    getPlayList() {
        return fetchToken();
    },
    getUserProfile(playlist){
        return fetchUserProfile(playlist, 0);
    }
};
let token;

function createBody(){
    let body = {
        'grant_type' : 'client_credentials'
    };
    let formBody = [];
    for (let property in body) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(body[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return formBody;
}

function fetchToken(){
    let url = "https://accounts.spotify.com/api/token";

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic NDk4ZDkyNDA0ZjEyNGI3ZmIwNzVkMDhhNmZkN2JkMTU6ZTFkMzc3OWYxM2U1NDA5MmJhMGIwY2E1OTZlNDllYzk=',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: createBody()
    })
        .then((response) => response.json())
        .then(function(resJson) {
            this.token =  resJson.access_token
            return fetchPlayList();

        }).catch((error) => {
            console.error("Errors: " + error);
        });
}


function fetchPlayList(){
    let url = 'https://api.spotify.com/v1/users/guepen/playlists/6R2tg0RnntCQjAWHI7nyd8';
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.token,
        }
    })
        .then((response) => response.json())
        .then(function(resJson) {
            return resJson;
        })
        .catch((error) => {
            console.error("Errors: " + error);
        });
}

function fetchUserProfile(results, pos){

    let url = "https://api.spotify.com/v1/users/" + results[pos].id;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.token,
        }
    })
        .then((response) => response.json())
        .then(function(resJson) {
            if(resJson.display_name){
                results[pos].display_name = resJson.display_name;
            } else {
                results[pos].display_name = results[pos].id
            }
            pos++;
            if(results[pos]){
                return fetchUserProfile(results, pos);
            }else{
                return resJson;
            }
        })
        .catch((error) => {
            console.error("Errors: " + error);
        });
}


module.exports = api;
