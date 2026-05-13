---
title: "OSINT Framework: Automated Threat Intelligence Gathering"
description: "Developed a Python-based OSINT tool to automate the collection of threat intelligence from open-source repositories and social media."
pubDate: 2024-05-20
tags: ["OSINT", "Python", "Threat Intel", "Automation"]
featured: true
---

## Project Overview

Modern threat intelligence requires the ability to quickly pivot across disparate data sources. This project involved building a custom Python framework that automates the collection and correlation of Open Source Intelligence (OSINT). By integrating multiple APIs, the tool provides a unified view of potential indicators of compromise (IoCs).

### Integrated Data Sources

The framework fetches data from several high-repute sources:
- **VirusTotal:** For file hash and URL reputation analysis.
- **Shodan:** To identify exposed infrastructure and vulnerabilities.
- **HaveIBeenPwned:** To check for credential leaks associated with specific domains.
- **Social Media (X/Twitter):** Scraping security research hashtags for emerging 0-day discussions.

### Technical Implementation

The tool is built with a modular architecture:
- **Asynchronous Requests:** Used `aiohttp` to handle hundreds of concurrent API calls, significantly reducing processing time.
- **Data Normalization:** A custom parser converts raw JSON outputs from various APIs into a standardized STIX 2.1 format.
- **Visualization:** Integrated with `NetworkX` to generate relationship graphs between IP addresses, domains, and known threat actors.

### Impact and Application

This framework was used to:
- Identify a previously unknown phishing campaign targeting the financial sector.
- Reduce manual investigation time for Tier 1 analysts by over 60%.
- Generate automated intelligence briefs that were shared with industry ISACs.

The development of this tool highlighted my proficiency in Python automation and my deep understanding of the threat intelligence lifecycle.
