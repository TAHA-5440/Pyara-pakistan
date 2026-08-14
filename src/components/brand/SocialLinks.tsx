import { socialLinks } from "@/data/site";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M14.5 3c.4 2.4 1.9 4.2 4.3 4.6v2.4c-1.5 0-2.9-.5-4.1-1.3v6.7c0 3.4-2.7 6.1-6.2 6.1S2.3 18.8 2.3 15.4c0-3.3 2.6-6 5.9-6.1v2.5c-1.8.1-3.2 1.6-3.2 3.5 0 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6V3h2.3Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8ZM17.4 7.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M22.5 7.2a3.2 3.2 0 0 0-2.2-2.3C18.4 4.5 12 4.5 12 4.5s-6.4 0-8.3.4A3.2 3.2 0 0 0 1.5 7.2 33 33 0 0 0 1.1 12a33 33 0 0 0 .4 4.8 3.2 3.2 0 0 0 2.2 2.3c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.2 3.2 0 0 0 2.2-2.3 33 33 0 0 0 .4-4.8 33 33 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

const icons = {
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((item) => {
        const Icon = icons[item.name];
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="grid h-10 w-10 place-items-center rounded-full gold-border text-cream/80 transition hover:bg-gold/15 hover:text-gold"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
