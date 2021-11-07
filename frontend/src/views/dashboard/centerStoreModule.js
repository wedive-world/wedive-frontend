import axios from '@axios'
const { upsertDiveCenter, getAllDiveCenters } = require('@/wedive-frontend-graphql/dive-center-service')
const { getAllInterests } = require ('@/wedive-frontend-graphql/interest-service')

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchCenters(ctx, queryParams) {
      console.log("aaaaaaaaaaaaaaaaaaaaaaa");
      return new Promise((resolve, reject) => {
        getAllDiveCenters()
        .then(response => {
          console.log(response);
          var centers = response.getAllDiveCenters
                      .filter(center => queryParams.country == null || queryParams.country == center.countryCode)
                      .filter(center => queryParams.status == null || queryParams.status == center.publishStatus)
                      .filter(center => center.name.includes(queryParams.q))
          resolve({centers: centers, total: centers.length});
        })
        .catch(error => reject(error))
      })
    },
    fetchCenter(ctx, { id }) {
      return new Promise((resolve, reject) => {
        getDiveCenterById(id)
        .then(response => resolve({center: response.getDiveCenterById}))
        .catch(error => reject(error))
      })
    },
    addCenter(ctx, centerData) {
    console.log("addCenter");
      /*return new Promise((resolve, reject) => {
        axios
          .post('/apps/center/centers', { center: centerData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })*/
    },
  },
}
