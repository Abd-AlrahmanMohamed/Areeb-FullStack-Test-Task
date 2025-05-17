import baseUrl from "./base-URL";



export const useAddData= async (url, params) => {

  const response = await baseUrl.post(url, params);
  // console.log(response);
  //   console.log(response.data);
  //     console.log(response.config);


  return response;
};

// 



