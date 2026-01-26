import { Cpu, Globe, Database, DollarSign, LucideIcon } from "lucide-react";

export interface AgentMetric {
  label: string;
  key: string;
  suffix?: string;
}

export interface AgentConfig {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
  metrics: AgentMetric[];
  capabilities: string[];
}

export const agentConfigs: Record<string, AgentConfig> = {
  orchestrator: {
    icon: Cpu,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Coordinates all agent activities and manages the RFP workflow end-to-end",
    metrics: [{ label: "Tasks Completed", key: "tasksCompleted" }],
    capabilities: [
      "Orchestrates multi-agent workflows",
      "Manages data flow between agents",
      "Handles error recovery and retries",
      "Generates final RFP response documents",
      "Coordinates parallel processing tasks",
    ],
  },
  sales: {
    icon: Globe,
    color: "text-info",
    bgColor: "bg-info/10",
    description: "Scans websites and portals to identify new RFPs and summarize requirements",
    metrics: [
      { label: "RFPs Scanned", key: "rfpsScanned" },
      { label: "RFPs Identified", key: "rfpsIdentified" },
    ],
    capabilities: [
      "Web scraping of tender portals",
      "RFP document extraction",
      "Submission deadline tracking",
      "Requirement summarization",
      "Automatic notification alerts",
    ],
  },
  technical: {
    icon: Database,
    color: "text-warning",
    bgColor: "bg-warning/10",
    description: "Matches RFP requirements with OEM product SKUs using RAG-based analysis",
    metrics: [
      { label: "Specs Matched", key: "specsMatched" },
      { label: "Avg Match Score", key: "avgMatchScore", suffix: "%" },
    ],
    capabilities: [
      "RAG-based specification matching",
      "OEM datasheet analysis",
      "Multi-SKU recommendation",
      "Spec match percentage calculation",
      "Technical comparison tables",
    ],
  },
  pricing: {
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10",
    description: "Calculates pricing based on product costs and testing requirements",
    metrics: [
      { label: "Quotes Generated", key: "quotesGenerated" },
      { label: "Avg Processing", key: "avgProcessingTime" },
    ],
    capabilities: [
      "Unit price calculation",
      "Testing cost estimation",
      "Bulk pricing logic",
      "Margin optimization",
      "Cost breakdown reports",
    ],
  },
};

export const agentKeys = Object.keys(agentConfigs) as Array<keyof typeof agentConfigs>;
