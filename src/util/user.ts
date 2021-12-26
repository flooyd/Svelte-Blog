import { baseUrl } from "./index";

export const getOwnArticles = async (token): Promise<any> => {
  const response = await fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};
