import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { DocsPager } from "@/components/docs-pager"
import { Mdx } from "@/components/mdx-components"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">{doc.description}</p>
          )}
        </div>
        <Separator className="my-4 md:my-6" />
        <Mdx code={doc.body.code} />
        <Separator className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>
    </main>
  )
}
