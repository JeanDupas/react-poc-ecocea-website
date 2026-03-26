"use client"

import * as React from "react"
import { useMDXComponent } from "next-contentlayer2/hooks"
import { mdxComponents } from "@/components/mdx/MDXComponents"

interface MdxWrapperProps {
    code: string
}

export function MdxWrapper({ code }: MdxWrapperProps) {
    const Component = useMDXComponent(code)
    // eslint-disable-next-line react-hooks/static-components -- useMDXComponent returns a pre-compiled component reference, not a new component created during render
    return <Component components={mdxComponents} />
}
