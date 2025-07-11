import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-100 py-4 px-6">
      <Link href="/">
        <h1 className="font-semibold text-gray-500">
          Infoweb - Atividade 1 do 2o bimestre
        </h1>
      </Link>
    </header>
  );
}
export default Header;
