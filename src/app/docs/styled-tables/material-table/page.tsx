import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Material Table",
  description: "Material table built with the unstyled-table package.",
}

export default function MaterialPage() {
  return (
    <ExampleShell
      name="Material"
      src="https://codesandbox.io/p/sandbox/material-table-ylmb7p?file=%2Fsrc%2Fcomponents%2Fserver-controlled-table.tsx%3A1%2C1&embed=1"
      type="Styled Examples"
    />
  )
}
