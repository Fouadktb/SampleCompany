'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Select } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export const SortableSelect = ({ children }: Props) => {
  const { push } = useRouter()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push(`?sort=${e.target.value}`)
  }

  return (
    <Select
      flex={1}
      onChange={onChange}
      defaultValue='asc'
    >
      {children}
    </Select>
  )
}
