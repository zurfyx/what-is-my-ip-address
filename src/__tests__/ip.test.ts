import * as nock from 'nock';

import { v4, v6 } from '../ip';

nock('https://ipv4.icanhazip.com').get('/').reply(200, '1.2.3.4\n');
nock('https://ipv6.icanhazip.com').get('/').reply(200, '2001:0db8:85a3:0000:0000:8a2e:0370:7334\n');

test('v4', async () => {
  const ip = await v4();
  expect(ip).toBe('1.2.3.4');
});

test('v6', async () => {
  const ip = await v6();
  expect(ip).toBe('2001:0db8:85a3:0000:0000:8a2e:0370:7334');
});
