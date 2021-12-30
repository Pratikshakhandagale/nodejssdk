
const axios = require('axios');
var qs = require('qs');


const configData = {
    baseUrl: '',
    //token: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJERHZkYUtTRlhvc0pGaG9aVXQ2RXp2anJsS1A0UFYzcTdzMWs4ZEg2eVJFIn0.eyJleHAiOjE2NDA3MDA3MzEsImlhdCI6MTY0MDY5MzUzMSwianRpIjoiNjQwZTA1NmMtZjIxOC00MmUyLWFiMWQtYmQ0ZTgyZmRlM2ZiIiwiaXNzIjoiaHR0cHM6Ly9lZHUuc3RhZ2luZy5uc2RsLmNvLmluL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMjJiZjUyYmMtZGU0Ny00NmZjLWFkNTEtM2VhNTAyMjMxY2JjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiM2M3NzcwMzgtOWNiZC00MmRlLWE2MGEtNzcyMDUzZDQwZjc0IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2VkdS5zdGFnaW5nLm5zZGwuY28uaW4iXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zdW5iaXJkLXJjIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImphdGluX25AYXBvbGxvbWVkc2tpbGxzLmNvbSIsImVtYWlsIjoiamF0aW5fbkBhcG9sbG9tZWRza2lsbHMuY29tIn0.oMu2WNfqgnwthUJMZX5pX71St8RlAz-RiSrWIvLpgVQTX59ApFQrcxe1i0NyL1R0W0wPcSOdRzBEhyt1A0c3Z7kClJ-5bNHCaEPb1qzSoMkUKbVFAj8OB_a8B7sL1eZjQ3voGSgA-zw5lvWNXIm4G3TS-a4hqhwhee4SLLdfE8S7iZD4JC8BS9EmUYTWWcjc-jyEj1ZCHQ2HLVmYogdtox8B6rY_3X93rHSqMCXzVHuiA3hfyKoQkCRE8JNzy-Dkqs3PsnN6NDKgA0adTzijcoTI6FRtHJsOzboz_5OiYhe1MH9vI3kTuldxCVnGtsGdzHXAzuyYOfce0BlyUEOJrA'
}

const apiConfig = {
    "employer": "/Employer",
    "skillHub": "/SkillHub",
    "trainer": "/Trainer",
    "candidate": "/Candidate",
    "content": "/Content",
    "job": "/Job",
    "proofOfEducation": "/ProofOfEducation",
    "proofOfSkill": "/ProofOfSkill",
    "proofOfWork": "/ProofOfWork",
    "proofOfReputation": "/ProofOfReputation",
    "student": "/Student"
}


function post(requestParam) {
    requestParam.url = configData.baseUrl + requestParam.url;

    if (configData['token']) {
        axios.defaults.headers.common['Authorization'] = configData['token'];
    }

    console.log(configData['token']);
    return new Promise((resolve, reject) => {
        axios.post(requestParam.url, requestParam.data)
            .then((res) => {
                resolve(res.data);
                console.log(res.data);
            }).catch(function (err) {
                reject(err.response.data);
            });
    });
};

function get(requestParam) {
    requestParam.url = configData.baseUrl + requestParam.url;

    return new Promise((resolve, reject) => {
        axios.get(requestParam.url)
            .then((res) => {
                resolve(res.data);
            }).catch(function (err) {
                reject(err.response.data);
            });

    });
};


/**
 * 
 * @returns This method allows a user to login
 */
function Login() {

    const requestParam = {
        url: '/auth/realms/sunbird-rc/protocol/openid-connect/token',
        data: qs.stringify({
            'client_id': 'registry-frontend',
            'username': 'jatin_n@apollomedskills.com',
            'password': '1234',
            'grant_type': 'password'
        })
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }


    return new Promise((resolve, reject) => {
        axios.post(requestParam.url, requestParam.data, {
            headers: headers
        })
            .then((res) => {
                resolve(res.data);
                console.log(res.data);

            }).catch((err) => {
                reject(err.response.data);

            });
    });

}


/**
 * Search 
 * @param {*} schemaName 
 * @param {*} payload 
 * @returns 
 */
function searchEntity(schemaName, payload) {

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName] + '/search',
        data: payload
    }

    return post(requestParam);
}

function searchCredentials(schemaName, payload) {

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName] + '/search',
        data: payload
    }

    return post(requestParam);
}

/**
 * Create new Entity
 * 
 * @param {*} schemaName 
 * @param {*} payload 
 * @returns 
 */
function createEntity(schemaName, payload) {

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName] + '/invite',
        data: payload
    }



    return post(requestParam);
}

/**
 * Fetch entity data by the given osid
 * @param {*} schemaName 
 * @param {*} id 
 * @returns 
 */
function readEntity(schemaName, id) {

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName] + '/' + id,
    }

    return get(requestParam);
}

function readCredential(schemaName, id) {

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName] + '/' + id,
    }

    return get(requestParam);
}

/**
 * This function is used for Generate VC
 * 
 * @param {*} schemaName 
 * @param {*} id 
 * @returns 
 */
function generateVC(schemaName, id) {

    const headers = {
        'Accept': 'application/vc+ld+json',
    }

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName] + '/' + id,
    }

    return get(requestParam);
}

/**
 * This method verify a VC JSON that was issued by the same credential platform ot not
 * @param {*} payload 
 * @returns 
 */
function verifyCredential(payload) {

    const requestParam = {
        url: '/api/v1/verify',
        data: {
            "signedCredentials": payload
        }
    }

    return post(requestParam);
}

/**
 * This fetches the schema by the given name
 * 
 * @param {*} schemaName 
 * @returns 
 */
function viewSchema(schemaName) {

    const requestParam = {
        url: '/api/docs/' + apiConfig[schemaName] + '.json'
    }

    return get(requestParam);
}


/**
 * This method allows an authenticated issuer to issue a credential
 * 
 * @param {*} schemaName 
 * @param {*} payload 
 * @returns 
 */
function issueCredential(schemaName, payload) {

    const requestParam = {
        url: '/api/v1' + apiConfig[schemaName],
        data: payload
    }
    return post(requestParam);
}

console.log({ configData });

module.exports = { configData, issueCredential, viewSchema, searchEntity, searchCredentials, Login, readEntity, createEntity, readCredential, verifyCredential, generateVC, get, post };
