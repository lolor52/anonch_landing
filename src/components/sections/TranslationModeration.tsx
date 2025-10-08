import { GlobeIcon, MatchIcon, ShieldIcon } from '../ui/Icons';

const features = [
  {
    icon: <GlobeIcon />,
    title: 'Мгновенный перевод',
    description: 'Автоматический, двунаправленный и дословный, без ограничений по региону.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Модерация ИИ',
    description: 'Предотвращает спам, нарушения и вредоносный контент. Работает фоном.',
  },
  {
    icon: <MatchIcon />,
    title: 'Умный матчинг',
    description: 'Комбинирует MBTI, интересы и контекст для точных совпадений.',
  },
];

export default function TranslationModeration(): JSX.Element {
  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                {feature.icon}
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="sub">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
