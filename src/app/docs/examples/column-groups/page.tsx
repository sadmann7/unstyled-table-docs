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
      src="https://codesandbox.io/p/sandbox/column-groups-hv0k7s?file=%2Fsrc%2Fmain.tsx%3A58%2C1&embed=1"
    />
  )
}
