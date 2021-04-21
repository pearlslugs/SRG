import useSWR from "swr";
import unreadFetcher from "src/lib/utils/swr/unreadFetcher";

const useUnreadMessages = (userId) => {
  const { data, error, mutate } = useSWR(
    userId
      ? `https://api-us.cometchat.io/v2.0/users/${userId}/messages?count=true&perPage=100&withTags=false`
      : null,
    unreadFetcher,
    { revalidateOnFocus: false }
  );
  return {
    unreadMessages: data,
    unreadMessagesError: error,
    unreadMessagesIsLoading: !error && !data,
    mutateUnreadMessages: mutate,
  };
};

export default useUnreadMessages;
