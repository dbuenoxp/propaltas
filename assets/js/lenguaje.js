  // Elementos idioma
  const langES = document.getElementById('es');
  const langEN = document.getElementById('en');
  
  // Textos en ambos idiomas
  const textos = {
    es: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      productos: 'Productos',
      comercializacion: 'Comercialización',
      contacto: 'Contacto',
      heroTitulo: 'Palta Hass desde el corazón de los Andes peruanos',
      heroTexto: 'Con técnicas sostenibles, cuidamos la tierra y exportamos calidad.',
      seccionNosotros: 'Nosotros',
      seccionContacto: 'Contacto',
    },
    en: {
      inicio: 'Home',
      nosotros: 'About Us',
      productos: 'Products',
      comercializacion: 'Marketing',
      contacto: 'Contact',
      heroTitulo: 'Hass Avocados from the Heart of the Peruvian Andes',
      heroTexto: 'Using sustainable techniques, we care for the land and export quality.',
      seccionNosotros: 'About Us',
      seccionContacto: 'Contact',
    }
  };
  
  // Función para cambiar idioma
  function cambiarIdioma(idioma) {
    document.querySelectorAll('.idioma').forEach(el => el.classList.remove('activo'));
    document.getElementById(idioma).classList.add('activo');
  
    const t = textos[idioma];
  
    document.querySelector('a[href="#inicio"]').textContent = t.inicio;
    document.querySelector('a[href="#nosotros"]').textContent = t.nosotros;
    document.querySelector('a[href="#productos"]').textContent = t.productos;
    document.querySelector('a[href="#comercializacion"]').textContent = t.comercializacion;
    document.querySelector('a[href="#contacto"]').textContent = t.contacto;
  
    document.querySelector('.hero-content h1').textContent = t.heroTitulo;
    document.querySelector('.hero-content p').textContent = t.heroTexto;
  
    document.querySelector('#nosotros h2').textContent = t.seccionNosotros;
    document.querySelector('#contacto h2').textContent = t.seccionContacto;
  
    // Agrega más líneas para los demás textos si lo deseas
  }
  
  // Eventos
  langES.addEventListener('click', () => cambiarIdioma('es'));
  langEN.addEventListener('click', () => cambiarIdioma('en'));
  