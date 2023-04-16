import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ModelName } from "@/types";

const getTodos = async (modelName: ModelName) => {
  const { data } = await axios.get(`/items/${modelName}`);
  return data;
};

const useApi = (modelName: ModelName) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", "test"],
    queryFn: () => getTodos(modelName),
  });
  console.log(data);

  return { data, isLoading };
};

export default useApi;
