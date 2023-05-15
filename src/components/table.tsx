"use client"

import * as React from "react"
import { Table as UnstyledTable, type ColumnDef } from "unstyled-table"

type Data = {
  name: string
  email: string
  stance: string
}

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "stance", header: "Stance" },
] satisfies ColumnDef<Data, unknown>[]

export default function Table() {
  const [data] = React.useState([
    { name: "Touha", email: "touha@example.com", stance: "Mongo" },
    { name: "Sadman", email: "sadman@example.com", stance: "Goofy" },
    { name: "Otaku Dev", email: "otakudev@example.com", stance: "Goofy" },
  ])

  return <UnstyledTable columns={columns} data={data} />
}
