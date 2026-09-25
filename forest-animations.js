/* Enchanted forest friends: decorative animation around the app card. */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .forest-friends {
      position: fixed;
      inset: 0;
      z-index: 4;
      pointer-events: none;
      overflow: hidden;
    }
    .forest-friend {
      position: absolute;
      display: block;
      font-family: "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
      line-height: 1;
      user-select: none;
      will-change: transform;
      filter: drop-shadow(0 4px 5px rgba(30, 55, 20, .35));
    }
    .forest-friend.butterfly { animation: forestButterfly 7s ease-in-out infinite; }
    .forest-friend.bird { animation: forestBird 9s ease-in-out infinite; }
    .forest-friend.squirrel { animation: forestPeek 4s ease-in-out infinite; }
    .forest-friend.rabbit { animation: forestHop 3.2s ease-in-out infinite; }
    .forest-friend.bee { animation: forestBee 5s ease-in-out infinite; }
    .forest-friend.firefly {
      font-size: 15px;
      filter: drop-shadow(0 0 7px #fff36b);
      animation: forestGlow 2s ease-in-out infinite alternate;
    }
    .forest-friend:nth-child(2n) { animation-delay: -1.7s; }
    .forest-friend:nth-child(3n) { animation-delay: -3.2s; }
    @keyframes forestButterfly {
      0%, 100% { transform: translate(0, 0) rotate(-8deg) scale(1); }
      25% { transform: translate(18px, -25px) rotate(12deg) scale(1.08); }
      50% { transform: translate(2px, -45px) rotate(-5deg) scale(.95); }
      75% { transform: translate(-20px, -20px) rotate(10deg) scale(1.05); }
    }
    @keyframes forestBird {
      0%, 100% { transform: translate(0, 0) rotate(-3deg); }
      35% { transform: translate(22px, -18px) rotate(5deg); }
      70% { transform: translate(-10px, -30px) rotate(-5deg); }
    }
    @keyframes forestPeek {
      0%, 100% { transform: translateY(8px) rotate(-3deg); }
      50% { transform: translateY(-9px) rotate(4deg); }
    }
    @keyframes forestHop {
      0%, 65%, 100% { transform: translateY(0); }
      78% { transform: translateY(-20px) rotate(-7deg); }
      88% { transform: translateY(0) rotate(5deg); }
    }
    @keyframes forestBee {
      0%, 100% { transform: translate(0, 0) rotate(-8deg); }
      50% { transform: translate(25px, -16px) rotate(8deg); }
    }
    @keyframes forestGlow {
      from { opacity: .25; transform: scale(.7); }
      to { opacity: 1; transform: scale(1.35); }
    }
    @media (max-width: 600px) {
      .forest-friend { font-size: .82em; }
      .forest-friend.firefly { font-size: 12px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .forest-friend { animation: none !important; }
    }
  `;
  document.head.appendChild(style);

  const layer = document.createElement('div');
  layer.className = 'forest-friends';
  layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);

  const friends = [
    ['🦋', 'butterfly', '7%', '22%', '34px'],
    ['🦋', 'butterfly', '89%', '28%', '30px'],
    ['🐦', 'bird', '4%', '42%', '35px'],
    ['🐦', 'bird', '91%', '47%', '32px'],
    ['🐿️', 'squirrel', '3%', '67%', '39px'],
    ['🐿️', 'squirrel', '92%', '70%', '38px'],
    ['🐇', 'rabbit', '11%', '84%', '42px'],
    ['🐇', 'rabbit', '84%', '85%', '40px'],
    ['🐝', 'bee', '17%', '12%', '29px'],
    ['🐝', 'bee', '78%', '15%', '27px'],
    ['✨', 'firefly', '24%', '27%', '15px'],
    ['✨', 'firefly', '74%', '31%', '15px'],
    ['✨', 'firefly', '14%', '55%', '15px'],
    ['✨', 'firefly', '86%', '58%', '15px']
  ];

  friends.forEach(([emoji, type, left, top, size]) => {
    const el = document.createElement('span');
    el.className = `forest-friend ${type}`;
    el.textContent = emoji;
    el.style.left = left;
    el.style.top = top;
    el.style.fontSize = size;
    layer.appendChild(el);
  });
})();
