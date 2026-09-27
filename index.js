const MAIN_SITE = "https://kinforge-genealogy-studio-public.marianneleong3.chatgpt.site";

const pages = {
  "/": {
    eyebrow: "A product of Dreams of Serene Landscapes",
    title: "KinForge Genealogy Special Access Edition",
    lead: "The approved no-cost edition for special/close users and approved FOP-style requests. Access is reviewed, code-gated, and still follows KinForge copyright, credit, export, and download rules.",
    body: homePage
  },
  "/downloads": {
    eyebrow: "Official downloads",
    title: "Code-gated downloads for approved users",
    lead: "Download links are routed through the official KinForge release system. Approved users enter a private code before seeing installer files.",
    body: downloadsPage
  },
  "/request-access": {
    eyebrow: "Approval path",
    title: "Request KinForge Genealogy Special Access Edition",
    lead: "Approval is not automatic. Requests are reviewed through the support form or an approved Dreams of Serene Landscapes email path.",
    body: requestPage
  },
  "/rules": {
    eyebrow: "Copyright and export rules",
    title: "Special access is not copyright-free",
    lead: "KinForge/Dreams credit and copyright requirements still apply to the app, GEDCOM files, Word/RTF-style documents, reports, PDFs, backups, CSVs, and other exports.",
    body: rulesPage
  },
  "/story": {
    eyebrow: "About Us",
    title: "Founding Story, Mission, Vision, and Values",
    lead: "Learn why KinForge was created, what Dreams of Serene Landscapes is building toward, and the values behind the Special Access Edition.",
    body: aboutPage
  },
  "/about": {
    eyebrow: "About Us",
    title: "Founding Story, Mission, Vision, and Values",
    lead: "Learn why KinForge was created, what Dreams of Serene Landscapes is building toward, and the values behind the Special Access Edition.",
    body: aboutPage
  },
  "/about/founding-story": {
    eyebrow: "Founding Story",
    title: "Why KinForge exists",
    lead: "KinForge was created after Dreams of Serene Landscapes found other genealogy and relationship tools too limited, too rigid, or too expensive for many real users.",
    body: foundingStoryPage
  },
  "/about/mission": {
    eyebrow: "Mission",
    title: "A fairer relationship studio",
    lead: "KinForge exists to give people a clearer, more capable, and more accessible way to understand relationships, preserve stories, map communities, and build worlds.",
    body: missionPage
  },
  "/about/vision": {
    eyebrow: "Vision",
    title: "A more accessible future for genealogy and relationship work",
    lead: "Dreams of Serene Landscapes is building toward a world where family history, care context, historical memory, fictional continuity, and creative worldbuilding are easier to protect and understand.",
    body: visionPage
  },
  "/about/values": {
    eyebrow: "Values",
    title: "The values behind KinForge",
    lead: "Accessibility, affordability, genealogy awareness, inclusivity, user ownership, respectful records, and better tools guide KinForge Genealogy Special Access Edition.",
    body: valuesPage
  },
  "/tutorials": {
    eyebrow: "Learn KinForge",
    title: "Tutorials and feature walkthroughs",
    lead: "Use the official tutorial library for trees, relationships, profiles, exports, reports, privacy, sharing, and Special Access Edition rules.",
    body: tutorialsPage
  }
};

const nav = [
  ["/", "Home"],
  ["/downloads", "Downloads"],
  ["/request-access", "Request Access"],
  ["/rules", "Rules"],
  ["/about", "About Us"],
  ["/tutorials", "Tutorials"]
];

const aboutNav = [
  ["/about/founding-story", "Founding Story"],
  ["/about/mission", "Mission"],
  ["/about/vision", "Vision"],
  ["/about/values", "Values"]
];

const downloadOptions = [
  ["Mac, Apple Silicon", "For newer Apple Silicon Macs. Available after Special Access Edition code approval."],
  ["Mac, Intel", "For older Intel Macs. Available after Special Access Edition code approval."],
  ["Windows setup", "Installer build for Windows users, listed on the protected official download page."],
  ["Windows portable", "Portable Windows option, listed on the protected official download page."],
  ["Web app", "Browser access through a KinForge account, with full no-cost access only when approved."],
  ["Checksums", "SHA-256 verification remains part of the official release workflow."]
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
}

function redirect(location, status = 302) {
  return new Response(null, { status, headers: { Location: location, "Cache-Control": "no-store" } });
}

function pageShell(path, page) {
  const links = nav.map(([href, label]) => href === "/about" ? aboutMenu(path) : `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)} | KinForge Special Access</title>
  <meta name="description" content="${escapeHtml(page.lead)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta property="og:site_name" content="KinForge Genealogy Special Access Edition">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.lead)}">
  <style>${styles()}</style>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="topbar">
    <a class="brand" href="/" aria-label="KinForge Genealogy Special Access Edition home">
      <span class="mark">KF</span>
      <span>KinForge<small>Special Access Edition</small></span>
    </a>
    <nav aria-label="Primary">${links}</nav>
  </header>
  <main id="main">
    <section class="hero">
      <div>
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="lead">${escapeHtml(page.lead)}</p>
        <div class="actions">
          <a class="button primary" href="/go/special-downloads">Enter special access code</a>
          <a class="button secondary" href="/go/support">Request approval</a>
          <a class="button quiet" href="/go/main-site">Main KinForge site</a>
        </div>
      </div>
      <aside class="hero-panel">
        <h2>Access checklist</h2>
        <ol>
          <li>Request approval before using the no-cost edition.</li>
          <li>Provide real, non-AI proof if requested.</li>
          <li>Use the private code only if approved.</li>
          <li>Keep KinForge/Dreams copyright and credit on exports.</li>
        </ol>
      </aside>
    </section>
    <section class="notice"><strong>Required rule:</strong> KinForge Genealogy Special Access Edition is approved no-cost access, not copyright-free access. Credit and copyright rules still apply.</section>
    ${page.body()}
  </main>
  <footer>
    <p><strong>KinForge Genealogy Special Access Edition</strong></p>
    <p>Product of Dreams of Serene Landscapes. Copyright 2026 Dreams of Serene Landscapes. All rights reserved.</p>
    <nav aria-label="Footer">${links}<a href="/go/main-site">Main Site</a></nav>
  </footer>
</body>
</html>`;
}

function homePage() {
  return `<section class="section grid">
    <div>
      <p class="eyebrow">Same KinForge workspace</p>
      <h2>Approved access for the fuller KinForge experience</h2>
      <p>Special Access Edition is for approved close/special people and approved FOP-style requests. It uses the official KinForge ecosystem for account flow, downloads, tutorials, support, and legal terms.</p>
      <p>It is designed for genealogy, social-work genograms, writers, historians, roleplayers, RPG players, educators, students, nonprofits, and story-world continuity.</p>
    </div>
    <div class="cards">
      ${card("Code-gated downloads", "Approved users open the protected official download page and enter their private code.", "/downloads")}
      ${card("Request access", "New users request approval through support before using the Special Access Edition.", "/request-access")}
      ${card("Copyright rules", "Exports and documents keep KinForge/Dreams credit and copyright notices.", "/rules")}
      ${card("Tutorials", "Learn the app through step-by-step official tutorials.", "/tutorials")}
    </div>
  </section>${storyBand()}`;
}

function downloadsPage() {
  return `<section class="section grid">
    <div>
      <p class="eyebrow">Protected downloads</p>
      <h2>Choose your platform after approval</h2>
      <p>The actual installer links remain behind the official special access code page. This avoids making no-cost full access public while still giving approved users a clear path.</p>
      <div class="actions"><a class="button primary" href="/go/special-downloads">Open protected downloads</a><a class="button secondary" href="/go/support">Request approval first</a></div>
    </div>
    <div class="cards">${downloadOptions.map(([title, text]) => card(title, text, "/go/special-downloads")).join("")}</div>
  </section>`;
}

function requestPage() {
  return `<section class="section split">
    <div>
      <h2>What to include in a request</h2>
      <p>Explain who you are, why Special Access Edition is appropriate, how KinForge will be used, and whether exports will be shared publicly, privately, commercially, or in a care/research context.</p>
    </div>
    <div class="callout">
      <h3>Proof may include</h3>
      <ul>
        <li>Real, non-AI photos together.</li>
        <li>Shared records or correspondence.</li>
        <li>Digital or physical proof of closeness or approval context.</li>
        <li>A clear FOP-style request explaining the access need.</li>
      </ul>
      <a class="button primary" href="/go/support">Open support form</a>
    </div>
  </section>`;
}

function rulesPage() {
  return `<section class="section">
    <h2>Rules for exports, downloads, and app use</h2>
    <div class="cards">
      ${card("Credit remains required", "Users must credit KinForge and Dreams of Serene Landscapes when asked or when the app/export requires it.", "/go/terms")}
      ${card("Copyright remains required", "GEDCOM, Word/RTF-style documents, PDFs, reports, HTML, JSON backups, CSVs, and other files keep the copyright notice.", "/go/terms")}
      ${card("No automatic approval", "Special Access Edition approval may be limited, reviewed, denied, or revoked if rules are not followed.", "/request-access")}
      ${card("Privacy still matters", "Real people, sensitive notes, social-work records, and family records must be handled carefully.", "/go/privacy")}
    </div>
  </section>`;
}

function storyPage() {
  return aboutPage();
}

function aboutMenu(path) {
  const current = path === "/about" || path === "/story" || path.startsWith("/about/");
  return `<details class="nav-menu"${current ? " open" : ""}><summary${current ? ' aria-current="page"' : ""}>About Us</summary><div>${aboutNav.map(([href, label]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</div></details>`;
}

function aboutLinks() {
  return `<nav class="subnav" aria-label="About Us sections">${aboutNav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</nav>`;
}

function aboutPage() {
  return aboutLinks() + storyBand() + `<section class="section">
    <div class="cards">
      ${card("Founding Story", "KinForge began when Dreams of Serene Landscapes needed better genealogy and relationship-mapping tools than the options available.", "/about/founding-story")}
      ${card("Mission", "Give people a fairer, clearer, and more capable way to understand relationships, preserve stories, map communities, and build worlds.", "/about/mission")}
      ${card("Vision", "A world where family history, care context, historical memory, fictional continuity, and creative worldbuilding are easier to protect and understand.", "/about/vision")}
      ${card("Values", "Accessibility, affordable pricing, genealogy awareness, inclusivity, user ownership, respectful records, and better tools.", "/about/values")}
    </div>
  </section>`;
}

function foundingStoryPage() {
  return aboutLinks() + storyBand() + `<section class="section split">
    <div>
      <h2>Built because existing tools were not enough</h2>
      <p>KinForge began after Dreams of Serene Landscapes spent months trying to make existing genealogy and relationship tools work for real needs: family history, complicated relationships, creative worlds, records, reports, accessibility, and affordability.</p>
      <p>The available options often felt too narrow, too expensive, or not built for the people who needed them most.</p>
    </div>
    <div class="callout">
      <h3>The KinForge answer</h3>
      <p>Instead of accepting those limits, Dreams of Serene Landscapes chose to build a new kind of relationship studio: one that respects genealogy while also serving social workers, writers, historians, roleplayers, RPG players, students, educators, nonprofits, and families.</p>
    </div>
  </section>`;
}

function missionPage() {
  return aboutLinks() + `<section class="section split">
    <div>
      <h2>Mission</h2>
      <p>To give people a fairer, clearer, and more capable way to understand relationships, preserve stories, map communities, and build worlds without being blocked by inaccessible tools or unreasonable pricing.</p>
      <p>KinForge Genealogy Special Access Edition extends that mission to approved no-cost users while keeping the copyright and credit rules that protect the work.</p>
    </div>
    <div class="cards">
      ${card("Accessibility", "Make KinForge easier to reach for people with different needs, disabilities, budgets, and ways of learning.", "/about/values")}
      ${card("Relationship clarity", "Help users see connections across families, cases, histories, casts, campaigns, and worlds.", "/about/vision")}
    </div>
  </section>`;
}

function visionPage() {
  return aboutLinks() + `<section class="section split">
    <div>
      <h2>Vision</h2>
      <p>A world where family history, care context, historical memory, fictional continuity, and creative worldbuilding are easier to protect, understand, and share responsibly.</p>
      <p>KinForge aims to make genealogy and relationship mapping useful beyond a single use case, supporting real families, care networks, archives, classrooms, nonprofits, creative writing, and RPG worlds.</p>
    </div>
    <div class="callout">
      <h3>What that future looks like</h3>
      <ul>
        <li>People can understand relationship context without fighting the tool.</li>
        <li>Creators can protect continuity across long-running worlds.</li>
        <li>Researchers and families can keep records, reports, and sources together.</li>
        <li>Special access can help approved users without erasing copyright or credit.</li>
      </ul>
    </div>
  </section>`;
}

function valuesPage() {
  return aboutLinks() + `<section class="section">
    <h2>Values</h2>
    <div class="cards">
      ${card("Accessibility", "Make KinForge accessible to as many people as possible, including people with special needs, disabilities, and different learning styles.", "/about/values")}
      ${card("Affordable pricing", "Offer fairer paths for people who need genealogy and relationship tools without unreasonable plan costs.", "/about/values")}
      ${card("Genealogy matters", "Bring light to family history, identity, cultural memory, and the stories that connect people across generations.", "/about/values")}
      ${card("Inclusivity", "Support families, care networks, histories, fiction, roleplay, RPG worlds, education, nonprofits, and research.", "/about/values")}
      ${card("User ownership", "Help users keep control of accounts, exports, backups, and creative or research work.", "/about/values")}
      ${card("Respectful records", "Treat real people, sensitive information, and private histories with care.", "/about/values")}
      ${card("Better tools", "Keep improving features that existing services often leave unfinished, overpriced, or too narrow.", "/about/values")}
    </div>
  </section>`;
}

function tutorialsPage() {
  return `<section class="section split">
    <div>
      <h2>Official tutorial library</h2>
      <p>Open the main tutorial library for detailed help with creating a family tree, editing profiles, adding relationships, organizing books and collections, generating reports, exporting files, and using Special Access Edition responsibly.</p>
    </div>
    <div class="callout">
      <a class="button primary" href="/go/tutorials">Open tutorials</a>
      <a class="button secondary" href="/go/terms">Terms & Conditions</a>
      <a class="button secondary" href="/go/privacy">Privacy Policy</a>
    </div>
  </section>`;
}

function storyBand() {
  return `<section class="section story">
    <p class="eyebrow">Their Story</p>
    <h2>Why KinForge exists</h2>
    <div class="columns">
      <p>KinForge Genealogy Studio was created by Dreams of Serene Landscapes after months of trying other genealogy and relationship-mapping tools and finding that many were too limited, too rigid, or priced beyond what many users could reasonably afford.</p>
      <p>Dreams of Serene Landscapes built KinForge with a mission to make genealogy, genograms, family history, fictional lineages, historical networks, and worldbuilding more accessible, inclusive, and practical.</p>
    </div>
  </section>`;
}

function card(title, text, href) {
  return `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p><a href="${href}">Open</a></article>`;
}

function styles() {
  return `:root{color-scheme:light;--ink:#201d28;--muted:#675c73;--line:rgba(44,35,58,.16);--paper:#fffdf8;--soft:#f4eff7;--accent:#6c4fa2;--accent2:#0f766e;--gold:#b98520}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}a{color:inherit}.skip{position:absolute;left:12px;top:-48px;z-index:10;background:var(--ink);color:white;padding:10px 14px}.skip:focus{top:12px}.topbar{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px clamp(18px,4vw,52px);background:rgba(255,253,248,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(14px)}.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-weight:850}.brand small{display:block;color:var(--muted);font-size:.78rem;font-weight:700}.mark{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:white;font-weight:900}nav{display:flex;align-items:center;flex-wrap:wrap;gap:12px}nav a,summary{text-decoration:none;color:var(--muted);font-weight:750}.nav-menu{position:relative}.nav-menu summary{list-style:none;cursor:pointer}.nav-menu summary::-webkit-details-marker{display:none}.nav-menu summary:after{content:"";display:inline-block;width:.45em;height:.45em;margin-left:.42em;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:translateY(-.18em) rotate(45deg)}.nav-menu div{position:absolute;right:0;top:calc(100% + 12px);min-width:190px;display:grid;gap:4px;padding:10px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 16px 42px rgba(32,29,40,.12)}.nav-menu:not([open]) div{display:none}.nav-menu div a{padding:9px 10px;border-radius:6px}.nav-menu div a:hover{background:var(--soft)}.subnav{margin:clamp(24px,5vw,52px) clamp(18px,5vw,72px) 0;padding:12px;border:1px solid var(--line);border-radius:8px;background:white}.subnav a{padding:9px 12px;border-radius:999px;background:var(--soft);color:#443652}.hero{min-height:84vh;display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,480px);gap:clamp(24px,5vw,72px);align-items:center;padding:clamp(54px,8vw,98px) clamp(18px,5vw,72px);background:linear-gradient(rgba(255,253,248,.92),rgba(255,253,248,.86)),radial-gradient(circle at 20% 20%,rgba(108,79,162,.22),transparent 32%),radial-gradient(circle at 85% 20%,rgba(15,118,110,.18),transparent 28%)}.eyebrow{margin:0 0 10px;color:var(--accent);text-transform:uppercase;font-size:.78rem;font-weight:900;letter-spacing:.08em}h1,h2,h3{margin:0;line-height:1.05;letter-spacing:0}h1{max-width:880px;font-size:clamp(3rem,8vw,7rem)}h2{font-size:clamp(2rem,4vw,4rem)}h3{font-size:1.2rem}p{color:var(--muted)}.lead{max-width:740px;color:#3d3548;font-size:clamp(1.08rem,2vw,1.42rem)}.actions,.callout{display:flex;flex-wrap:wrap;gap:12px}.button,.cards a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:8px;padding:10px 16px;text-decoration:none;font-weight:850}.primary{background:var(--accent);color:white}.secondary,.cards a{border:1px solid var(--line);background:white;color:var(--accent)}.quiet{color:var(--accent2)}.hero-panel,.callout,.cards article{border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.88);box-shadow:0 16px 42px rgba(32,29,40,.08)}.hero-panel,.cards article,.callout{padding:24px}.hero-panel li,.callout li{margin:10px 0;color:var(--muted)}.notice{margin:clamp(24px,5vw,52px) clamp(18px,5vw,72px) 0;padding:18px 20px;border-left:6px solid var(--gold);background:#fff7df;color:#4a3820}.section{padding:clamp(54px,7vw,86px) clamp(18px,5vw,72px)}.grid,.split{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(24px,5vw,64px);align-items:start}.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.columns{columns:2 320px;column-gap:42px;max-width:980px}.story{background:var(--soft)}footer{padding:36px clamp(18px,5vw,72px);border-top:1px solid var(--line);background:#201d28;color:white}footer p{color:rgba(255,255,255,.78)}footer nav a,footer summary{color:white}@media(max-width:860px){.topbar,.hero,.grid,.split{grid-template-columns:1fr}.topbar{position:static;align-items:flex-start;flex-direction:column}.nav-menu div{position:static;margin-top:8px}.cards{grid-template-columns:1fr}h1{font-size:clamp(3rem,16vw,5rem)}}`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (path === "/style.css") return new Response(styles(), { headers: { "Content-Type": "text/css; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
    if (path === "/go/main-site") return redirect(`${MAIN_SITE}/website/`);
    if (path === "/go/special-downloads") return redirect(`${MAIN_SITE}/downloads/special-access`);
    if (path === "/go/support") return redirect(`${MAIN_SITE}/website/support/`);
    if (path === "/go/tutorials") return redirect(`${MAIN_SITE}/website/tutorials/`);
    if (path === "/go/terms") return redirect(`${MAIN_SITE}/website/terms/`);
    if (path === "/go/privacy") return redirect(`${MAIN_SITE}/website/privacy-policy/`);
    if (path === "/api/status") return Response.json({ ok: true, edition: "KinForge Genealogy Special Access Edition", dynamic: true });
    const page = pages[path];
    if (!page) return redirect("/");
    return new Response(pageShell(path, page), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; img-src https: data:; form-action 'self'; base-uri 'none'; frame-ancestors 'self'"
      }
    });
  }
};
