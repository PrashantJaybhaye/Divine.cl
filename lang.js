// Simple site-wide language switcher
(function () {
  const DEFAULT_LANG = 'es';

  const translations = {
    es: {
      'nav.import_personal': 'Importación uso Personal',
      'nav.home': 'Hogar',
      'nav.about': 'Sobre nosotros',
      'nav.business': 'Verticales de negocios',
      'nav.portfolio': 'Nuestro portafolio',
      'nav.infrastructure': 'Infraestructura',
      'nav.chile': 'Presencia en Chile',
      'nav.contact': 'Contáctenos',
      'lang.spanish': 'Español',
      'lang.english': 'Inglés',

      // Common
      'common.follow_us': 'Síguenos:',
      'common.scroll_top': 'Volver al principio',

      // Home page
      'home.tagline': 'Impulsados por la innovación, guiados por el cuidado',
      'home.video.h2': 'Nuestro compromiso con la excelencia en la atención médica',
      'home.video.p1': 'Divine Healthcare, nos dedicamos a brindar soluciones médicas innovadoras que mejoran los resultados de los pacientes en todo el mundo. Nuestras dos décadas de experiencia en el mercado chileno nos han permitido desarrollar un profundo conocimiento de las necesidades de atención médica en diferentes regiones.',
      'home.video.p2': 'Combinamos tecnología de vanguardia con atención compasiva para ofrecer productos que cumplan con los más altos estándares regulatorios y sigan siendo accesibles para todos.',
      'home.video.cta': 'Conozca más sobre nosotros',
      'home.video.fallback': 'Su navegador no soporta la etiqueta de video.',
      'home.about.p': 'Divine HealthCare es una empresa líder en el sector salud con sede en Chile, dedicada a obtener productos de empresas manufactureras líderes en investigación que ofrecen medicamentos de alta calidad. Brindamos a profesionales de la salud y pacientes medicamentos innovadores que salvan vidas. Nuestras dos décadas de experiencia en el mercado chileno nos han permitido comprender a fondo las necesidades de salud en diferentes regiones. Nuestros estrictos estándares de calidad y prácticas sostenibles, conforme a las directrices chilenas, garantizan la confianza en cada producto que creamos.',
      'home.long_para': '<b>Divine Health</b><span class="highlight-blue"><b>Care</b></span> es una empresa líder en el sector salud con sede en Chile, dedicada a obtener productos de empresas manufactureras líderes en investigación que ofrecen medicamentos de alta calidad. Brindamos a profesionales de la salud y pacientes medicamentos innovadores que salvan vidas. Nuestras dos décadas de experiencia en el mercado chileno nos han permitido comprender a fondo las necesidades de salud en diferentes regiones. Nuestros estrictos estándares de calidad y prácticas sostenibles, conforme a las directrices chilenas, garantizan la confianza en cada producto que creamos.',
      'home.parallax.h3': 'Profesionales con amplia experiencia en el sector Salud aseguran la gestión de su necesidad.',
      'home.parallax.btn': 'Nos encargamos de la importación de medicamentos que no están disponibles en Chile, así como de fármacos de alto costo que nos ayudan a acercar a los pacientes a recuperar su salud.',

      // Footer
      'footer.quick_links': 'Enlaces rápidos',
      'footer.languages': 'Idiomas',
      'footer.link.import_personal': 'Importación uso Personal',
      'footer.link.home': 'Hogar',
      'footer.link.about': 'Sobre nosotros',
      'footer.link.business': 'Verticales de negocios',
      'footer.link.portfolio': 'Nuestro portafolio',
      'footer.link.infrastructure': 'Infraestructura',
      'footer.link.chile': 'Presencia en Chile',
      'footer.link.contact': 'Contáctenos',
      'footer.description': 'Nuestra Visión es que nuestros productos posean certificación emitida por las más altas agencias reguladoras manteniendo precios asequibles para las instituciones y pacientes con más de 2 décadas de experiencia en el campo.',
      'footer.copyright': '© 2025 Divine Healthcare. Todos los derechos reservados.',

      // Forms
      'form.name': 'Nombre',
      'form.email': 'Correo electrónico',
      'form.message': 'Tu mensaje',
      'form.submit': 'Enviar mensaje',
      'form.reset': 'Reiniciar',
      'form.success': '¡Gracias! Su mensaje ha sido enviado exitosamente.',
      'form.error.generic': 'pudo enviar el formulario. Inténtalo de nuevo.',
      'form.autoresponse': '¡Gracias por contactarnos! Nos comunicaremos con usted pronto.',

      // About page
      'about.hero.h1': 'Acerca de Divine Healthcare',
      'about.hero.subtitle': 'Impulsados por la innovación, guiados por el cuidado.',
      'about.team.h2': 'Acerca de nuestro equipo',
      'about.team.p1': 'Divine y su grupo cuentan con más de 40 empleados, de los cuales 18 se dedican al área comercial y al equipo de ventas. Tenemos cobertura total en Chile, concentrándonos en las tres regiones que abarcan el 75% del mercado.',
      'about.team.p2': 'La estructura está diseñada para funcionar en equipo y ofrecer a nuestros clientes los mejores servicios. Contamos con un equipo completo de regulación y farmacovigilancia, licitaciones hospitalarias de ventas y marketing, y un departamento financiero.',
      'about.team.p3': 'Disponemos de un sistema interno de despacho y entrega con más de 7.000 posiciones para pallets.',
      'about.story.h2': 'Acerca de Divine Healthcare',
      'about.story.p': 'Impulsados por la innovación, guiados por el cuidado',
      'about.journey.h2': 'Nuestro viaje',
      'about.journey.p1': 'Fundada en Santiago de Chile, Divine Healthcare nació con la visión de brindar acceso a medicamentos de primera calidad a los pacientes chilenos a un precio accesible. Además, brindamos una plataforma al fabricante para que suministre sus productos de alta calidad al mercado chileno.',
      'about.journey.p2': 'Como empresa del sector salud ubicada en la capital del país, con almacén cerca del Aeropuerto Internacional de Chile, y un equipo de profesionales con amplia experiencia en la industria, actualmente cubrimos las líneas de productos para biosimilares, medicamentos huérfanos, sistema nervioso central, oncología, cardiología, antiinfecciosos y medicamentos gástricos.',
      'about.mv.mission.h3': 'Nuestra misión',
      'about.mv.mission.p': 'Mejorar vidas mediante soluciones sanitarias innovadoras y asequibles. Reducimos la brecha entre el descubrimiento científico y el acceso de los pacientes, garantizando que medicamentos de calidad lleguen a quienes más los necesitan.',
      'about.mv.vision.h3': 'Nuestra visión',
      'about.mv.vision.p': 'Ser un líder mundial en excelencia farmacéutica para 2030, reconocido por nuestras prácticas sostenibles, avances terapéuticos y compromiso con la equidad en la salud global.',
      'about.certs.h2': 'Acreditaciones y Certificaciones de nuestro Fabricante',
      'about.certs.p': 'Cumpliendo con los más altos estándares de calidad global',
      'about.why.h2': '¿Por qué elegir Divine Healthcare?',
      'about.why.p1': 'Los productos terminados de Divine Healthcare se fabrican en plantas de fabricación aprobadas por la OMS, la UE, la FDA y el PIC. Estas instalaciones se encuentran entre las más grandes de la India en su segmento farmacéutico. Los productos fabricados y suministrados para Chile son de la misma alta calidad que se suministran en 170 países y más, lo que garantiza la calidad y la experiencia en el suministro continuo de medicamentos de alta calidad.',
      'about.why.p2': 'Divine Healthcare SpA basa sus operaciones y su crecimiento futuro en el estricto cumplimiento de las normativas sanitarias locales e internacionales, buscando estar a la vanguardia en requisitos como la bioequivalencia y la equivalencia terapéutica. Representamos Innovación, Calidad y Servicio.',

      // Contact page
      'contact.hero.title': 'Póngase en contacto con Divine Healthcare',
      'contact.hero.subtitle': 'Estamos aquí para ayudarte',
      'contact.hero.desc': 'Comuníquese a través de cualquiera de nuestros convenientes métodos de contacto a continuación',
      'contact.card.phone.h3': 'Soporte telefónico',
      'contact.card.phone.p': 'Hable directamente con nuestros representantes',
      'contact.card.phone.btn': 'Llame ahora',
      'contact.card.email.h3': 'Correo electrónico',
      'contact.card.email.p': 'Envíenos sus consultas y le responderemos.',
      'contact.card.email.btn': 'Correo electrónico',
      'contact.card.visit.h3': 'Visítanos',
      'contact.card.visit.p': 'Nuestra sede y oficinas regionales',
      'contact.card.visit.btn': 'Ver ubicaciones',
      'contact.form.h2': 'Envíanos un mensaje',
      'contact.form.p': 'Complete el siguiente formulario y nos pondremos en contacto con usted dentro de las 24 horas',
      'contact.form.label.name': 'Nombre completo*',
      'contact.form.label.email': 'Correo electrónico*',
      'contact.form.label.phone': 'Número de teléfono*',
      'contact.form.label.subject': 'Asunto*',
      'contact.form.option.placeholder': 'Seleccione un tema',
      'contact.form.option.general': 'Consulta general',
      'contact.form.option.product': 'Información del producto',
      'contact.form.option.partner': 'Oportunidades de asociación',
      'contact.form.option.tech': 'Soporte técnico',
      'contact.form.label.message': 'Su mensaje*',
      'contact.form.submit': 'Enviar mensaje',
      'contact.form.note': '* Campos requeridos',
      'contact.direct.p': 'O contáctenos directamente:',
      'contact.direct.whatsapp': 'Envíanos un mensaje por WhatsApp',
      'contact.locations.h2': 'Nuestras ubicaciones',
      'contact.locations.p': 'Encuentra nuestras oficinas en todo el mundo',
      'contact.locations.country': 'Chile',
      'contact.locations.addr': 'Av. Pedro de Valdivia 273, Oficina 1304/1305, Providencia, Santiago',
      'contact.locations.hours': 'Lunes a viernes: 9.30 a.m. a 5.30',

      // Infrastructure page
      'infra.hero.h1': 'Nuestra infraestructura',
      'infra.hero.p': 'Instalaciones de última generación para la excelencia en la atención médica',
      'infra.content.h2': 'Infraestructura de atención médica divina',
      'infra.content.p1': 'Un actor reciente pero como grupo, con más de 2 décadas de experiencia en el mercado chileno. Hemos creado un entorno sólido para el negocio y configurar uno de los mejores almacenes de su clase y un robot de despacho sin demoras Sistemas.',
      'infra.content.p2': 'Hoy en día, ofrecemos productos de alta calidad que satisfacen las demandas de nuestros clientes. Nuestra flexibilidad y apertura a diferentes modelos de negocio con servicios 360º diferenciarnos de otros laboratorios del mercado.',
      'infra.content.p3': 'Una clave para diferenciarnos es el servicio; Ayudamos a nuestros clientes en cada paso del negocio y garantizar la completa satisfacción. Se logra nuestro crecimiento continuo a través de la importancia del producto. Como empresa, cada producto y cada cliente tiene valor y es esencial para nuestro crecimiento.',
      'infra.section.h2': 'Infraestructura de clase mundial',
      'infra.qa.h3': 'Estándares de calidad sin concesiones',
      'infra.qa1.h4': 'Pruebas analíticas',
      'infra.qa1.p': 'Pruebas analíticas, identidad, titulación, disolución y otras (HPLC, IR, UV)',
      'infra.qa2.h4': 'Control microbiológico',
      'infra.qa2.p': 'Recuento total de microorganismos, hongos y levaduras, ausencia de patógenos',
      'infra.qa3.h4': 'Cumplimiento normativo',
      'infra.qa3.p': 'Registros según normativa nacional, cumplimiento de demostración de validación de procesos y bioequivalencia.',
      'infra.qa4.h4': 'Estudios de estabilidad',
      'infra.qa4.p': 'Cumplir con los requisitos locales de acuerdo con las pautas ICH',

      // Chile page
      'chile.hero.h1': 'Presencia en Chile',
      'chile.hq.h2': 'Sede',
      'chile.map.h2': 'Nuestra ubicación',
      'chile.partners.h2': 'Nuestros socios',

      // Import page (top section)
      'import.social.follow': 'Síguenos:',
      'import.hero.h1': 'Importamos medicamentos de Estados Unidos, Europa y la India.',
      'import.hero.p': 'Nosotros los importamos para usted.',
      'import.hero.cta': '¡SOLICITE UNA COTIZACIÓN AQUÍ!',
      'import.modal.h2': 'Solicitar una cotización',
      'import.modal.p': 'Por favor, rellene todos los campos obligatorios (*)',
      'import.form.label.name': 'Nombre*',
      'import.form.label.email': 'Correo electrónico*',
      'import.form.label.phone': 'Número de teléfono*',
      'import.form.label.type': 'Tipo*',
      'import.form.option.placeholder': 'Seleccione una opción',
      'import.form.option.patient': 'Paciente',
      'import.form.option.parent': 'Padre o madre',
      'import.form.option.child': 'Hijo o hija',
      'import.form.option.spouse': 'Cónyuge',
      'import.form.option.sibling': 'Hermano o hermana',
      'import.form.option.other': 'Otro (Especificar)',
      'import.form.other.placeholder': 'Por favor especifique',
      'import.form.message.label': 'Tu mensaje',
      'import.form.submit': 'ENVIAR SOLICITUD',
      'import.section.imported.h2': 'Medicamentos importados',
      'import.cat.natural.h3': 'Personas físicas',
      'import.cat.natural.p': '¿Su tratamiento médico en Chile no está disponible o es demasiado costoso?',
      'import.cat.prof.h3': 'Profesionales de la salud',
      'import.cat.prof.p': '¿El tratamiento que usted quiere recetar a su paciente no está disponible en Chile o es demasiado caro?',
      'import.cat.hosp.h3': ' Hospitales y clínicas',
      'import.cat.hosp.p': '¿Buscas un tratamiento para un paciente de tu institución que no está disponible en Chile?',
      'quote.content.title1': 'Quienes somos',
      'quote.content.button.1': 'Inicio > quienes somos',
      'feature.section.who1': 'Divine es una empresa con sede en Chile que se centra en ayudar a los pacientes a acceder a tratamientos inaccesibles o de costo prohibitivo a nivel local. Con más de 25 años de experiencia, nuestra misión es conectar a las personas con las soluciones médicas globales más efectivas.',

      // Header info (ES)
      'header.address.line1': 'Av. Pedro de Valdivia 273, Oficina 1310',
      'header.address.line2': 'Providencia, Santiago',
      'header.hours.line1': 'De lunes a viernes de 9.30 a 17.30 horas',
      'header.hours.line2': 'Cerrado sábados y domingos.',

      // Import page - additional sections (ES)
      // Quote stripes
      'quote.content.title2': 'A quién servimos',
      'quote.content.button.2': 'Inicio > a quién servimos',
      'quote.content.title3': 'Proceso de Importación',
      'quote.content.button.3': 'Inicio > Proceso de Importación',
      'quote.content.title4': 'Preguntas frecuentes',
      'quote.content.button.4': 'Inicio > Preguntas frecuentes',

      // Who we are - cards
      'who.cards.receive': 'Recibe tu producto en un plazo de 15 a 21 días laborables.',
      'who.cards.comply': 'Cumple con la normativa establecida por el Instituto de Salud Pública de Chile.',
      'who.cards.suppliers': 'Proveedores internacionales autorizados y aprobados por las autoridades sanitarias de sus respectivos países.',
      'who.cards.specialty': 'Importamos medicamentos para enfermedades raras o especializadas (hasta 6 meses de tratamiento).',
      'who.cards.experience': '25 años de experiencia importando',
      'who.cards.shipping': 'Envíos a todo Chile con y sin cadena de frío.',
      'who.cards.pharmacist': 'Contamos con un Químico Farmacéutico que supervisa el proceso.',
      'who.cards.attention': 'Atención a clínicas, hospitales y pacientes particulares.',

      // Who we serve - cards
      'serve.cards.hospitals': 'Hospitales',
      'serve.cards.clinics': 'Clínicas',
      'serve.cards.groups': 'Grupos o asociaciones de pacientes',
      'serve.cards.private': 'Pacientes privados',
      'serve.cards.other_institutions': 'Otras instituciones de salud',
      'serve.cards.pharmacy': 'Farmacia',

      // Import process - steps
      'import.process.step1': 'Solicitud de cotización',
      'import.process.step2': 'Aceptación de cotización',
      'import.process.step3': 'Presentar documentación para la importación',
      'import.process.step4': 'Pedido en proceso',
      'import.process.step5': 'Transporte Internacional, resolución de ISP y despacho de aduanas',
      'import.process.step6': 'Entrega',

      // Documentation section
      'doc.header.h2': '1. Documentación para realizar su Importación',
      'doc.item.prescription': '1. Receta médica',
      'doc.item.id_copy': '2. Fotocopia del documento de identidad',
      'doc.item.poa': '3. Poder notarial simple',
      'doc.item.poa_note': 'Firmado por el paciente o un miembro de la familia',
      'doc.item.download_poa': '4. Descargar Poder Notarial Simple',
      'doc.modal.title': 'Ingreso de solicitud',
      'doc.modal.subtitle': 'Complete todos los campos requeridos para iniciar su proceso',
      'doc.footer.h2': '2.  Envíe su solicitud para iniciar el proceso',
      'doc.info.upload': 'Información de carga',
      'doc.info.subtitle': 'que la receta debe incluir',
      'doc.info.upload.image': 'Icono de información de carga',

      // Power of Attorney (POA) modal & form
      'poa.modal.title': 'Solicite su documento',
      'poa.modal.subtitle': 'Le enviaremos un poder notarial a su número de registro.',
      'poa.form.name': 'Nombre completo*',
      'poa.form.name.label': 'Nombre completo*',
      'poa.form.email': 'Correo electrónico*',
      'poa.form.email.label': 'Correo electrónico*',
      'poa.form.phone': 'Número de teléfono*',
      'poa.form.phone.label': 'Número de teléfono*',
      'poa.form.purpose.label': 'Poder legal*',
      'poa.form.notes': 'Notas adicionales',
      'poa.form.notes.label': 'Notas adicionales',
      'poa.form.next': 'Continuar',
      'poa.form.prev': 'Atrás',
      'poa.form.submit': 'Enviar y descargar',

      // Prescription (Medication Request) form labels/buttons (ES)
      'presc.form.patient_name.label': '1. Nombre y apellido del paciente*',
      'presc.form.patient_rut.label': '2. Rut del paciente* (00000000-0)',
      'presc.form.med_name.label': '3. Nombre del medicamento (principio)*',
      'presc.form.treatment_months.label': '4. Duración del tratamiento en meses*',
      'presc.form.treatment_duration.label': '5. Duración del tratamiento*',
      'presc.form.total_qty.label': '6. Cantidad total solicitada*',
      'presc.form.diagnosis.label': '7. Diagnóstico*',
      'presc.form.rx_date.label': '8. Fecha de la receta*',
      'presc.form.doctor_name.label': '9. Nombre y apellido del médico*',
      'presc.form.doctor_rut.label': '10. Rut del médico* (00000000-0)',
      'presc.form.upload_rx.label': '11. Cargar la receta del médico*',
      'presc.form.upload_poa.label': '12. Cargar poder simple firmado*',
      'presc.form.email.label': '13. Correo electrónico*',
      'presc.form.phone.label': '14. Número de teléfono*',
      'presc.form.file.select': 'Seleccionar archivo',
      'presc.form.file.none': 'No se ha seleccionado ningún archivo',
      'presc.form.submit.loading': 'Enviando...',
      'presc.form.success.h3': '¡Gracias!',
      'presc.form.success.p': 'Hemos recibido su solicitud. Nos pondremos en contacto con usted pronto.',

      // Prescription form errors (ES)
      'presc.form.error.required_all': 'Por favor complete todos los campos requeridos',
      'presc.form.error.patient_name': 'Por favor ingrese el nombre del paciente',
      'presc.form.error.patient_rut': 'El RUT ingresado es incorrecto',
      'presc.form.error.med_name': 'Por favor ingrese el nombre del medicamento',
      'presc.form.error.treatment_months': 'Por favor seleccione la prescripción diaria',
      'presc.form.error.treatment_duration': 'Por favor ingrese la duración del tratamiento',
      'presc.form.error.total_qty': 'Por favor ingrese la cantidad total',
      'presc.form.error.diagnosis': 'Por favor ingrese el diagnóstico',
      'presc.form.error.rx_date': 'Por favor seleccione una fecha',
      'presc.form.error.doctor_name': 'Por favor ingrese su nombre',
      'presc.form.error.doctor_rut': 'El RUT ingresado es incorrecto',
      'presc.form.error.email': 'Por favor ingrese un email válido',
      'presc.form.error.phone': 'Introduce tu número de teléfono',
      'presc.form.error.generic_submit': 'Hubo un error al enviar el formulario. Por favor intente nuevamente.',
      'presc.form.error.network': 'Error de red. Por favor verifique su conexión e intente nuevamente.',

      // FAQ section
      'faq.header.title': 'Preguntas frecuentes',
      'faq.header.subtitle': 'Encuentre respuestas a preguntas comunes sobre nuestros servicios y procesos',
      'faq.q1.q': '¿Cuanto tiempo tarda la importación?',
      'faq.q1.a': 'El proceso de importación suele tardar entre 5 y 10 días hábiles, dependiendo del tipo de producto y el país de origen. Le proporcionaremos un plazo más preciso una vez que tengamos todos los detalles necesarios.',
      'faq.q2.q': '¿Qué se necesita para importar?',
      'faq.q2.a': 'Para iniciar una importación, necesitaremos los detalles del producto, la cantidad, la receta y cualquier otra información y documentación relevante de los pacientes y el médico. Nuestro equipo le guiará con los requisitos específicos de su envío.',
      'faq.q3.q': '¿A quién servimos?',
      'faq.q3.a': 'Atendemos a empresas de todos los tamaños y de diversos sectores, así como a particulares que necesitan servicios especiales de importación de medicamentos. Nuestros clientes son pacientes, minoristas, distribuidores, profesionales sanitarios y más.',
      'faq.q4.q': '¿Importamos medicamentos con cadena de frío (2°C – 4°C)?',
      'faq.q4.a': 'Sí, contamos con capacidades logísticas especializadas de cadena de frío para medicamentos sensibles a la temperatura. Nuestras instalaciones están equipadas con sistemas de almacenamiento y monitoreo de temperatura controlada para garantizar la integridad del producto.',
      'faq.q5.q': '¿Hacemos envíos a todo Chile?',
      'faq.q5.a': 'Ofrecemos cobertura nacional en Chile, incluyendo zonas remotas. Los tiempos de entrega pueden variar según la ubicación, pero garantizamos un servicio confiable en todo el país.',
      'faq.q6.q': '¿Condiciones de pago?',
      'faq.q6.a': 'Ofrecemos condiciones de pago flexibles, incluyendo pago por adelantado, pagos parciales y opciones de crédito para clientes habituales. Nuestras condiciones de pago estándar son: 50% por adelantado al confirmar el pedido y 50% después del envío. Puede contactar con nuestro equipo para obtener condiciones de pago flexibles.',
      'faq.useful': '¿Fue útil esto?',
      'faq.useful.yes': 'Sí',
      'faq.useful.no': 'No',
      'faq.ask.title': 'Haz tu pregunta',
      'faq.ask.placeholder': 'Escribe tu pregunta aquí...',
      'faq.ask.submit': 'Enviar pregunta',

      // Chatbot
      'chatbot.agent_title': 'Divine Healthcare Bot',
      'chatbot.agent_online': ' (En línea)',
      'chatbot.agent_small': 'Normalmente responde en unos minutos.',
      'chatbot.welcome1': '¡Hola! Bienvenido a Divina Salud. ¿Cómo podemos ayudarle hoy?',
      'chatbot.welcome2': 'Puede escribir su pregunta o hacer clic en cualquiera de las preguntas rápidas a continuación.',
      'chatbot.input_placeholder': 'Escribe tu mensaje...',
      'chatbot.quick.hours': 'Horas de trabajo',
      'chatbot.quick.locations': 'Nuestros Ubicaciones',
      'chatbot.quick.services': 'Servicios futuros',
      'chatbot.quick.specialization': 'Especializaciones',
      'chatbot.quick.contact': 'Información de contacto',
      'chatbot.q.hours': '¿En qué horarios estás en línea/activo?',
      'chatbot.q.locations': '¿Dónde están sus ubicaciones?',
      'chatbot.q.services': '¿Qué servicios estás planeando a continuación?',
      'chatbot.q.specialization': '¿En qué estás especializado?',
      'chatbot.q.contact': '¿Cuál es su número de contacto y correo electrónico de soporte?',
      'chatbot.a.hours': 'Estamos disponibles de lunes a viernes de 9.30 a. m. a 5.30 p. m., puede contactarnos en cualquier momento a través de nuestro correo electrónico de soporte a contacto@divine.cl.',
      'chatbot.a.locations': 'Hemos establecido ubicaciones en India, Chile con planes para una mayor expansión global. Av. Pedro de Valdivia 273, Oficina 1310, Providencia, Santiago.',
      'chatbot.a.services': 'Somos una empresa farmacéutica ubicada en Santiago y bodega cercana al Aeropuerto Internacional de Chile, con un equipo de profesionales con amplia experiencia en la industria. Hoy cubrimos las líneas de productos para Bio Similares, Medicamento Huérfano, Sistema Nervioso Central, Oncología, Cardiología, Antiinfecciosos y Medicina Gástrica.',
      'chatbot.a.specialization': 'Nuestros productos terminados son fabricados por instalaciones de fabricación aprobadas por WHO GMP, EU GMP, USFDA y PIC; estas instalaciones son una de las instalaciones farmacéuticas más grandes de la India en su segmento particular. Los productos fabricados y suministrados para Chile son los mismos productos de alta calidad que se suministran en 170 países y más, esto asegura calidad y experiencia en el suministro continuo de medicamentos de alto estándar.',
      'chatbot.a.contact': 'Puedes comunicarte con nosotros en:\nTeléfono: +56 9 3399 0606\nEmail de soporte: contacto@divine.cl',
      'chatbot.default': 'Gracias por tu mensaje. Nuestro equipo se comunicará con usted en breve. Para asistencia inmediata, puede llamarnos al +56 9 3399 0606.',

      'poa.form.purpose.option.placeholder': 'Seleccione una opción',
      'poa.form.purpose.option.patient': 'Paciente',
      'poa.form.purpose.option.parent': 'Padre o madre',
      'poa.form.purpose.option.child': 'Hijo o hija',
      'poa.form.purpose.option.spouse': 'Cónyuge',
      'poa.form.purpose.option.sibling': 'Hermano o hermana',
      'poa.form.purpose.option.other': 'Otro (Especificar)',
    },
    en: {
      'nav.import_personal': 'Personal-use Import',
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.business': 'Business Verticals',
      'nav.portfolio': 'Our Portfolio',
      'nav.infrastructure': 'Infrastructure',
      'nav.chile': 'Presence in Chile',
      'nav.contact': 'Contact Us',
      'lang.spanish': 'Spanish',
      'lang.english': 'English',

      // Common
      'common.follow_us': 'Follow Us:',
      'common.scroll_top': 'Back to top',

      // Home page
      'home.tagline': 'Driven by innovation, guided by care',
      'home.video.h2': 'Our commitment to excellence in healthcare',
      'home.video.p1': 'At Divine Healthcare, we are dedicated to delivering innovative medical solutions that improve patient outcomes worldwide. Our two decades of experience in the Chilean market have given us deep insight into healthcare needs across regions.',
      'home.video.p2': 'We combine cutting-edge technology with compassionate care to offer products that meet the highest regulatory standards while remaining accessible to all.',
      'home.video.cta': 'Learn more about us',
      'home.video.fallback': 'Your browser does not support the video tag.',
      'home.about.p': 'Divine HealthCare is a leading healthcare company based in Chile, sourcing products from research-led manufacturers that offer high-quality medicines. We provide healthcare professionals and patients with innovative, life-saving medicines. Our two decades of experience in the Chilean market have enabled us to deeply understand healthcare needs across regions. Our strict quality standards and sustainable practices, in line with Chilean guidelines, ensure trust in every product we create.',
      'home.long_para': '<b>Divine Health</b><span class="highlight-blue"><b>Care</b></span> is a leading healthcare company based in Chile, sourcing products from research-led manufacturers that offer high-quality medicines. We provide healthcare professionals and patients with innovative, life-saving medicines. Our two decades of experience in the Chilean market have enabled us to deeply understand healthcare needs across regions. Our strict quality standards and sustainable practices, in line with Chilean guidelines, ensure trust in every product we create.',
      'home.parallax.h3': 'Experienced healthcare professionals ensure your needs are managed.',
      'home.parallax.btn': 'We handle the import of medicines unavailable in Chile, as well as high-cost drugs that help bring patients closer to recovery.',

      // Footer
      'footer.quick_links': 'Quick Links',
      'footer.languages': 'Languages',
      'footer.link.import_personal': 'Personal-use Import',
      'footer.link.home': 'Home',
      'footer.link.about': 'About Us',
      'footer.link.business': 'Business Verticals',
      'footer.link.portfolio': 'Our Portfolio',
      'footer.link.infrastructure': 'Infrastructure',
      'footer.link.chile': 'Presence in Chile',
      'footer.link.contact': 'Contact Us',
      'footer.description': 'Our vision is for our products to have certifications from the highest regulatory agencies while maintaining affordable prices for institutions and patients, backed by over two decades of experience in the field.',
      'footer.copyright': '© 2025 Divine Healthcare. All rights reserved.',

      // Forms
      'form.name': 'Name',
      'form.email': 'Email',
      'form.message': 'Your message',
      'form.submit': 'Send Message',
      'form.reset': 'Reset',
      'form.success': 'Thank you! Your message has been sent successfully.',
      'form.error.generic': 'Could not send the form. Please try again.',
      'form.autoresponse': 'Thanks for contacting us! We will reach out soon.',

      // About page
      'about.hero.h1': 'About Divine Healthcare',
      'about.hero.subtitle': 'Driven by innovation, guided by care.',
      'about.team.h2': 'About our team',
      'about.team.p1': 'Divine and its group have over 40 employees, of which 18 are dedicated to commercial and sales teams. We have full coverage in Chile, focusing on the three regions that cover 75% of the market.',
      'about.team.p2': 'Our structure is designed to work as a team and offer our clients the best services. We have a complete team for regulatory affairs and pharmacovigilance, hospital tenders, sales and marketing, and a finance department.',
      'about.team.p3': 'We have an internal dispatch and delivery system with more than 7,000 pallet positions.',
      'about.story.h2': 'About Divine Healthcare',
      'about.story.p': 'Driven by innovation, guided by care',
      'about.journey.h2': 'Our journey',
      'about.journey.p1': 'Founded in Santiago, Chile, Divine Healthcare was born with the vision of providing access to top-quality medicines to Chilean patients at an affordable price. We also provide a platform for manufacturers to supply their high-quality products to the Chilean market.',
      'about.journey.p2': 'As a healthcare company based in the country’s capital, with a warehouse near Chile’s International Airport, and a team of professionals with broad industry experience, we currently cover product lines for biosimilars, orphan drugs, central nervous system, oncology, cardiology, anti-infectives, and gastric medicines.',
      'about.mv.mission.h3': 'Our mission',
      'about.mv.mission.p': 'Improve lives through innovative and affordable healthcare solutions. We bridge the gap between scientific discovery and patient access, ensuring quality medicines reach those who need them most.',
      'about.mv.vision.h3': 'Our vision',
      'about.mv.vision.p': 'Be a global leader in pharmaceutical excellence by 2030, recognized for sustainable practices, therapeutic advances, and commitment to global health equity.',
      'about.certs.h2': 'Accreditations and Certifications of our Manufacturer',
      'about.certs.p': 'Meeting the highest global quality standards',
      'about.why.h2': 'Why choose Divine Healthcare?',
      'about.why.p1': 'Divine Healthcare’s finished products are manufactured in WHO, EU, USFDA and PICs approved facilities. These facilities are among the largest in India in their pharmaceutical segment. The products manufactured and supplied for Chile are of the same high quality supplied to 170+ countries, ensuring quality and experience in the continuous supply of high-standard medicines.',
      'about.why.p2': 'Divine Healthcare SpA bases its operations and future growth on strict compliance with local and international health regulations, aiming to lead requirements such as bioequivalence and therapeutic equivalence. We represent Innovation, Quality, and Service.',

      // Contact page
      'contact.hero.title': 'Get in touch with Divine Healthcare',
      'contact.hero.subtitle': 'We are here to help',
      'contact.hero.desc': 'Reach out through any of our convenient contact methods below',
      'contact.card.phone.h3': 'Phone Support',
      'contact.card.phone.p': 'Speak directly with our representatives',
      'contact.card.phone.btn': 'Call now',
      'contact.card.email.h3': 'Email',
      'contact.card.email.p': 'Send us your queries and we will reply back.',
      'contact.card.email.btn': 'Email',
      'contact.card.visit.h3': 'Visit us',
      'contact.card.visit.p': 'Our headquarters and regional offices',
      'contact.card.visit.btn': 'See locations',
      'contact.form.h2': 'Send us a message',
      'contact.form.p': 'Fill out the form below and we will get back to you within 24 hours',
      'contact.form.label.name': 'Full Name*',
      'contact.form.label.email': 'Email*',
      'contact.form.label.phone': 'Phone number*',
      'contact.form.label.subject': 'Subject*',
      'contact.form.option.placeholder': 'Select a topic',
      'contact.form.option.general': 'General enquiry',
      'contact.form.option.product': 'Product Information',
      'contact.form.option.partner': 'Partnership opportunities',
      'contact.form.option.tech': 'Technical Support',
      'contact.form.label.message': 'Your message*',
      'contact.form.submit': 'Send Message',
      'contact.form.note': '* Required fields',
      'contact.direct.p': 'Or contact us directly:',
      'contact.direct.whatsapp': 'Send us a message on WhatsApp',
      'contact.locations.h2': 'Our locations',
      'contact.locations.p': 'Find our offices across the globe',
      'contact.locations.country': 'Chile',
      'contact.locations.addr': 'Av. Pedro de Valdivia 273, Oficina 1304/1305, Providencia, Santiago',
      'contact.locations.hours': 'Monday to Friday: 9:30 a.m. to 5:30 p.m.',

      // Infrastructure page
      'infra.hero.h1': 'Our infrastructure',
      'infra.hero.p': 'State-of-the-art facilities for excellence in healthcare',
      'infra.content.h2': 'Divine Healthcare infrastructure',
      'infra.content.p1': 'A recent player but, as a group, with more than two decades of experience in the Chilean market. We have created a solid business environment and set up one of the best-in-class warehouses and a dispatch robot for no-delay systems.',
      'infra.content.p2': 'Today, we offer high-quality products that meet our customers’ demands. Our flexibility and openness to different business models with 360º services set us apart from other labs in the market.',
      'infra.content.p3': 'A key differentiator is service; we help our customers at every step of the business and ensure complete satisfaction. Our continuous growth is achieved through product importance. As a company, every product and every customer has value and is essential to our growth.',
      'infra.section.h2': 'World-class infrastructure',
      'infra.qa.h3': 'Uncompromising quality standards',
      'infra.qa1.h4': 'Analytical testing',
      'infra.qa1.p': 'Analytical tests, identity, assay, dissolution and others (HPLC, IR, UV)',
      'infra.qa2.h4': 'Microbiological control',
      'infra.qa2.p': 'Total count of microorganisms, fungi and yeasts, absence of pathogens',
      'infra.qa3.h4': 'Regulatory compliance',
      'infra.qa3.p': 'Records per national regulations, compliance with process validation and bioequivalence demonstration.',
      'infra.qa4.h4': 'Stability studies',
      'infra.qa4.p': 'Meet local requirements according to ICH guidelines',

      // Chile page
      'chile.hero.h1': 'Chile Presence',
      'chile.hq.h2': 'Headquarters',
      'chile.map.h2': 'Our location',
      'chile.partners.h2': 'Our partners',

      // Import page (top section)
      'import.social.follow': 'Follow Us:',
      'import.hero.h1': 'We import medicines from the United States, Europe and India.',
      'import.hero.p': 'We import them for you.',
      'import.hero.cta': 'REQUEST A QUOTE HERE!',
      'import.modal.h2': 'Request a quote',
      'import.modal.p': 'Please fill out all required fields (*)',
      'import.form.label.name': 'Name*',
      'import.form.label.email': 'Email*',
      'import.form.label.phone': 'Phone number*',
      'import.form.label.type': 'Type*',
      'import.form.option.placeholder': 'Select an option',
      'import.form.option.patient': 'Patient',
      'import.form.option.parent': 'Parent',
      'import.form.option.child': 'Son or daughter',
      'import.form.option.spouse': 'Spouse',
      'import.form.option.sibling': 'Brother or sister',
      'import.form.option.other': 'Other (Specify)',
      'import.form.other.placeholder': 'Please specify',
      'import.form.message.label': 'Your message',
      'import.form.submit': 'SUBMIT REQUEST',
      'import.section.imported.h2': 'Imported medicines',
      'import.cat.natural.h3': 'Natural persons',
      'import.cat.natural.p': 'Is your medical treatment in Chile unavailable or too expensive?',
      'import.cat.prof.h3': 'Health professionals',
      'import.cat.prof.p': 'Is the treatment you want to prescribe unavailable or too expensive in Chile?',
      'import.cat.hosp.h3': 'Hospitals and clinics',
      'import.cat.hosp.p': 'Looking for a treatment for a patient in your institution that is unavailable in Chile?',
      'quote.content.title1': 'Who we are',
      'quote.content.button.1': 'Home > who we are',
      'feature.section.who1': 'Divine is a company based in Chile that focuses on helping patients access treatments that are inaccessible or prohibitively expensive locally. With over 25 years of experience, our mission is to connect people with the most effective global medical solutions.',

      // Header info (EN)
      'header.address.line1': 'Av. Pedro de Valdivia 273, Office 1310',
      'header.address.line2': 'Providencia, Santiago',
      'header.hours.line1': 'Monday to Friday from 9:30 to 17:30',
      'header.hours.line2': 'Closed on Saturdays and Sundays.',

      // Import page - additional sections (EN)
      // Quote stripes
      'quote.content.title2': 'Who we serve',
      'quote.content.button.2': 'Home > who we serve',
      'quote.content.title3': 'Importation Process',
      'quote.content.button.3': 'Home > Importation Process',
      'quote.content.title4': 'Frequently Asked Questions',
      'quote.content.button.4': 'Home > Frequently Asked Questions',

      // Who we are - cards
      'who.cards.receive': 'Receive your product within 15 to 21 business days.',
      'who.cards.comply': 'Complies with the regulations set by the Public Health Institute of Chile.',
      'who.cards.suppliers': 'Authorized international suppliers approved by the health authorities of their respective countries.',
      'who.cards.specialty': 'We import medicines for rare or specialized diseases (up to 6 months of treatment).',
      'who.cards.experience': '25 years of import experience',
      'who.cards.shipping': 'Shipping throughout Chile with and without cold chain.',
      'who.cards.pharmacist': 'We have a Pharmaceutical Chemist supervising the process.',
      'who.cards.attention': 'Service for clinics, hospitals, and private patients.',

      // Who we serve - cards
      'serve.cards.hospitals': 'Hospitals',
      'serve.cards.clinics': 'Clinics',
      'serve.cards.groups': 'Patient groups or associations',
      'serve.cards.private': 'Private patients',
      'serve.cards.other_institutions': 'Other health institutions',
      'serve.cards.pharmacy': 'Pharmacy',

      // Import process - steps
      'import.process.step1': 'Quote request',
      'import.process.step2': 'Quote acceptance',
      'import.process.step3': 'Submit documentation for importation',
      'import.process.step4': 'Order in process',
      'import.process.step5': 'International transport, ISP resolution and customs clearance',
      'import.process.step6': 'Delivery',

      // Documentation section
      'doc.header.h2': '1. Documentation to perform your importation',
      'doc.item.prescription': '1. Medical prescription',
      'doc.item.id_copy': '2. Copy of identity document',
      'doc.item.poa': '3. Simple power of attorney',
      'doc.item.poa_note': 'Signed by the patient or a family member',
      'doc.item.download_poa': '4. Download Simple Power of Attorney',
      'doc.modal.title': 'Application entry',
      'doc.modal.subtitle': 'Complete all required fields to start your process',
      'doc.footer.h2': '2. Submit your request to start the process',
      'doc.info.upload': 'Upload information',
      'doc.info.subtitle': 'that the prescription must include',
      'doc.info.upload.image': 'Upload information icon',

      // Power of Attorney (POA) modal & form
      'poa.modal.title': 'Request your document',
      'poa.modal.subtitle': 'We will send a power of attorney to your registration number.',
      'poa.form.name': 'Full name*',
      'poa.form.name.label': 'Full name*',
      'poa.form.email': 'Email*',
      'poa.form.email.label': 'Email*',
      'poa.form.phone': 'Phone number*',
      'poa.form.phone.label': 'Phone number*',
      'poa.form.purpose.label': 'Legal authority*',
      'poa.form.notes': 'Additional notes',
      'poa.form.notes.label': 'Additional notes',
      'poa.form.next': 'Continue',
      'poa.form.prev': 'Back',
      'poa.form.submit': 'Submit and download',

      // Prescription (Medication Request) form labels/buttons (EN)
      'presc.form.patient_name.label': '1. Patient full name*',
      'presc.form.patient_rut.label': '2. Patient RUT* (00000000-0)',
      'presc.form.med_name.label': '3. Medicine name (active)*',
      'presc.form.treatment_months.label': '4. Treatment duration in months*',
      'presc.form.treatment_duration.label': '5. Treatment duration*',
      'presc.form.total_qty.label': '6. Total quantity requested*',
      'presc.form.diagnosis.label': '7. Diagnosis*',
      'presc.form.rx_date.label': '8. Prescription date*',
      'presc.form.doctor_name.label': '9. Doctor full name*',
      'presc.form.doctor_rut.label': '10. Doctor RUT* (00000000-0)',
      'presc.form.upload_rx.label': '11. Upload doctor prescription*',
      'presc.form.upload_poa.label': '12. Upload signed simple POA*',
      'presc.form.email.label': '13. Email*',
      'presc.form.phone.label': '14. Phone number*',
      'presc.form.file.select': 'Select file',
      'presc.form.file.none': 'No file selected',
      'presc.form.submit.loading': 'Sending...',
      'presc.form.success.h3': 'Thank you!',
      'presc.form.success.p': 'We have received your request. We will contact you soon.',

      // Prescription form errors (EN)
      'presc.form.error.required_all': 'Please complete all required fields',
      'presc.form.error.patient_name': 'Please enter the patient name',
      'presc.form.error.patient_rut': 'The entered RUT is incorrect',
      'presc.form.error.med_name': 'Please enter the medicine name',
      'presc.form.error.treatment_months': 'Please select the daily prescription',
      'presc.form.error.treatment_duration': 'Please enter the treatment duration',
      'presc.form.error.total_qty': 'Please enter the total quantity',
      'presc.form.error.diagnosis': 'Please enter the diagnosis',
      'presc.form.error.rx_date': 'Please select a date',
      'presc.form.error.doctor_name': 'Please enter the doctor name',
      'presc.form.error.doctor_rut': 'The entered RUT is incorrect',
      'presc.form.error.email': 'Please enter a valid email',
      'presc.form.error.phone': 'Please enter your phone number',
      'presc.form.error.generic_submit': 'There was an error submitting the form. Please try again.',
      'presc.form.error.network': 'Network error. Please check your connection and try again.',

      // FAQ section
      'faq.header.title': 'Frequently asked questions',
      'faq.header.subtitle': 'Find answers to common questions about our services and processes',
      'faq.q1.q': 'How long does importation take?',
      'faq.q1.a': 'The import process usually takes between 5 and 10 business days, depending on the product type and country of origin. We will provide a more precise timeline once we have all necessary details.',
      'faq.q2.q': 'What is needed to import?',
      'faq.q2.a': 'To start an import, we will need the product details, quantity, prescription, and any other relevant patient and physician information and documentation. Our team will guide you through the specific requirements for your shipment.',
      'faq.q3.q': 'Who do we serve?',
      'faq.q3.a': 'We serve businesses of all sizes across various sectors, as well as individuals needing specialized medicine import services. Our clients include patients, retailers, distributors, healthcare professionals, and more.',
      'faq.q4.q': 'Do we import cold chain medicines (2°C – 4°C)?',
      'faq.q4.a': 'Yes, we have specialized cold chain logistics capabilities for temperature-sensitive medicines. Our facilities are equipped with temperature-controlled storage and monitoring systems to ensure product integrity.',
      'faq.q5.q': 'Do we deliver throughout Chile?',
      'faq.q5.a': 'We offer nationwide coverage in Chile, including remote areas. Delivery times may vary by location, but we ensure reliable service across the country.',
      'faq.q6.q': 'Payment terms?',
      'faq.q6.a': 'We offer flexible payment terms, including advance payment, partial payments, and credit options for regular customers. Our standard terms are: 50% upfront on order confirmation and 50% after dispatch. Contact our team for flexible terms.',
      'faq.useful': 'Was this helpful?',
      'faq.useful.yes': 'Yes',
      'faq.useful.no': 'No',
      'faq.ask.title': 'Ask your question',
      'faq.ask.placeholder': 'Type your question here...',
      'faq.ask.submit': 'Submit question',

      // Chatbot
      'chatbot.agent_title': 'Divine Healthcare Bot',
      'chatbot.agent_online': ' (Online)',
      'chatbot.agent_small': 'Typically replies within minutes.',
      'chatbot.welcome1': 'Hi! Welcome to Divine Healthcare. How can we help you today?',
      'chatbot.welcome2': 'Type your question or click any quick question below.',
      'chatbot.input_placeholder': 'Type your message...',
      'chatbot.quick.hours': 'Working hours',
      'chatbot.quick.locations': 'Our locations',
      'chatbot.quick.services': 'Upcoming services',
      'chatbot.quick.specialization': 'Specializations',
      'chatbot.quick.contact': 'Contact info',
      'chatbot.q.hours': 'What hours are you online/active?',
      'chatbot.q.locations': 'Where are your locations?',
      'chatbot.q.services': 'What services are you planning next?',
      'chatbot.q.specialization': 'What do you specialize in?',
      'chatbot.q.contact': 'What is your contact number and support email?',
      'chatbot.a.hours': 'We are available Monday to Friday from 9:30 a.m. to 5:30 p.m. You can contact us anytime via our support email at contacto@divine.cl.',
      'chatbot.a.locations': 'We have established locations in India and Chile with plans for further global expansion. Av. Pedro de Valdivia 273, Office 1310, Providencia, Santiago.',
      'chatbot.a.services': 'We are a pharmaceutical company in Santiago with a warehouse near Chile International Airport, and a team with broad industry experience. We currently cover product lines for Biosimilars, Orphan Drugs, CNS, Oncology, Cardiology, Anti-infectives and Gastric medicines.',
      'chatbot.a.specialization': 'Our finished products are manufactured by facilities approved by WHO GMP, EU GMP, USFDA and PICs; these are among the largest pharmaceutical facilities in India in their segment. Products supplied for Chile are the same high quality supplied to 170+ countries, ensuring quality and expertise in continuous supply.',
      'chatbot.a.contact': 'You can reach us at:\nPhone: +56 9 3399 0606\nSupport Email: contacto@divine.cl',
      'chatbot.default': 'Thank you for your message. Our team will get back to you shortly. For immediate help, call +56 9 3399 0606.',

      'poa.form.purpose.option.placeholder': 'Select an option',
      'poa.form.purpose.option.patient': 'Patient',
      'poa.form.purpose.option.parent': 'Parent',
      'poa.form.purpose.option.child': 'Child',
      'poa.form.purpose.option.spouse': 'Spouse',
      'poa.form.purpose.option.sibling': 'Sibling',
      'poa.form.purpose.option.other': 'Other (Specify)',
    }
  };

  function setLang(lang) {
    const chosen = translations[lang] ? lang : DEFAULT_LANG;
    localStorage.setItem('site_lang', chosen);
    applyTranslations(chosen);
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');

    // Translate text content
    // IMPORTANT: Skip elements that specify data-i18n-attr (they will be handled below),
    // and skip form controls (input/textarea/select) to avoid inserting inner text that
    // becomes their value, which would duplicate placeholders.
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      const tag = el.tagName.toLowerCase();
      if (el.hasAttribute('data-i18n-attr')) {
        return; // attribute translation handled in the next pass
      }
      if (tag === 'input' || tag === 'textarea' || tag === 'select') {
        return; // do not set textContent/innerHTML on form controls
      }
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    // Translate attributes like placeholder, title, value, etc.
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      if (key && attr && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  }

  function initLanguageSelector() {
    document.querySelectorAll('.language-option').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        if (lang) {
          setLang(lang);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('site_lang') || DEFAULT_LANG;
    applyTranslations(saved);
    initLanguageSelector();
  });

  // Expose a simple runtime translation helper
  window.getI18n = function (key, fallback) {
    try {
      const saved = localStorage.getItem('site_lang') || DEFAULT_LANG;
      const dict = translations[saved] || translations[DEFAULT_LANG];
      return dict[key] || fallback || key;
    } catch (_) {
      return fallback || key;
    }
  };
})();


