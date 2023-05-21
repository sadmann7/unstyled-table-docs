import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Server Side Pagination Example",
  description: "A table example with server side pagination.",
}

export default function ServerSidePagination() {
  return (
    <ExampleShell
      name="Server Side Pagination"
      src="https://codesandbox.io/p/sandbox/server-side-pagination-voz6fz?file=%2Fsrc%2Fmain.tsx%3A7%2C1&embed=1"
    />
  )
}
