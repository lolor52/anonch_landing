const steps = [
  { title: 'Задайте темы и стиль', text: 'Выберите интересы и ожидания от беседы' },
  { title: 'Подбор собеседника', text: 'ИИ учитывает MBTI, цели и поведенческие сигналы' },
  { title: 'Диалог без барьеров', text: 'Перевод и защита работают автоматически' },
  { title: 'Обратная связь', text: 'Короткая оценка улучшает будущие совпадения' },
];

export default function HowItWorks(): JSX.Element {
  return (
    <section id="how" className="relative" style={{ background: 'var(--bg)' }}>
      <div className="container py-16 md:py-24">
        <h2 className="headline section-title text-3xl md:text-4xl mb-10">Как это работает</h2>
        <ol className="grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="card p-5">
              <div className="text-sm sub mb-2">Шаг {index + 1}</div>
              <div className="font-semibold mb-1">{step.title}</div>
              <div className="sub text-sm">{step.text}</div>
            </li>
          ))}
        </ol>
      </div>
      <div className="divider" />
    </section>
  );
}
