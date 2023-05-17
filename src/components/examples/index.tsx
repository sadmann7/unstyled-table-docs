import { TableCellExample } from "./table-cell-example"

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
  if (renderer === "headerCell") return <TableCellExample />

  return null
}
