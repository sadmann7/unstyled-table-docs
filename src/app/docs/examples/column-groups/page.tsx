import { Header } from "@/components/header"

export default function ColumnGroupsPage() {
  return (
    <main className="grid w-full items-center gap-6 py-6 lg:py-8">
      <Header path="Examples/Column Groups" />
      <iframe
        className="w-full rounded-md border"
        width={896}
        height={576}
        src="https://codesandbox.io/p/sandbox/column-groups-b769ys?file=%2Fapp%2Fpage.tsx%3A53%2C10&embed=1"
      ></iframe>
    </main>
  )
}
