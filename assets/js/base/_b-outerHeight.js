/**
* Fonction : outerHeight()
*
* Calcule la hauteur extérieure d'un élément
* en incluant son padding, border et margin.
*
*/

export const outerHeight = ($el) => {
  if ($el) {
    let style = $el.currentStyle || window.getComputedStyle($el);
    let marginTop = parseInt(style.marginTop);
    let marginBottom = parseInt(style.marginBottom);
    let outerHeight = $el.offsetHeight;
    outerHeight = outerHeight + marginTop + marginBottom;
    return parseInt(outerHeight);
  }
}
