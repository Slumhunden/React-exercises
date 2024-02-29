import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    // user.name = e.target.value;
    setUser((prev) => ({ ...prev, name: e.target.value }));
  }
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({ ...prev, email: e.target.value }));
  }
  function handleActiveChange(e: ChangeEvent<HTMLInputElement>) {
setUser((prev) => ({ ...prev, isActive: e.target.checked }));  
}

  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name: <input name="name" value={user.name} onChange={handleNameChange} />
      Email: <input name="email" value={user.email} onChange={handleEmailChange} />
      Active: <input type="checkbox" checked={user.isActive} onChange={handleActiveChange} name="isActive" />
      <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
    </>
  );
}
