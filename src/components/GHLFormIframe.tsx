'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GHL_ORIGIN = 'https://api.leadconnectorhq.com';

export function GHLFormIframe() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== GHL_ORIGIN) return;

      // GHL signals form submission as Array(5) where [0] === 'set-sticky-contacts'
      // and [1] === '_ud' (carries the contact payload). A second set-sticky-contacts
      // fires immediately after with [1] === the iframe element ID — we skip that one.
      const d = event.data;
      if (!Array.isArray(d) || d[0] !== 'set-sticky-contacts' || d[1] !== '_ud') return;

      window.fbq?.('track', 'Lead');
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/EEJ792UCw3hfLSrTfLyQ"
        style={{
          width: '100%',
          height: '500px',
          border: 'none',
          borderRadius: '8px',
          display: 'block',
        }}
        id="inline-EEJ792UCw3hfLSrTfLyQ"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="EMS_form1"
        data-height="500"
        data-layout-iframe-id="inline-EEJ792UCw3hfLSrTfLyQ"
        data-form-id="EEJ792UCw3hfLSrTfLyQ"
        title="EMS_form1"
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
