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
      src="https://codesandbox.io/p/sandbox/server-side-filters-lxq6us?embed=1"
    />
  )
}
