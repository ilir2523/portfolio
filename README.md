# Ilir Rukaj — Portofol

Portofol personal i **Ilir Rukaj**, Senior Frontend Developer & Team Lead.
Dizajn i pastër i frymëzuar nga Apple — hapësirë e bollshme, tipografi e fortë
dhe animime të lehta.

## Projektet e paraqitura

| Projekti | Kategoria | Link |
|----------|-----------|------|
| RM Group | Korporativ | https://rm-group.netlify.app/ |
| Ratech SSI | Teknologji | https://ratechssi.netlify.app/ |
| Trup dhe Mendje | Shëndet & Wellness | https://trupdhemend.netlify.app/sq/ |
| Donglo | Produkt / Landing | https://donglo.lovable.app/ |
| Creative Designs Studio | Kreativ | https://creativedesignsstudio.netlify.app/ |

## Struktura

```
portfolio/
├── index.html        # Faqja e vetme (single page)
├── css/style.css     # Stilet — temë e çelët/e errët, responsive
├── js/main.js        # Reveal on scroll, theme toggle, count-up, progress bar
└── netlify.toml       # Konfigurim deploy-i
```

## Zhvillim lokal

Është një faqe statike — pa varësi, pa hap ndërtimi. Hape drejtpërdrejt:

```bash
# çdo server statik
python3 -m http.server 8000
# ose
npx serve .
```

Pastaj hap `http://localhost:8000`.

## Deploy (Netlify)

1. Lidh repository-n me Netlify.
2. Build command: _bosh_ (asnjë).
3. Publish directory: `.` (rrënja).

## Veçoritë

- 🎨 Dizajn Apple-style, i pastër dhe profesional
- 🌗 Temë e çelët / e errët (ndjek sistemin, me buton ndërrimi)
- ✨ Animime të lehta: reveal on scroll, count-up, parallax i butë
- 📱 Plotësisht responsive
- ♿ Respekton `prefers-reduced-motion`
- ⚡ Zero varësi, ngarkim i shpejtë

---

© Ilir Rukaj · Tiranë, Shqipëri
