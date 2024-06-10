import Link from "next/link";

export default function ButtonHome() {
  return(
    <Link
    href="/"
    className="py-2 px-3 flex rounded-md bg-gray-200 hover:bg-gray-500 text-xl"
  >
    Home
  </Link>
  )
}
