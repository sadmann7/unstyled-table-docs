import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Server Side Sorting Example",
  description: "A table example with server side sorting.",
}

export default function ServerSidePagination() {
  return (
    <ExampleShell
      name="Server Side Sorting"
      src="https://codesandbox.io/p/sandbox/server-side-sorting-6kq1mm?file=%2Fsrc%2Fmain.tsx%3A23%2C1&embed=1"
    />
  )
}
