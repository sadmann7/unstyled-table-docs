"use client"

import * as React from "react"
import { Table, type ColumnDef } from "unstyled-table"

import { cn } from "@/lib/utils"

type Data = {
  name: string
  email: string
  stance: "mongo" | "goofy"
}

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "stance", header: "Stance" },
] satisfies ColumnDef<Data, unknown>[]

export function TableBodyCell() {
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
      name: "Guy",
      email: "guy@example.com",
      stance: "mongo",
    },
    {
      name: "Skater",
      email: "skater@example.com",
      stance: "goofy",
    },
    {
      name: "Dude",
      email: "dude@example.com",
      stance: "mongo",
    },
    {
      name: "John",
      email: "john@example.com",
      stance: "goofy",
    },
    {
      name: "Gordon",
      email: "gordon@example.com",
      stance: "mongo",
    },
    { name: "Alex", email: "alex@example.com", stance: "goofy" },
  ])

  return (
    <Table
      columns={columns}
      data={data}
      renders={{
        bodyCell: ({ cell, children, props }) => (
          <td
            {...props}
            className={cn(
              "px-4 py-2.5",
              cell.getValue() === "mongo" && "text-red-500",
              cell.getValue() === "goofy" && "text-blue-500"
            )}
          >
            {children}
          </td>
        ),
      }}
    />
  )
}