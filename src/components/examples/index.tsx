import { TableHeader } from "./table-header"
import { TableHeaderCell } from "./table-header-cell"
import { TableHeaderRow } from "./table-header-row"

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

  return null
}
