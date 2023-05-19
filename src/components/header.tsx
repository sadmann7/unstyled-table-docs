import { Icons } from "./icons"

interface HeaderProps {
  title?: string
  description?: string
  showTitle?: boolean
  path?: string
}

export function Header({ title, description, path }: HeaderProps) {
  return (
    <div className="grid gap-1">
      {path ? (
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            {path.split("/")[0]}
          </div>
          <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
          <div className="font-medium text-foreground">
            {path.split("/")[1]}
          </div>
        </div>
      ) : null}
      {title ? (
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      ) : null}
      {description ? (
        <p className="text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
