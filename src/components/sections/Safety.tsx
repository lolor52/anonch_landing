const safetyPoints = [
  {
    title: 'Анонимность по умолчанию',
    description: 'Минимум данных. Скрытые идентификаторы. Без привязки личности.',
  },
  {
    title: 'Шифрование и модерация',
    description: 'Шифрование передачи и хранения. ИИ‑фильтры спама и нарушений.',
  },
  {
    title: 'Прозрачные правила',
    description: 'Понятные стандарты сообщества и быстрые инструменты жалобы.',
  },
];

export default function Safety(): JSX.Element {
  return (
    <section id="safety" style={{ background: 'var(--bg)' }}>
      <div className="container py-16 md:py-24">
        <h2 className="headline section-title text-3xl md:text-4xl mb-6">Конфиденциальность и безопасность</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {safetyPoints.map((point) => (
            <div key={point.title} className="card p-5">
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="sub">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
