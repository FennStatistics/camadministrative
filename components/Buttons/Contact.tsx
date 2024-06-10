import Link from "next/link";

export default function ButtonContact() {
  return(
    <Link
    href="/contact"
    className="py-2 px-3 flex rounded-md bg-gray-200 hover:bg-gray-500 text-sm"
  >
    Contact
  </Link>
  )
}
