import { getDevice, getDeviceVulnerabilities } from '@/backend'
import { Stack, Text } from '@chakra-ui/react'

import { Link } from '@/components/Wrappers'

export default async function DevicePage({ params }: { params: { id: number } }) {
  const device = await getDevice({ id: params?.id })
  const vulnerabilities = await getDeviceVulnerabilities({ id: params?.id })

  return (
    <Stack
      as='main'
      py={24}
      px={4}
      justify='center'
      align='center'
    >
      <Stack maxWidth='3xl'>
        <Link
          href={`/${device?.id}`}
          alignSelf='flex-start'
        >
          ← Back to {device?.hostname}
        </Link>

        <Text
          fontWeight='bold'
          textAlign='center'
          pb={4}
          color={vulnerabilities && vulnerabilities?.length > 0 ? 'red' : 'green'}
        >
          Device Vulnerabilities
        </Text>

        {Array.isArray(vulnerabilities) && vulnerabilities?.length > 0 ? (
          vulnerabilities?.map(vulnerability => (
            <Stack
              padding={12}
              borderRadius='12px'
              border='1px solid'
              key={vulnerability?.CVE}
            >
              <Text
                fontWeight='bold'
                textAlign='center'
                pb={4}
              >
                {vulnerability?.name}
              </Text>
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
          ))
        ) : (
          <Text>No vulnerabilities found</Text>
        )}
      </Stack>
    </Stack>
  )
}
