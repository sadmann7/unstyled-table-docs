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
      src="https://codesandbox.io/p/sandbox/column-visibility-uecs1b?file=%2Fsrc%2Fmain.tsx%3A26%2C1&embed=1"
    />
  )
}
