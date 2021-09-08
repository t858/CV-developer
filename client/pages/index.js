import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { plusIcon } from "../assets/svg";
import { CardUser } from "../components/atoms/CardUser";
import { Heroicons } from "../components/atoms/Heroicons";
import { SearchInput } from "../components/atoms/SearchInput";
import { Pagination } from "../components/molecules/Pagination";
import { getUsers } from "../config/api";

export default function Home(props) {
  const [data, setData] = useState(props.data);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = useCallback(() => {
    const _ = undefined;
    getUsers(currentPage, _, _, search)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e.response));
  }, [search, currentPage]);

  useEffect(() => {
    if (search || currentPage) fetchData();
  }, [search, currentPage, fetchData]);

  return (
    <main className="min-h-screen min-w-screen flex justify-center bg-gray-50 py-10 relative">
      <div className="w-full h-full space-y-10">
        <h1 className="text-center font-semibold text-3xl">Riwayat pengguna</h1>
        <SearchInput setSearch={setSearch} setCurrentPage={setCurrentPage} />
        <div className="mx-auto w-1/2 p-2 grid grid-cols-2 gap-5">
          {data.data.map((el, index) => (
            <CardUser key={index} data={el} />
          ))}
        </div>
        <Pagination
          currentPage={data.current_page}
          setCurrentPage={setCurrentPage}
          totalPage={data.total_page}
        />
      </div>
      <Link href="/cv">
        <button className="fixed right-8 bottom-8 h-14 w-14 rounded-full flex justify-center items-center shadow-md border">
          <Heroicons
            d={plusIcon}
            strokeWidth={2}
            size="h-10 w-10"
            color="text-gray-600"
          />
        </button>
      </Link>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await getUsers();
    return { props: { data } };
  } catch (error) {
    console.log(error?.response);
  }
}
