import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Plain",
  description:
    "A plain table example without any pagination, sorting, and filtering.",
}

export default function PlainPage() {
  return (
    <ExampleShell
      name="Plain"
      src="https://codesandbox.io/p/sandbox/column-visibility-oy2gy4?embed=1"
    />
  )
}
