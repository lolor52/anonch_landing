import { ArrowIcon, GlobeIcon, MatchIcon, ShieldIcon } from '../ui/Icons';

function MicroFeatureCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}): JSX.Element {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="sub">{description}</p>
    </div>
  );
}

function MicroUI(): JSX.Element {
  const features = [
    {
      icon: <ShieldIcon />,
      title: 'ИИ‑модерация 24/7',
      description: 'Антиспам и фильтры нарушений. Реакция в реальном времени.',
    },
    {
      icon: <GlobeIcon />,
      title: 'Перевод без границ',
      description: 'Дословный двунаправленный перевод. Общайтесь на любом языке.',
    },
    {
      icon: <MatchIcon />,
      title: 'Подбор с MBTI',
      description: 'Тип личности + интересы и цели диалога для точных совпадений.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {features.map((feature) => (
        <MicroFeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}

export default function Hero(): JSX.Element {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title" style={{ background: 'var(--bg)' }}>
      <div className="glow" />
      <div className="container py-20 md:py-28">
        <div className="flex flex-col items-start gap-8">
          <span className="badge-dot">
            <i />Сервис в разработке • Бесплатно
          </span>
          <h1 id="hero-title" className="headline text-4xl md:text-6xl leading-tight max-w-3xl">
            Делаем анонимное общение простым, безопасным и полезным.
          </h1>
          <p className="sub text-lg md:text-xl max-w-2xl">
            Алог подбирает собеседников по интересам и MBTI, мгновенно переводит сообщения на любой язык и защищает беседу ИИ‑модерацией.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#idea"
              className="focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
              style={{ background: 'var(--active)', color: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              Подробнее
              <ArrowIcon />
            </a>
            <div className="inline-flex items-center gap-2 pill rounded-xl px-4 py-3 text-sm">Запуск 1 января 2026</div>
          </div>
          <MicroUI />
        </div>
      </div>
    </section>
  );
}
