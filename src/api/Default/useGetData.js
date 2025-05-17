import bUrl from "../Default/base-URL";

const useGetData = async (url, params) => {
  const response = await bUrl.get(url, params);
  return response;
};

export default useGetData;
