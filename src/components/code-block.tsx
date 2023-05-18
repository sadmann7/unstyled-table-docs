/** Originally from `t3-env-docs`
 * @link https://github.com/t3-oss/t3-env/blob/main/docs/src/components/mdx/code-block.tsx
 */
import * as React from "react"

import { CopyButton } from "@/components/copy-button"
import { Icons } from "@/components/icons"

type CodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  // set by `rehype-pretty-code`
  "data-language"?: string
  // set by `rehype-pretty-code`
  "data-theme"?: string
  // set by `unist-util-visit`
  raw?: string
}

export function CodeBlock({ children, raw, ...props }: CodeBlockProps) {
  const language = props["data-language"] as string
  const theme = props["data-theme"] as string
  const Icon = {
    js: Icons.javascript,
    ts: Icons.typescript,
    bash: Icons.bash,
  }[language]

  return (
    <>
      {Icon && (
        <Icon
          data-language-icon
          data-theme={theme}
          className="absolute left-5 top-4 z-20 h-5 w-5 text-foreground"
        />
      )}
      <CopyButton value={raw} />
      <pre
        className="relative my-4 max-h-[640px] overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm font-semibold text-muted-foreground"
        {...props}
      >
        {children}
      </pre>
    </>
  )
}
