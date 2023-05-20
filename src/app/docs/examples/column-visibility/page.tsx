import { Header } from "@/components/header"

export default function ColumnVisibilityPage() {
  return (
    <main className="grid w-full items-center gap-6 py-6 lg:py-8">
      <Header path="Examples/Column Visibility" />
      <iframe
        className="w-full rounded-md border"
        width={896}
        height={576}
        src="https://codesandbox.io/p/sandbox/column-visibility-oy2gy4?embed=1"
      ></iframe>
    </main>
  )
}
