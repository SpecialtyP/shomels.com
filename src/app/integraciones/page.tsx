import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Zap,
  Check,
  Brain,
  Target,
  MessageSquare,
  Truck,
  Image as ImageIcon,
  Building,
} from "lucide-react";
import { systems, integrationFlowSteps } from "@/lib/systems";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integraciones - El Flujo de Poder | Shomels",
  description:
    "Descubre cómo los 6 sistemas de Shomels trabajan juntos para automatizar tu negocio de punta a punta.",
};

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Target,
  MessageSquare,
  Truck,
  Image: ImageIcon,
  Building,
};

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  green: {
    bg: "bg-accent-green/10",
    text: "text-accent-green",
    border: "border-accent-green/30",
    glow: "glow-green",
  },
  blue: {
    bg: "bg-accent-blue/10",
    text: "text-accent-blue",
    border: "border-accent-blue/30",
    glow: "glow-blue",
  },
  purple: {
    bg: "bg-accent-purple/10",
    text: "text-accent-purple",
    border: "border-accent-purple/30",
    glow: "glow-purple",
  },
  amber: {
    bg: "bg-accent-amber/10",
    text: "text-accent-amber",
    border: "border-accent-amber/30",
    glow: "glow-amber",
  },
  cyan: {
    bg: "bg-accent-cyan/10",
    text: "text-accent-cyan",
    border: "border-accent-cyan/30",
    glow: "glow-cyan",
  },
  rose: {
    bg: "bg-accent-rose/10",
    text: "text-accent-rose",
    border: "border-accent-rose/30",
    glow: "glow-rose",
  },
};

const integrations = [
  {
    from: "NanoCRM",
    to: "LlamadIA",
    description: "Lead capturado → Conversación WhatsApp inicia automáticamente",
    direction: "bidirectional",
  },
  {
    from: "LlamadIA",
    to: "Shomels Logistics",
    description: "Pedido COD confirmado → Asignación automática a motorizado",
    direction: "forward",
  },
  {
    from: "Shomels Logistics",
    to: "Nano ERP",
    description: "Entrega confirmada → Factura SUNAT + Stock actualizado",
    direction: "forward",
  },
  {
    from: "AssetsOrg",
    to: "LlamadIA",
    description: "Assets listos → Catálogo disponible para agentes WhatsApp",
    direction: "forward",
  },
  {
    from: "Nano ERP",
    to: "NanoCRM",
    description: "Venta registrada → Atribución de conversión completa",
    direction: "bidirectional",
  },
  {
    from: "EdificioApp",
    to: "LlamadIA",
    description: "Recibo generado → Notificación WhatsApp automática",
    direction: "forward",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-accent-blue">Integraciones</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm bg-accent-blue/10 text-accent-blue border border-accent-blue/30 mb-6">
              <Workflow className="h-4 w-4" />
              <span>El Flujo de Poder</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              6 sistemas.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-cyan">
                Una sola inteligencia.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Cuando María hace click en tu anuncio a las 11pm, no necesitas hacer
              nada. El ecosistema se activa: captura el lead, responde en WhatsApp,
              confirma el pedido, asigna al motorizado, registra el pago y emite la
              factura. Tú duermes. Tu negocio trabaja.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Flow Timeline */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              La historia de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-green">
                María
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un pedido real, de punta a punta, sin que toques un botón
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-green via-accent-amber to-accent-blue md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {integrationFlowSteps.map((step, i) => {
                const system = systems.find((s) => s.id === step.system);
                const colors = system ? colorClasses[system.color] : colorClasses.blue;
                const Icon = system ? iconMap[system.icon] : Zap;
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={step.step}
                    className={cn(
                      "relative flex items-center gap-8",
                      "md:justify-center"
                    )}
                  >
                    {/* Timeline dot */}
                    <div
                      className={cn(
                        "absolute left-8 md:left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full z-10",
                        colors.bg,
                        colors.border,
                        "border-2"
                      )}
                    >
                      {Icon && <Icon className={cn("h-7 w-7", colors.text)} />}
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "ml-24 md:ml-0 md:w-5/12",
                        isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                      )}
                    >
                      <div
                        className={cn(
                          "glass-card p-6",
                          colors.glow
                        )}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={cn(
                              "text-xs font-mono px-2 py-1 rounded",
                              colors.bg,
                              colors.text
                            )}
                          >
                            {step.time}
                          </span>
                          {system && (
                            <Link
                              href={`/${system.id}`}
                              className={cn(
                                "text-xs font-medium hover:underline",
                                colors.text
                              )}
                            >
                              {system.name}
                            </Link>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white mb-2">{step.description}</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {step.detail}
                        </p>
                        <div
                          className={cn(
                            "text-sm font-medium",
                            colors.text
                          )}
                        >
                          {step.result}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Matrix */}
      <section className="section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Conexiones{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-rose">
                Automáticas
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada sistema habla con los demás. Sin APIs manuales, sin exports,
              sin copiar y pegar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-white">
                    {integration.from}
                  </span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-accent-blue/50" />
                    <ArrowRight className="h-4 w-4 text-accent-blue" />
                    {integration.direction === "bidirectional" && (
                      <>
                        <ArrowRight className="h-4 w-4 text-accent-blue rotate-180" />
                        <div className="flex-1 h-px bg-gradient-to-l from-white/20 to-accent-blue/50" />
                      </>
                    )}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {integration.to}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Overview Grid */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              El{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-green to-accent-blue">
                Ecosistema
              </span>{" "}
              Completo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada pieza tiene su función. Juntas, son imparables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system) => {
              const Icon = iconMap[system.icon];
              const colors = colorClasses[system.color];

              return (
                <Link
                  key={system.id}
                  href={`/${system.id}`}
                  className={cn(
                    "glass-card p-6 group hover:scale-[1.02] transition-all duration-300",
                    colors.glow
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0",
                        colors.bg
                      )}
                    >
                      {Icon && <Icon className={cn("h-6 w-6", colors.text)} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white">
                          {system.name}
                        </h3>
                        <span
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full",
                            colors.bg,
                            colors.text
                          )}
                        >
                          {system.tagline}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {system.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {system.stats.slice(0, 2).map((stat, j) => (
                          <div
                            key={j}
                            className="text-xs text-muted-foreground"
                          >
                            <span className={cn("font-bold", colors.text)}>
                              {stat.value}
                            </span>{" "}
                            {stat.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "mt-4 pt-4 border-t flex items-center justify-between",
                      colors.border
                    )}
                  >
                    <span className="text-sm text-muted-foreground">
                      Ver detalles
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform group-hover:translate-x-1",
                        colors.text
                      )}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits of Integration */}
      <section className="section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Por qué todo{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-amber to-accent-rose">
                  conectado
                </span>
                ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Sistemas aislados = trabajo duplicado, errores de sincronización,
                oportunidades perdidas. El ecosistema Shomels elimina las brechas.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Cero trabajo manual entre sistemas",
                    description:
                      "El lead se convierte en pedido, el pedido en entrega, la entrega en factura. Sin copiar datos.",
                  },
                  {
                    title: "Una sola fuente de verdad",
                    description:
                      "El cliente es el mismo en CRM, WhatsApp, Logistics y ERP. Sin duplicados, sin confusiones.",
                  },
                  {
                    title: "Automatización real, no parcial",
                    description:
                      "De anuncio a factura SUNAT sin intervención humana. 24/7, incluso domingos a las 3am.",
                  },
                  {
                    title: "Escalabilidad sin límites",
                    description:
                      "De 10 a 10,000 pedidos diarios con el mismo equipo. El sistema crece, tu planilla no.",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-green/20 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-accent-green" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                El costo de NO integrar
              </h3>
              <div className="space-y-4">
                {[
                  { metric: "3.2 horas", description: "Tiempo promedio de respuesta en WhatsApp" },
                  { metric: "23%", description: "Leads que se pierden por respuesta tardía" },
                  { metric: "4 horas/día", description: "Trabajo manual sincronizando sistemas" },
                  { metric: "15%", description: "Errores de stock por datos desactualizados" },
                  { metric: "S/2,400/mes", description: "Costo de personal para tareas automatizables" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-muted-foreground">{item.description}</span>
                    <span className="text-accent-rose font-bold">{item.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 text-center glow-blue">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para conectar todo?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empieza con un sistema y ve creciendo. O implementa todo el
              ecosistema de una vez. Te acompañamos en cada paso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="btn-primary">
                Agenda una demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://erp.shomels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Acceder como cliente
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
