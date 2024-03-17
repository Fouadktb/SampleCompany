import { getVulnerabilities } from '@/backend'
import { HStack, Stack, Text } from '@chakra-ui/react'
import { SearchParams } from 'types/devices'

import { SortableSelect } from '@/components/Shared'
import { Selectablevulnerabilities } from '@/components/Vulnerabilities'

export default async function Vulnerabilities({ searchParams }: { searchParams: SearchParams }) {
  const vulnerabilities = await getVulnerabilities(searchParams)

  return (
    <Stack
      as='main'
      py={24}
      px={4}
      justify='center'
      align='center'
      maxW='6xl'
      mx='auto'
    >
      <HStack
        justify='center'
        width='full'
      >
        <Text flex={2}>All Vulnerabilities</Text>

        <SortableSelect>
          <option value='asc'>Sort by Asc</option>
          <option value='desc'>Sort by Desc</option>
        </SortableSelect>
      </HStack>
      {vulnerabilities && <Selectablevulnerabilities vulnerabilities={vulnerabilities} />}
    </Stack>
  )
}
