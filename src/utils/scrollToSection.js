export const scrollToSection = (id, setIsMenuOpen) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen?.(false);
    }
  };
  