import { useEffect, useRef, useState } from "react";
// import ProductList from "./components/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

// const connect = () => console.log("Connecting");
// const disconnect = () => console.log("Disconnecting");

function API() {
  // const [category, setCategory] = useState("");
  // const ref = useRef<HTMLInputElement>(null);

  // if (ref.current) ref.current.focus();
  // useEffect(() => {
  //   // Side effect
  //   if (ref.current) ref.current.focus();
  // });

  // useEffect(() => {
  //   connect();

  // clean up function to unmount
  //   return () => disconnect();
  // });

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  //Another way to fetch users
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  //       setUsers(res.data);
  //     } catch (error) {
  //       setError((error as AxiosError).message);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Akbar" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/xusers", newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <div>
      {/* <input ref={ref} type="text" className="form-control" /> */}
      {/* <select id="" className="form-select" onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Houehold">Houehold</option>
      </select>
      <ProductList category={category} /> */}
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button className="btn btn-outline-secondary mx-2" onClick={() => updateUser(user)}>
                Update
              </button>
              <button className="btn btn-outline-danger mx-2" onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default API;
