import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Shomels',
  description: 'Política de Privacidad de Corporacion Shomels SAC. Conoce cómo protegemos y utilizamos tu información personal.',
}

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de Privacidad
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
                  <Eye className="w-6 h-6 text-blue-400" />
                  Introducción
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En <strong className="text-white">Corporacion Shomels SAC</strong> (en adelante &quot;Shomels&quot;, &quot;nosotros&quot; o &quot;nuestro&quot;),
                  con RUC 20547900074, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes.
                  Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos
                  su información personal cuando utiliza nuestros servicios y plataformas, incluyendo Nano ERP,
                  NanoCRM, LlamadIA, Shomels Logistics, AssetsOrg y EdificioApp.
                </p>
              </div>

              {/* Data Collection */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-cyan-400" />
                  Información que Recopilamos
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Información proporcionada directamente:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Nombre completo y datos de contacto (correo electrónico, teléfono, dirección)</li>
                  <li>Información de la empresa (razón social, RUC, dirección fiscal)</li>
                  <li>Credenciales de acceso a nuestras plataformas</li>
                  <li>Información de facturación y pagos</li>
                  <li>Comunicaciones que mantiene con nosotros</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Información recopilada automáticamente:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Datos de uso de nuestras plataformas y servicios</li>
                  <li>Información del dispositivo y navegador</li>
                  <li>Dirección IP y datos de ubicación aproximada</li>
                  <li>Cookies y tecnologías similares de seguimiento</li>
                  <li>Registros de actividad y logs del sistema</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Información de terceros:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Datos de SUNAT para validación de RUC y facturación electrónica</li>
                  <li>Información de proveedores de servicios de pago</li>
                  <li>Datos de integración con WhatsApp Business API</li>
                </ul>
              </div>

              {/* Use of Information */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-green-400" />
                  Uso de la Información
                </h2>
                <p className="text-muted-foreground mb-4">Utilizamos su información personal para:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                  <li>Procesar transacciones y enviar notificaciones relacionadas</li>
                  <li>Emitir comprobantes electrónicos ante SUNAT</li>
                  <li>Gestionar su cuenta y proporcionar soporte técnico</li>
                  <li>Enviar comunicaciones comerciales (con su consentimiento)</li>
                  <li>Personalizar su experiencia en nuestras plataformas</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Prevenir fraudes y garantizar la seguridad de nuestros sistemas</li>
                  <li>Realizar análisis y mejoras de nuestros productos</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Compartición de Datos</h2>
                <p className="text-muted-foreground mb-4">
                  No vendemos su información personal. Podemos compartir sus datos únicamente en los siguientes casos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-white">Con SUNAT:</strong> Para la emisión de comprobantes electrónicos según la normativa peruana</li>
                  <li><strong className="text-white">Proveedores de servicios:</strong> Terceros que nos ayudan a operar nuestros servicios (hosting, pagos, análisis)</li>
                  <li><strong className="text-white">Cumplimiento legal:</strong> Cuando sea requerido por ley o autoridad competente</li>
                  <li><strong className="text-white">Protección de derechos:</strong> Para proteger nuestros derechos, seguridad o propiedad</li>
                  <li><strong className="text-white">Con su consentimiento:</strong> Cuando usted autorice expresamente la compartición</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Seguridad de los Datos</h2>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Encriptación de datos en tránsito y en reposo (TLS/SSL, AES-256)</li>
                  <li>Infraestructura en Google Cloud Platform con certificaciones de seguridad</li>
                  <li>Autenticación segura mediante Firebase Authentication</li>
                  <li>Copias de seguridad automáticas y redundancia de datos</li>
                  <li>Monitoreo continuo de seguridad y detección de amenazas</li>
                  <li>Control de acceso basado en roles y principio de mínimo privilegio</li>
                  <li>Auditorías de seguridad periódicas</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-amber-400" />
                  Retención de Datos
                </h2>
                <p className="text-muted-foreground">
                  Conservamos su información personal durante el tiempo necesario para cumplir con los fines
                  descritos en esta política, a menos que la ley exija un período de retención más largo.
                  Los documentos tributarios se conservan por el período establecido por SUNAT (mínimo 5 años).
                  Puede solicitar la eliminación de sus datos personales en cualquier momento, sujeto a nuestras
                  obligaciones legales de retención.
                </p>
              </div>

              {/* User Rights */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Sus Derechos</h2>
                <p className="text-muted-foreground mb-4">
                  De acuerdo con la Ley N° 29733 (Ley de Protección de Datos Personales del Perú), usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-white">Acceso:</strong> Solicitar información sobre los datos personales que tenemos sobre usted</li>
                  <li><strong className="text-white">Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong className="text-white">Cancelación:</strong> Solicitar la eliminación de sus datos personales</li>
                  <li><strong className="text-white">Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos</li>
                  <li><strong className="text-white">Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                  <li><strong className="text-white">Revocación:</strong> Retirar su consentimiento en cualquier momento</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Para ejercer estos derechos, contáctenos a través de los medios indicados al final de esta política.
                </p>
              </div>

              {/* Cookies */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Cookies y Tecnologías Similares</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Mantener su sesión activa y recordar sus preferencias</li>
                  <li>Analizar el uso de nuestros servicios para mejorarlos</li>
                  <li>Personalizar el contenido y la publicidad</li>
                  <li>Garantizar la seguridad de nuestras plataformas</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Puede configurar su navegador para rechazar cookies, aunque esto puede afectar
                  la funcionalidad de nuestros servicios.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Cambios a esta Política</h2>
                <p className="text-muted-foreground">
                  Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre
                  cambios significativos mediante un aviso en nuestro sitio web o por correo electrónico.
                  Le recomendamos revisar esta política regularmente para estar informado sobre cómo
                  protegemos su información.
                </p>
              </div>

              {/* Contact */}
              <div className="glass-card rounded-2xl p-8 border-blue-500/30">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  Contacto
                </h2>
                <p className="text-muted-foreground mb-4">
                  Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos,
                  puede contactarnos a través de:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-white">Corporacion Shomels SAC</strong></p>
                  <p>RUC: 20547900074</p>
                  <p>Correo electrónico: <a href="mailto:ventas@shomels.com" className="text-blue-400 hover:underline">ventas@shomels.com</a></p>
                  <p>Teléfono/WhatsApp: <a href="tel:+51927900819" className="text-blue-400 hover:underline">+51 927 900 819</a></p>
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
