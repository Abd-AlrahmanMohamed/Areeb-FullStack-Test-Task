import baseUrl from "./base-URL";

const useUpdateData= async (url, params) => {

  const response = await baseUrl.put(url, params);
  console.log(response.status)
  return response;
};

export default useUpdateData;