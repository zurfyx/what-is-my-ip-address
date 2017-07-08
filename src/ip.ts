import fetch from 'node-fetch';

export async function v4() {
  const request = await fetch('http://ipv4.icanhazip.com/');
  const ip = request.text();
  return ip;
}
