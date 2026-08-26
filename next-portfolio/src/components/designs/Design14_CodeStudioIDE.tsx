"use client";

import React, { useState } from "react";
import { FileCode, Play, Terminal, Download, CheckCircle, Folder, File, ArrowRight, ChevronRight, Check, User, GitCommit } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design14_CodeStudioIDE: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeFile, setActiveFile] = useState<"latex" | "booking" | "budget" | "bio">("bio");
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testOutput, setTestOutput] = useState<string[]>([
    "PASS  tests/Feature/LatexInvoiceCompilerTest.php",
    "  ✓ compiles 1,000 pages asynchronously in <2.5s (1240ms)",
    "PASS  tests/Unit/RoomBookingCollisionMatrixTest.php",
    "  ✓ handles 300+ rooms across 80+ levels with zero collisions (82ms)",
    "PASS  tests/Feature/BudgetTrackerAggregationTest.php",
    "  ✓ single-pass SQL grouped aggregation sub-100ms (45ms)",
    "",
    "Test Suites: 3 passed, 3 total",
    "Tests:       18 passed, 18 total",
    "Snapshots:   0 total",
    "Time:        1.367 s",
    "Ran all test suites successfully. Code coverage: 94.2%",
  ]);

  const runLiveTestSuite = () => {
    setIsRunningTests(true);
    setTimeout(() => {
      setIsRunningTests(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono selection:bg-[#264f78] selection:text-white relative overflow-x-hidden">
      <CustomCursor variant="default" color="#007acc" />

      {/* VS Code Title Bar */}
      <header className="sticky top-0 z-40 bg-[#323233] border-b border-[#252526] px-4 py-2 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-slate-300 font-sans text-xs">
            Hafiz_Ruslan_Workspace &bull; Visual Studio Code [Design 14]
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={runLiveTestSuite}
            className="px-3 py-1 rounded bg-[#0e639c] hover:bg-[#1177bb] text-white text-xs flex items-center gap-1.5 font-bold transition-all shadow"
          >
            <Play size={12} fill="white" className={isRunningTests ? "animate-spin" : ""} />
            <span>{isRunningTests ? "Running Tests..." : "Run npm test"}</span>
          </button>

          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded bg-[#3c3c3c] hover:bg-[#505050] text-white text-xs flex items-center gap-1.5"
          >
            <Download size={12} /> Resume.pdf
          </a>
        </div>
      </header>

      {/* Main IDE Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-36px)]">
        {/* Left Explorer Sidebar with Developer Photo Profile Card */}
        <aside className="md:col-span-3 bg-[#252526] border-r border-[#1e1e1e] p-4 text-xs flex flex-col justify-between">
          <div>
            {/* Developer Avatar Profile Card in Sidebar */}
            <div className="p-3 rounded-xl bg-[#1e1e1e] border border-[#333333] mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#007acc]">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="overflow-hidden">
                <div className="text-white font-bold truncate">{PORTFOLIO_DATA.personal.name}</div>
                <div className="text-[11px] text-[#4ec9b0] truncate">Fullstack Architect</div>
                <div className="text-[10px] text-slate-400">UiTM 1st Class 3.53</div>
              </div>
            </div>

            <div className="text-[11px] font-bold text-[#bbbbbb] uppercase tracking-wider mb-3">
              EXPLORER: HAFIZ_PORTFOLIO
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1 text-slate-400 font-bold py-1">
                <ChevronRight size={14} />
                <Folder size={14} className="text-[#dcb67a]" />
                <span>src/core</span>
              </div>

              <div
                onClick={() => setActiveFile("bio")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded cursor-pointer transition-colors ${
                  activeFile === "bio" ? "bg-[#37373d] text-white font-bold" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                }`}
              >
                <File size={14} className="text-[#ce9178]" />
                <span>developer_profile.json</span>
              </div>

              <div
                onClick={() => setActiveFile("latex")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded cursor-pointer transition-colors ${
                  activeFile === "latex" ? "bg-[#37373d] text-white font-bold" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                }`}
              >
                <FileCode size={14} className="text-[#4ec9b0]" />
                <span>LatexWorker.php</span>
              </div>

              <div
                onClick={() => setActiveFile("booking")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded cursor-pointer transition-colors ${
                  activeFile === "booking" ? "bg-[#37373d] text-white font-bold" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                }`}
              >
                <FileCode size={14} className="text-[#569cd6]" />
                <span>RoomBookingMatrix.ts</span>
              </div>

              <div
                onClick={() => setActiveFile("budget")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded cursor-pointer transition-colors ${
                  activeFile === "budget" ? "bg-[#37373d] text-white font-bold" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                }`}
              >
                <FileCode size={14} className="text-[#41b883]" />
                <span>BudgetTracker.vue</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#333333] text-[11px] text-slate-400 space-y-1">
            <div className="text-white font-bold flex items-center gap-1"><GitCommit size={13} className="text-[#007acc]" /> git status: Clean</div>
            <div>&bull; 1,000+ pgs/s LaTeX worker</div>
            <div>&bull; 300+ rooms / 80+ levels</div>
          </div>
        </aside>

        {/* Center Editor & Code Pane */}
        <main className="md:col-span-9 flex flex-col bg-[#1e1e1e]">
          {/* Editor Tabs Bar */}
          <div className="flex bg-[#2d2d2d] border-b border-[#1e1e1e] overflow-x-auto text-xs">
            <button
              onClick={() => setActiveFile("bio")}
              className={`px-4 py-2 flex items-center gap-2 border-r border-[#1e1e1e] ${
                activeFile === "bio" ? "bg-[#1e1e1e] text-white font-bold border-t-2 border-t-[#007acc]" : "text-slate-400"
              }`}
            >
              <File size={14} className="text-[#ce9178]" />
              <span>developer_profile.json</span>
            </button>
            <button
              onClick={() => setActiveFile("latex")}
              className={`px-4 py-2 flex items-center gap-2 border-r border-[#1e1e1e] ${
                activeFile === "latex" ? "bg-[#1e1e1e] text-white font-bold border-t-2 border-t-[#007acc]" : "text-slate-400"
              }`}
            >
              <FileCode size={14} className="text-[#4ec9b0]" />
              <span>LatexWorker.php</span>
            </button>
            <button
              onClick={() => setActiveFile("booking")}
              className={`px-4 py-2 flex items-center gap-2 border-r border-[#1e1e1e] ${
                activeFile === "booking" ? "bg-[#1e1e1e] text-white font-bold border-t-2 border-t-[#007acc]" : "text-slate-400"
              }`}
            >
              <FileCode size={14} className="text-[#569cd6]" />
              <span>RoomBookingMatrix.ts</span>
            </button>
          </div>

          {/* Active Code Content */}
          <div className="p-6 overflow-x-auto text-xs leading-relaxed font-mono">
            {activeFile === "bio" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-[#252526] border border-[#333333] items-center">
                  <div className="w-24 h-28 rounded-lg overflow-hidden border border-[#007acc] shrink-0 bg-black">
                    <img
                      src={PORTFOLIO_DATA.personal.avatar}
                      alt={PORTFOLIO_DATA.personal.name}
                      className="w-full h-full object-cover object-[center_60%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white mb-0.5">{PORTFOLIO_DATA.personal.name}</h2>
                    <div className="text-[11px] text-[#007acc] font-bold mb-1.5">{PORTFOLIO_DATA.personal.title}</div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-2">{PORTFOLIO_DATA.personal.bio}</p>
                    <div className="text-[10px] text-[#4ec9b0] space-y-0.5">
                      <div>&bull; Academics: UiTM CS 1st Class Honours (CGPA: 3.53)</div>
                      <div>&bull; Location: Banting / KL, Malaysia</div>
                    </div>
                  </div>
                </div>

                <pre className="text-[#ce9178]">
{`{
  "engineer": "Muhammad Hafiz Ruslan",
  "title": "Laravel Fullstack Developer & Software Architect",
  "skills": ["PHP 8.2", "Laravel 10", "Vue 3", "React/Next.js", "LaTeX", "MySQL", "Redis", "Docker"],
  "stats": {
    "latex_speed": "1,000+ pages/second",
    "managed_rooms": "300+ rooms across 80+ levels",
    "honors": "UiTM 1st Class Honours (CGPA 3.53)"
  }
}
`}
                </pre>
              </div>
            )}

            {activeFile === "latex" && (
              <pre className="text-[#9cdcfe]">
{`<?php
namespace App\\Services\\Engines;

use Illuminate\\Support\\Facades\\Queue;
use App\\Jobs\\CompileLatexInvoiceBatchJob;

/**
 * High-Throughput Asynchronous LaTeX PDF Compiler Engine
 * Author: Muhammad Hafiz Ruslan (UiTM First-Class Honors CGPA: 3.53)
 * Performance: 1,000+ Invoice Pages Compiled in < 2.5 seconds
 */
class LatexWorkerService {
    public function dispatchBatchCompilation(array $invoiceIds): string {
        $jobId = uniqid('latex_batch_', true);
        
        // Asynchronous non-blocking Redis pipeline
        Queue::push(new CompileLatexInvoiceBatchJob($invoiceIds, [
            'engine'       => 'xelatex-headless-daemon',
            'memory_limit' => '0MB_leak_tolerance',
            'precision'    => 'vector_pixel_perfect',
            'target_speed' => '1000_pages_per_second'
        ]));

        return "Batch {$jobId} successfully dispatched to Redis high-velocity cluster.";
    }
}
`}
              </pre>
            )}

            {activeFile === "booking" && (
              <pre className="text-[#9cdcfe]">
{`export interface RoomSlot {
  level: number;       // 1 to 80 physical tower floors
  roomId: string;      // 300+ enterprise rooms
  startTime: number;
  endTime: number;
}

// Algorithmic Space Collision Avoidance Matrix
export function resolveRoomBookingCollision(slots: RoomSlot[]): boolean {
  // Optimistic concurrency locking across 300 concurrent facilities
  return slots.every((slot, idx) => {
    return !slots.slice(idx + 1).some(other => 
      slot.roomId === other.roomId && 
      slot.startTime < other.endTime && 
      slot.endTime > other.startTime
    );
  });
}
`}
              </pre>
            )}

            {activeFile === "budget" && (
              <pre className="text-[#41b883]">
{`<template>
  <div class="budget-intelligence-panel">
    <h3>Budget Tracker Pro: {{ user.name }}</h3>
    <!-- Sub-100ms SQL Grouped Aggregation -->
    <ApexChart :series="dailySpendHeatmap" :options="chartConfig" />
    <span class="badge">Live Pacing Alerts Enabled</span>
  </div>
</template>
`}
              </pre>
            )}
          </div>

          {/* Integrated Test Runner Terminal Pane */}
          <div className="mt-auto bg-[#181818] border-t border-[#252526] p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-2 border-b border-[#2a2d2e]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#4ec9b0]" />
                <span className="font-bold text-white">TERMINAL: NPM TEST EXECUTION</span>
              </div>
              <span className="text-[#4ec9b0] flex items-center gap-1 font-bold">
                <CheckCircle size={13} /> 100% SUITES PASSING
              </span>
            </div>

            <div className="text-[11px] leading-relaxed text-slate-300 font-mono space-y-0.5 max-h-36 overflow-y-auto">
              {testOutput.map((line, idx) => (
                <div key={idx} className={line.startsWith("PASS") ? "text-[#27c93f] font-bold" : ""}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Projects Showcase Modal Triggers */}
      <section id="projects" className="p-8 md:p-12 bg-[#181818] border-t border-[#252526]">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FileCode size={20} className="text-[#007acc]" /> Case Studies Index
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-5 rounded-lg bg-[#252526] border border-[#333333] hover:border-[#007acc] cursor-pointer transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] text-[#007acc] font-bold mb-1">{project.category}</div>
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">{project.highlight}</p>
              </div>
              <div className="text-xs text-[#4ec9b0] pt-2 border-t border-[#333333] flex justify-between items-center">
                <span>{project.metrics}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="cyber" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
