const { gql } = require('./graphql/api-client.js')

module.exports.query = {
  getDiveSiteById: gql`
      query Query($diveSiteId: ID!) {
        diveSite(_id: $diveSiteId) {
          _id
          name
          description
          address
          latitude
          longitude
          adminScore
          divePoints {
            _id
            name
            description
            latitude
            longitude
            images {
              _id
              name
              description
            }
            backgroundImages {
              _id
              name
              description
            }
          }
          interests {
            _id
            title
            type
            iconType
            iconName
            iconColor
            iconUrl
          }
          images {
            _id
            name
            description
          }
          backgorundImages {
            _id
            name
            description
          }
          youtubeVideoIds
          referenceUrls
        }
      }
    `,
  searchDiveSiteByName: gql`
      query Query($searchDiveSiteQuery: String!) {
        searchDiveSite(query: $searchDiveSiteQuery) {
          _id
          name
          description
          address
          latitude
          longitude
          adminScore
          divePoints {
            _id
            name
            latitude
            longitude
            images {
              _id
              name
              description
            }
            backgroundImages {
              _id
              name
              description
            }
          }
          interests {
            _id
            title
            type
            iconType
            iconName
            iconColor
            iconUrl
          }
          images {
            _id
            name
            description
          }
          backgorundImages {
            _id
            name
            description
          }
          youtubeVideoIds
          referenceUrls
        }
      }
    `,
  nearByDiveSites: gql`
      query Query($nearByDiveSiteLat1: Float!, $nearByDiveSiteLon1: Float!, $nearByDiveSiteLat2: Float!, $nearByDiveSiteLon2: Float!) {
        nearByDiveSite(lat1: $nearByDiveSiteLat1, lon1: $nearByDiveSiteLon1, lat2: $nearByDiveSiteLat2, lon2: $nearByDiveSiteLon2) {
          _id
          name
          description
          latitude
          longitude
          adminScore
          divePoints {
            _id
            name
            description
            latitude
            longitude
            adminScore
            address
            images {
              _id
              name
              description
            }
            backgroundImages {
              _id
              name
              description
            }
            interests {
              _id
              title
              type
              iconType
              iconName
              iconColor
              iconUrl
            }
          }
          interests {
            _id
            title
            type
            iconType
            iconName
            iconColor
            iconUrl
          }
          images {
            _id
            name
            description
          }
          backgorundImages {
            _id
            name
            description
          }
          youtubeVideoIds
          referenceUrls
        }
      }
    `,
  getAllDiveSites: gql`
      query Query {
        diveSites {
          _id
          name
          description
          latitude
          longitude
          address
          adminScore
          divePoints {
            _id
            name
            description
            latitude
            longitude
            adminScore
            interests {
              _id
              title
              type
              iconType
              iconName
              iconColor
              iconUrl
            }
            images {
              _id
              name
              description
            }
            backgroundImages {
              _id
              name
              description
            }
          }
          interests {
            _id
            title
            type
            iconType
            iconName
            iconColor
            iconUrl
          }
          images {
            _id
            name
            description
          }
          backgorundImages {
            _id
            name
            description
          }
          youtubeVideoIds
          referenceUrls
        }
      }    
    `,
}

module.exports.mutation = {

  createDiveSite: gql`
      mutation DiveSiteMutation($diveSiteInput: DiveSiteInput!) {
          diveSite(input: $diveSiteInput) {
              _id
              name
              description
              address
              latitude
              longitude
              adminScore
              divePoints {
              _id
              name
              description
              address
              latitude
              longitude
              images {
                  _id
              }
              backgroundImages {
                  name
                  _id
              }
              countryCode
              }
              interests {
                  _id
                  title
                  iconName
                  iconColor
                  iconUrl
                  iconType
                  type
              }
              images {
                  _id
                  name
                  description
              }
              backgorundImages {
                  _id
                  name
                  description
              }
              youtubeVideoIds
              referenceUrls
              countryCode
          }
      }
    `,
}