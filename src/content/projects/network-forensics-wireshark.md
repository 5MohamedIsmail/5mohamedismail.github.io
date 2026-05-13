---
title: "Network Forensics: Analyzing Advanced Persistent Threats"
description: "A deep-dive investigation into a simulated network breach, utilizing Wireshark and Zeek to reconstruct the attacker's actions."
pubDate: 2024-01-10
tags: ["Forensics", "Wireshark", "Zeek", "Incident Response"]
featured: true
---

## Project Overview

In this forensics challenge, I was tasked with investigating a series of packet captures (PCAPs) from a network suspected of being compromised by an Advanced Persistent Threat (APT) group. The objective was to determine the initial infection vector, the extent of lateral movement, and the data exfiltration method used.

### Investigation Methodology

I followed a structured forensic process:
1. **Traffic Profiling:** Used `Zeek` to generate connection logs and identify unusual traffic patterns, such as high-volume transfers to unknown external IPs.
2. **Protocol Analysis:** Utilized `Wireshark` to perform deep packet inspection (DPI) on suspicious streams. I focused on non-standard ports and encrypted tunnels.
3. **Payload Extraction:** Recovered several malicious artifacts, including a second-stage downloader hidden within an seemingly benign image file (steganography).

### Key Findings

The investigation revealed a sophisticated multi-stage attack:
- **Initial Access:** Accomplished via a spear-phishing email containing a macro-enabled Excel document.
- **C2 Communication:** The malware utilized DNS tunneling (dnscat2) to bypass traditional firewall rules.
- **Data Exfiltration:** Sensitive internal documents were compressed into a password-protected ZIP file and uploaded to a cloud storage provider via HTTPS.

### Conclusion and Recommendations

The case study concluded with a comprehensive incident report detailing:
- A complete timeline of attacker activity.
- Indicators of Compromise (IoCs) to be blacklisted.
- Strategic recommendations for hardening the network, including the implementation of DNS filtering and micro-segmentation.

This project showcased my technical expertise in network traffic analysis and my ability to communicate complex forensic findings to both technical and non-technical stakeholders.
