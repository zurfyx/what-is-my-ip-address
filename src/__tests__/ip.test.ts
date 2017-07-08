import * as nock from 'nock';

import { v4 } from '../ip';

nock('http://ipv4.icanhazip.com').get('/').reply(200, '1.2.3.4');

test('v4', async () => {
  const ip = await v4();
  expect(ip).toBe('1.2.3.4');
});
