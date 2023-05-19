import { TableBody } from "./examples/table-body"
import { TableBodyCell } from "./examples/table-body-cell"
import { TableBodyRow } from "./examples/table-body-row"
import { TableFilterInput } from "./examples/table-filter-input"
import { TableFooter } from "./examples/table-footer"
import { TableFooterCell } from "./examples/table-footer-cell"
import { TableFooterRow } from "./examples/table-footer-row"
import { TableHeader } from "./examples/table-header"
import { TableHeaderCell } from "./examples/table-header-cell"
import { TableHeaderRow } from "./examples/table-header-row"
import { TablePaginationBar } from "./examples/table-pagination-bar"
import { TablePaginationButton } from "./examples/table-pagination-button"
import { TableTag } from "./examples/table-tag"

interface ExampleProps {
  renderer:
    | "header"
    | "headerCell"
    | "headerRow"
    | "filterInput"
    | "body"
    | "bodyCell"
    | "bodyRow"
    | "footer"
    | "footerCell"
    | "footerRow"
    | "paginationBar"
    | "paginationButton"
    | "tableTag"
}

export function Example({ renderer }: ExampleProps) {
  if (renderer === "headerCell") return <TableHeaderCell />

  if (renderer === "header") return <TableHeader />

  if (renderer === "headerRow") return <TableHeaderRow />

  if (renderer === "filterInput") return <TableFilterInput />

  if (renderer === "body") return <TableBody />

  if (renderer === "bodyCell") return <TableBodyCell />

  if (renderer === "bodyRow") return <TableBodyRow />

  if (renderer === "footer") return <TableFooter />

  if (renderer === "footerCell") return <TableFooterCell />

  if (renderer === "footerRow") return <TableFooterRow />

  if (renderer === "paginationBar") return <TablePaginationBar />

  if (renderer === "paginationButton") return <TablePaginationButton />

  if (renderer === "tableTag") return <TableTag />

  return null
}
