import fetch from 'node-fetch';

export async function v4() {
  const request = await fetch('http://ipv4.icanhazip.com/');
  const ip = request.text();
  return ip;
}

export async function v6() {
  const request = await fetch('http://ipv6.icanhazip.com');
  const ip = request.text();
  return ip;
}
