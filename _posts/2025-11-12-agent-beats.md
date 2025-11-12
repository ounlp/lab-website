---
title: AgentBeats SDK, AgentX–AgentBeats Competition, and OUNLP Project
image: images/agentbeats-banner.jpeg
author: arman-radmanesh
tags: agentic-ai, llm-agents, agentbeats, design2code
---

# AgentBeats SDK, Agentic AI MOOC, and OUNLP Work on Multi-Agent Evaluation

This post highlights our participation in the **AgentX–AgentBeats Competition** and the **Berkeley Agentic AI MOOC**, both of which focus on building reliable, verifiable multi-agent systems. The OUNLP lab is contributing by developing agentic evaluation pipelines grounded in real-world tasks and reproducible verifiers.

## AgentBeats: A Standardized Platform for Agent Evaluation

The **AgentBeats SDK**, developed by Sierra, provides a unified framework for testing and evaluating multi-agent systems. It introduces structured agent roles and deterministic verifiers that allow researchers to run reproducible experiments over complex tasks.

AgentBeats uses two core agent roles:

- **Green Agent (Evaluator & Host):**
  Loads tasks, configures environments, executes verification logic, and reports evaluation metrics.

- **White Agent (Participant):**
  Receives the task and performs the required operations—producing code, solving problems, or interacting with tools.

This design mirrors real-world engineering workflows where one component generates artifacts and another independently verifies their correctness.

## Insights from the Berkeley Agentic AI MOOC

Across the MOOC, invited speakers from OpenAI, DeepMind, Microsoft, Berkeley RDI, and Sierra emphasized principles required for dependable agentic systems:

- **τ²-Bench-style dual-control testing**, enabling stable, reproducible evaluations.
- **Verifier-driven correctness**, where outputs are tested via DOM comparison, unit tests, or environment states.
- **Dataset curation for benchmark reliability**, as demonstrated by SWE-bench Verified.
- Ensuring **task separability and diversity**, so evaluations measure meaningful generalization.

These lessons directly inform how our lab approaches agent design and benchmarking.

## OUNLP Project: Agentifying the Design2Code Pipeline

Our lab is building a **green-agent-powered evaluation system** for the **Design2Code** framework—a visual-to-code pipeline that translates webpage images or sketches into responsive HTML/CSS.

Our agentic integration includes:

- A **green agent** that orchestrates task loading, environment setup, and verification.
- Treating each Design2Code translation as an **AgentBeats episode** for consistent benchmarking.
- Verification logic that checks:
  - layout and structural fidelity
  - HTML/CSS validity
  - visual similarity to ground-truth screenshots

- A **white agent** capable of multi-turn reasoning, enabling clarifying questions before producing final code.

This transforms Design2Code from a generative model into a **fully verifiable agentic task**, suitable for research, benchmarking, and competition submissions.

## Looking Forward

As we continue through the MOOC and competition:

- The green-agent evaluator will be completed with full orchestration and metric reporting.
- Multi-turn and tool-assisted workflows will be added for the white agent.
- We plan to explore new agent roles and coordination patterns emerging in the AgentBeats ecosystem.
- Additional task contributions will be prepared for the broader community.

Agentic AI is rapidly evolving from single-shot prompting toward dependable, autonomous systems. Platforms like AgentBeats give us a testbed to study, measure, and improve these emerging capabilities—and OUNLP is excited to be part of this development.