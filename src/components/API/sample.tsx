import { NextApiRequest, NextApiResponse } from "next";
import createApiInstance from "../../api/api";
const api = createApiInstance();
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Making Request to sample endpoint");
    const response = await api.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.data;
    console.log("Received Data:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
