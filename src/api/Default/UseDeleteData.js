import baseUrl from "./base-URL";

const useDeleteData= async (url, params) => {

  const response = await baseUrl.delete(url, params);
  console.log(response.status)
  return response;
};

export default useDeleteData;