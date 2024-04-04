import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./lib/utils";
import UserCard from "./components/UserCard";
import Loading from "./components/Loading";
import UserForm from "./components/UserForm";
import { useEffect, useState } from "react";
import { User } from "./lib/types";

function App() {
  const [users, setUsers] = useState<User[] | null>(null);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  useEffect(() => {
    if (data) {
      setUsers(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log(error);

    return <h2>Something went wrong.</h2>;
  }

  // if (data) {
  //   console.log(data.data);
  // }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-4">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5">
        {users &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          users.map((user: any) => (
            <UserCard
              key={user.id}
              name={user.name}
              city={user?.address?.city || user.city}
              street={user?.address?.street || user.street}
              company={user?.company?.name || user.company}
              email={user.email}
            />
          ))}
      </div>
      <div>
        <UserForm setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
