import { TableBody } from "./table-body"
import { TableBodyCell } from "./table-body-cell"
import { TableBodyRow } from "./table-body-row"
import { TableFilterInput } from "./table-filter-input"
import { TableFooter } from "./table-footer"
import { TableFooterCell } from "./table-footer-cell"
import { TableFooterRow } from "./table-footer-row"
import { TableHeader } from "./table-header"
import { TableHeaderCell } from "./table-header-cell"
import { TableHeaderRow } from "./table-header-row"
import { TablePagination } from "./table-pagination"
import { TablePaginationButton } from "./table-pagination-button"
import { TableTag } from "./table-tag"

interface ExamplesProps {
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
    | "pagination"
    | "paginationButton"
    | "tableTag"
}

export function Examples({ renderer }: ExamplesProps) {
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

  if (renderer === "pagination") return <TablePagination />

  if (renderer === "paginationButton") return <TablePaginationButton />

  if (renderer === "tableTag") return <TableTag />

  return null
}
