
//const https = require('https');
const axios = require('axios')

function isOdd(num) {
    return num % 2 != 0;
}


const configData = {
    baseUrl: 'https://edu.staging.nsdl.co.in/registry'
}

const apiConfig = {
    "employer": "/Employer",
    "skillHub": "/SkillHub",
    "trainer": "/Trainer"
}


function post(requestParam) {
    requestParam.url = configData.baseUrl + requestParam.url;

    return new Promise((resolve, reject) => {
        axios.post(requestParam.url, requestParam.data)
            .then((res) => {
                console.log('Body: ', res.data);
                res.data;
            }).catch((err) => {
                console.error(err);
                res.data;
            });
    });


};


function createEntity(EntityName, payload) {

    const requestParam = {
        url: '/api/v1' + apiConfig[EntityName] + '/search',
        data: payload
    }

    return post(requestParam);
}

createEntity('employer', { "filters": {} });

module.exports = { isOdd, createEntity, post };
