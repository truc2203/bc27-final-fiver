import axiosClient from "./axiosClient";

const jobAPI = {
  searchJob: (value) => {
    return axiosClient.get(`jobs/by-name?name=${value}`);
  },

  getTypeJob : () => {
    return axiosClient.get('type-jobs')
  },
  getJobDetail : (id) => {
    return axiosClient.get(`jobs/${id}`)
  }
};

export default jobAPI;
