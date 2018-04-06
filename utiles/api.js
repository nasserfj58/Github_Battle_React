var Axios = require('axios');


module.exports = {
    fetchRepos : (lang) => {
        var encodidURI  = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+lang+'&sort=stars&order=desc&type=Repositories');
        
        return Axios.get(encodidURI)
        .then((response) => {return response.data.items});

    },
    fetchUserRepo : (userName) => {
        var uri = `https://api.github.com/search/users?q=${userName}`;
        var encodidURI  = window.encodeURI(uri);
        return Axios.get(encodidURI)
        .then((response) => {return response.data.items});
        
    }

}

