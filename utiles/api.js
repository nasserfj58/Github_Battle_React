var Axios = require('axios');


module.exports = {
    fetchRepos : (lang) => {
        var encodidURI  = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+lang+'&sort=stars&order=desc&type=Repositories');
        
        return Axios.get(encodidURI)
        .then((response) => {return response.data.items});

    }

}

