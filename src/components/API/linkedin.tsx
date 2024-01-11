import { useEffect } from "react";
import createApiInstance from "../../api/api";

const api = createApiInstance();

function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Your component content</div>;
}

export default MyComponent;
