const GRAPHQL_URL = process.env.API_PATH || 'https://api.wedives.com/graphql'
const { GraphQLClient, request, gql } = require('graphql-request')

module.exports.client = new GraphQLClient(GRAPHQL_URL,
    {
        headers: {
            countryCode: "ko"
        }
    })

module.exports.gql = gql