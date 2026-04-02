'use client';

import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface Props { config: { accentColor: string }; }

export function QrCode({ config }: Props) {
  const [url, setUrl] = useState('');
  useEffect(() => { setUrl(window.location.href); }, []);
  if (!url) return null;
  return (
    <QRCodeSVG
      value={url}
      size={88}
      level="L"
      bgColor="#ffffff"
      fgColor="#111827"
    />
  );
}