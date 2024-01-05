'use client'
import { useRouter } from "next/navigation";

const ListStudent = () => {
    const router = useRouter()
    const handleRedirectAdmin = () =>{
        router.push("/admin")
    }
  return (
    <>
      list student<br></br>
      <button onClick={handleRedirectAdmin}>back to admin</button>
    </>
  );
};

export default ListStudent;
