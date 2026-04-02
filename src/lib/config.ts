export interface SocialItem { platform: string; url: string; label?: string; }
export interface ExtraContactItem { type: 'email' | 'phone' | 'link' | 'text'; label: string; value: string; }

export type DesignPreset = 'pro' | 'corporate' | 'creative' | 'minimal-dark';

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

function parsePreset(raw: string | undefined): DesignPreset {
  const valid: DesignPreset[] = ['pro', 'corporate', 'creative', 'minimal-dark'];
  return valid.includes(raw as DesignPreset) ? (raw as DesignPreset) : 'pro';
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '홍길동',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Gildong Hong',
  title: process.env.NEXT_PUBLIC_TITLE || '프리랜서 개발자',
  titleEn: process.env.NEXT_PUBLIC_TITLE_EN || 'Freelance Developer',
  company: process.env.NEXT_PUBLIC_COMPANY || null,
  companyEn: process.env.NEXT_PUBLIC_COMPANY_EN || null,
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@example.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '010-1234-5678',
  address: process.env.NEXT_PUBLIC_ADDRESS || null,
  addressEn: process.env.NEXT_PUBLIC_ADDRESS_EN || null,
  website: process.env.NEXT_PUBLIC_WEBSITE || null,
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, []),
  extraContacts: parseJSON<ExtraContactItem[]>(process.env.NEXT_PUBLIC_EXTRA_CONTACTS, []),
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL || null,
  accentColor: process.env.NEXT_PUBLIC_ACCENT_COLOR || '#3b82f6',
  designPreset: parsePreset(process.env.NEXT_PUBLIC_DESIGN_PRESET || 'pro'),
  fontFamily: process.env.NEXT_PUBLIC_FONT_FAMILY || 'Pretendard Variable',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;