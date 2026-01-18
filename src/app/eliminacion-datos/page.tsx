import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Trash2, Mail, Clock, CheckCircle, AlertCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eliminación de Datos | Shomels',
  description: 'Solicita la eliminación de tus datos personales de los servicios de Corporacion Shomels SAC.',
}

export default function DataDeletionPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/30 mb-6">
              <Trash2 className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Eliminación de Datos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respetamos tu derecho a la privacidad. Aquí puedes solicitar la eliminación de tus datos personales de nuestros sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">

              {/* Important Notice */}
              <div className="glass-card rounded-2xl p-8 mb-8 border-amber-500/30">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-amber-400">Aviso Importante</h2>
                    <p className="text-muted-foreground">
                      Si iniciaste sesión en nuestros servicios usando tu cuenta de Facebook, puedes solicitar
                      la eliminación de los datos que hemos recibido de Facebook siguiendo las instrucciones de esta página.
                      También puedes eliminar tu actividad en Shomels directamente desde la
                      <a href="https://www.facebook.com/settings?tab=applications" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        configuración de Facebook
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Request */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  Cómo Solicitar la Eliminación de Datos
                </h2>

                <p className="text-muted-foreground mb-6">
                  Para solicitar la eliminación de tus datos personales, sigue estos pasos:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Envía un correo electrónico</h3>
                      <p className="text-muted-foreground">
                        Envía un correo a <a href="mailto:ventas@shomels.com?subject=Solicitud%20de%20Eliminación%20de%20Datos" className="text-blue-400 hover:underline font-semibold">ventas@shomels.com</a> con
                        el asunto: <strong className="text-white">&quot;Solicitud de Eliminación de Datos&quot;</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Incluye la siguiente información</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Tu nombre completo</li>
                        <li>Correo electrónico asociado a tu cuenta</li>
                        <li>Número de documento de identidad (DNI/RUC)</li>
                        <li>Nombre de la empresa (si aplica)</li>
                        <li>Descripción de los datos que deseas eliminar</li>
                        <li>Si usaste Facebook Login: tu ID de Facebook o correo asociado</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Verificación de identidad</h3>
                      <p className="text-muted-foreground">
                        Por seguridad, verificaremos tu identidad antes de procesar la solicitud.
                        Podemos solicitar documentación adicional para confirmar que eres el titular de los datos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Confirmación</h3>
                      <p className="text-muted-foreground">
                        Recibirás una confirmación por correo electrónico una vez que tus datos hayan sido eliminados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-amber-400" />
                  Tiempo de Procesamiento
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span><strong className="text-white">Confirmación de recepción:</strong> Dentro de 48 horas hábiles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span><strong className="text-white">Verificación de identidad:</strong> 1-3 días hábiles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span><strong className="text-white">Procesamiento de eliminación:</strong> Hasta 30 días hábiles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span><strong className="text-white">Confirmación final:</strong> Por correo electrónico</span>
                  </li>
                </ul>
              </div>

              {/* What Gets Deleted */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Datos que se Eliminarán</h2>
                <p className="text-muted-foreground mb-4">
                  Al procesar tu solicitud, eliminaremos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Información de perfil y cuenta</li>
                  <li>Datos de contacto (nombre, email, teléfono)</li>
                  <li>Historial de actividad en nuestras plataformas</li>
                  <li>Datos obtenidos de Facebook Login (si aplica)</li>
                  <li>Preferencias y configuraciones de usuario</li>
                  <li>Comunicaciones almacenadas</li>
                </ul>
              </div>

              {/* Data Retention Notice */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-purple-400" />
                  Datos que Debemos Conservar
                </h2>
                <p className="text-muted-foreground mb-4">
                  Por obligaciones legales y fiscales, debemos conservar ciertos datos incluso después de una solicitud de eliminación:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-white">Comprobantes electrónicos:</strong> Facturas, boletas y notas emitidas ante SUNAT (mínimo 5 años según ley peruana)</li>
                  <li><strong className="text-white">Registros fiscales:</strong> Información necesaria para cumplir con obligaciones tributarias</li>
                  <li><strong className="text-white">Registros de transacciones:</strong> Para prevención de fraude y cumplimiento legal</li>
                  <li><strong className="text-white">Datos anonimizados:</strong> Información agregada que no te identifica personalmente</li>
                </ul>
              </div>

              {/* Alternative: WhatsApp */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Método Alternativo: WhatsApp</h2>
                <p className="text-muted-foreground mb-4">
                  También puedes enviar tu solicitud de eliminación de datos por WhatsApp:
                </p>
                <a
                  href="https://wa.me/51927900819?text=Hola,%20solicito%20la%20eliminación%20de%20mis%20datos%20personales.%20Mi%20nombre%20es:%20__%20Mi%20email%20es:%20__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar por WhatsApp
                </a>
              </div>

              {/* Contact */}
              <div className="glass-card rounded-2xl p-8 border-red-500/30">
                <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
                <p className="text-muted-foreground mb-4">
                  Para cualquier consulta sobre la eliminación de datos:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-white">Corporacion Shomels SAC</strong></p>
                  <p>RUC: 20547900074</p>
                  <p>Correo: <a href="mailto:ventas@shomels.com" className="text-red-400 hover:underline">ventas@shomels.com</a></p>
                  <p>WhatsApp: <a href="https://wa.me/51927900819" className="text-red-400 hover:underline">+51 927 900 819</a></p>
                  <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM (hora de Lima)</p>
                </div>
              </div>

              {/* Facebook Users */}
              <div className="mt-8 p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Para usuarios de Facebook Login</h3>
                <p className="text-muted-foreground text-sm">
                  Si conectaste tu cuenta de Facebook con nuestros servicios, también puedes revocar el acceso
                  directamente desde Facebook en Configuración → Aplicaciones y sitios web → Shomels → Eliminar.
                  Esto eliminará automáticamente los datos que Facebook compartió con nosotros.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
