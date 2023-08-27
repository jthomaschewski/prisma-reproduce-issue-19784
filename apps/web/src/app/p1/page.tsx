"use client";

import { Userlist } from "../components/user-list";
import { useUsers } from "../hooks";

export default function Page1() {
  const [users, { loading }] = useUsers(1);
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <h2>Page 1</h2>
      <Userlist users={users} />
    </section>
  );
}
