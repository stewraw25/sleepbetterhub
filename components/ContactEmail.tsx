import { getContactEmail, isRealEmail } from '@/lib/site';

export function ContactEmail({ className }: { className?: string }) {
  const email = getContactEmail();
  if (!isRealEmail(email)) {
    return <span className={className}>{email}</span>;
  }
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
