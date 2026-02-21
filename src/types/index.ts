// UrbanEye Core Types

export interface Fleet {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vehicle {
  id: string;
  fleetId: string;
  registrationNumber: string;
  make?: string;
  model?: string;
  driverName?: string;
  status: "active" | "inactive" | "maintenance";
  createdAt: Date;
  updatedAt: Date;
}

export interface RoadSign {
  id: string;
  name: string;
  category: "speed_limit" | "stop" | "yield" | "no_entry" | "warning" | "regulatory" | "informational";
  description?: string;
  iconUrl?: string;
}

export interface Violation {
  id: string;
  vehicleId: string;
  fleetId: string;
  roadSign: RoadSign;
  timestamp: Date;
  latitude: number;
  longitude: number;
  confidence: number; // YOLO detection confidence (0–1)
  frameUrl?: string;  // URL to the captured frame
  severity: "low" | "medium" | "high" | "critical";
  acknowledged: boolean;
}

export interface DashboardStats {
  totalViolations: number;
  activeVehicles: number;
  criticalAlerts: number;
  complianceRate: number; // percentage (0–100)
}
