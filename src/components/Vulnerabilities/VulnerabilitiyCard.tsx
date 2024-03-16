import { getDevice } from '@/backend'
import { Stack, Text } from '@chakra-ui/react'
import { Vulnerability } from 'types/devices'

import { Link } from '../Wrappers'

interface Props {
  vulnerability: Vulnerability
}

export const VulnerabilitiyCard = async ({ vulnerability }: Props) => {
  const device = await getDevice({ id: vulnerability?.device_id })

  return (
    <Link
      href={`/${vulnerability?.device_id}`}
      key={vulnerability?.device_id}
    >
      <Stack
        padding={12}
        borderRadius='12px'
        border='1px solid'
        maxW='sm'
      >
        <Text
          textAlign='center'
          pb={4}
        >
          Vulnerabilitiy found in{' '}
          <Text
            as='span'
            fontWeight='bold'
          >
            {device?.hostname}
          </Text>
        </Text>
        <Text>Name: {vulnerability?.name}</Text>
        <Text>CVE: {vulnerability?.CVE}</Text>
        <Text>Severity: {vulnerability?.severity}</Text>
        <Text>Description: {vulnerability?.description}</Text>
        <Text>Solution: {vulnerability?.solution}</Text>
        <Text>CVSS Vector: {vulnerability?.cvss_vector}</Text>
        <Text>Affected Software: {vulnerability?.affected_software}</Text>
        <Text color={vulnerability?.exploit_present ? 'red' : 'green'}>
          Exploit Present: {String(vulnerability?.exploit_present)}
        </Text>
      </Stack>
    </Link>
  )
}
