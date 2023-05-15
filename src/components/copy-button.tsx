"use client"

import * as React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface CopyButtonProps extends ButtonProps {
  text: string
}

export function CopyButton({ text, ...props }: CopyButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <Button
      variant="outline"
      size="sm"
      className="absolute right-4 top-4 z-20 h-6 w-6 px-0"
      onClick={() => {
        if (typeof window === "undefined") return
        setIsCopied(true)
        void window.navigator.clipboard.writeText(text)
        setTimeout(() => setIsCopied(false), 3000)
      }}
      {...props}
    >
      {isCopied ? (
        <Icons.check className="h-3 w-3" aria-hidden="true" />
      ) : (
        <Icons.copy className="h-3 w-3" aria-hidden="true" />
      )}
      <span className="sr-only">
        {isCopied ? "Copied" : "Copy to clipboard"}
      </span>
    </Button>
  )
}
