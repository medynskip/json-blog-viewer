const API_URL = "https://jsonplaceholder.typicode.com/";

export async function fetchAPI<T>(apiPath: string): Promise<T> {
  try {
    const requestUrl = `${API_URL}/${apiPath}`;
    const response = await fetch(requestUrl);

    const data = (await response.json()) as T;

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
