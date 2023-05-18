import type { MainNavItem, SidebarNavItem } from "@/types"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs/introduction",
    },
    {
      title: "Core APIs",
      href: "/docs/core-apis/column-def",
    },
    {
      title: "Renderers",
      href: "/docs/renderers/header",
    },
    {
      title: "Examples",
      href: "/docs/examples/basic",
    },
    {
      title: "Github",
      href: "https://github.com/otaku-oss/unstyled-table",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Core APIs",
      items: [
        {
          title: "Column Def",
          href: "/docs/core-apis/column-def",
          items: [],
        },
        {
          title: "Table",
          href: "/docs/core-apis/table",
          items: [],
        },
        {
          title: "Column",
          href: "/docs/core-apis/column",
          items: [],
        },
        {
          title: "Header Group",
          href: "/docs/core-apis/header-group",
          items: [],
        },
        {
          title: "Header",
          href: "/docs/core-apis/header",
          items: [],
        },
        {
          title: "Row",
          href: "/docs/core-apis/row",
          items: [],
        },
        {
          title: "Cell",
          href: "/docs/core-apis/cell",
          items: [],
        },
      ],
    },
    {
      title: "Renderers",
      items: [
        {
          title: "Header",
          href: "/docs/renderers/header",
          items: [],
        },
        {
          title: "Header Row",
          href: "/docs/renderers/header-row",
          items: [],
        },
        {
          title: "Header Cell",
          href: "/docs/renderers/header-cell",
          items: [],
        },
        {
          title: "Filter Input",
          href: "/docs/renderers/filter-input",
          items: [],
        },
        {
          title: "Body",
          href: "/docs/renderers/body",
          items: [],
        },
        {
          title: "Body Row",
          href: "/docs/renderers/body-row",
          items: [],
        },
        {
          title: "Body Cell",
          href: "/docs/renderers/body-cell",
          items: [],
        },
        {
          title: "Footer",
          href: "/docs/renderers/footer",
          items: [],
        },
        {
          title: "Footer Row",
          href: "/docs/renderers/footer-row",
          items: [],
        },
        {
          title: "Footer Cell",
          href: "/docs/renderers/footer-cell",
          items: [],
        },
        {
          title: "Pagination",
          href: "/docs/renderers/pagination",
          items: [],
        },
        {
          title: "Pagination Button",
          href: "/docs/renderers/pagination-button",
          items: [],
        },
        {
          title: "Table Tag",
          href: "/docs/renderers/table-tag",
          items: [],
        },
      ],
    },
    {
      title: "Examples",
      items: [
        {
          title: "Basic",
          href: "/docs/examples/basic",
          items: [],
        },
        {
          title: "Column Groups",
          href: "/docs/examples/column-groups",
          disabled: true,
          items: [],
        },
        {
          title: "Column Visibility",
          href: "/docs/examples/column-visibility",
          disabled: true,
          items: [],
        },
        {
          title: "Filters",
          href: "/docs/examples/filters",
          disabled: true,
          items: [],
        },
        {
          title: "Server Side Filters",
          href: "/docs/examples/server-side-filters",
          disabled: true,
          items: [],
        },
        {
          title: "Pagination",
          href: "/docs/examples/pagination",
          disabled: true,
          items: [],
        },
        {
          title: "Server Side Pagination",
          href: "/docs/examples/server-side-pagination",
          disabled: true,
          items: [],
        },
        {
          title: "Sorting",
          href: "/docs/examples/sorting",
          disabled: true,
          items: [],
        },
        {
          title: "Server Side Sorting",
          href: "/docs/examples/server-side-sorting",
          disabled: true,
          items: [],
        },
        {
          title: "Fully Controlled",
          href: "/docs/examples/fully-controlled",
          disabled: true,
          items: [],
        },
        {
          title: "Server Controlled",
          href: "/docs/examples/server-controlled",
          disabled: true,
          items: [],
        },
        {
          title: "Row Selection",
          href: "/docs/examples/row-selection",
          disabled: true,
          items: [],
        },
        {
          title: "Column Ordering",
          href: "/docs/examples/column-ordering",
          disabled: true,
          items: [],
        },
        {
          title: "Column Ordering (DnD)",
          href: "/docs/examples/column-dnd",
          disabled: true,
          items: [],
        },
        {
          title: "Column Sizing",
          href: "/docs/examples/column-sizing",
          disabled: true,
          items: [],
        },
        {
          title: "Editable Data",
          href: "/docs/examples/editable-cells",
          disabled: true,
          items: [],
        },
        {
          title: "Virtualized Rows",
          href: "/docs/examples/virtualized-rows",
          disabled: true,
          items: [],
        },
        {
          title: "Virtualized Infinite Scrolling",
          href: "/docs/examples/virtualized-infinite-scrolling",
          disabled: true,
          items: [],
        },
      ],
    },
  ],
}
