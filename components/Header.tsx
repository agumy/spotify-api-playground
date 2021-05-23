import Link from "next/link";

export function Header() {
  return (
    <div className="h-24 bg-gray-800 flex items-center justify-between p-5 border-b border-gray-400">
      <h1 className="text-xl text-gray-100">Spotify API Playground</h1>
      <Link href="/login">
        <span className="text-gray-400 h-6 p-2 flex items-center justify-center hover:text-white cursor-pointer">
          Login Spotify
        </span>
      </Link>
    </div>
  );
}
