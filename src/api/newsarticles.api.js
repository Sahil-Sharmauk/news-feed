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
  
  export async function fetchTopHeadLines() {
    return apiClient
      .get('/news-articles/fetch-top-headlines',fetchTopHeadLines)
      .then(response => {
        if (response) {
          return response.data;
        }
        return Promise.reject();
      });
  }