const { gql } = require('./graphql/api-client.js')

module.exports.query = {
    getDivePointById: gql`
        query Query($divePointId: ID!) {
            divePoint(_id: $divePointId) {
                _id
                name
                description
                address
                latitude
                longitude
                adminScore
                minDepth
                maxDepth
                minTemperature
                maxTemperature
                diveSiteId
                interests {
                title
                _id
                type
                iconType
                iconColor
                iconName
                iconUrl
                }
                images {
                name
                _id
                description
                }
                backgroundImages {
                _id
                name
                description
                }
            }
        }
    `,

    searchDivePointByName: gql`
        query Query($searchDivePointQuery: String!) {
            searchDivePoint(query: $searchDivePointQuery) {
                _id
                name
                description
                address
                latitude
                longitude
                adminScore
                minDepth
                maxDepth
                minTemperature
                maxTemperature
                diveSiteId
                interests {
                _id
                title
                type
                iconType
                iconColor
                iconUrl
                iconName
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
        }
    `,
    nearByDivePoint: gql`
        query Query($nearByDivePointLat1: Float!, $nearByDivePointLon1: Float!, $nearByDivePointLat2: Float!, $nearByDivePointLon2: Float!) {
            nearByDivePoint(lat1: $nearByDivePointLat1, lon1: $nearByDivePointLon1, lat2: $nearByDivePointLat2, lon2: $nearByDivePointLon2) {
                _id
                name
                description
                address
                latitude
                longitude
                adminScore
                minDepth
                maxDepth
                minTemperature
                maxTemperature
                diveSiteId
                interests {
                _id
                title
                type
                iconName
                iconType
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
        }
    `,
    getAllDivePoints: gql`
        query Query {
            divePoints {
                _id
                name
                description
                latitude
                address
                longitude
                adminScore
                minDepth
                maxDepth
                minTemperature
                maxTemperature
                diveSiteId
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
        }
    `,
}

module.exports.mutation = {
    createDivePoint: gql`
        mutation DivePointMutation($divePointInput: DivePointInput!) {
            divePoint(input: $divePointInput) {
                _id
                name
                description
                address
                latitude
                longitude
                adminScore
                minDepth
                maxDepth
                minTemperature
                maxTemperature
                diveSiteId
                interests {
                _id
                type
                title
                iconType
                iconColor
                iconName
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
        }
    `,
}