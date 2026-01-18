import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Users, Gavel } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Términos de Servicio | Shomels',
  description: 'Términos y Condiciones de uso de los servicios de Corporacion Shomels SAC.',
}

export default function TermsOfServicePage() {
  const lastUpdated = '18 de enero de 2026'

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 mb-6">
              <FileText className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Términos de Servicio
            </h1>
            <p className="text-lg text-muted-foreground">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">

              {/* Introduction */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-green-400" />
                  Aceptación de los Términos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bienvenido a los servicios de <strong className="text-white">Corporacion Shomels SAC</strong>
                  (en adelante &quot;Shomels&quot;, &quot;nosotros&quot; o &quot;la Empresa&quot;), identificada con RUC 20547900074.
                  Al acceder o utilizar nuestros servicios, incluyendo pero no limitado a Nano ERP, NanoCRM,
                  LlamadIA, Shomels Logistics, AssetsOrg y EdificioApp (colectivamente, los &quot;Servicios&quot;),
                  usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con estos
                  términos, no debe utilizar nuestros Servicios.
                </p>
              </div>

              {/* Services Description */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Descripción de los Servicios</h2>
                <p className="text-muted-foreground mb-4">
                  Shomels proporciona un ecosistema de software empresarial que incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-blue-400">Nano ERP:</strong> Sistema de gestión empresarial con facturación electrónica SUNAT</li>
                  <li><strong className="text-cyan-400">NanoCRM:</strong> Gestión de relaciones con clientes y automatización de ventas</li>
                  <li><strong className="text-green-400">LlamadIA:</strong> Agentes de inteligencia artificial para atención al cliente vía WhatsApp</li>
                  <li><strong className="text-amber-400">Shomels Logistics:</strong> Sistema de gestión logística y seguimiento de entregas</li>
                  <li><strong className="text-purple-400">AssetsOrg:</strong> Gestión de activos digitales con generación de imágenes por IA</li>
                  <li><strong className="text-rose-400">EdificioApp:</strong> Sistema de administración de edificios y propiedades</li>
                </ul>
              </div>

              {/* Account Registration */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyan-400" />
                  Registro y Cuenta de Usuario
                </h2>
                <p className="text-muted-foreground mb-4">
                  Para acceder a nuestros Servicios, debe:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Ser mayor de 18 años o tener capacidad legal para contratar</li>
                  <li>Proporcionar información precisa, actual y completa durante el registro</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                  <li>Ser responsable de todas las actividades realizadas bajo su cuenta</li>
                  <li>Notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Nos reservamos el derecho de suspender o cancelar cuentas que violen estos términos
                  o que sean utilizadas para actividades fraudulentas o ilegales.
                </p>
              </div>

              {/* Usage Rules */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  Uso Aceptable
                </h2>
                <p className="text-muted-foreground mb-4">
                  Al utilizar nuestros Servicios, usted se compromete a NO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Violar leyes o regulaciones aplicables, incluyendo las normativas de SUNAT</li>
                  <li>Infringir derechos de propiedad intelectual de terceros</li>
                  <li>Transmitir malware, virus u otro código malicioso</li>
                  <li>Intentar acceder sin autorización a sistemas o datos de otros usuarios</li>
                  <li>Utilizar los Servicios para enviar spam o comunicaciones no solicitadas</li>
                  <li>Realizar ingeniería inversa, descompilar o desensamblar nuestro software</li>
                  <li>Sublicenciar, revender o redistribuir los Servicios sin autorización</li>
                  <li>Sobrecargar intencionalmente nuestros sistemas o infraestructura</li>
                  <li>Falsificar información fiscal o comprobantes electrónicos</li>
                </ul>
              </div>

              {/* Payments and Billing */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-purple-400" />
                  Pagos y Facturación
                </h2>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-white">Tarifas y Planes</h3>
                <p className="text-muted-foreground mb-4">
                  Los precios de nuestros Servicios están disponibles en nuestro sitio web y pueden variar
                  según el plan seleccionado. Todos los precios están expresados en Soles (PEN) e incluyen IGV.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Ciclos de Facturación</h3>
                <p className="text-muted-foreground mb-4">
                  Los pagos se realizan por adelantado según el ciclo de facturación elegido (mensual o anual).
                  Los cargos son no reembolsables, excepto cuando la ley lo requiera.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Renovación Automática</h3>
                <p className="text-muted-foreground">
                  Su suscripción se renovará automáticamente al final de cada período de facturación,
                  a menos que cancele antes de la fecha de renovación. Le notificaremos con anticipación
                  cualquier cambio en los precios.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Propiedad Intelectual</h2>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-white">Nuestros Derechos</h3>
                <p className="text-muted-foreground mb-4">
                  Todos los derechos de propiedad intelectual sobre los Servicios, incluyendo software,
                  diseños, marcas, logos y contenido, son propiedad exclusiva de Shomels o sus licenciantes.
                  Estos términos no le otorgan ningún derecho sobre nuestra propiedad intelectual.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Sus Datos</h3>
                <p className="text-muted-foreground">
                  Usted conserva todos los derechos sobre los datos que ingresa en nuestros Servicios.
                  Nos otorga una licencia limitada para procesar, almacenar y mostrar sus datos únicamente
                  con el fin de proporcionarle los Servicios contratados.
                </p>
              </div>

              {/* SUNAT Integration */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Facturación Electrónica y SUNAT</h2>
                <p className="text-muted-foreground mb-4">
                  Nuestros Servicios incluyen integración con SUNAT para la emisión de comprobantes
                  electrónicos. Al utilizar esta funcionalidad:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Usted es responsable de la veracidad de la información fiscal proporcionada</li>
                  <li>Debe mantener vigente su certificado digital de SUNAT</li>
                  <li>Los comprobantes emitidos tienen validez legal ante SUNAT</li>
                  <li>Shomels actúa únicamente como proveedor de software autorizado (PSE)</li>
                  <li>No somos responsables por errores en datos fiscales ingresados por el usuario</li>
                </ul>
              </div>

              {/* Service Availability */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Disponibilidad del Servicio</h2>
                <p className="text-muted-foreground mb-4">
                  Nos esforzamos por mantener nuestros Servicios disponibles 24/7. Sin embargo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Podemos realizar mantenimientos programados con previo aviso</li>
                  <li>No garantizamos disponibilidad ininterrumpida en caso de fuerza mayor</li>
                  <li>Los servicios de SUNAT y WhatsApp están sujetos a disponibilidad de terceros</li>
                  <li>Para clientes Enterprise, los SLA específicos se definen en contratos separados</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground mb-4">
                  EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Los Servicios se proporcionan &quot;tal cual&quot; y &quot;según disponibilidad&quot;</li>
                  <li>No garantizamos que los Servicios cumplirán todos sus requisitos específicos</li>
                  <li>No seremos responsables por daños indirectos, incidentales o consecuentes</li>
                  <li>Nuestra responsabilidad total no excederá el monto pagado en los últimos 12 meses</li>
                  <li>No somos responsables por pérdidas debido a uso incorrecto de los Servicios</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Terminación</h2>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-white">Por el Usuario</h3>
                <p className="text-muted-foreground mb-4">
                  Puede cancelar su suscripción en cualquier momento desde su panel de control.
                  La cancelación será efectiva al final del período de facturación actual.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Por Shomels</h3>
                <p className="text-muted-foreground mb-4">
                  Podemos suspender o terminar su acceso si:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Viola estos Términos de Servicio</li>
                  <li>No realiza los pagos correspondientes</li>
                  <li>Utiliza los Servicios para actividades ilegales</li>
                  <li>Representa un riesgo de seguridad para nuestros sistemas u otros usuarios</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Efectos de la Terminación</h3>
                <p className="text-muted-foreground">
                  Tras la terminación, podrá exportar sus datos durante 30 días. Después de este período,
                  sus datos serán eliminados de nuestros sistemas, excepto aquellos que debamos conservar
                  por obligaciones legales o fiscales.
                </p>
              </div>

              {/* Modifications */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Modificaciones a los Términos</h2>
                <p className="text-muted-foreground">
                  Podemos modificar estos Términos de Servicio en cualquier momento. Le notificaremos
                  sobre cambios materiales con al menos 30 días de anticipación mediante correo electrónico
                  o aviso en nuestro sitio web. El uso continuado de los Servicios después de los cambios
                  constituye su aceptación de los nuevos términos.
                </p>
              </div>

              {/* Governing Law */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Gavel className="w-6 h-6 text-rose-400" />
                  Ley Aplicable y Jurisdicción
                </h2>
                <p className="text-muted-foreground">
                  Estos Términos se rigen por las leyes de la República del Perú. Cualquier controversia
                  será sometida a la jurisdicción de los tribunales de Lima, Perú. Las partes acuerdan
                  intentar resolver cualquier disputa de manera amistosa antes de iniciar procedimientos legales.
                </p>
              </div>

              {/* Contact */}
              <div className="glass-card rounded-2xl p-8 border-green-500/30">
                <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                <p className="text-muted-foreground mb-4">
                  Para preguntas sobre estos Términos de Servicio, contáctenos:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-white">Corporacion Shomels SAC</strong></p>
                  <p>RUC: 20547900074</p>
                  <p>Correo electrónico: <a href="mailto:ventas@shomels.com" className="text-green-400 hover:underline">ventas@shomels.com</a></p>
                  <p>Teléfono/WhatsApp: <a href="tel:+51927900819" className="text-green-400 hover:underline">+51 927 900 819</a></p>
                  <p>Dirección: Av. Javier Prado Este 123, San Isidro, Lima, Perú</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
