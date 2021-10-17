const { gql } = require('@/graphql/driver/api-client.js')

module.exports.query = {
    getAllInterests: gql`
        query Query {
            getAllInterests {
            _id
            title
            type
            iconType
            iconName
            iconColor
            iconUrl
            }
        }
    `,

    getInterestsByType: gql`
        query Query($interestsType: String) {
            interests(type: $interestsType) {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
            }
        }
    `,

    searchInterestByType: gql`
        query Query($searchInterestQuery: String!, $searchInterestType: String) {
            searchInterest(query: $searchInterestQuery, type: $searchInterestType) {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
            }
        }
    `,
}

module.exports.mutation = {
    createInterest: gql`
        mutation InterestMutation($interestInput: InterestInput!) {
            interest(input: $interestInput) {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
            }
        }
    `,
}