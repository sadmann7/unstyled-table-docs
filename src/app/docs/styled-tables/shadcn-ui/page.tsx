import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Shadcn Table",
  description: "Shadcn table built with the unstyled-table package.",
}

export default function ShadcnPage() {
  return (
    <ExampleShell
      name="Shadcn"
      src="https://codesandbox.io/p/sandbox/shadcn-table-lge3cv?file=%2Fsrc%2Fcomponents%2Fserver-controlled-table.tsx%3A1%2C1&embed=1"
      type="Styled Examples"
    />
  )
}
