const { client, gql } = require('./driver/api-client.js')

// Example Data
// {
//     "_id": "6155b13856a1f2a05ffa61c2",
//     "title": "누구나",
//     "type": "discountTarget",
//     "iconType": "awesome-font",
//     "iconName": "fa-user",
//     "iconColor": "",
//     "iconUrl": null
//   },
//   {
//     "_id": "6155b13856a1f2a05ffa61c4",
//     "title": "여성",
//     "type": "discountTarget",
//     "iconType": "awesome-font",
//     "iconName": "fa-female",
//     "iconColor": "",
//     "iconUrl": null
//   },
//   {
//     "_id": "6155b13856a1f2a05ffa61c6",
//     "title": "20대 여성",
//     "type": "discountTarget",
//     "iconType": "awesome-font",
//     "iconName": "fa-female",
//     "iconColor": "",
//     "iconUrl": null
//   },

// @parameter type
//   할인대상: discountTarget
//   할인옵션: discountOption
//   성별: gender
//   나이: age
//   다이빙: diving
//   친목: amity
//   환경: environment

module.exports.createInterest = async (
    _id, //if exist, update existance. or, create
    title,
    type,
    iconType, //for awesome font
    iconName, //for awesome font
    iconColor, //for awesome font
    iconUrl
) => {

    const mutation = gql`
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
    `;

    const inputData = {
        _id: _id,
        title: title,
        type: type,
        iconType: iconType,
        iconName: iconName,
        iconColor: iconColor,
        iconUrl: iconUrl,
    }

    try {
        let interest = await client.request(mutation, inputData)
        console.log(`createInterest: interest=${JSON.stringify(interest)}`)
        return result;

    } catch (err) {
        return err
    }
}

module.exports.getAllInterests = async () => {

    const query = gql`
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
    `;

    try {
        let interest = await client.request(query)
        console.log(`getAllInterest: interest=${JSON.stringify(interest)}`)
        return result;

    } catch (err) {
        return err
    }
}

module.exports.getInterestsByType = async (type) => {

    const query = gql`
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
    `;

    const inputData = {
        interestsType: type
    }

    try {
        let interest = await client.request(query, inputData)
        console.log(`getInterestsByType: interests=${JSON.stringify(interest)}`)
        return result;

    } catch (err) {
        return err
    }
}

module.exports.searchInterestByType = async (
    queryString,
    type // can be null, if null search for all types
) => {

    const query = gql`
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
    `;

    const inputData = {
        "searchInterestQuery": queryString,
        "searchInterestType": type
    }

    try {
        let interest = await client.request(query, inputData)
        console.log(`searchInterestByType: interests=${JSON.stringify(interest)}`)
        return result;

    } catch (err) {
        return err
    }
}