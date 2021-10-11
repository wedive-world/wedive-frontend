const { client } = require('@/graphql/driver/api-client.js')
const { query, mutation } = require('@/graphql/driver/gql/dive-point-gql')

module.exports.getDivePointById = async (_id) => {
    const param = {
        "divePointId": _id
    }

    return await client.request(query.getDivePointById, param)
}

module.exports.searchDivePointByName = async (queryString) => {

    const param = {
        "searchDivePointQuery": queryString
    }

    return await client.request(query.searchDivePointByName, param)
}

module.exports.nearByDivePoint = async (
    latitude1,
    longitude1,
    latitude2,
    longitude2
) => {

    const param = {
        "nearByDivePointLat1": latitude1,
        "nearByDivePointLon1": longitude1,
        "nearByDivePointLat2": latitude2,
        "nearByDivePointLon2": longitude2
    }

    return await client.request(query.nearByDivePoint, param)
}

module.exports.getAllDivePoints = async () => {
    return await client.request(query.getAllDivePoints)
}

module.exports.createDivePoint = async (
    _id, //ID
    name, //String!
    description, //    String
    latitude, //    Float!
    longitude, //Float!
    adminScore, //Int
    minDepth, //Int
    maxDepth, //Int
    minTemperature, //Int
    maxTemperature, //Int
    diveSiteId, //ID!
    interests, //[ID]
    images, //[ID]
    backgroundImages, //[ID]
    countryCode, //String
) => {

    let param = {
        _id: _id, //ID
        name: name, //String!
        description: description, //    String
        latitude: latitude, //    Float!
        longitude: longitude, //Float!
        adminScore: adminScore, //Int
        minDepth: minDepth, //Int
        maxDepth: maxDepth, //Int
        minTemperature: minTemperature, //Int
        maxTemperature: maxTemperature, //Int
        diveSiteId: diveSiteId, //ID!
        interests: interests, //[ID]
        images: images, //[ID]
        backgroundImages: backgroundImages, //[ID]
        countryCode: countryCode, //String
    }

    return await client.request(mutation.createDivePoint, param)
}