# 🛡️ Azure SOC Lab — Cloud & Network Security Operations Project

## Overview
This project is a **hands-on Azure Security Operations Center (SOC) lab** designed to simulate real-world monitoring, detection, and response within a hybrid environment.  
It integrates **Microsoft Sentinel**, **Defender for Cloud**, and a **simulated on-prem network** (built in Cisco Packet Tracer) to demonstrate end-to-end threat visibility and incident response capabilities.

---

## 🎯 Objectives
- Build a functioning **SOC environment** using Azure services.
- Configure **data connectors**, **analytic rules**, and **alert automation** in Microsoft Sentinel.
- Simulate and respond to **realistic security events** (e.g., impossible travel, suspicious sign-ins).
- Visualize an on-prem to cloud topology using **Cisco Packet Tracer**.
- Strengthen understanding of **network infrastructure**, **VLANs**, **firewalls**, and **SIEM integration**.

---

## 🧩 Architecture & Components

### ☁️ Azure Cloud Environment
- **Azure Active Directory (Entra ID)** — User identities for simulated organization.
- **Microsoft Sentinel (SIEM)** — Central log aggregation, alerting, and threat detection.
- **Microsoft Defender for Cloud / CSPM** — Cloud posture management and alert generation.
- **Log Analytics Workspace** — Storage and query engine for Sentinel data.
- **Logic Apps** — Automated response workflows (email notifications to SOC team).
- **SendGrid Integration** — Custom email notifications for Sentinel alerts.

### 🖧 On-Prem Network Simulation (Cisco Packet Tracer)
- **DSL Modem → Router → Firewall → Core Switch (3560)** → Access Switches (2950A, 2950B)
- **Endpoints:** 5 Workstations + 5 Laptops (representing Azure AD users)
- **Servers:**
  - Domain Controller / Authentication Server (Simulated)
  - SOC Server (Syslog / Monitoring)
  - Web Server (Public-facing asset)
- **VLANs:**
  - VLAN 10 – HR / Finance  
  - VLAN 20 – IT / SOC  
  - VLAN 30 – Operations  
  - VLAN 99 – Management

### 🔒 Security Layers
- **Firewall (ASA 5505)** controlling traffic between internal VLANs and external Internet.
- **Trunked Core Switch** carrying multiple VLANs to access switches.
- **Router Configured for WAN connectivity (DSL Cloud Simulation)**.
- **Access Control Lists (ACLs)** for basic segmentation.

---

## ⚙️ Configuration Summary

| Component | Configuration Highlights |
|------------|--------------------------|
| **Microsoft Sentinel** | Connected to Log Analytics; alert rules for sign-in anomalies and impossible travel; Logic App email automation |
| **Defender for Cloud** | Configured CSPM and workload protection; generated sample alerts synced to Sentinel |
| **SendGrid** | Verified sender domain; configured email notifications for high-severity incidents |
| **Cisco Packet Tracer Network** | Designed and configured 3-tier network topology (Core, Distribution, Access) with VLANs and routing |
| **Firewall (ASA)** | Configured with outside/inside zones; NAT for Internet access simulation |
| **Routers & Switches** | Configured trunk ports, VLANs, inter-VLAN routing, and IP addressing |

---

## 🧠 Key Learnings
- Integrated **cloud-native SIEM (Sentinel)** with **Defender for Cloud** and custom automation.
- Practiced **alert triage**, **SOC notification flow**, and **incident validation**.
- Gained deeper understanding of **Azure security architecture** and **hybrid networking**.
- Learned VLAN segmentation and trunking best practices.
- Built a network topology replicating an enterprise environment.

---

## 📊 Sample Screenshots
*(You can add these images after uploading to your repo)*

1. **Azure Sentinel Dashboard**
2. **Logic App Workflow for Alert Notification**
3. **Defender for Cloud Sample Alerts**
4. **Cisco Packet Tracer Topology Diagram**
5. **Switch/Router Configurations**

```markdown
![Azure Sentinel Dashboard](screenshots/sentinel-dashboard.png)
![Network Topology](screenshots/azure-lab-topology.png)
![Logic App Email Flow](screenshots/logicapp-email.png)
