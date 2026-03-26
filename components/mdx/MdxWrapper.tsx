"use client"

import * as React from "react"
import { useMDXComponent } from "next-contentlayer2/hooks"
import { mdxComponents } from "@/components/mdx/MDXComponents"

interface MdxWrapperProps {
    code: string
}

export function MdxWrapper({ code }: MdxWrapperProps) {
    const Component = useMDXComponent(code)
    return <Component components={mdxComponents} />
}
