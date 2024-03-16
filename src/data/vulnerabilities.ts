import { Vulnerability } from 'types/devices'

export const vulnerabilities: Vulnerability[] = [
  {
    device_id: 1,
    CVE: 'CVE-2023-1234',
    name: 'Remote Code Execution',
    severity: 'Critical',
    description:
      'Vulnerability affecting RouterOS version 6.45. It allows remote attackers to execute arbitrary code via unspecified vectors.',
    solution: 'Upgrade RouterOS to version 6.46 or higher.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H',
    affected_software: ['RouterOS 6.45'],
    exploit_present: true,
  },
  {
    device_id: 1,
    CVE: 'CVE-2023-5678',
    name: 'Denial of Service',
    severity: 'High',
    description:
      'Denial of service (DoS) vulnerability in RouterOS version 6.45 allows remote attackers to cause a denial of service.',
    solution: 'Apply vendor-supplied patches.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
    affected_software: ['RouterOS 6.45'],
    exploit_present: false,
  },
  {
    device_id: 2,
    CVE: 'CVE-2022-9876',
    name: 'Remote Code Execution',
    severity: 'Critical',
    description:
      'Remote code execution vulnerability in Windows 10 allows remote attackers to execute arbitrary code via crafted packets.',
    solution: 'Apply Microsoft security updates.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    affected_software: ['Windows 10'],
    exploit_present: true,
  },
  {
    device_id: 2,
    CVE: 'CVE-2023-5432',
    name: 'Privilege Escalation',
    severity: 'Medium',
    description:
      'Privilege escalation vulnerability in Windows 10 allows local users to gain privileges via a crafted application.',
    solution: 'Apply Microsoft security updates.',
    cvss_vector: 'CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H',
    affected_software: ['Windows 10'],
    exploit_present: false,
  },
  {
    device_id: 3,
    CVE: 'CVE-2023-1111',
    name: 'Buffer Overflow',
    severity: 'High',
    description:
      'Buffer overflow vulnerability in HP LaserJet Pro M402dn printers allows remote attackers to execute arbitrary code via crafted packets.',
    solution: 'Apply vendor-supplied patches.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    affected_software: ['HP LaserJet Pro M402dn'],
    exploit_present: true,
  },
  {
    device_id: 4,
    CVE: 'CVE-2023-2222',
    name: 'Authentication Bypass',
    severity: 'High',
    description:
      'Authentication bypass vulnerability in Cisco Catalyst 2960 switches allows remote attackers to gain unauthorized access.',
    solution: 'Apply vendor-supplied patches.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    affected_software: ['Cisco Catalyst 2960'],
    exploit_present: false,
  },
  {
    device_id: 5,
    CVE: 'CVE-2023-3333',
    name: 'SQL Injection',
    severity: 'High',
    description:
      'SQL injection vulnerability in Ubuntu Server allows remote attackers to execute arbitrary SQL commands via crafted requests.',
    solution: 'Apply vendor-supplied patches.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    affected_software: ['Ubuntu Server'],
    exploit_present: true,
  },
  {
    device_id: 5,
    CVE: 'CVE-2023-4444',
    name: 'Cross-Site Scripting (XSS)',
    severity: 'Medium',
    description:
      'Cross-site scripting (XSS) vulnerability in Ubuntu Server allows remote attackers to inject arbitrary web script or HTML via crafted requests.',
    solution: 'Apply vendor-supplied patches.',
    cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N',
    affected_software: ['Ubuntu Server'],
    exploit_present: false,
  },
]
