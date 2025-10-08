export default function GlobalStyle(): JSX.Element {
  return (
    <style>{`
      :root{
        --bg:#121110; --bg-1:#191816; --bg-2:#23211D;
        --text-1:#FAFAFA; --text-2:#CFCFC9;
        --border:#2F2B23; --active:#D2C5A7;
        --radius-2:12px; --radius-3:20px;
        --shadow:0 12px 30px rgba(0,0,0,.45);
      }
      .container{max-width:1200px;margin:0 auto;padding:0 24px;}
      .card{background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius-3);box-shadow:var(--shadow)}
      .pill{border:1px solid var(--border);color:var(--text-2);}
      .headline{font-weight:700;letter-spacing:-0.02em}
      .sub{color:var(--text-2)}
      .kbd{border:1px solid var(--border);padding:.125rem .375rem;border-radius:6px;background:var(--bg-1);}
      .glow{position:absolute;inset:-10% -10% auto -10%;height:320px;background:radial-gradient(1200px 200px at 50% 0, rgba(210,197,167,.25), transparent 60%);pointer-events:none;}
      .badge-dot{display:inline-flex;gap:.5rem;align-items:center;border:1px solid var(--border);border-radius:999px;padding:.35rem .6rem;color:var(--text-2)}
      .badge-dot i{display:inline-block;width:.5rem;height:.5rem;border-radius:999px;background:var(--active)}
      .focus-ring:focus-visible{outline:2px solid var(--active);outline-offset:2px}
      .divider{height:1px;background:linear-gradient(90deg, transparent, var(--border), transparent)}
      .section-title{margin-top:clamp(24px,4vw,56px)}
      .fsi-top-gap{padding-top:clamp(96px,10vw,144px)}
    `}</style>
  );
}
