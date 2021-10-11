const { client, gql } = require('@/graphql/driver/api-client.js')

module.exports.uploadSingleImage = async (imagePath) => {

    const mutation = gql`
        mutation UploadImageMutation($uploadImageFile: Upload!) {
            uploadImage(file: $uploadImageFile) {
                _id
                name
                mimeType
                encoding
                createdAt
                updatedAt
            }
        }
    `

    const resolvedPath = path.resolve(imagePath)

    try {
        let fileStat = await fs.statSync(resolvedPath)

        console.log(`uploadSingleImage: fileStat=${JSON.stringify(fileStat)}`)
    } catch (err) {
        console.log(`uploadSingleImage: fileStat=${JSON.stringify(err)}`)
    }

    const inputData = {
        uploadImageFile: fs.createReadStream(resolvedPath),
    }

    try {
        let image = await client.request(mutation, inputData)
        console.log(`uploadSingleImage: image=${image}`)
        return image
    } catch (err) {
        console.log(err)
        return err
    }
}

module.exports.getImageUrl = async (imageId, width) => {

    const query = gql`
        query Query($imageUrlId: ID!, $imageUrlWidth: Int) {
           imageUrl(id: $imageUrlId, width: $imageUrlWidth)
        }
    `
    
    const inputData = {
        imageUrlId: imageId,
        width: width
    }

    let result = await client.request(query, inputData)
    return result
}