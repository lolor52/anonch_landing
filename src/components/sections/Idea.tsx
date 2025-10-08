import type { ReactNode } from 'react';
import Dot from '../ui/Dot';
import { SwapIcon } from '../ui/Icons';

type BubbleProps = {
  children: ReactNode;
  self?: boolean;
};

type MetaProps = {
  time: string;
  translate?: boolean;
};

type AvatarProps = {
  letter: string;
};

function Avatar({ letter }: AvatarProps): JSX.Element {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
      style={{ background: 'var(--bg-1)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
    >
      {letter}
    </div>
  );
}

function Meta({ time, translate = false }: MetaProps): JSX.Element {
  return (
    <div className="mt-1 flex items-center gap-2 text-[11px]" style={{ color: 'var(--text-2)' }}>
      <span>{time}</span>
      {translate && (
        <span className="inline-flex items-center gap-1" title="Перевод включён" aria-label="Перевод включён">
          <SwapIcon />
          <span>перевод</span>
        </span>
      )}
    </div>
  );
}

function Bubble({ children, self = false }: BubbleProps): JSX.Element {
  return (
    <div
      className={`rounded-2xl px-3.5 py-2.5 text-sm max-w-[70%] ${self ? 'ml-auto' : ''}`}
      style={{ background: self ? 'var(--bg-2)' : 'var(--bg-1)', border: '1px solid var(--border)' }}
    >
      {children}
    </div>
  );
}

function ChatPreview(): JSX.Element {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <Avatar letter="A" />
        <Bubble self>
          Привет! Хочу обсудить идею стартапа.
          <Meta time="12:40" translate />
        </Bubble>
      </div>
      <div className="flex items-start gap-3">
        <Avatar letter="B" />
        <Bubble>
          Давай. Какую проблему решаете?
          <Meta time="12:41" />
        </Bubble>
      </div>
      <div className="flex items-start gap-3">
        <Avatar letter="A" />
        <Bubble self>
          Matching через MBTI и интересы, плюс моментальный перевод.
          <Meta time="12:42" translate />
        </Bubble>
      </div>
    </div>
  );
}

export default function Idea(): JSX.Element {
  return (
    <section id="idea" className="relative" style={{ background: 'var(--bg)' }}>
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="headline section-title text-3xl md:text-4xl mb-4">Анонимное общение без границ</h2>
            <p className="sub mb-6">
              Текст, голос и видео в одной платформе без передачи личных данных. Интерфейс рассчитан на короткие и длинные диалоги, а рекомендации улучшаются со временем.
            </p>
            <ul className="grid gap-3 text-sm sub">
              <li className="flex items-center gap-2">
                <Dot />Без покупок и подписок
              </li>
              <li className="flex items-center gap-2">
                <Dot />Автоперевод на любой язык
              </li>
              <li className="flex items-center gap-2">
                <Dot />Защита от спама и запрещённого
              </li>
              <li className="flex items-center gap-2">
                <Dot />Подбор по интересам и MBTI
              </li>
            </ul>
          </div>
          <div className="card p-6">
            <div className="text-sm sub mb-3">Фрагмент интерфейса</div>
            <ChatPreview />
          </div>
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
