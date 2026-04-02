'use client';

import { Linkedin, Instagram, Github, Facebook, Youtube, Globe, type LucideIcon } from 'lucide-react';
import type { SocialItem } from '@/lib/config';

/* X (formerly Twitter) inline SVG icon */
function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.856L1.548 2.25h6.89l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.24 8.24 0 0 0 4.82 1.55V6.79a4.85 4.85 0 0 1-1.05-.1z" />
    </svg>
  );
}

function NaverBlogIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
    </svg>
  );
}

function ThreadsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.34-.776-.94-1.41-1.738-1.854a7.025 7.025 0 0 1-.345 2.994c-.442 1.237-1.2 2.202-2.233 2.835-1.008.618-2.22.908-3.6.862-1.658-.055-3.005-.646-3.895-1.71-.82-.98-1.263-2.264-1.248-3.614.03-2.514 1.89-4.336 4.636-4.544l.091-.004c1.478-.042 2.794.34 3.803 1.105.473.358.857.794 1.145 1.293.553-.14 1.06-.227 1.512-.247h.029c.576 0 1.11.15 1.59.447.94.582 1.524 1.59 1.736 2.998.136.895.094 1.97-.123 3.095-.68 3.512-2.834 5.638-6.44 6.34-.592.116-1.22.175-1.87.181zm-.036-9.894c-1.73.135-2.683 1.133-2.7 2.818-.01.845.27 1.556.788 2.003.538.464 1.328.71 2.288.743.898.03 1.685-.163 2.342-.574.672-.42 1.168-1.055 1.472-1.886.33-.9.382-1.87.152-2.804-.424-.254-.93-.387-1.504-.397-.168 0-.35.01-.546.032a8.545 8.545 0 0 0-2.292.065z" />
    </svg>
  );
}

const socialIcons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
};

const socialLabels: Record<string, string> = {
  linkedin: 'LinkedIn',
  twitter: 'X',
  x: 'X',
  instagram: 'Instagram',
  github: 'GitHub',
  facebook: 'Facebook',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  threads: 'Threads',
  'naver-blog': '네이버 블로그',
};

interface Props { socials: SocialItem[]; accentColor: string; }

export function SocialLinks({ socials, accentColor }: Props) {
  if (!socials.length) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
      {socials.map((social, i) => {
        const platform = social.platform.toLowerCase();
        const displayLabel = social.label || socialLabels[platform] || social.platform;
        const isX = platform === 'twitter' || platform === 'x';
        const isTikTok = platform === 'tiktok';
        const isThreads = platform === 'threads';
        const isNaverBlog = platform === 'naver-blog';
        const hasCustomIcon = isX || isTikTok || isThreads || isNaverBlog;
        const Icon = hasCustomIcon ? null : (socialIcons[platform] ?? Globe);
        return (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={displayLabel}
            className="social-chip"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            {isX && <XIcon size={14} />}
            {isTikTok && <TikTokIcon size={14} />}
            {isThreads && <ThreadsIcon size={14} />}
            {isNaverBlog && <NaverBlogIcon size={14} />}
            {Icon && <Icon size={14} />}
            {displayLabel}
          </a>
        );
      })}
    </div>
  );
}