import axios, { AxiosInstance } from 'axios';

// Konfigurasi default untuk axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Ganti dengan URL API Anda
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Anda bisa menambahkan interceptors atau pengaturan lain di sini
axiosInstance.interceptors.request.use(
  (config) => {
    // Sebagai contoh, bisa menambahkan token Authorization ke header
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Tangani error global di sini
    if (error.response && error.response.status === 401) {
      // Misalnya: handle unauthenticated user
      // Redirect ke halaman login atau tampilkan pesan error
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
