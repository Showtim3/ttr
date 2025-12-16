import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Projects</li>
        <div>
        <Link href={'/upload'}>Upload Docs</Link>
        </div>
        <div>
        <Link href={'/upload-excel'}>Upload Excel</Link>
        </div>
      </ul>
    </aside>
  );
}
