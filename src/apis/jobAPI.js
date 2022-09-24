import axiosClient from "./axiosClient";

const jobAPI = {
  searchJob: (value) => {
    return axiosClient.get(`jobs/by-name?name=${value}`);
  },
};

export default jobAPI;
