import { getDevice } from '@/backend'
import { HStack, Stack, Text } from '@chakra-ui/react'

import { Link } from '@/components/Wrappers'

export default async function DevicePage({ params }: { params: { id: number } }) {
  const data = await getDevice({ id: params?.id })

  const deviceMetadata = [
    { label: 'IP', value: data?.IPv4_address },
    { label: 'Model', value: data?.model },
    { label: 'MAC_address', value: data?.MAC_address },
    { label: 'Operating System', value: data?.operating_system },
    { label: 'Manufacturer', value: data?.manufacturer },
    { label: 'Open Ports', value: data?.open_ports?.join(', ') },
  ]

  return (
    <Stack
      as='main'
      py={24}
      px={4}
      justify='center'
      align='center'
    >
      <Text
        fontWeight='bold'
        textAlign='center'
        pb={4}
      >
        {data?.hostname}
      </Text>

      {deviceMetadata.map((item, index) => (
        <HStack
          key={index}
          justify='space-between'
          width='full'
          maxW='3xl'
        >
          <Text>{item.label}</Text>
          <Text>{item.value}</Text>
        </HStack>
      ))}

      <Link href={`/${data?.id}/vulnerabilities`}>View Vulnerabilities →</Link>
    </Stack>
  )
}
