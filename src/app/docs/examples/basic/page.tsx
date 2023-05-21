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
      src="https://codesandbox.io/p/sandbox/basic-ljxo94?file=%2Fsrc%2Fmain.tsx%3A26%2C1&embed=1"
    />
  )
}
