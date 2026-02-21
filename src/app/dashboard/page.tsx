import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              UE
            </div>
            <h1 className="text-xl font-semibold tracking-tight">UrbanEye Dashboard</h1>
          </div>
          <Badge variant="outline" className="gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Live
          </Badge>
        </div>
      </header>

      {/* Stats Grid */}
      <main className="flex-1 p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Violations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">—</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting data</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">—</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting data</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Critical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">—</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting data</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Compliance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">—</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting data</p>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder content area */}
        <div className="mt-8 flex items-center justify-center rounded-lg border border-dashed p-16">
          <div className="text-center">
            <h2 className="text-lg font-semibold">Dashboard Under Development</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              This is where real-time violation data, maps, and vehicle tracking will appear.
              Connect the YOLO detection backend to start monitoring.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
