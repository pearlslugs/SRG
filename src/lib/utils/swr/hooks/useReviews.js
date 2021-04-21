import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useReviews = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? "/api/user/reviews/false" : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    reviews: data,
    reviewsErr: error,
    reviewsLoading: !error && !data,
    mutateReviews: mutate,
  };
};

export default useReviews;

export const useOtherUserReviews = (id) => {
  const { data, error, mutate } = useSWR(
    id ? `/api/user/reviews/true/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    reviews: data,
    reviewsErr: error,
    reviewsLoading: !error && !data,
    mutateReviews: mutate,
  };
};
