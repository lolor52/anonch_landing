export default function FSISupport(): JSX.Element {
  return (
    <section id="fsi" className="mt-24 md:mt-40" style={{ background: 'var(--bg)' }}>
      <div className="container pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="sub">Партнёрство</div>
            <h3 className="font-semibold text-xl mb-2">Проект реализован при поддержке Фонда содействия инновациям</h3>
          </div>
          <img src="https://files.catbox.moe/8cng5v.png" alt="Логотип ФСИ" className="w-56 h-20 object-contain" />
        </div>
      </div>
    </section>
  );
}
