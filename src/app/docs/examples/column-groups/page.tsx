import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Column Groups Example",
  description: "A table example with column groups.",
}

export default function ColumnGroupsPage() {
  return (
    <ExampleShell
      name="Column Groups"
      src="https://codesandbox.io/p/sandbox/column-groups-b769ys?file=%2Fapp%2Fpage.tsx%3A53%2C10&embed=1"
    />
  )
}
