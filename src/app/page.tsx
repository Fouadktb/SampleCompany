import { Suspense } from 'react'
import { getDevices } from '@/backend'
import { HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { SearchParams } from 'types/devices'

import { DeviceCard } from '@/components/Home'
import { SortableSelect } from '@/components/Shared'

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const data = await getDevices(searchParams)

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
      <SimpleGrid
        width='full'
        py={12}
        gap={4}
        minChildWidth={350}
      >
        <Suspense fallback={<Text>Loading...</Text>}>
          {Array.isArray(data) && data?.length > 0 ? (
            data?.map(device => (
              <DeviceCard
                device={device}
                key={device?.id}
              />
            ))
          ) : (
            <Text>No devices with Vulnerabilities found</Text>
          )}
        </Suspense>
      </SimpleGrid>
    </Stack>
  )
}
