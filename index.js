function isOdd(num)
{
    return num %2 != 0;
}


function createEntity(EntityName, payload)
{
    const requestParam = {
        url = apiConfig[EntityName],
        data = payload
    }

    return requestParam;
   // return post(requestParam);                               
}

module.exports = { isOdd, createEntity};
