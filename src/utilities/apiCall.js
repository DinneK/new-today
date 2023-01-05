const API_Key = process.env.REACT_APP_API_KEY;
const NYT_URL = "https://api.nytimes.com/svc/topstories/v2/";

const getArticles = async (data) => {
  try {
    const response = await fetch(
      `${NYT_URL}${data}.json?api-key=QaJMSA9OAdFpR7WiANUBbJsM12ynbRE0`
    );

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(`${error}`);
    return error;
  }
};

export { getArticles };
