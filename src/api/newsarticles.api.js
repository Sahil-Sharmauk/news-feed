import apiClient from './index';
export async function fetchArticles(data,page) {
    console.log("data",data)
    return apiClient
      .post(`/news-articles/fetch-all-feeds/${page}`, data)
      .then(response => {
        if (response) {
          return response.data;
        }
        return Promise.reject();
      });
  }
  
  export async function fetchAllSources() {
    return apiClient
      .get('/news-articles/fetch-all-src')
      .then(response => {
        if (response) {
          return response.data;
        }
        return Promise.reject();
      });
  }
  
//   export async function getCurrentUser() {
//     return apiClient
//       .get('/users/current')
//       .then(response => {
//         if (response) {
//           const { accessToken } = response.data;
//           if (accessToken) {
//             localStorage.setItem('accessToken', accessToken);
//           }
//           return response.data;
//         }
//         return Promise.reject();
//       });
//   }