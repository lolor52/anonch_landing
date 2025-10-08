import Dot from '../ui/Dot';
import { ChainIcon } from '../ui/Icons';

const bulletPoints = [
  'Учитывает совместимость типов',
  'Динамическое обучение по фидбеку',
  'Сценарии «быстрый матч» и «вдумчивый»',
  'Без платных приоритетов',
];

export default function MBTIBlock(): JSX.Element {
  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="headline section-title text-3xl md:text-4xl mb-4">Подбор качеством, не случайностью</h2>
            <p className="sub mb-6">
              Алгоритмы сопоставляют интересы, цели беседы и тип личности по MBTI. Это повышает вероятность полезного диалога и снижает фрустрацию.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm sub">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Dot />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-2">
              <ChainIcon />
              <h3 className="font-semibold">Web3-блокчейн, полностью анонимно</h3>
            </div>
            <p className="sub">
              Данные шифруются на стороне клиента и сохраняются децентрализованно. Без привязки к личности.
            </p>
          </div>
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
