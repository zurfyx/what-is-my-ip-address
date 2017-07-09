import 'isomorphic-fetch';

function extractIp(rawText: string) {
  return rawText.replace(/\s+/g, '');
}

export async function v4(): Promise<string> {
  const request = await fetch('https://ipv4.icanhazip.com/');
  const text = await request.text();
  const ip = extractIp(text);
  return ip;
}

export async function v6(): Promise<string> {
  const request = await fetch('https://ipv6.icanhazip.com');
  const text = await request.text();
  const ip = extractIp(text);
  return ip;
}
