import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: import.meta.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });
  const json = await res.json() as { success: boolean };
  return json.success;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const data = await request.formData();

  const turnstileToken = data.get('cf-turnstile-response') as string | null;
  if (!turnstileToken) {
    return new Response(null, { status: 302, headers: { Location: '/contact?error=true' } });
  }
  const valid = await verifyTurnstile(turnstileToken, clientAddress);
  if (!valid) {
    return new Response(null, { status: 302, headers: { Location: '/contact?error=true' } });
  }

  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const organization = data.get('organization') || '';
  const service = data.get('service') || '';
  const date = data.get('date') || '';
  const time = data.get('time') || '';
  const duration = data.get('duration') || '';
  const format = data.get('format') || '';
  const meetingUrl = data.get('meeting_url') || '';
  const location = data.get('location') || '';
  const message = data.get('message') || '';

  const rows = [
    ['Name', name],
    ['Email', email],
    organization ? ['Organization', organization] : null,
    service ? ['Service', service] : null,
    date ? ['Preferred Date', date] : null,
    time ? ['Preferred Time', time] : null,
    duration ? ['Session Length', duration] : null,
    format ? ['Format', format] : null,
    meetingUrl ? ['Meeting Link', meetingUrl] : null,
    location ? ['Appointment Address', location] : null,
    message ? ['Notes', message] : null,
  ]
    .filter(Boolean)
    .map(([label, value]) => `<tr><td style="padding:6px 12px;color:#8B6F47;font-size:12px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#4A3728;font-size:14px">${value}</td></tr>`)
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#F5F0E8;border-radius:12px;overflow:hidden">
      <div style="background:#1E3D2A;padding:24px 28px">
        <p style="margin:0;color:#C4956A;font-size:11px;letter-spacing:3px;text-transform:uppercase">Mi Voz Interpreting</p>
        <h1 style="margin:8px 0 0;color:#F5F0E8;font-size:20px">New Booking Request</h1>
      </div>
      <div style="padding:28px">
        <table style="width:100%;border-collapse:collapse">
          ${rows}
        </table>
      </div>
      <div style="padding:16px 28px;background:#D4E4D6;font-size:12px;color:#3D6B4F">
        Reply directly to this email to respond to ${name}.
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'Mi Voz Contact Form <noreply@lunaroja.org>',
    to: 'michelle@lunaroja.org',
    replyTo: email as string,
    subject: `New booking request from ${name}`,
    html,
  });

  if (error) {
    console.error('Resend error:', JSON.stringify(error));
    return new Response(null, { status: 302, headers: { Location: '/contact?error=true' } });
  }

  return new Response(null, { status: 302, headers: { Location: '/contact?sent=true' } });
};
