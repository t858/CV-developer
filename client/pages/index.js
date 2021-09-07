import { CardUser } from "../components/atoms/CardUser";
import { SearchInput } from "../components/atoms/SearchInput";
import { Pagination } from "../components/molecules/Pagination";

export default function Home() {
  // const router = useRouter();
  // const getStarted = () => router.push("/cv");

  return (
    <main className="min-h-screen min-w-screen flex justify-center bg-gray-50 py-20">
      <div className="w-full h-full space-y-10">
        <h1 className="text-center font-semibold text-3xl">Riwayat pengguna</h1>
        <SearchInput />
        <div className="mx-auto w-1/2 p-2 grid grid-cols-2 gap-5">
          {arr.map((el, index) => (
            <CardUser key={index} />
          ))}
        </div>
        <Pagination />
      </div>
    </main>
  );
}

const arr = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1];
