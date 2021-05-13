import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useUserLocations = (state) => {
  const { data, error, mutate } = useSWR(`/api/map/users/${state}`, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    location: data,
    locationError: error,
    locationIsLoading: !error && !data,
    mutateZips: mutate,
  };
};

export default useUserLocations;
