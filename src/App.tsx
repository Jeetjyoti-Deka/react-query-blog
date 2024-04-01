import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./lib/utils";

function App() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    console.log(error);

    return <h2>Something went wrong.</h2>;
  }

  if (data) {
    console.log(data.data);
  }
  return (
    <div>
      <h1 className="text-xl text-red-500">Hello World</h1>
    </div>
  );
}

export default App;
