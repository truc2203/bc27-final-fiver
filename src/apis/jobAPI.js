import axiosClient from "./axiosClient";

const jobAPI = {
  searchJob: (value) => {
    return axiosClient.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${value}`);
  },

  getTypeJob : () => {
    return axiosClient.get('cong-viec/lay-menu-loai-cong-viec')
  },
  getJobDetail : (id) => {
    return axiosClient.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`)
  },
  getComments : (id) => {
    return axiosClient.get(`binh-luan/lay-binh-luan-theo-cong-viec/${id}`)
  },
  bookingJob : (value) => {
    return axiosClient.post(`thue-cong-viec`,value
    )
  },
  getSubTypeJob : (id) => {
    return axiosClient.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
  }
};

export default jobAPI;
