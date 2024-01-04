/// api/utils.ts
export async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
