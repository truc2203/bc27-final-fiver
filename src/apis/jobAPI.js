import axiosClient from "./axiosClient";

const jobAPI = {
  searchJob: (value) => {
    return axiosClient.get(`jobs/by-name?name=${value}`);
  },

  getTypeJob : () => {
    return axiosClient.get('type-jobs')
  }
};

export default jobAPI;
