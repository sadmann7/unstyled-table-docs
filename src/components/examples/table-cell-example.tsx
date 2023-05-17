"use client"

import * as React from "react"
import { Table, type ColumnDef } from "unstyled-table"

type Data = {
  name: string
  email: string
}

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
] satisfies ColumnDef<Data, unknown>[]

export function TableCellExample() {
  const [data] = React.useState<Data[]>([
    { name: "Touha", email: "touha@example.com" },
    { name: "Sadman", email: "sadman@example.com" },
    { name: "Otaku Dev", email: "otakudev@example.com" },
  ])

  return (
    <Table
      columns={columns}
      data={data}
      renders={{
        headerCell: ({ children, props }) => (
          <th {...props} className="bg-muted-foreground">
            {children}
          </th>
        ),
      }}
    />
  )
}
