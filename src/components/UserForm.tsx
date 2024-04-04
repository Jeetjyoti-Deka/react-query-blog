import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createUser } from "../lib/utils";
import { User } from "../lib/types";

const UserForm = ({
  setUsers,
}: {
  setUsers: React.Dispatch<React.SetStateAction<User[] | null>>;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [company, setCompany] = useState("");

  const mutation = useMutation({
    mutationFn: createUser,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ name, city, company, email, street });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setUsers((prev) => [...prev!, mutation.data.data]);
    }
  }, [mutation.isSuccess, setUsers, mutation.data]);

  return (
    <div className="flex items-center justify-center my-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 w-full max-w-[500px] bg-slate-500 p-6 rounded-[8px]"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="form_input py-2 px-3"
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          value={street}
          id="street"
          onChange={(e) => setStreet(e.target.value)}
          className="form_input py-2 px-3"
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          value={company}
          id="company"
          onChange={(e) => setCompany(e.target.value)}
          className="form_input py-2 px-3"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form_input py-2 px-3"
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          value={city}
          id="city"
          onChange={(e) => setCity(e.target.value)}
          className="form_input py-2 px-3"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white px-4 py-2 w-fit rounded-[8px] mx-auto mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserForm;
