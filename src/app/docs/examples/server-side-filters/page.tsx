import type { Metadata } from "next"

import { ExampleShell } from "@/components/example-shell"

export const metadata: Metadata = {
  title: "Server Side Filters Example",
  description: "A table example with server side filters.",
}

export default function ServerSideFilters() {
  return (
    <ExampleShell
      name="Server Side Filters"
      src="https://codesandbox.io/p/sandbox/server-side-filters-wy4g1y?file=%2Fsrc%2Fmain.tsx%3A1%2C1&embed=1"
    />
  )
}
