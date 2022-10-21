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
  addJob : (value,id) => {
    const formData = new FormData();
    for (let key in value) {
      if (key === "id") continue;
      formData.append(key, value[key]);
    }
    formData.append("id", 1058);
    console.log(formData.get('hinhAnh'));
    return axiosClient.post(`cong-viec/upload-hinh-cong-viec/1058`,formData)
  },
  deleteJob: (id) => {
    return axiosClient.delete(`cong-viec/${id}`);
  },
  getTypeJob: () => {
    return axiosClient.get("cong-viec/lay-menu-loai-cong-viec");
  },
  deleteTypeJob : (id) => {
    return axiosClient.delete(`/loai-cong-viec/${id}`)
  },
  addTypeJob : (value) => {
    return axiosClient.post(`loai-cong-viec`,value)
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
  addSubTypeJob : (value) => {
    return axiosClient.post(`chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`,value)
  },
  deleteSubTypeJob : (id) => {
    return axiosClient.delete(`chi-tiet-loai-cong-viec/${id}`)
  },
  renameTypeJob : (id,value) => {
    return axiosClient.put(`loai-cong-viec/${id}`,value)
  },
  getSubTypeJobById : (id) => {
    return axiosClient.get(`chi-tiet-loai-cong-viec/${id}`)
  },
  editSubTypeJob : (id,form) => {
    return axiosClient.post(`chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${id}`,form)
  },
  //Test data
  testAPI : (id) => {
    return axiosClient.get(`chi-tiet-loai-cong-viec/${id}`)
  }
};

export default jobAPI;
