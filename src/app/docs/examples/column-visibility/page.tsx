import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Column Visibility Example",
  description: "A table example with column visibility.",
}

export default function ColumnVisibilityPage() {
  return (
    <ExampleShell
      name="Column Visibility"
      src="https://codesandbox.io/p/sandbox/late-glade-yr1jp3?embed=1"
    />
  )
}
