import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  MapPin,
  Bell,
  BarChart3,
  Shield,
  Truck,
  Construction,
  ArrowRight,
  Github,
  Code2,
  Palette,
  Cpu,
  Wifi,
  Layers,
  Braces,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "YOLO-Powered Detection",
    description:
      "Real-time road sign recognition using state-of-the-art YOLO object detection models for accurate violation identification.",
    status: "In Development",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description:
      "Track fleet vehicles on an interactive map with live location updates, route history, and geofencing capabilities.",
    status: "Planned",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Get notified immediately when a vehicle commits a road sign violation. Configure severity-based alert rules per fleet.",
    status: "Planned",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Comprehensive dashboards with violation trends, driver scorecards, fleet compliance rates, and exportable reports.",
    status: "Planned",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description:
      "Monitor fleet-wide compliance scores, flag repeat offenders, and generate audit-ready documentation.",
    status: "Planned",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Organise vehicles by fleet, assign drivers, manage maintenance schedules, and track vehicle health status.",
    status: "Planned",
  },
];

const techStack = [
  {
    icon: Layers,
    name: "Next.js",
    description: "React framework with App Router & Turbopack",
    category: "Framework",
  },
  {
    icon: Braces,
    name: "TypeScript",
    description: "Type-safe development across the codebase",
    category: "Language",
  },
  {
    icon: Palette,
    name: "Tailwind CSS",
    description: "Utility-first CSS for rapid UI development",
    category: "Styling",
  },
  {
    icon: Code2,
    name: "shadcn/ui",
    description: "Beautifully designed, accessible components",
    category: "Components",
  },
  {
    icon: Cpu,
    name: "YOLO v8",
    description: "State-of-the-art object detection model",
    category: "AI / ML",
  },
  {
    icon: Wifi,
    name: "WebSockets",
    description: "Real-time bidirectional communication",
    category: "Real-time",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* ───── Background glow effects ───── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
        <div className="absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-chart-1/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-chart-2/[0.03] blur-[100px]" />
      </div>

      {/* ───── Nav ───── */}
      <nav className="relative z-10 border-b border-border/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              UE
            </div>
            <span className="text-lg font-semibold tracking-tight">
              UrbanEye
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="gap-2 border-yellow-500/30 text-yellow-500"
            >
              <Construction className="h-3.5 w-3.5" />
              Under Development
            </Badge>
          </div>
        </div>
      </nav>

      {/* ───── Hero ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
        <Badge
          variant="secondary"
          className="mb-6 gap-2 px-4 py-1.5 text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Building in Public
        </Badge>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Smarter Fleet Monitoring{" "}
          <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          UrbanEye uses{" "}
          <span className="font-medium text-foreground">
            YOLO-based road sign recognition
          </span>{" "}
          to detect and report traffic sign violations in real time — helping
          fleet operators improve safety, reduce fines, and maintain compliance.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" disabled className="gap-2">
            <ArrowRight className="h-4 w-4" />
            Dashboard Coming Soon
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Yuvaraaj17/urbaneye-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl opacity-50" />

      {/* ───── How It Works ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From Camera to Dashboard
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A seamless pipeline that detects violations and surfaces them to
            fleet operators in real time.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Detect",
              desc: "On-board cameras capture road signs. YOLO models identify signs and classify violations instantly.",
            },
            {
              step: "02",
              title: "Process",
              desc: "Violation events — including GPS coordinates, timestamps, and confidence scores — are streamed to the cloud.",
            },
            {
              step: "03",
              title: "Visualise",
              desc: "Fleet operators view violations on a real-time dashboard with maps, alerts, analytics, and compliance reports.",
            },
          ].map((item) => (
            <Card
              key={item.step}
              className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <span className="text-5xl font-black text-muted-foreground/10">
                  {item.step}
                </span>
                <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ───── Features ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What to Expect
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Everything you need to monitor, analyse, and improve your
            fleet&apos;s road sign compliance.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-border hover:bg-card/80"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <feature.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Badge
                    variant={
                      feature.status === "In Development"
                        ? "default"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl opacity-50" />

      {/* ───── Tech Stack ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built With Modern Tools
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A carefully chosen stack for performance, developer experience, and
            real-time capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <Card
              key={tech.name}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-border hover:bg-card/80"
            >
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10">
                  <tech.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">{tech.name}</h3>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {tech.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="relative z-10 border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground text-[10px] font-bold">
              UE
            </div>
            <span>UrbanEye © {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground/60">
            Fleet monitoring • Violation tracking • Real-time alerts
          </p>
        </div>
      </footer>
    </div>
  );
}
