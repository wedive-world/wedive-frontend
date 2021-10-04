const { client } = require('./graphql/api-client.js')
const { query, mutation } = require('./driver/gql/dive-site-gql')

module.exports.createDiveSite = async (
  _id, //:ID, optional, if exists, update one
  name, //: String,
  description, //:String
  latitude, //:Float
  longitude, //:Float
  adminScore, //:Int
  divePoints, //:[ID]
  interests, //:[ID]
  images, //:[ID]
  backgorundImages, //:[ID]
  youtubeVideoIds, //:[String]
  referenceUrls, //:[String]
  countryCode //:String
) => {

  const variable = {
    diveSiteInput: {
      _id: _id, //:ID, optional, if exists, update one
      name: name, //: String,
      description: description, //:String
      latitude: latitude, //:Float
      longitude: longitude, //:Float
      adminScore: adminScore, //:Int
      divePoints: divePoints, //:[ID]
      interests: interests, //:[ID]
      images: images, //:[ID]
      backgorundImages: backgorundImages, //:[ID]
      youtubeVideoIds: youtubeVideoIds, //:[String]
      referenceUrls: referenceUrls, //:[String]
      countryCode: countryCode, //:String
    }
  }

  try {
    let result = await client.request(mutation.createDiveSite, variable)
    return result

  } catch (err) {
    return err
  }
}

module.exports.getDiveSiteById = async (_id) => {

  const param = {
    diveSiteId: _id
  }

  return await client.request(query.getDiveSiteById, param)
}

module.exports.searchDiveSiteByName = async (queryString) => {

  const param = {
    searchDiveSiteQuery: queryString
  }

  return await client.request(query.searchDiveSiteByName, param)
}

module.exports.nearByDiveSites = async (
  latitude1,
  longitude1,
  latitude2,
  longitude2
) => {

  const query = query.nearByDiveSites

  const param = {
    "nearByDiveSiteLat1": latitude1,
    "nearByDiveSiteLon1": longitude1,
    "nearByDiveSiteLat2": latitude2,
    "nearByDiveSiteLon2": longitude2
  }

  return await client.request(query, param)
}

module.exports.getAllDiveSites = async () => {
  return await client.request(query.getAllDiveSites)
}