---
title: "SIEM Detection Lab: Emulating Adversary Behavior"
description: "Built a comprehensive SIEM lab using the Elastic Stack to detect and visualize real-world attack techniques from the MITRE ATT&CK framework."
pubDate: 2024-03-15
tags: ["SIEM", "Elastic Stack", "MITRE ATT&CK", "Detection Engineering"]
featured: true
github: "https://github.com/5mohamedismail/siem-lab"
---

## Project Overview

In this project, I designed and implemented a home laboratory environment focused on security monitoring and threat detection. The goal was to emulate adversary behavior and develop robust detection rules using the Elastic Stack (ELK). This lab serves as a testing ground for analyzing telemetry from both Windows and Linux endpoints.

### Lab Architecture

The environment consists of several virtual machines networked together:
- **Elasticsearch & Kibana:** The central hub for log ingestion, indexing, and visualization.
- **Windows Server (Domain Controller):** Monitored via Winlogbeat and Sysmon for Active Directory activity.
- **Kali Linux:** The attacker machine used to execute Atomic Red Team tests.
- **Ubuntu Server:** Monitored via Fleet Server and Elastic Agent.

### Detection Engineering Workflow

I utilized the MITRE ATT&CK framework to guide my detection strategy. Specifically, I focused on:
1. **T1059.001 - PowerShell Execution:** Developed alerts for encoded command execution and suspicious obfuscation patterns.
2. **T1003 - OS Credential Dumping:** Monitored LSASS process access using Sysmon Event ID 10.
3. **T1021.001 - Remote Desktop Protocol:** Tracked lateral movement attempts via RDP session logs.

### Key Results

Through this lab, I was able to:
- Successfully visualize the "attack lifecycle" within Kibana dashboards.
- Reduce false positives by 40% through iterative tuning of KQL (Kibana Query Language) rules.
- Automate report generation for weekly security posture assessments.

This project demonstrated my ability to architect security monitoring solutions and translate technical threat intelligence into actionable detection logic.
