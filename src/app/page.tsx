import { getDevices } from '@/backend'
import { HStack, Stack, Text } from '@chakra-ui/react'
import { SearchParams } from 'types/devices'

import { SelectableDevices } from '@/components/Home'
import { SortableSelect } from '@/components/Shared'

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const devices = await getDevices(searchParams)

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
        <Text flex={2}>Devices with Vulnerabilities</Text>

        <SortableSelect>
          <option value='asc'>Sort by Asc</option>
          <option value='desc'>Sort by Desc</option>
        </SortableSelect>
      </HStack>
      {devices && <SelectableDevices devices={devices} />}
    </Stack>
  )
}
