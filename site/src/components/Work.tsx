"use client";

import { motion } from "framer-motion";

const protocols = [
  {
    title: "shared-memory-protocol",
    description:
      "An open protocol + reference implementation for multi-agent AI memory coordination. Agents share context across frameworks and runtimes without being coupled to each other.",
    interesting:
      "I kept running into the same wall: frameworks that work brilliantly in isolation but can't share state across runtimes. This started as a fix for that.",
    tech: "Python · Multi-Agent · MIT License",
    badge: "Open Protocol",
    link: "https://github.com/surpradhan/shared-memory-protocol",
  },
  {
    title: "agent-event-protocol",
    description:
      "An open observability protocol for AI agent systems - structured event capture, real-time session tracing, and multi-agent workflow visibility in a single self-hosted deployment.",
    interesting:
      "You can't debug what you can't observe. Built this because I needed it and nothing else existed.",
    tech: "JavaScript · Observability · MIT License",
    badge: "Open Protocol",
    link: "https://github.com/surpradhan/agent-event-protocol",
  },
];

const agents = [
  {
    title: "cartograph",
    description:
      "Autonomous deep research agent built on LangGraph StateGraph. Takes a question, researches it, decides when it has enough, and returns a synthesis - not a list of links.",
    interesting: "Hard-capping sources felt like cheating. The interesting problem is teaching it to know when it knows enough.",
    tech: "Python · LangGraph · FAISS",
    link: "https://surpradhan.github.io/cartograph/",
  },
  {
    title: "paper-scout",
    description:
      "An AI agent that searches arxiv, scores and re-ranks papers by relevance to you - surfacing the ones that actually matter, not the most-cited.",
    interesting: "Keyword search gives you popular. Re-ranking gives you relevant. Not the same thing.",
    tech: "Python · arxiv API · Re-ranking",
    link: "https://surpradhan.github.io/paper-scout/",
  },
  {
    title: "meridian",
    description:
      "Natural language business questions → intelligent database queries → plain English answers. Routes across domain-specific agents that build and execute safe queries.",
    interesting:
      "The hard part wasn't NL→SQL. It was the routing layer that knows which agent to trust with which question.",
    tech: "Python · LangChain · LangGraph · PostgreSQL",
    link: "https://surpradhan.github.io/meridian/",
  },
  {
    title: "customer-unification-agent",
    description:
      "Probabilistic record linkage across Shopify & Stripe - 100% precision, zero false positives. Identifies the same customer across platforms without shared IDs.",
    interesting: "The requirement was simple: never merge two customers who aren't the same person. That one constraint shapes every architectural decision.",
    tech: "Python · Probabilistic Matching",
    link: "https://surpradhan.github.io/customer-unification-agent/",
  },
  {
    title: "orionpulse-data-agent",
    description:
      "A sales analytics agent that combines deterministic data tooling with optional LLM orchestration - deterministic where accuracy matters, LLM where language does.",
    interesting: "Not everything needs an LLM. Knowing when not to use one is half the skill.",
    tech: "Python · LangGraph · Analytics",
    link: "https://surpradhan.github.io/orionpulse-data-agent/",
  },
  {
    title: "agentic-codegen",
    description:
      "Multi-agent code generation platform: Python → optimized C++ using specialized AI agents with parallel processing and comprehensive validation pipelines.",
    interesting: "Sequential validation is a bottleneck. Parallelizing it across specialized agents was the thing that actually moved output quality.",
    tech: "Python · Multi-Agent · C++ · Parallel",
    link: "https://github.com/surpradhan/agentic-codegen",
  },
  {
    title: "customer-support-email-agent",
    description:
      "LangGraph-powered customer support email agent that reads, classifies, and drafts contextual responses - with an auditable, interruptible state machine.",
    interesting: "Email agents fail silently. The state machine means you can see exactly where it is and pull the brake if needed.",
    tech: "LangGraph · Python · Email",
    link: "https://surpradhan.github.io/customer-support-email-agent/",
  },
  {
    title: "spendwise-ai",
    description:
      "A personal finance analyser that runs entirely on a local LLM stack. Drop in a bank export, get categorised spending and ML-powered insights - no data ever leaves your machine.",
    interesting: "Every architectural decision started from one question: what if the model never touches the internet? Built it local-first to see how far that constraint gets you.",
    tech: "Python · Local LLM · ML",
    link: "https://surpradhan.github.io/spendwise-ai/",
  },
  {
    title: "debate-arena",
    description:
      "Watch two AI personalities argue about any topic you choose - give them opposing positions and let them go. Powered by Gradio.",
    interesting: "Built to understand how LLMs construct arguments. Turns out it's also just fun.",
    tech: "Python · Gradio · Multi-Model",
    link: "https://github.com/surpradhan/debate-arena",
  },
];

const research = [
  {
    title: "rag-benchmark",
    description:
      "A reproducible benchmark comparing 11 RAG architectures on HotpotQA - same LLM, same embeddings, same eval set. The only variable is the architecture.",
    spec: "11 architectures · HotpotQA · Controlled eval",
    tech: "Python · RAG · Evaluation",
    link: "https://surpradhan.github.io/rag-benchmark/",
  },
  {
    title: "rec-bench",
    description:
      "Compare 8 recommendation algorithms under a single, fair evaluation protocol to understand what actually drives recommendation quality - not which dataset flatters which algorithm.",
    spec: "8 algorithms · Fair eval protocol · Single dataset",
    tech: "Jupyter · Recommendation · Evaluation",
    link: "https://surpradhan.github.io/rec-bench/",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 sm:px-12 lg:px-24 py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-xs font-mono text-accent/50 tracking-[0.2em] uppercase mb-20"
      >
        Work
      </motion.p>

      {/* ── TIER 1: PROTOCOLS ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-60px" }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs font-mono text-foreground/20 tracking-[0.2em] uppercase">
            Protocols
          </p>
          <div className="h-px flex-1 bg-border/40" />
          <p className="text-xs font-mono text-foreground/15 tracking-[0.1em]">
            Open infrastructure for the agent ecosystem
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {protocols.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-6 py-10 items-start"
            >
              <span className="text-xs font-mono text-accent/30 pt-1.5 group-hover:text-accent/60 transition-colors duration-300">
                0{i + 1}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground/90 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-accent/50 border border-accent/20 px-2 py-0.5 rounded-sm tracking-[0.1em]">
                    {project.badge}
                  </span>
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed mb-2 max-w-2xl">
                  {project.description}
                </p>
                <p className="text-sm text-foreground/30 italic leading-relaxed mb-5 max-w-2xl">
                  {project.interesting}
                </p>
                <p className="text-xs font-mono text-foreground/25 tracking-wide">
                  {project.tech}
                </p>
              </div>
              <div className="pt-1.5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-foreground/25 hover:text-accent transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── TIER 2: AGENTS & TOOLS ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-60px" }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs font-mono text-foreground/20 tracking-[0.2em] uppercase">
            Agents & Tools
          </p>
          <div className="h-px flex-1 bg-border/40" />
          <p className="text-xs font-mono text-foreground/15 tracking-[0.1em]">
            9 projects
          </p>
        </div>

        <div className="divide-y divide-border/40">
          {agents.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-6 py-7 items-start"
            >
              <span className="text-xs font-mono text-foreground/15 pt-1 group-hover:text-accent/40 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground/80 group-hover:text-accent transition-colors duration-300 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/40 leading-relaxed mb-1 max-w-2xl">
                  {project.description}
                </p>
                <p className="text-xs text-foreground/25 italic leading-relaxed mb-3 max-w-2xl">
                  {project.interesting}
                </p>
                <p className="text-xs font-mono text-foreground/20 tracking-wide">
                  {project.tech}
                </p>
              </div>
              <div className="pt-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-foreground/20 hover:text-accent transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── TIER 3: RESEARCH ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs font-mono text-foreground/20 tracking-[0.2em] uppercase">
            Research
          </p>
          <div className="h-px flex-1 bg-border/40" />
          <p className="text-xs font-mono text-foreground/15 tracking-[0.1em]">
            Benchmarks & evaluations
          </p>
        </div>

        <div className="divide-y divide-border/40">
          {research.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-6 py-8 items-start"
            >
              <span className="text-xs font-mono text-foreground/15 pt-1 group-hover:text-accent/40 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground/80 group-hover:text-accent transition-colors duration-300 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/40 leading-relaxed mb-3 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-accent/40 border border-accent/15 px-2.5 py-1 rounded-sm tracking-[0.08em]">
                    {project.spec}
                  </span>
                </div>
                <p className="text-xs font-mono text-foreground/20 tracking-wide">
                  {project.tech}
                </p>
              </div>
              <div className="pt-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-foreground/20 hover:text-accent transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
