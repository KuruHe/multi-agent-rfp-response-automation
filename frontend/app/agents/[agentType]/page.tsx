"use client";

import { notFound } from "next/navigation";
import AgentDetailView from "@/components/agents/AgentDetailView";
import { mockAgentStatus } from "@/lib/mock-data";
import { agentConfigs } from "@/lib/agent-configs";

type AgentType = keyof typeof agentConfigs;

interface PageProps {
  params: Promise<{ agentType: string }>;
}

export default async function AgentPage({ params }: PageProps) {
  const { agentType } = await params;
  
  // Validate agent type
  if (!agentConfigs[agentType as AgentType]) {
    notFound();
  }

  const config = agentConfigs[agentType as AgentType];
  const agentData = mockAgentStatus[agentType as keyof typeof mockAgentStatus];

  if (!agentData) {
    notFound();
  }

  return (
    <AgentDetailView
      agentKey={agentType}
      agent={agentData}
      config={config}
    />
  );
}
