import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  ExternalLink,
  Brain,
  Target,
  MessageSquare,
  Truck,
  Image as ImageIcon,
  Building,
  Package,
  Receipt,
  Users,
  BarChart3,
  Wallet,
  FileText,
  MousePointer,
  ShoppingCart,
  TrendingUp,
  Globe,
  Zap,
  Bot,
  MapPin,
  RefreshCw,
  FlaskConical,
  Shield,
  Map,
  Camera,
  Route,
  Search,
  Palette,
  PenTool,
  Building2,
  CheckCircle,
  QrCode,
  Bell,
  Wrench,
  BarChart2,
  History,
} from "lucide-react";
import { systems, getSystemBySlug } from "@/lib/systems";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Target,
  MessageSquare,
  Truck,
  Image: ImageIcon,
  Building,
  Package,
  Receipt,
  Users,
  BarChart3,
  Wallet,
  FileText,
  MousePointer,
  ShoppingCart,
  TrendingUp,
  Globe,
  Zap,
  Bot,
  MapPin,
  RefreshCw,
  FlaskConical,
  Shield,
  Map,
  Camera,
  Route,
  Search,
  Palette,
  PenTool,
  Building2,
  CheckCircle,
  QrCode,
  Bell,
  Wrench,
  BarChart2,
  History,
};

const colorClasses: Record<string, { bg: string; glow: string; text: string; border: string; gradient: string }> = {
  green: {
    bg: "bg-accent-green/10",
    glow: "glow-green",
    text: "text-accent-green",
    border: "border-accent-green/30",
    gradient: "from-accent-green to-accent-green/50",
  },
  blue: {
    bg: "bg-accent-blue/10",
    glow: "glow-blue",
    text: "text-accent-blue",
    border: "border-accent-blue/30",
    gradient: "from-accent-blue to-accent-blue/50",
  },
  purple: {
    bg: "bg-accent-purple/10",
    glow: "glow-purple",
    text: "text-accent-purple",
    border: "border-accent-purple/30",
    gradient: "from-accent-purple to-accent-purple/50",
  },
  amber: {
    bg: "bg-accent-amber/10",
    glow: "glow-amber",
    text: "text-accent-amber",
    border: "border-accent-amber/30",
    gradient: "from-accent-amber to-accent-amber/50",
  },
  cyan: {
    bg: "bg-accent-cyan/10",
    glow: "glow-cyan",
    text: "text-accent-cyan",
    border: "border-accent-cyan/30",
    gradient: "from-accent-cyan to-accent-cyan/50",
  },
  rose: {
    bg: "bg-accent-rose/10",
    glow: "glow-rose",
    text: "text-accent-rose",
    border: "border-accent-rose/30",
    gradient: "from-accent-rose to-accent-rose/50",
  },
};

type Params = Promise<{ system: string }>;

export async function generateStaticParams() {
  return systems.map((system) => ({
    system: system.id,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { system: systemSlug } = await params;
  const system = getSystemBySlug(systemSlug);

  if (!system) {
    return {
      title: "Sistema no encontrado - Shomels",
    };
  }

  return {
    title: `${system.name} - ${system.tagline} | Shomels`,
    description: system.longDescription,
  };
}

export default async function SystemPage({ params }: { params: Params }) {
  const { system: systemSlug } = await params;
  const system = getSystemBySlug(systemSlug);

  if (!system) {
    notFound();
  }

  const Icon = iconMap[system.icon];
  const colors = colorClasses[system.color];

  // Find adjacent systems for navigation
  const currentIndex = systems.findIndex((s) => s.id === system.id);
  const prevSystem = currentIndex > 0 ? systems[currentIndex - 1] : null;
  const nextSystem = currentIndex < systems.length - 1 ? systems[currentIndex + 1] : null;

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className={cn(
            "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l opacity-10",
            colors.gradient
          )}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className={colors.text}>{system.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Badge */}
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm",
                  colors.bg,
                  colors.text,
                  colors.border,
                  "border"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{system.tagline}</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {system.headline}
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground">
                {system.longDescription}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {system.stats.map((stat, i) => (
                  <div key={i}>
                    <div className={cn("text-3xl font-bold", colors.text)}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={system.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Acceder a {system.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link href="/contacto" className="btn-secondary">
                  Solicitar Demo
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className={cn(
                  "absolute inset-0 blur-3xl opacity-30",
                  colors.bg
                )}
              />
              <div
                className={cn(
                  "relative glass-card p-8 flex items-center justify-center min-h-[400px]",
                  colors.glow
                )}
              >
                {Icon && (
                  <Icon
                    className={cn("h-48 w-48 opacity-20", colors.text)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Benefits */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pain Points */}
            <div className="glass-card p-8 border-accent-rose/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <X className="h-8 w-8 text-accent-rose" />
                El problema que resuelve
              </h2>
              <ul className="space-y-4">
                {system.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-rose/20">
                      <X className="h-3 w-3 text-accent-rose" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className={cn("glass-card p-8", colors.border, "border")}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Check className={cn("h-8 w-8", colors.text)} />
                Lo que obtienes
              </h2>
              <ul className="space-y-4">
                {system.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                        colors.bg
                      )}
                    >
                      <Check className={cn("h-3 w-3", colors.text)} />
                    </div>
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Funcionalidades de{" "}
              <span className={cn("bg-clip-text text-transparent bg-gradient-to-r", colors.gradient)}>
                {system.name}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {system.features.map((feature, i) => {
              const FeatureIcon = iconMap[feature.icon] || Zap;
              return (
                <div
                  key={i}
                  className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl mb-4",
                      colors.bg
                    )}
                  >
                    <FeatureIcon className={cn("h-6 w-6", colors.text)} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processes */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Processes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Procesos Principales
              </h2>
              <div className="space-y-4">
                {system.mainProcesses.map((process, i) => (
                  <div key={i} className="glass-card p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                          colors.bg,
                          colors.text
                        )}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {process.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Processes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Funciones Adicionales
              </h2>
              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {system.secondaryProcesses.map((process, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={cn("h-5 w-5 flex-shrink-0", colors.text)} />
                      <span className="text-muted-foreground">{process}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Access Card */}
              <div className={cn("glass-card p-6 mt-6", colors.glow)}>
                <h3 className="font-semibold text-white mb-2">
                  Acceso a {system.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Plataforma disponible 24/7 en la nube.
                </p>
                <a
                  href={system.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium",
                    colors.text
                  )}
                >
                  {system.url.replace("https://", "")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {system.name} funciona mejor con el ecosistema completo
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cuando conectas {system.name} con los otros sistemas de Shomels, la
              automatización se multiplica. Menos trabajo manual, más resultados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/integraciones" className="btn-primary">
                Ver cómo se integra
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Hablar con ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between systems */}
      <section className="section pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            {prevSystem ? (
              <Link
                href={`/${prevSystem.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <div>
                  <div className="text-xs text-muted-foreground">Anterior</div>
                  <div className="font-medium">{prevSystem.name}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextSystem ? (
              <Link
                href={`/${nextSystem.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors text-right"
              >
                <div>
                  <div className="text-xs text-muted-foreground">Siguiente</div>
                  <div className="font-medium">{nextSystem.name}</div>
                </div>
                <ArrowRight className="h-5 w-5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
