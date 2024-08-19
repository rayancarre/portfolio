// Sélectionner tous les éléments avec la classe .fade-in
const fadeInElements = document.querySelectorAll('.fade-in');

// Fonction qui détecte si un élément est visible dans la fenêtre
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction qui vérifie si chaque élément est dans la fenêtre et ajoute la classe visible
function checkFadeIn() {
  fadeInElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('fade-in-visible');
    }
  });
}

// Ajouter un event listener pour vérifier au défilement
window.addEventListener('scroll', checkFadeIn);

// Appeler la fonction une première fois pour vérifier au chargement de la page
checkFadeIn();
