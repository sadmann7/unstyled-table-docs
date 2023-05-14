export default function DocsLayout(props: { children: React.ReactNode }) {
  return (
    <div className="container grid w-full items-center gap-6 pb-8 pt-6 md:py-10">
      {props.children}
    </div>
  )
}
