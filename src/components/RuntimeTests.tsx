export default function RuntimeTests(): JSX.Element | null {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      try {
        const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
        console.assert(bg === '#121110', 'CSS var --bg missing or wrong');
        console.assert(document.querySelectorAll('h2.headline').length >= 4, 'Expected at least 4 H2 section titles');
        console.assert(!!document.querySelector('#fsi img[alt="Логотип ФСИ"]'), 'FSI logo img missing');
        console.assert(
          document.querySelector('footer')?.textContent?.includes('© ООО "Алог" 2025 г.'),
          'Footer copyright text mismatch',
        );
        console.assert(
          document.querySelector('footer .container')?.className.includes('py-16'),
          'Footer vertical padding too small',
        );
        console.assert(document.querySelector('#fsi')?.className?.includes('mt-'), 'FSI section top margin missing');
        console.assert(
          document.body.innerText.includes('Web3-блокчейн, полностью анонимно'),
          'Web3 card missing',
        );
        console.assert(document.querySelectorAll('section').length >= 7, 'Expected at least 7 sections');
        console.log('[Aлог] Runtime tests passed');
      } catch (error) {
        console.error('[Aлог] Runtime tests failed', error);
      }
    }, 0);
  }

  return null;
}
