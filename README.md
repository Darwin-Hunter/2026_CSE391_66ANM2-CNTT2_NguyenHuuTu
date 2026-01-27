# CSE391_66ANM2-CNTT2_NguyenHuuTu
# The Network Basics

A beginner-friendly overview of how computer networks move data—from your device to a website and back. This guide focuses on the core concepts you’ll use constantly in software, IT, and cloud work: addressing, routing, protocols, and the most common troubleshooting ideas.

---

## What is a Network?

A **network** is a group of devices (computers, phones, servers, routers) that communicate by sending **data**. Data is broken into small pieces called **packets**, transported across links (Wi-Fi, Ethernet, fiber), and reassembled at the destination.

---

## Key Building Blocks

### Devices
- **Client**: requests data (your laptop, phone)
- **Server**: provides data (web servers, databases)
- **Router**: forwards packets between networks (your home router, ISP routers)
- **Switch**: connects devices inside the same local network (LAN)
- **Firewall**: filters traffic based on security rules

### Networks
- **LAN (Local Area Network)**: your home/office network
- **WAN (Wide Area Network)**: connects LANs over large distances (the internet is the biggest WAN)
- **Internet vs Web**:
  - **Internet**: the global network infrastructure
  - **Web**: websites/apps running on top of the internet (mostly via HTTP/HTTPS)

---

## Addresses and Naming

### IP Address
An **IP address** identifies a device on a network (like a street address).
- **IPv4** example: `192.168.1.10`
- **IPv6** example: `2001:db8::1`

### MAC Address
A **MAC address** identifies a network interface on the local link (like a device’s hardware ID). Used inside a LAN for local delivery.

### Ports
A **port** identifies a specific service on a device.
- `80` = HTTP  
- `443` = HTTPS  
- `22` = SSH  
- `53` = DNS  

### DNS (Domain Name System)
**DNS** translates names like `example.com` into IP addresses like `93.184.216.34`.

---

## How Data Moves (High-Level)

When you visit a website:

1. **DNS lookup**: your device asks, “What IP is `site.com`?”
2. **Connect**: your device opens a connection to that IP (usually TCP).
3. **Secure (often)**: TLS encrypts the traffic (HTTPS).
4. **Request/Response**: your browser sends an HTTP request; the server responds.
5. **Routing**: routers forward packets hop-by-hop across networks.
6. **Reassembly**: packets arrive, get ordered, and your browser renders the page.

---

## Protocols You’ll Hear All the Time

### TCP vs UDP
- **TCP**: reliable, ordered delivery (web pages, email, file transfers)
- **UDP**: faster, less overhead, no guarantee of delivery (video calls, gaming, DNS often)

### HTTP/HTTPS
- **HTTP**: web protocol for requests and responses
- **HTTPS**: HTTP + encryption via **TLS**

### NAT (Network Address Translation)
Most home networks use **private IPs** internally (like `192.168.x.x`) and share **one public IP** to the internet. NAT is how your router keeps track of which internal device requested what.

### DHCP
**DHCP** automatically gives devices an IP address and other settings (gateway, DNS server) when they join a network.

---

## The OSI / TCP-IP Model (Quick Map)

You don’t need to memorize it day one—just understand the layers exist.

- **Application**: HTTP, DNS, SSH
- **Transport**: TCP, UDP
- **Internet**: IP (routing between networks)
- **Link**: Ethernet, Wi-Fi (local delivery)

(OSI expands this into 7 layers, but the idea is the same: each layer solves a different part of networking.)

---

## Common Terms (Plain English)

- **Bandwidth**: maximum capacity (how much data per second)
- **Latency**: delay (how long it takes)
- **Packet loss**: packets that never arrive
- **Throughput**: actual achieved speed
- **Hop**: one router-to-router step
- **Gateway**: where your LAN exits to other networks (usually your router)

---

## Basic Troubleshooting Checklist

When “the network is broken”, check in this order:

1. **Local connection**: Wi-Fi/Ethernet connected?
2. **IP config**: do you have an IP from DHCP?
3. **Gateway reachability**: can you reach your router?
4. **DNS**: can names resolve (e.g., `google.com`)?
5. **Internet route**: can you reach public IPs?
6. **Service/port**: is the destination service actually running?

Helpful commands:
- `ping <host>` (reachability / latency)
- `traceroute <host>` / `tracert <host>` (route hops)
- `nslookup <name>` / `dig <name>` (DNS)
- `curl -I https://site.com` (HTTP response headers)

---

## Learning Goals

By the end of this guide, you should be able to:
- Explain what an IP, DNS, and port are
- Describe the difference between TCP and UDP
- Understand how a browser loads a website (DNS → connect → request)
- Troubleshoot basic connectivity problems logically

---

## Suggested Next Topics

- Subnetting and CIDR (`/24`, `/16`, etc.)
- TLS/Certificates and HTTPS details
- Load balancers and reverse proxies
- VPNs and zero trust networking
- HTTP/2, HTTP/3, QUIC

---

## License

Choose a license for your repo (MIT is common for simple learning projects). Add a `LICENSE` file if you want this to be open source.
