import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useListings = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/user/listings/${userId}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    listings: data,
    listingsErr: error,
    listingsLoading: !error && !data,
    mutateListings: mutate,
  };
};

export default useListings;

export const useActiveListings = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/user/listings/${userId}/active` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    listings: data,
    listingsErr: error,
    listingsLoading: !error && !data,
    mutateListings: mutate,
  };
};

export const usePreviousListings = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/user/listings/${userId}/closed` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    listings: data,
    listingsErr: error,
    listingsLoading: !error && !data,
    mutateListings: mutate,
  };
};
