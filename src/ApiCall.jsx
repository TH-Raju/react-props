import { useEffect, useState } from "react";

const ApiCall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setUsers(data);
    };

    fetchUser();
  }, []);

  // console.log("All", users);

  return (
    <div className=" h-screen">
      Call from API
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {users.map((user) => (
          <div className="p-5 border border-green-600">
            <h1>Name: {user.name}</h1>
            <p>Username: @{user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCall;
