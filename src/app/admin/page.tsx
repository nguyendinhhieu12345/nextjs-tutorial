"use client";
import Link from "next/link";
import { useEffect } from "react";

const AdminPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await res.json()
      console.log(data)
    };
    fetchData();
  }, []);
  return (
    <>
      admin page <br></br>
      <Link href={"/admin/list-student"}>Redirect in list student</Link>
    </>
  );
};

export default AdminPage;
