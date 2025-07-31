  // Elementos idioma
  const langES = document.getElementById('es');
  const langEN = document.getElementById('en');
  
  // Textos en ambos idiomas
  const textos = {
    es: {
      inversionista: 'Ir a Inversionistas >',
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      productos: 'Productos',
      comercializacion: 'Comercialización',
      contacto: 'Contacto',
      tituloPalta: 'Palta Hass desde el corazón de los Andes peruanos',
      heroTexto: 'Cultivamos nuestra tierra con técnicas ecoamigables, respetando el entorno andino y aplicando Buenas Prácticas Agrícolas. Gracias a este compromiso, hoy contamos con la certificación internacional GLOBAL G.A.P., lo que nos permite comercializar palta de calidad en el mercado internacional, en alianza estratégica con empresas exportadoras, promoviendo el desarrollo sostenible de la agricultura familiar en el Valle de Torobamba.',
      seccionNosotros: 'Nosotros',
      nosotrostext: 'Somos la Asociación Central de Productores Agropecuarios del Valle de Torobamba, legalmente constituida en 2024. Reunimos a más de 120 pequeños agricultores de palta hass ubicados en los distritos de San Miguel, Patibamba y Ninabamba, en Ayacucho.',
      nosotrostext2: 'Nuestro propósito es claro: llevar productos inocuos, saludables y justos desde nuestro valle hacia diferentes mercados del mundo, con calidad certificada y alto valor agregado.',
      seccionEntidad: 'Nuestra Entidad',
      entidadtext: 'Somos una asociación local de pequeños productores que trabaja con identidad propia, respeto por nuestras raíces y una visión moderna hacia el comercio justo.',
      entidadtext2: 'La mayoría de nuestros agricultores provienen de las comunidades de San Miguel, Patibamba y Ninabamba, ubicadas en el Valle de Torobamba.',
      entidadtext3: 'Nos organizamos como Asociación Central de Productores Agropecuarios del Valle de Torobamba, y buscamos convertirnos en una cooperativa sólida que promueva el desarrollo integral de nuestras familias, con trazabilidad, calidad y sostenibilidad como pilares.',
      seccionPrincipio: 'Nuestros Principios',
      cardTitleCompromiso: 'Compromiso',
      cardTextCompromiso: 'Trabajamos con dedicación por nuestros asociados y comunidades.',
      cardTitleCooperativo: 'Trabajo Cooperativo',
      cardTextCooperativo: 'Apoyamos el trabajo colectivo recíproco entre nuestros asociados.',
      cardTitleCalidad: 'Calidad',
      cardTextCalidad: 'Garantizamos los estándares en cada etapa de producción y comercialización.',
      cardTitleSostenibilidad: 'Sostenibilidad Ambiental',
      cardTextSostenibilidad: 'Protegemos el entorno con prácticas agrícolas responsables.',
      cardTitleTransparencia: 'Transparencia',
      cardTextTransparencia: 'Gestionamos con honestidad, apertura y participación.',
      cardTitleEquidad: 'Equidad',
      cardTextEquidad: 'Promovemos inclusión e igualdad de oportunidades, revalorando el rol de la mujer en la agricultura.',
      seccionProductos: 'PALTA HASS NATURAL',
      productosText: 'Desde el Valle de Torobamba, producimos paltas de calidad con responsabilidad social y ambiental. Cada palta es seleccionada cuidadosamente en su punto óptimo de maduración, asegurando una textura cremosa, sabor intenso y frescura ideal para mercados exigentes.',
      productosText2: 'Gracias al microclima de nuestro valle, ofrecemos fruta fresca cuando otros países no cosechan. Contamos con una ventana comercial ideal para exportadores, distribuidores y compradores que buscan continuidad y rentabilidad, principalmente entre los meses de octubre a abril.',
      seccionComercializacion: 'Comercialización Responsable',
      comercializacionText: 'Desde el Valle de Torobamba, llevamos nuestras paltas con calidad y compromiso hasta tu mesa.',
      cardComProduccionTitle: 'Producción Responsable',
      cardComProduccionText: 'Cultivamos paltas con métodos tradicionales y certificaciones internacionales que aseguran calidad y sostenibilidad desde el origen.',
      cardComLogisticaTitle: 'Logística y Alianzas',
      cardComLogisticaText: 'Transportamos bajo condiciones óptimas y en alianza con FRUCHINCHA S.A.C., llevando nuestras paltas a mercados nacionales e internacionales.',
      cardComConsumoTitle: 'Consumo de Calidad',
      cardComConsumoText: 'Palta Hass lista para comer: fresca, sabrosa y 100% natural, directa desde nuestras comunidades a tu mesa.',
      seccionContacto: 'Contacto',
      contactoUbicacion: 'Abrir ubicación',
      siguenos: 'Síguenos:',
      footerText: '© 2025 Asociación Central de Productores Agropecuarios del Valle de Torobamba – PROPALTAS. Todos los derechos reservados.',
    },
    en: {
      inversionista: 'Go to Investors >',
      inicio: 'Home',
      nosotros: 'About Us',
      productos: 'Products',
      comercializacion: 'Marketing',
      contacto: 'Contact',
      tituloPalta: 'Hass Avocados from the Heart of the Peruvian Andes',
      heroTexto: 'We cultivate our land using eco-friendly techniques, respecting the Andean environment and applying Good Agricultural Practices. Thanks to this commitment, we now hold the international GLOBAL G.A.P. certification, which allows us to market high-quality avocados in the international market through strategic partnerships with exporting companies, promoting the sustainable development of family farming in the Torobamba Valley.',
      seccionNosotros: 'About Us',
      nosotrostext: 'We are the Central Association of Agricultural Producers of the Torobamba Valley, legally established in 2024. We bring together over 120 small avocado farmers located in the districts of San Miguel, Patibamba, and Ninabamba in Ayacucho.',
      nosotrostext2: 'Our purpose is clear: to deliver safe, healthy, and fair products from our valley to various markets around the world, with certified quality and high added value.',
      seccionEntidad: 'Our Entity',
      entidadtext: 'We are a local association of small producers working with our own identity, respect for our roots, and a modern vision towards fair trade.',
      entidadtext2: 'Most of our farmers come from the communities of San Miguel, Patibamba, and Ninabamba, located in the Torobamba Valley.',
      entidadtext3: 'We are organized as the Central Association of Agricultural Producers of the Torobamba Valley, and we aim to become a strong cooperative that promotes the integral development of our families, with traceability, quality, and sustainability as our pillars.',
      seccionPrincipio: 'Our Principles',
      cardTitleCompromiso: 'Commitment',
      cardTextCompromiso: 'We work with dedication for our members and communities.', 
      cardTitleCooperativo: 'Cooperative Work',
      cardTextCooperativo: 'We support reciprocal collective work among our members.',
      cardTitleCalidad: 'Quality',
      cardTextCalidad: 'We ensure standards at every stage of production and marketing.',
      cardTitleSostenibilidad: 'Environmental Sustainability',
      cardTextSostenibilidad: 'We protect the environment with responsible agricultural practices.',
      cardTitleTransparencia: 'Transparency',
      cardTextTransparencia: 'We manage with honesty, openness, and participation.',
      cardTitleEquidad: 'Equity',
      cardTextEquidad: 'We promote inclusion and equal opportunities, highlighting the role of women in agriculture.',
      seccionProductos: 'HASS AVOCADOS NATURAL',
      productosText: 'From the Torobamba Valley, we produce avocados with social and environmental responsibility. Each avocado is carefully selected at its optimal ripeness, ensuring a creamy texture, intense flavor, and ideal freshness for demanding markets.',
      productosText2: 'Thanks to the microclimate of our valley, we offer fresh fruit when other countries are not harvesting. We have an ideal commercial window for exporters, distributors, and buyers seeking continuity and profitability, mainly between the months of October and April.',
      seccionComercializacion: 'Responsible Marketing',
      comercializacionText: 'From the Torobamba Valley, we bring our avocados with quality and commitment to your table.',
      cardComProduccionTitle: 'Responsible Production',
      cardComProduccionText: 'We grow avocados using traditional methods and international certifications that ensure quality and sustainability from the source.',
      cardComLogisticaTitle: 'Logistics and Partnerships',
      cardComLogisticaText: 'We transport under optimal conditions and in partnership with FRUCHINCHA S.A.C., bringing our avocados to national and international markets.',
      cardComConsumoTitle: 'Quality Consumption',
      cardComConsumoText: 'Hass avocado ready to eat: fresh, tasty, and 100% natural, directly from our communities to your table.',
      seccionContacto: 'Contact',
      contactoUbicacion: 'Open location',
      siguenos: 'Follow us:',
      footerText: '© 2025 Central Association of Agricultural Producers of the Torobamba Valley – PROPALTAS. All rights reserved.',
    }
  };
  
  // Función para cambiar idioma
  function cambiarIdioma(idioma) {
    document.querySelectorAll('.idioma').forEach(el => el.classList.remove('activo'));
    document.getElementById(idioma).classList.add('activo');
  
    const t = textos[idioma];
  
    document.querySelector('.idioma-selector a').textContent = t.inversionista;
    document.querySelector('a[href="#inicio"]').textContent = t.inicio;
    document.querySelector('a[href="#nosotros"]').textContent = t.nosotros;
    document.querySelector('a[href="#productos"]').textContent = t.productos;
    document.querySelector('a[href="#comercializacion"]').textContent = t.comercializacion;
    document.querySelector('a[href="#contacto"]').textContent = t.contacto;
  
    document.querySelector('#nosotros .container-nosotros h1').textContent = t.tituloPalta;
    document.querySelector('#nosotros .container-nosotros p').textContent = t.heroTexto;
  
    document.querySelector('#nosotros h2').textContent = t.seccionNosotros;
    document.querySelector('#nosotros #textOne').textContent = t.nosotrostext;
    document.querySelector('#nosotros #textTwo').textContent = t.nosotrostext2;

    document.querySelector('#entidad h2').textContent = t.seccionEntidad;
    document.querySelector('#entidad #entidadtext').textContent = t.entidadtext;
    document.querySelector('#entidad #entidadtext2').textContent = t.entidadtext2;
    document.querySelector('#entidad #entidadtext3').textContent = t.entidadtext3;
    document.querySelector('#principios h2').textContent = t.seccionPrincipio;
    document.querySelector('#principios #card-compromiso h3').textContent = t.cardTitleCompromiso;
    document.querySelector('#principios #card-compromiso p').textContent = t.cardTextCompromiso;
    document.querySelector('#principios #card-cooperativo h3').textContent = t.cardTitleCooperativo;
    document.querySelector('#principios #card-cooperativo p').textContent = t.cardTextCooperativo;
    document.querySelector('#principios #card-calidad h3').textContent = t.cardTitleCalidad;
    document.querySelector('#principios #card-calidad p').textContent = t.cardTextCalidad;
    document.querySelector('#principios #card-sostenibilidad h3').textContent = t.cardTitleSostenibilidad;
    document.querySelector('#principios #card-sostenibilidad p').textContent = t.cardTextSostenibilidad;
    document.querySelector('#principios #card-transparencia h3').textContent = t.cardTitleTransparencia;
    document.querySelector('#principios #card-transparencia p').textContent = t.cardTextTransparencia;
    document.querySelector('#principios #card-equidad h3').textContent = t.cardTitleEquidad;
    document.querySelector('#principios #card-equidad p').textContent = t.cardTextEquidad;
    document.querySelector('#productos h2').textContent = t.seccionProductos;
    document.querySelector('#productos #productosText').textContent = t.productosText;
    document.querySelector('#productos #productosText2').textContent = t.productosText2;
    document.querySelector('#comercializacion h2').textContent = t.seccionComercializacion;
    document.querySelector('#comercializacion p').textContent = t.comercializacionText;
    document.querySelector('#comercializacion #cardComProduccion h3').textContent = t.cardComProduccionTitle;
    document.querySelector('#comercializacion #cardComProduccion p').textContent = t.cardComProduccionText;
    document.querySelector('#comercializacion #cardComLogistica h3').textContent = t.cardComLogisticaTitle;
    document.querySelector('#comercializacion #cardComLogistica p').textContent = t.cardComLogisticaText;
    document.querySelector('#comercializacion #cardComConsumo h3').textContent = t.cardComConsumoTitle;
    document.querySelector('#comercializacion #cardComConsumo p').textContent = t.cardComConsumoText;
    document.querySelector('#contacto h2').textContent = t.seccionContacto;
    document.querySelector('#contacto #location').textContent = t.contactoUbicacion;
    document.querySelector('.siguenos #seguir').textContent = t.siguenos;
    document.querySelector('footer p').textContent = t.footerText;
  
  }
  
  // Eventos
  langES.addEventListener('click', () => cambiarIdioma('es'));
  langEN.addEventListener('click', () => cambiarIdioma('en'));
  