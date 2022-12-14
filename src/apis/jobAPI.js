import axiosClient from "./axiosClient";

const jobAPI = {
  getJob: () => {
    return axiosClient.get("cong-viec");
  },
  searchJob: (value) => {
    return axiosClient.get(
      `cong-viec/lay-danh-sach-cong-viec-theo-ten/${value}`
    );
  },
  addJob: (value) => {
    return axiosClient.post(`cong-viec`, value);
  },
  editInfoJob: (id, value) => {
    return axiosClient.put(`cong-viec/${id}`, value);
  },
  editJob: (id, value) => {
    const formData = new FormData();
    formData.append("formFile", value.hinhAnh);
    return axiosClient.post(`cong-viec/upload-hinh-cong-viec/${id}`, formData);
  },
  getJobById: (id) => {
    return axiosClient.get(`cong-viec/${id}`);
  },
  deleteJob: (id) => {
    return axiosClient.delete(`cong-viec/${id}`);
  },
  getTypeJob: () => {
    return axiosClient.get("cong-viec/lay-menu-loai-cong-viec");
  },
  getTypeJobById: (id) => {
    if (!id) {
      return axiosClient.get("cong-viec/lay-menu-loai-cong-viec");
    }
    return axiosClient.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },
  deleteTypeJob: (id) => {
    return axiosClient.delete(`/loai-cong-viec/${id}`);
  },
  addTypeJob: (value) => {
    return axiosClient.post(`loai-cong-viec`, value);
  },
  getJobDetail: (id) => {
    return axiosClient.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
  getComments: (id) => {
    return axiosClient.get(`binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  bookingJob: (value) => {
    return axiosClient.post(`thue-cong-viec`, value);
  },
  getSubTypeJob: (id) => {
    return axiosClient.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },
  addSubTypeJob: (value) => {
    return axiosClient.post(
      `chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`,
      value
    );
  },
  deleteSubTypeJob: (id) => {
    return axiosClient.delete(`chi-tiet-loai-cong-viec/${id}`);
  },
  renameTypeJob: (id, value) => {
    return axiosClient.put(`loai-cong-viec/${id}`, value);
  },
  getSubTypeJobById: (id) => {
    return axiosClient.get(`chi-tiet-loai-cong-viec/${id}`);
  },
  upLoadSubTypeJob: (id, value) => {
    const formData = new FormData()
    formData.append('formFile',value.hinhAnh)
    return axiosClient.post(
      `chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${id}`,
      formData
    );
  },
  editSubTypeJob : (id,value) => {
    return axiosClient.put(`chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${id}`,value)
  },
  getListSubType : () => {
    return axiosClient.get(`chi-tiet-loai-cong-viec`)
  }
};

export default jobAPI;
