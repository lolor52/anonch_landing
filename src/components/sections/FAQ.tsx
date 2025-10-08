const questions = [
  { q: 'Сервис платный?', a: 'Нет. Полностью бесплатно. Покупок внутри приложения нет.' },
  { q: 'Нужна регистрация с паспортными данными?', a: 'Нет. Анонимность по умолчанию.' },
  { q: 'Когда запуск?', a: 'Публичный запуск запланирован на 1 января 2026.' },
  { q: 'Есть перевод?', a: 'Да. Сообщения переводятся автоматически между любыми языками.' },
];

export default function FAQ(): JSX.Element {
  return (
    <section id="faq" style={{ background: 'var(--bg)' }}>
      <div className="container py-16 md:py-24">
        <h2 className="headline section-title text-3xl md:text-4xl mb-8">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {questions.map((item) => (
            <details key={item.q} className="card p-5">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="sub mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
