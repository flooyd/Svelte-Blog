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

export const getArticle = async (articleId) => {
  const response = await fetch(`${baseUrl}/articles/${articleId}`);
  const data = await response.json();
  return data;
};
