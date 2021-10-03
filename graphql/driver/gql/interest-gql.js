const { gql } = require('./graphql/api-client.js')

module.exporst.query = {
    getAllInterests: gql`
        query Query {
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

module.exporst.mutation = {
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