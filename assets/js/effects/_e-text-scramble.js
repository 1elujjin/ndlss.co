/**
 * Effet : Text Scramble + isInViewport + outerHeight (fusionné)
 */

// =========================
// Outils : outerHeight
// =========================
export const outerHeight = ($el) => {
  if ($el) {
    let style = $el.currentStyle || window.getComputedStyle($el);
    let marginTop = parseInt(style.marginTop) || 0;
    let marginBottom = parseInt(style.marginBottom) || 0;
    let outerHeight = $el.offsetHeight + marginTop + marginBottom;
    return parseInt(outerHeight);
  }
  return 0;
};

// =========================
// Outils : isInViewport
// =========================
export const isInViewport = ($el) => {
  if ($el) {
    const $elTop = $el.offsetTop;
    const $elHeight = outerHeight($el);
    const $elBottom = $elTop + $elHeight;

    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    return $elBottom > viewportTop && $elTop < viewportBottom;
  }
  return false;
};

// =========================
// Scramble Text
// =========================

// Permet de suivre l'état de l'animation de chaque élément
let animationsInProgress = new WeakMap();
let $scrambles, set, v;

/**
 * Génère une chaîne de caractères aléatoires
 */
export const scramRandomString = (randomLength) => {
  let randomString = '';
  for (let i = 0; i < randomLength; i++) {
    randomString += set.charAt(Math.floor(Math.random() * set.length));
  }
  return randomString;
};

/**
 * Anime un texte scramble
 */
export const scramAnim = ($el) => {
  if (animationsInProgress.get($el)) return;
  animationsInProgress.set($el, true);

  let originalText = $el.textContent;
  let textArray = originalText.split('');
  let newTextArray = [...textArray];

  for (let i = 1; i <= textArray.length; i++) {
    setTimeout(() => {
      for (let j = 0; j < i; j++) {
        if (textArray[j] !== ' ') {
          newTextArray[j] = textArray[j];
        }
      }
      for (let j = i; j < textArray.length; j++) {
        if (textArray[j] !== ' ') {
          newTextArray[j] = scramRandomString(1);
        }
      }

      $el.textContent = newTextArray.join('');

      if (i === textArray.length) {
        animationsInProgress.set($el, false);
      }
    }, i * v);
  }
};

/**
 * Découpe le texte scramble en lignes (filtrage <br>)
 */
export const scramFilter = ($el) => {
  if ($el.querySelector('.e-txtsble-line')) {
    return Array.from($el.querySelectorAll('.e-txtsble-line'));
  }

  let html = $el.innerHTML;
  let lines = html.split(/<br\s*\/?>/i);

  $el.innerHTML = lines
    .map(line => `<span class="e-txtsble-line">${line}</span>`)
    .join('<br>');

  return Array.from($el.querySelectorAll('.e-txtsble-line'));
};

/**
 * Animation au hover
 */
export const scramAnimHover = (e) => {
  let $scramble = e.currentTarget.closest('.e-txtsble');
  let $targets = $scramble.querySelectorAll('.e-txtsble-tar');
  if (!$targets.length) $targets = [$scramble];

  $targets.forEach(($target) => {
    let $lines = scramFilter($target);
    $lines.forEach(($line) => scramAnim($line));
  });
};

/**
 * Initialisation
 */
export const scramInit = () => {
  $scrambles = document.querySelectorAll('.e-txtsble');
  set = 'abcdefghijklmnopqrstuvwxyz';
  v = 30;

  $scrambles.forEach(($scramble) => {
    if ($scramble.classList.contains('e-txtsble-hov')) {
      $scramble.removeEventListener('mouseenter', scramAnimHover);
      $scramble.addEventListener('mouseenter', scramAnimHover);
    }

    if ($scramble.classList.contains('e-txtsble-dom')) {
      if (isInViewport($scramble)) {
        let $lines = scramFilter($scramble);
        $lines.forEach(($line) => scramAnim($line));
      }
    }
  });
};

// Lance l’init
scramInit();
