import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useZipsByState = (state) => {
  if (state === undefined || state === null) {
    return console.error("Must pass abbreviated state code to function.");
  }

  const { data, error } = useSWR(`/api/zipCodes/${state}`, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useZipsByState;
