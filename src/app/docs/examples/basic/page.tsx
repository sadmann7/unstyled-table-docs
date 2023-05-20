import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Basic Example",
  description: "A basic table example.",
}

export default function BasicPage() {
  return (
    <ExampleShell
      name="Basic"
      src="https://codesandbox.io/p/sandbox/basic-table-hnk64q?embed=1"
    />
  )
}
