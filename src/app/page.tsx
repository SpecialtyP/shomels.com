import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Target,
  MessageSquare,
  Truck,
  Image as ImageIcon,
  Building,
  ArrowRight,
  Check,
  Zap,
  Clock,
  TrendingUp,
} from "lucide-react";
import { systems, integrationFlowSteps } from "@/lib/systems";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Target,
  MessageSquare,
  Truck,
  Image: ImageIcon,
  Building,
};

const colorClasses: Record<string, { bg: string; glow: string; text: string; border: string }> = {
  green: {
    bg: "bg-accent-green/10",
    glow: "glow-green",
    text: "text-accent-green",
    border: "border-accent-green/30",
  },
  blue: {
    bg: "bg-accent-blue/10",
    glow: "glow-blue",
    text: "text-accent-blue",
    border: "border-accent-blue/30",
  },
  purple: {
    bg: "bg-accent-purple/10",
    glow: "glow-purple",
    text: "text-accent-purple",
    border: "border-accent-purple/30",
  },
  amber: {
    bg: "bg-accent-amber/10",
    glow: "glow-amber",
    text: "text-accent-amber",
    border: "border-accent-amber/30",
  },
  cyan: {
    bg: "bg-accent-cyan/10",
    glow: "glow-cyan",
    text: "text-accent-cyan",
    border: "border-accent-cyan/30",
  },
  rose: {
    bg: "bg-accent-rose/10",
    glow: "glow-rose",
    text: "text-accent-rose",
    border: "border-accent-rose/30",
  },
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 text-sm text-accent-green">
                <Zap className="h-4 w-4" />
                <span>Ecosistema empresarial integrado</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Tu cliente escribió a WhatsApp.{" "}
                <span className="gradient-text">3 horas después, nadie respondió.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                Shomels conecta tus ventas, entregas, cobros y facturación en un
                ecosistema que trabaja mientras duermes.
              </p>

              <ul className="space-y-3">
                {[
                  "Respuesta automática en WhatsApp en menos de 30 segundos",
                  "Pedidos que van directo al motorizado sin intervención",
                  "Facturación SUNAT automática al confirmar entrega",
                  "Un solo dashboard para ver todo tu negocio",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-accent-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/integraciones" className="btn-primary">
                  Ver el Ecosistema en Acción
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contacto" className="btn-secondary">
                  Agendar Demo
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 via-accent-blue/20 to-accent-purple/20 blur-3xl" />
                <Image
                  src="/images/hero-ecosystem.png"
                  alt="Shomels Ecosystem"
                  width={600}
                  height={600}
                  className="relative rounded-2xl animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Un ecosistema,{" "}
              <span className="gradient-text">seis superpoderes</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Cada sistema resuelve un problema específico. Juntos, automatizan
              tu negocio de punta a punta.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map((system, index) => {
              const Icon = iconMap[system.icon];
              const colors = colorClasses[system.color];
              const isLarge = index === 0 || index === 2;

              return (
                <Link
                  key={system.id}
                  href={`/${system.id}`}
                  className={cn(
                    "glass-card group p-6 transition-all duration-300 hover:scale-[1.02]",
                    isLarge && "lg:col-span-2",
                    colors.glow
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        colors.bg
                      )}
                    >
                      {Icon && <Icon className={cn("h-6 w-6", colors.text)} />}
                    </div>
                    <span
                      className={cn(
                        "text-xs font-medium px-2 py-1 rounded-full",
                        colors.bg,
                        colors.text
                      )}
                    >
                      {system.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-green transition-colors">
                    {system.name}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {system.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {system.stats.slice(0, 2).map((stat, i) => (
                      <div key={i}>
                        <div className={cn("text-lg font-bold", colors.text)}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white transition-colors">
                    <span>Ver más</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Flow Section */}
      <section className="section bg-gradient-to-b from-transparent via-accent-green/5 to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Lo que antes requería{" "}
              <span className="gradient-text-green">4 personas y 17 tabs</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Mira cómo un pedido viaja desde &quot;Hola, quiero comprar&quot; hasta
              &quot;Factura enviada a SUNAT&quot; — sin que toques nada.
            </p>
          </div>

          {/* Flow Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-green to-accent-blue hidden md:block" />

            <div className="space-y-8">
              {integrationFlowSteps.map((step) => {
                const system = systems.find((s) => s.id === step.system);
                const colors = system ? colorClasses[system.color] : colorClasses.green;

                return (
                  <div
                    key={step.step}
                    className="relative flex gap-6 items-start"
                  >
                    {/* Step Number */}
                    <div
                      className={cn(
                        "relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border-2",
                        colors.bg,
                        colors.border
                      )}
                    >
                      <span className={cn("text-2xl font-bold", colors.text)}>
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="glass-card flex-1 p-6">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {step.time}
                        </span>
                        {system && (
                          <Link
                            href={`/${system.id}`}
                            className={cn(
                              "text-xs font-medium px-2 py-1 rounded-full transition-all hover:scale-105",
                              colors.bg,
                              colors.text,
                              "hover:ring-2 hover:ring-current/30"
                            )}
                          >
                            {system.name} →
                          </Link>
                        )}
                      </div>
                      <p className="text-white mb-2">{step.description}</p>
                      <p className="text-muted-foreground text-sm mb-3">
                        {step.detail}
                      </p>
                      <div className="flex items-center gap-2 text-accent-green text-sm font-medium">
                        <TrendingUp className="h-4 w-4" />
                        {step.result}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground mb-6">
              Multiplica esto por 100 pedidos al día.{" "}
              <span className="text-white">
                Ahora imagina hacerlo con Excel y WhatsApp Web.
              </span>
            </p>
            <Link href="/integraciones" className="btn-primary">
              Ver todas las integraciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              El día típico{" "}
              <span className="text-accent-rose">SIN Shomels</span> vs{" "}
              <span className="text-accent-green">CON Shomels</span>
            </h2>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Header */}
              <div className="p-4 bg-white/5 font-semibold text-center">Hora</div>
              <div className="p-4 bg-accent-rose/10 font-semibold text-center text-accent-rose">
                SIN Shomels
              </div>
              <div className="p-4 bg-accent-green/10 font-semibold text-center text-accent-green">
                CON Shomels
              </div>

              {/* Rows */}
              {[
                {
                  time: "8:00am",
                  without: "Abres WhatsApp Web. 47 mensajes sin leer. Pánico.",
                  with: <><Link href="/llamadia" className="text-accent-green hover:underline">LlamadIA</Link> ya respondió 43. Te muestra 4 que necesitan humano.</>,
                  system: "llamadia"
                },
                {
                  time: "9:30am",
                  without: "Buscas la foto del producto en 6 carpetas.",
                  with: <><Link href="/assetsorg" className="text-accent-purple hover:underline">AssetsOrg</Link>: &apos;producto azul&apos; → resultado en 0.3 segundos.</>,
                  system: "assetsorg"
                },
                {
                  time: "11:00am",
                  without: "'¿Hay stock?' Llamas al almacén. No contestan.",
                  with: <><Link href="/nano-erp" className="text-accent-blue hover:underline">Nano ERP</Link>: Stock en tiempo real. 23 unidades.</>,
                  system: "nano-erp"
                },
                {
                  time: "2:00pm",
                  without: "Motorizado dice que entregó. Cliente dice que no.",
                  with: <><Link href="/logistics" className="text-accent-amber hover:underline">Logistics</Link>: Foto de entrega + GPS + hora exacta. Caso cerrado.</>,
                  system: "logistics"
                },
                {
                  time: "5:00pm",
                  without: "Cuadrar caja del COD. Faltan S/50. No sabes de dónde.",
                  with: <><Link href="/logistics" className="text-accent-amber hover:underline">Logistics</Link>: Cuadre automático. Cada sol tiene trazabilidad.</>,
                  system: "logistics"
                },
                {
                  time: "8:00pm",
                  without: "Hacer facturas del día. Una por una. En SUNAT.",
                  with: <><Link href="/nano-erp" className="text-accent-blue hover:underline">Nano ERP</Link>: Ya están emitidas. Todas. Automáticamente.</>,
                  system: "nano-erp"
                },
              ].map((row, i) => (
                <div key={`row-${i}`} className="contents">
                  <div className="p-4 text-center font-medium">
                    {row.time}
                  </div>
                  <div className="p-4 text-muted-foreground">
                    {row.without}
                  </div>
                  <div className="p-4 text-white">
                    {row.with}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">
                  La tecnología que usas{" "}
                  <span className="gradient-text-blue">importa</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  No somos una startup con servidores en el sótano. Corremos sobre
                  la misma infraestructura que Google.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Google Cloud Run", desc: "Escala automáticamente" },
                    { name: "PostgreSQL + Redis", desc: "Data segura y rápida" },
                    { name: "SUNAT UBL 2.1", desc: "Facturación real, no PDF" },
                    { name: "Cloudflare", desc: "Velocidad en todo Perú" },
                    { name: "Firebase Auth", desc: "Login seguro" },
                    { name: "Claude + Gemini", desc: "IA que entiende contexto" },
                  ].map((tech) => (
                    <div key={tech.name} className="p-4 rounded-lg bg-white/5">
                      <div className="font-medium text-white">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {tech.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 blur-3xl" />
                <Image
                  src="/images/tech-infrastructure.png"
                  alt="Infraestructura Tecnológica"
                  width={500}
                  height={500}
                  className="relative rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            ¿Cuántas ventas perdiste esta semana porque{" "}
            <span className="gradient-text">nadie respondió a tiempo?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agenda una demo de 30 minutos. Te mostramos TU negocio corriendo en
            Shomels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-primary text-lg px-8 py-4">
              Agendar Demo Personalizada
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/51966271220?text=Hola,%20quiero%20una%20demo%20de%20Shomels"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Hablar por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            +120 empresas peruanas ya automatizaron sus operaciones con Shomels
          </p>
        </div>
      </section>
    </div>
  );
}
