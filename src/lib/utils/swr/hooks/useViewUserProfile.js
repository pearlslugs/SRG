import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useViewUserProfile = (id) => {
  const { data, error, mutate } = useSWR(
    id ? `/api/user/profile/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    user: data,
    userErr: error,
    userLoading: !error && !data,
    mutateUser: mutate,
  };
};

export default useViewUserProfile;
