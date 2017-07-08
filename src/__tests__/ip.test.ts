import * as fetchMock from 'fetch-mock';

import { v4 } from '../ip';

fetchMock.get('http://ipv4.icanhazip.com/', '1.2.3.4');

test('v4', async () => {
  const ip = await v4();
  expect(ip).toBe('1.2.3.4');
});