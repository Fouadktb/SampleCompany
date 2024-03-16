'use client'

import { Link } from '@chakra-ui/next-js'
import { HStack, Stack } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Stack
      justify='center'
      align='center'
      py={4}
      px={4}
      shadow='md'
    >
      <Link
        href='/'
        fontSize='2xl'
        fontWeight='bold'
        fontStyle='italic'
      >
        Sample Company
      </Link>

      <HStack>
        <Link href='/'>Devices</Link>
        <Link href='/vulnerabilities'>Vulnerabilities</Link>
      </HStack>
    </Stack>
  )
}
