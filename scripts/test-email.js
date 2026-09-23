async function test() {
  const homeRes = await fetch('http://127.0.0.1:8000');
  const html = await homeRes.text();
  const match = html.match(/name="csrf-token" content="([^"]+)"/);
  const token = match ? match[1] : '';
  const cookie = homeRes.headers.get('set-cookie');
  console.log('CSRF Token retrieved:', token);

  const form = new URLSearchParams();
  form.append('_token', token);
  form.append('contact_name', 'Enterprise Client');
  form.append('contact_email', 'client@enterprise.com');
  form.append('contact_subject', 'High-Throughput LaTeX Engine Project');
  form.append('contact_message', 'Hello Hafiz, testing the Laravel native form endpoint.');
  form.append('combat_spam', '19');

  const res = await fetch('http://127.0.0.1:8000/sendEmail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'X-CSRF-TOKEN': token,
      'Cookie': cookie || '',
    },
    body: form,
  });

  const data = await res.json();
  console.log('POST /sendEmail HTTP Status:', res.status);
  console.log('Detail:', data.detail);
  console.log('Message:', data.message);
  console.log('Status:', data.status);
}

test().catch(console.error);
