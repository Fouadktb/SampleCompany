'use client'

import { ReactNode } from 'react'
import { Link as ChakraNextLink, LinkProps } from '@chakra-ui/next-js'

interface Props extends LinkProps {
  children: ReactNode
}

export const Link = ({ href, children, ...rest }: Props) => {
  return (
    <ChakraNextLink
      href={href}
      {...rest}
    >
      {children}
    </ChakraNextLink>
  )
}
