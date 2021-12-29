import { baseUrl } from ".";

export const createArticle = async (token, body) => {
  console.log(body);
  const response = await fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ article: { ...body } }),
  });

  const data = await response.json();
  return data;
};
