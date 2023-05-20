"use client"

import * as React from "react"
import { Table, type ColumnDef } from "unstyled-table"

type Data = {
  name: string
  email: string
  stance: "mongo" | "goofy"
}

const columns = [
  { accessorKey: "name", header: "Name", footer: "Name" },
  { accessorKey: "email", header: "Email", footer: "Email" },
  { accessorKey: "stance", header: "Stance", footer: "Stance" },
] satisfies ColumnDef<Data, unknown>[]

export function TableFooterRow() {
  const [data, setData] = React.useState<Data[]>([
    { name: "Touha", email: "touha@example.com", stance: "mongo" },
    { name: "Sadman", email: "sadman@example.com", stance: "goofy" },
    { name: "Otaku Dev", email: "otakudev@example.com", stance: "mongo" },
    {
      name: "Tony",
      email: "tonny@example.com",
      stance: "goofy",
    },
    {
      name: "Rodney",
      email: "rodney@example.com",
      stance: "goofy",
    },
    {
      name: "Kareem",
      email: "kareem@example.com",
      stance: "mongo",
    },
    {
      name: "Eric",
      email: "bob@example.com",
      stance: "mongo",
    },
    {
      name: "Bam",
      email: "bam@example.com",
      stance: "goofy",
    },
    {
      name: "Nyjah",
      email: "nyjah@example.com",
      stance: "goofy",
    },
    {
      name: "Andrew",
      email: "andrew@example.com",
      stance: "mongo",
    },
    {
      name: "Lizzie",
      email: "lizzie@example.com",
      stance: "goofy",
    },
    { name: "Leticia", email: "leticia@example.com", stance: "goofy" },
  ])

  return (
    <Table
      columns={columns}
      data={data}
      // Renders the footer
      showFooter={true}
      renders={{
        footerRow: ({ children, footerGroup }) => (
          <tr className="text-left">{children}</tr>
        ),
      }}
    />
  )
}
