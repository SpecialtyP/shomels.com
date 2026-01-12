"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { systems } from "@/lib/systems";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Respuesta en menos de 2 horas",
    value: "+51 999 888 777",
    href: "https://wa.me/51999888777",
    color: "green",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Para consultas detalladas",
    value: "hola@shomels.com",
    href: "mailto:hola@shomels.com",
    color: "blue",
  },
  {
    icon: Phone,
    title: "Llamada",
    description: "Lunes a Viernes, 9am-6pm",
    value: "+51 (01) 555-0123",
    href: "tel:+5101555123",
    color: "cyan",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  green: { bg: "bg-accent-green/10", text: "text-accent-green" },
  blue: { bg: "bg-accent-blue/10", text: "text-accent-blue" },
  cyan: { bg: "bg-accent-cyan/10", text: "text-accent-cyan" },
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    systems: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSystemToggle = (systemId: string) => {
    setFormState((prev) => ({
      ...prev,
      systems: prev.systems.includes(systemId)
        ? prev.systems.filter((s) => s !== systemId)
        : [...prev.systems, systemId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-2xl px-4 py-24 text-center">
          <div className="glass-card p-12 glow-green">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-green/20 mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent-green" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Mensaje recibido
            </h1>
            <p className="text-muted-foreground mb-8">
              Gracias por tu interés en Shomels. Un especialista te contactará
              en las próximas 24 horas para agendar una demo personalizada.
            </p>
            <Link href="/" className="btn-primary">
              Volver al inicio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-green/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-accent-green">Contacto</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Hablemos de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-green to-accent-cyan">
                tu negocio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Te mostramos cómo Shomels puede automatizar tus procesos. Sin
              compromiso, sin presión. Solo una conversación honesta sobre lo
              que necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const colors = colorClasses[method.color];

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0",
                        colors.bg
                      )}
                    >
                      <Icon className={cn("h-6 w-6", colors.text)} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <p className={cn("font-medium", colors.text)}>
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Solicitar Demo
              </h2>
              <p className="text-muted-foreground mb-8">
                Cuéntanos sobre tu negocio y te contactamos para una demo
                personalizada.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-muted-foreground focus:border-accent-green/50 focus:outline-none focus:ring-1 focus:ring-accent-green/50 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-muted-foreground focus:border-accent-green/50 focus:outline-none focus:ring-1 focus:ring-accent-green/50 transition-colors"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-muted-foreground focus:border-accent-green/50 focus:outline-none focus:ring-1 focus:ring-accent-green/50 transition-colors"
                      placeholder="+51 999 888 777"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, company: e.target.value }))
                      }
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-muted-foreground focus:border-accent-green/50 focus:outline-none focus:ring-1 focus:ring-accent-green/50 transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Tamaño del equipo
                  </label>
                  <select
                    value={formState.employees}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, employees: e.target.value }))
                    }
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-accent-green/50 focus:outline-none focus:ring-1 focus:ring-accent-green/50 transition-colors"
                  >
                    <option value="" className="bg-black">Selecciona una opción</option>
                    <option value="1-5" className="bg-black">1-5 personas</option>
                    <option value="6-20" className="bg-black">6-20 personas</option>
                    <option value="21-50" className="bg-black">21-50 personas</option>
                    <option value="51-200" className="bg-black">51-200 personas</option>
                    <option value="200+" className="bg-black">Más de 200 personas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    ¿Qué sistemas te interesan?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {systems.map((system) => (
                      <button
                        key={system.id}
                        type="button"
                        onClick={() => handleSystemToggle(system.id)}
                        className={cn(
                          "rounded-lg px-3 py-2 text-sm text-left transition-all",
                          formState.systems.includes(system.id)
                            ? "bg-accent-green/20 border-accent-green/50 text-accent-green border"
                            : "bg-white/5 border-white/10 text-muted-foreground border hover:border-white/20"
                        )}
                      >
                        {system.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Cuéntanos más sobre tu negocio
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-muted-foreground focus:border-accent-green/50 focus:outline-none focus:ring-1 focus:ring-accent-green/50 transition-colors resize-none"
                    placeholder="¿Cuáles son tus principales desafíos? ¿Qué procesos te gustaría automatizar?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary w-full justify-center",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Demo
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Office Info */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Oficina Principal
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white">Lima, Perú</p>
                      <p className="text-sm text-muted-foreground">
                        San Isidro, Av. Javier Prado Este 123
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white">Horario de atención</p>
                      <p className="text-sm text-muted-foreground">
                        Lunes a Viernes, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Por qué Shomels
                </h3>
                <div className="space-y-4">
                  {[
                    { value: "6", label: "Sistemas integrados" },
                    { value: "100+", label: "Empresas usando Shomels" },
                    { value: "24/7", label: "Disponibilidad del sistema" },
                    { value: "< 2h", label: "Tiempo de respuesta soporte" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                    >
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="text-accent-green font-bold">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="glass-card p-6 glow-blue">
                <h3 className="text-lg font-semibold text-white mb-2">
                  ¿Tienes preguntas?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Consulta las preguntas frecuentes o escríbenos directamente
                  por WhatsApp para una respuesta inmediata.
                </p>
                <a
                  href="https://wa.me/51999888777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-green text-sm font-medium hover:underline"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
