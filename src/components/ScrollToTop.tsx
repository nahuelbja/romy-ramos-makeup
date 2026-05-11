'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return null;
}
