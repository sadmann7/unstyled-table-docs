import { Header } from "@/components/header"

interface ExampleShellProps {
  name: string
  src: string
  type?: "Examples" | "Styled Examples"
}

export function ExampleShell({
  name,
  src,
  type = "Examples",
}: ExampleShellProps) {
  return (
    <main className="grid w-full items-center gap-6 py-6 lg:py-8">
      <Header path={`${type}/${name}`} />
      <iframe
        className="w-full rounded-md border"
        width={896}
        height={576}
        src={src}
      ></iframe>
    </main>
  )
}
