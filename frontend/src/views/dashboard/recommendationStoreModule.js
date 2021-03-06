import axios from '@axios'
const { getAllRecommendations } = require('@/wedive-frontend-graphql/recommendation-service')

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchRecommendations(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        getAllRecommendations()
        .then(response => {
          //var recommendations = response.getAllRecommendations
          var recommendations = response;
                      //.filter(recommendation => queryParams.country == null || queryParams.country == recommendation.countryCode)
                      //.filter(recommendation => queryParams.status == null || queryParams.status == recommendation.publishStatus)
                      //.filter(recommendation => recommendation.name.includes(queryParams.q))
          resolve({recommendations: recommendations, total: recommendations.length});
        })
        .catch(error => reject(error))
      })
    },
  },
}
