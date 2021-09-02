import Image from "next/image";

export default function Home() {
  // const router = useRouter();
  // const getStarted = () => router.push("/cv");

  return (
    <main className="min-h-screen min-w-screen flex justify-center bg-gray-50">
      <div className="mt-40 w-full h-full text-center space-y-5">
        <input type="search" className="ring py-1 px-3" />

        <table className="ring w-1/2 mx-auto">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="w-20 py-4">PP</th>
              <th className="w-20 py-4">Nama</th>
              <th className="py-4 text-right pr-6">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((el, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 odd:bg-gray-100"
              >
                <td className="w-20 py-2 flex justify-center items-center">
                  <div className="w-12 h-12 bg-indigo-400 rounded-[50%] border-2 border-white relative overflow-hidden">
                    <Image src="/assets/thumb/1.jpeg" alt="img" layout="fill" />
                  </div>
                </td>
                <td className="w-20 py-2">Nama</td>
                <td className="py-2 text-right pr-6">Tanggal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const arr = [1, 2, 3, 4, 5, 6];
