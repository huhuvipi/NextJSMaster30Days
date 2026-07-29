"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function UserNavButtons() {
  const router = useRouter();
  const [lastAction, setLastAction] = useState<string | null>(null);

  function goPush(path: string) {
    setLastAction(`push -> ${path}`);
    router.push(path);
  }

  function goReplace(path: string) {
    setLastAction(`replace -> ${path}`);
    router.replace(path);
  }

  return (
    <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div>
        <button style={{ marginRight: 8 }} onClick={() => goPush('/users/1')}>
          Push /users/1
        </button>
        <button style={{ marginRight: 8 }} onClick={() => goReplace('/users/1')}>
          Replace /users/1
        </button>
        <button style={{ marginRight: 8 }} onClick={() => goPush('/users/slow')}>
          Push /users/slow (shows loading)
        </button>
        <button style={{ marginRight: 8 }} onClick={() => goPush('/users/404')}>
          Push /users/404 (not found)
        </button>
        <button onClick={() => { setLastAction('back'); router.back(); }} style={{ marginLeft: 12 }}>
          Back
        </button>
      </div>

      <div style={{ color: '#444', fontSize: 13 }}>
        {lastAction ? <span>Last action: {lastAction}</span> : <span>No actions yet</span>}
      </div>
    </div>
  );
}
