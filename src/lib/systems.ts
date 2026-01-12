export interface SystemFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SystemProcess {
  title: string;
  description: string;
}

export interface System {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  longDescription: string;
  icon: string;
  color: "green" | "blue" | "purple" | "amber" | "cyan" | "rose";
  url: string;
  features: SystemFeature[];
  mainProcesses: SystemProcess[];
  secondaryProcesses: string[];
  painPoints: string[];
  benefits: string[];
  stats: { value: string; label: string }[];
}

export const systems: System[] = [
  {
    id: "nano-erp",
    name: "Nano ERP",
    tagline: "El Cerebro",
    headline: "El sistema nervioso central de tu empresa",
    description: "ERP completo: Ventas, Compras, Inventario, Producción, Finanzas, RRHH y Facturación SUNAT. Todo conectado.",
    longDescription: "Nano ERP no es solo facturación electrónica. Es el sistema operativo completo de tu empresa peruana. Desde el momento que cotizas hasta que cobras, desde que compras materia prima hasta que produces y vendes, desde que contratas personal hasta que pagas planillas. Todo en un solo lugar, todo conectado, todo automatizado. SUNAT es solo la cereza del pastel.",
    icon: "Brain",
    color: "blue",
    url: "https://erp.shomels.com",
    features: [
      { icon: "ShoppingCart", title: "Gestión de Ventas", description: "Cotizaciones, órdenes de venta, notas de entrega, facturación. Flujo completo de ventas." },
      { icon: "Package", title: "Control de Inventario", description: "Multi-almacén, lotes, series, fechas de vencimiento, valorización FIFO/LIFO/Promedio." },
      { icon: "Receipt", title: "Facturación SUNAT UBL 2.1", description: "Boletas, facturas, notas de crédito/débito, guías de remisión. 100% automatizado." },
      { icon: "Wallet", title: "Gestión Financiera", description: "Cuentas por cobrar/pagar, bancos, conciliación, flujo de caja, presupuestos." },
      { icon: "Building2", title: "Compras y Proveedores", description: "Requisiciones, órdenes de compra, recepción de mercadería, evaluación de proveedores." },
      { icon: "Users", title: "Recursos Humanos", description: "Empleados, contratos, asistencia, vacaciones, permisos, planillas integradas." },
      { icon: "BarChart3", title: "Contabilidad Completa", description: "Plan de cuentas PGE, libro diario, mayor, balance, estados financieros, SIRE listo." },
      { icon: "FlaskConical", title: "Producción", description: "Órdenes de producción, recetas/BOM, control de calidad, costos de producción." },
      { icon: "FileText", title: "Reportes Gerenciales", description: "Dashboards en tiempo real, KPIs, análisis de rentabilidad por producto/cliente." },
    ],
    mainProcesses: [
      { title: "Ciclo Completo de Ventas", description: "Cotización → Orden de venta → Picking → Despacho → Factura SUNAT → Cobranza" },
      { title: "Ciclo de Compras", description: "Requisición → Cotización proveedores → Orden de compra → Recepción → Factura proveedor → Pago" },
      { title: "Control de Inventario", description: "Ingresos, salidas, transferencias, ajustes, tomas de inventario, valorización automática" },
      { title: "Gestión Financiera", description: "Cuentas por cobrar/pagar, flujo de caja, conciliación bancaria, presupuestos" },
      { title: "Contabilidad Tributaria", description: "Libros electrónicos SUNAT, SIRE, PLES, declaraciones mensuales/anuales" },
      { title: "Recursos Humanos", description: "Gestión de personal, control de asistencia, cálculo de planillas AFP/ONP" },
    ],
    secondaryProcesses: [
      "Multi-empresa y multi-moneda",
      "Tipos de cambio SUNAT automáticos",
      "Firma digital de documentos",
      "Workflow de aprobaciones configurable",
      "API REST para integraciones",
      "Roles y permisos granulares",
      "Auditoría completa de cambios",
      "Backup automático en la nube",
      "Importación masiva desde Excel",
      "Reportes personalizables",
    ],
    painPoints: [
      "Usas 5 programas diferentes que no se hablan entre sí",
      "Tu contador trabaja doble ingresando datos al sistema contable",
      "No sabes tu rentabilidad real por producto ni por cliente",
      "El cierre de mes te toma una semana de reconciliaciones",
      "Tus vendedores no saben si hay stock disponible",
      "Pierdes dinero por falta de control en inventarios",
    ],
    benefits: [
      "Un solo sistema para TODO: ventas, compras, inventario, finanzas, RRHH",
      "Contabilidad automática: cada transacción genera su asiento",
      "SUNAT sin drama: facturas, libros electrónicos, SIRE, todo automático",
      "Decisiones con data: rentabilidad real por producto, cliente, vendedor",
      "Cierre de mes en horas: todo ya está reconciliado",
      "Escalable: desde 1 usuario hasta 100+ sin cambiar de sistema",
    ],
    stats: [
      { value: "100%", label: "Automatización SUNAT" },
      { value: "6 módulos", label: "Integrados en uno" },
      { value: "Real-time", label: "Contabilidad automática" },
      { value: "24/7", label: "Disponibilidad cloud" },
    ],
  },
  {
    id: "nanocrm",
    name: "NanoCRM",
    tagline: "El Radar",
    headline: "Cada lead que entra, cada peso que conviertes",
    description: "CRM multi-dominio para leads, pedidos y analytics de tu e-commerce.",
    longDescription: "Leads que entran por tu web y se pierden en el olvido. Pedidos que no sabes de dónde vinieron. Campañas que no puedes medir. NanoCRM captura cada lead con su UTM, cada pedido con su origen, y te dice exactamente qué canal te está generando dinero.",
    icon: "Target",
    color: "cyan",
    url: "https://crm.shomels.com",
    features: [
      { icon: "MousePointer", title: "Captura de leads automática", description: "Formularios que capturan nombre, teléfono, UTM, ciudad y dispositivo." },
      { icon: "ShoppingCart", title: "Gestión de pedidos", description: "Numeración automática, items, COD, códigos de descuento." },
      { icon: "MessageCircle", title: "WhatsApp tracking", description: "Cada click al botón de WhatsApp queda registrado con su referencia." },
      { icon: "TrendingUp", title: "Analytics de conversión", description: "Funnel completo: visitante → lead → pedido → entrega." },
      { icon: "Globe", title: "Multi-dominio", description: "Un CRM para todas tus landing pages y marcas." },
      { icon: "Zap", title: "SDK ligero", description: "Script de 19-96KB que no afecta la velocidad de tu web." },
    ],
    mainProcesses: [
      { title: "Captura de Leads", description: "Desde landing pages con UTM, geo-location, device detection" },
      { title: "Gestión de Pedidos", description: "Numeración automática, COD, integración con fulfillment" },
      { title: "WhatsApp Marketing", description: "Tracking de clicks, referencias, templates de mensajes" },
      { title: "Analytics y Eventos", description: "Page views, add to cart, checkout, purchase - todo medible" },
      { title: "Campañas Multi-plataforma", description: "Meta, Google, TikTok, LinkedIn - un lugar para todo" },
    ],
    secondaryProcesses: [
      "SDK modular para landing pages",
      "Webhooks con MercadoPago y Logistics",
      "Customer scoring con IA",
      "Export CSV de leads y pedidos",
      "Dashboard real-time",
    ],
    painPoints: [
      "Leads que entran y no sabes de dónde vinieron",
      "No puedes medir qué campaña funciona mejor",
      "Pedidos perdidos entre WhatsApp y Excel",
      "Cada landing page es un sistema distinto",
    ],
    benefits: [
      "Atribución perfecta: sabes qué campaña trajo cada venta",
      "Un dashboard para todos tus dominios",
      "Funnel de conversión visible en tiempo real",
      "Pedidos que fluyen automático a logística",
    ],
    stats: [
      { value: "5+", label: "Dominios en un CRM" },
      { value: "100%", label: "Leads con atribución" },
      { value: "30s", label: "Setup en tu landing" },
    ],
  },
  {
    id: "llamadia",
    name: "LlamadIA",
    tagline: "La Voz",
    headline: "Un vendedor que nunca duerme, nunca se enferma, nunca se olvida",
    description: "Agentes de IA en WhatsApp que venden y atienden 24/7 con conversaciones naturales.",
    longDescription: "Tu mejor vendedor atiende 50 chats al día. LlamadIA atiende 500. Y a las 3am del domingo también. No es un chatbot con respuestas robóticas. Es un agente de IA que entiende contexto, maneja objeciones, cierra ventas COD, y escala a humanos solo cuando es necesario.",
    icon: "MessageSquare",
    color: "green",
    url: "https://llamadia.shomels.com",
    features: [
      { icon: "Bot", title: "5 agentes especializados", description: "Ventas, soporte, cobranzas - cada uno entrenado diferente." },
      { icon: "MapPin", title: "Flujo COD inteligente", description: "Pregunta dirección, valida cobertura, confirma pedido automáticamente." },
      { icon: "RefreshCw", title: "Recuperación de carritos", description: "'Vi que te quedaste pensando...' se envía solo." },
      { icon: "FlaskConical", title: "A/B testing de mensajes", description: "Descubre qué pitch convierte más con datos reales." },
      { icon: "Shield", title: "Anti-ban inteligente", description: "Delays naturales, rate limiting, detección de bloqueos." },
      { icon: "Zap", title: "Respuesta en 28 segundos", description: "Promedio de respuesta vs 3.2 horas de la competencia." },
    ],
    mainProcesses: [
      { title: "Agentes IA Multi-propósito", description: "Sales, Engagement, Support, COD Manager, Building Agent" },
      { title: "Flujo COD Conversacional", description: "Lenguaje natural, bifurcación por ciudad, tareas automáticas" },
      { title: "Campañas Frías", description: "Outreach automatizado con límites anti-ban por edad de cuenta" },
      { title: "Gestión de Incidentes", description: "Recuperación automática de crashes, comandos admin por WhatsApp" },
      { title: "Gateway Multi-App", description: "Apps externas pueden usar WhatsApp a través de LlamadIA" },
    ],
    secondaryProcesses: [
      "Fallback multi-proveedor LLM (Claude, GPT, Gemini)",
      "Tracking de costos por token",
      "A/B testing con análisis estadístico",
      "Humanización de mensajes",
      "Recuperación de errores inteligente",
    ],
    painPoints: [
      "47 mensajes sin leer a las 8am",
      "Vendedor se fue y perdiste sus conversaciones",
      "Clientes que escriben a las 2am y nadie responde",
      "No sabes qué mensaje convierte mejor",
    ],
    benefits: [
      "Respuesta en 28 segundos, 24/7",
      "Conversaciones que se cierran solas",
      "Historial completo de cada cliente",
      "Data real de qué funciona y qué no",
    ],
    stats: [
      { value: "28s", label: "Tiempo de respuesta" },
      { value: "500+", label: "Chats simultáneos" },
      { value: "24/7", label: "Sin descanso" },
    ],
  },
  {
    id: "logistics",
    name: "Shomels Logistics",
    tagline: "El Movimiento",
    headline: "El cliente pregunta '¿dónde está mi pedido?' y TÚ no sabes qué responder",
    description: "Tracking en tiempo real, gestión de entregas COD y liquidación de motorizados.",
    longDescription: "Tu motorizado dice que entregó. El cliente dice que no llegó. El dinero del COD no cuadra. Suena familiar? Shomels Logistics te da visibilidad total: ves dónde está cada motorizado, cada pedido, cada sol cobrado. En tiempo real. Desde tu celular.",
    icon: "Truck",
    color: "amber",
    url: "https://logistics.shomels.com",
    features: [
      { icon: "Map", title: "Mapa en vivo", description: "Sabes exactamente dónde está cada motorizado y cada entrega." },
      { icon: "Camera", title: "Foto de evidencia", description: "Prueba de entrega que evita discusiones y reclamos." },
      { icon: "Wallet", title: "Cuadre de caja automático", description: "COD que cuadra al centavo, cada sol tiene trazabilidad." },
      { icon: "Link", title: "Link de tracking", description: "'Tu pedido llega en 23 minutos' directo al WhatsApp del cliente." },
      { icon: "Users", title: "Portal para clientes", description: "Tus clientes comerciales ven sus pedidos sin llamarte." },
      { icon: "Route", title: "Optimización de rutas", description: "OSRM integrado para rutas eficientes automáticas." },
    ],
    mainProcesses: [
      { title: "Gestión de Pedidos", description: "Creación, asignación, tracking, evidencia de entrega" },
      { title: "Gestión de Drivers", description: "Perfiles, vehículos, capacidad, ubicación real-time" },
      { title: "Planificación de Rutas", description: "Generación automática, optimización OSRM, hojas de ruta" },
      { title: "Tracking Público", description: "Página sin login para clientes con ETA actualizado" },
      { title: "Liquidaciones", description: "Cuadre de caja, COD, reportes por driver" },
    ],
    secondaryProcesses: [
      "SMS automáticos (en ruta, cerca, entregado)",
      "Webhook CRM bidireccional",
      "Geocoding de direcciones",
      "Kanban visual del workflow",
      "Multi-rol: Admin, Operador, Driver, Cliente",
    ],
    painPoints: [
      "Cliente dice que no llegó, motorizado dice que sí",
      "Dinero del COD que no cuadra al final del día",
      "No sabes dónde está tu motorizado ahora mismo",
      "Clientes llamando para preguntar por su pedido",
    ],
    benefits: [
      "89% menos reclamos con foto obligatoria",
      "Cuadre automático al centavo",
      "Clientes rastrean sin llamarte",
      "Drivers más eficientes con rutas optimizadas",
    ],
    stats: [
      { value: "89%", label: "Menos reclamos 'no llegó'" },
      { value: "100%", label: "COD trazable" },
      { value: "Real-time", label: "Ubicación de drivers" },
    ],
  },
  {
    id: "assetsorg",
    name: "AssetsOrg",
    tagline: "La Creatividad",
    headline: "Tu diseñador se fue de vacaciones. Tu campaña sale mañana.",
    description: "DAM inteligente con IA generativa para crear y organizar activos de marketing.",
    longDescription: "Fotos de productos en 15 carpetas distintas. Nadie sabe cuál es la versión final. Y necesitas 20 variantes para la campaña de mañana. AssetsOrg es tu biblioteca central de activos con superpoderes de IA: genera variantes de color automáticas, crea mockups, escribe el copy del anuncio, y te dice qué imagen va a convertir mejor.",
    icon: "Image",
    color: "purple",
    url: "https://assetsorg-frontend-749189194942.us-central1.run.app",
    features: [
      { icon: "Search", title: "Búsqueda visual", description: "Encuentra 'esa foto del producto azul' sin recordar el nombre." },
      { icon: "Palette", title: "Variantes con IA", description: "Una foto, 10 colores diferentes en 1 click." },
      { icon: "PenTool", title: "Copy generator", description: "'Escríbeme 5 versiones del anuncio' y listo." },
      { icon: "TrendingUp", title: "Predicción de ROI", description: "'Esta imagen tiene 73% probabilidad de convertir mejor'." },
      { icon: "Building2", title: "Multi-marca", description: "Organización por marca y producto, permisos por equipo." },
      { icon: "CheckCircle", title: "Workflow de aprobación", description: "Submit → Review → Approve con comentarios." },
    ],
    mainProcesses: [
      { title: "Gestión de Assets", description: "Upload, procesamiento, versionado, deduplicación" },
      { title: "IA de Assets", description: "Auto-clasificación, OCR, scoring de calidad, descripciones" },
      { title: "Búsqueda Inteligente", description: "Full-text, similitud visual (pgvector), semántica" },
      { title: "Generación IA", description: "Variantes, mockups, resize, copy automático" },
      { title: "Analytics de Assets", description: "Views, downloads, ROI, predicciones de conversión" },
    ],
    secondaryProcesses: [
      "Crawling de landing pages para auto-import",
      "Webhooks para CRM",
      "Social media tracking (FB, IG, TikTok)",
      "CDN con compresión inteligente",
      "Import desde Google Drive",
    ],
    painPoints: [
      "Fotos en 15 carpetas diferentes",
      "Nadie sabe cuál es la versión final",
      "Diseñador enfermo = campaña parada",
      "No sabes qué imagen funciona mejor",
    ],
    benefits: [
      "Todo en un lugar, encontrable en segundos",
      "Variantes automáticas sin diseñador",
      "Data de qué imágenes convierten más",
      "Workflow de aprobación ordenado",
    ],
    stats: [
      { value: "2hrs", label: "vs 2 días para campaña" },
      { value: "0.3s", label: "Búsqueda visual" },
      { value: "73%", label: "Precisión predicción ROI" },
    ],
  },
  {
    id: "edificioapp",
    name: "EdificioApp",
    tagline: "La Vertical",
    headline: "15 inquilinos, 15 recibos de luz distintos, 15 excusas para no pagar",
    description: "Gestión de edificios residenciales y comerciales con todo el poder del ecosistema Shomels.",
    longDescription: "Calcular consumos a mano. Perseguir pagos por WhatsApp. Explicar por qué subió el agua. El administrador está quemado y los propietarios molestos. EdificioApp es Shomels para edificios: lectura de medidores con QR, recibos automáticos por WhatsApp, y toda la contabilidad integrada.",
    icon: "Building",
    color: "rose",
    url: "https://edificioapp.shomels.com",
    features: [
      { icon: "QrCode", title: "Lectura QR de medidores", description: "Adiós Excel de consumos. Escaneas y listo." },
      { icon: "Bell", title: "Notificaciones WhatsApp", description: "Recibos que llegan solos, recordatorios automáticos." },
      { icon: "FileText", title: "Contratos digitales", description: "Generación, firma y archivo de contratos." },
      { icon: "Wrench", title: "Mantenimiento", description: "Solicitudes, órdenes de trabajo, seguimiento." },
      { icon: "BarChart2", title: "Dashboard de ocupación", description: "KPIs de vacancia, estados de departamentos." },
      { icon: "History", title: "Historial completo", description: "Pagos, consumos, contratos - todo trazable." },
    ],
    mainProcesses: [
      { title: "Gestión de Inquilinos", description: "Registro, contratos, liquidación, inventarios de mudanza" },
      { title: "Medición de Consumos", description: "Agua/luz por departamento, lectura QR, cálculo automático" },
      { title: "Facturación y Cobros", description: "Recibos automáticos, pagos, vouchers, morosos" },
      { title: "Mantenimiento", description: "Solicitudes, órdenes de trabajo, seguimiento de costos" },
      { title: "Comunicación", description: "WhatsApp vía LlamadIA, email, SMS - todo integrado" },
    ],
    secondaryProcesses: [
      "OCR para recibos de servicios (SEDAPAL, Luz)",
      "Google Cloud Storage para documentos",
      "Jobs automáticos de recordatorios",
      "Audit logging completo",
      "Multi-edificio desde una cuenta",
    ],
    painPoints: [
      "Calcular consumos en Excel cada mes",
      "Perseguir pagos por WhatsApp uno por uno",
      "Inquilinos preguntando cuánto deben",
      "Contratos en papeles perdidos",
    ],
    benefits: [
      "Consumos calculados automáticamente",
      "Recibos que llegan solos por WhatsApp",
      "Inquilinos consultan su deuda sin llamarte",
      "Todo digital, todo trazable",
    ],
    stats: [
      { value: "Auto", label: "Cálculo de consumos" },
      { value: "WhatsApp", label: "Recibos automáticos" },
      { value: "0", label: "Papeles perdidos" },
    ],
  },
];

export const getSystemBySlug = (slug: string): System | undefined => {
  return systems.find((s) => s.id === slug);
};

export const integrationFlowSteps = [
  {
    step: 1,
    title: "El Lead",
    time: "11:47pm",
    description: "María ve tu anuncio en Facebook",
    detail: "Entra a tu landing page. NanoCRM captura: nombre, teléfono, UTM, ciudad.",
    result: "0 segundos de trabajo tuyo",
    system: "nanocrm",
  },
  {
    step: 2,
    title: "La Venta",
    time: "12:03am",
    description: "María escribe 'Hola' a tu WhatsApp",
    detail: "LlamadIA responde en 12 segundos. Conversación natural: resuelve dudas, ofrece promo.",
    result: "Pedido creado automáticamente",
    system: "llamadia",
  },
  {
    step: 3,
    title: "La Entrega",
    time: "10:52am",
    description: "Pedido asignado a motorizado de la zona",
    detail: "María recibe WhatsApp: 'Tu pedido llega en 20 min'. Entrega confirmada con foto.",
    result: "María pagó S/89 en efectivo (COD)",
    system: "logistics",
  },
  {
    step: 4,
    title: "El Cierre",
    time: "Automático",
    description: "COD registrado, stock actualizado",
    detail: "Boleta electrónica emitida a SUNAT. María recibe su boleta por WhatsApp.",
    result: "0 minutos de trabajo manual",
    system: "nano-erp",
  },
];
