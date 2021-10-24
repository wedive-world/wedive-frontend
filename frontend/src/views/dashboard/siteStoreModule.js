import axios from '@axios'
const { upsertDiveSite, getDiveSiteById, searchDiveSiteByName, nearByDiveSites, getAllDiveSites } = require('@/wedive-frontend-graphql/dive-site-service')
const { getAllInterests } = require ('@/wedive-frontend-graphql/interest-service')

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchSites(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        getAllDiveSites()
        .then(response => {
          var sites = response.getAllDiveSites
                      .filter(site => queryParams.country == null || queryParams.country == site.countryCode)
                      .filter(site => queryParams.status == null || queryParams.status == site.publishStatus)
                      .filter(site => site.name.includes(queryParams.q))
          resolve({sites: sites, total: sites.length});
        })
        .catch(error => reject(error))
      })
    },
    fetchSite(ctx, { id }) {
      return new Promise((resolve, reject) => {
        getDiveSiteById(id)
        .then(response => resolve({site: response.getDiveSiteById}))
        .catch(error => reject(error))
      })
    },
    addSite(ctx, siteData) {
    console.log("addSite");
      /*return new Promise((resolve, reject) => {
        axios
          .post('/apps/site/sites', { site: siteData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })*/
    },
  },
}
