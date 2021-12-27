import axios from '@axios'
const { upsertDivePoint, getDivePointById, searchDivePointByName, nearByDivePoints, getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { getAllInterestsTitleType } = require ('@/wedive-frontend-graphql/interest-service')

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchPoints(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        getAllDivePoints()
        .then(response => {
          var points = response.getAllDivePoints
                      .filter(point => queryParams.country == null || queryParams.country == point.countryCode)
                      .filter(point => queryParams.status == null || queryParams.status == point.publishStatus)
                      .filter(point => point.name.includes(queryParams.q))
          resolve({points: points, total: points.length});
        })
        .catch(error => reject(error))
      })
    },
    fetchPoint(ctx, { id }) {
      return new Promise((resolve, reject) => {
        getDivePointById(id)
        .then(response => resolve({point: response.getDivePointById}))
        .catch(error => reject(error))
      })
    },
    addPoint(ctx, pointData) {
    console.log("addPoint");
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/point/points', { point: pointData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
