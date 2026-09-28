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
  "/contribute": {
    eyebrow: "Contribute and Help Our Cause",
    title: "Help improve KinForge Special Access",
    lead: "Share feature ideas, feedback, feature addition suggestions, accessibility requests, tutorial needs, bug reports, and other improvements for KinForge Genealogy Special Access Edition.",
    body: contributePage
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
    lead: "KinForge was created after Dreams of Serene Landscapes spent years trying existing genealogy, writing, and relationship tools and found them too limited, too hidden behind unfair trials, too inaccessible, or too expensive for real users.",
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
  },
  "/privacy-policy": {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy for Special Access",
    lead: "How KinForge Special Access handles code-gated access, private records, invited users, exports, downloads, support requests, and code-gated access.",
    body: privacyPolicyPage
  },
  "/terms": {
    eyebrow: "Terms & Conditions",
    title: "Terms & Conditions for Special Access",
    lead: "The copyright, IP authority, access-code, export, download, and legal consequence rules for KinForge Genealogy Special Access Edition.",
    body: termsPage
  }
};

const nav = [
  ["/", "Home"],
  ["/downloads", "Downloads"],
  ["/request-access", "Request Access"],
  ["/rules", "Rules"],
  ["/contribute", "Contribute"],
  ["/about", "About Us"],
  ["/tutorials", "Tutorials"],
  ["/privacy-policy", "Privacy Policy"],
  ["/terms", "Terms & Conditions"]
];

const aboutNav = [
  ["/about/founding-story", "Founding Story"],
  ["/about/mission", "Mission"],
  ["/about/vision", "Vision"],
  ["/about/values", "Values"]
];

const downloadOptions = [
  ["Special Access Mac app, Apple Silicon", "Dedicated Special Access Edition package for newer Apple Silicon Macs, available after approval and code unlock."],
  ["Special Access Mac app, Intel", "Dedicated Special Access Edition package for older Intel Macs, available after approval and code unlock."],
  ["Special Access Windows setup", "Dedicated Special Access Edition .exe installer for Windows users with approved code-gated access."],
  ["Special Access Windows portable", "Portable Special Access Edition Windows build for approved users who need a no-install option."],
  ["Special Access web app", "Browser access after approval and private Special Access code unlock."],
  ["Checksums", "SHA-256 verification remains part of the Special Access release workflow."]
];

const specialAccessGate = `<section class="access-gate" data-access-gate aria-labelledby="access-gate-title">
  <div class="gate-card">
    <div class="gate-graphic" aria-hidden="true"><span>KF</span><i></i><i></i><i></i></div>
    <p class="eyebrow">Special Access code required</p>
    <h2 id="access-gate-title">Enter your Special Access code</h2>
    <p>Special Access Edition uses its own dedicated app downloads and web app access. Enter the private code provided by Dreams of Serene Landscapes to continue on this device. This page starts with the Special Access code gate before anything else.</p>
    <form data-access-form>
      <label>Special Access code<input name="code" autocomplete="one-time-code" minlength="6" required placeholder="Enter your code"></label>
      <button class="primary" type="submit">Unlock Special Access</button>
    </form>
    <p class="gate-status" data-access-status aria-live="polite"></p>
    <div class="actions"><a class="button secondary" href="/request-access">Request approval</a><a class="button quiet" href="${MAIN_SITE}/website/">Open public site</a></div>
  </div>
</section>`;

const legalAuthorityNotice = `<section class="notice legal-authority"><span class="legal-icon" aria-hidden="true">IP</span><div><strong>Copyright, IP authority rights and legal consequences.</strong> KinForge Genealogy Special Access Edition, KinForge Genealogy Studio, KinForge Genealogy Studio Supreme Suite, the public website, app code, design, icons, logos, reports, export templates, written content, product structure, names, downloads and related materials are protected intellectual property owned by Dreams of Serene Landscapes unless another owner is clearly stated. Do not copy, resell, scrape, impersonate, remove credit, claim authorship, redistribute private builds, bypass access controls, misuse Special Access codes, or use KinForge exports in a way that violates copyright, privacy, account, billing, or data-protection rules. Unauthorised use may lead to revoked Special Access, account removal, refused support, takedown requests, legal notice, intellectual-property enforcement, civil claims, or other remedies available under applicable law.</div></section>`;

const reviewThemes = [
  ["Pricing, renewal, cancellation, add-ons", 42.5, "#6c4fa2", "34 of 80"],
  ["Sync, export, backup, portability", 20, "#0f766e", "16 of 80"],
  ["Support, refunds, response time", 15, "#b98520", "12 of 80"],
  ["Usability, speed, crashes, complexity", 12.5, "#8b5965", "10 of 80"],
  ["Missing creator, case, privacy workflows", 10, "#64748b", "8 of 80"]
];

const comparisonBarChart = `<figure class="bar-chart comparison-chart"><figcaption>Horizontal comparison chart: sampled complaint audit, shown as share of 80 negative public genealogy-app and relationship-tool complaint examples. Bars use a zero baseline and a 0 to 50% scale.</figcaption><div class="bar-axis" aria-hidden="true"><span>0%</span><span>10%</span><span>20%</span><span>30%</span><span>40%</span><span>50%</span></div>${reviewThemes.map(([label, value, color, count]) => `<div class="bar-row"><span class="bar-label">${label}</span><div class="bar-track" role="img" aria-label="${label}: ${value} percent, ${count}"><i style="width:${value * 2}%;background:${color}"></i></div><strong>${value}%</strong><em>${count}</em></div>`).join("")}<p class="muted">Scale: 0 to 50%. The longest category reaches 42.5%, so the bars visibly compare the complaint groups instead of looking identical.</p></figure>`;

const donutChart = `<figure class="theme-chart"><div class="donut" role="img" aria-label="Donut chart showing pricing transparency evidence: 33 percent gated at least one pricing tier, 18 percent had no usable public price, and 49 percent had transparent public pricing for at least one tier."></div><figcaption>Published pricing evidence snapshot: some software tools gate prices or hide pricing details, which shaped KinForge's clearer pricing and Special Access explanation.</figcaption><ul><li><span style="background:#6c4fa2"></span><strong>33%</strong> Gate at least one pricing tier</li><li><span style="background:#b98520"></span><strong>18%</strong> No usable public price</li><li><span style="background:#0f766e"></span><strong>49%</strong> Transparent public price for at least one tier</li></ul></figure>`;

const founderStatement = `<div class="founding-feature"><div class="founding-hero"><div><p class="eyebrow">Their Story</p><h2>Why Dreams of Serene Landscapes built KinForge</h2><p class="founding-lead">KinForge Genealogy Studio grew out of years of searching for a genealogy, relationship-mapping, writing, and worldbuilding tool that could hold the full complexity of real people, real records, and imagined worlds. Dreams of Serene Landscapes tried service after service, only to find the same pattern: too many tools were limited, inaccessible, unfinished, overpriced, or designed without the people who needed them most in mind.</p></div><div class="founding-orbit" aria-hidden="true"><span>Years</span><span>50 to 10</span><span>SWOT</span><span>Access</span></div></div><div class="founding-stats" aria-label="KinForge founding story highlights"><article><strong>Years</strong><span>of testing existing services</span></article><article><strong>50/10</strong><span>the trial problem users kept facing</span></article><article><strong>2 months</strong><span>of focused SWOT and build work</span></article><article><strong>One mission</strong><span>make capable tools accessible</span></article></div><div class="founding-intro"><p>As writers, and as people who needed something better, Dreams of Serene Landscapes searched across genealogy tools, family-tree services, writing systems, relationship maps, record managers, and worldbuilding platforms. They needed room for complicated families, fictional lineages, historical networks, social-work context, relationship records, reports, accessibility, affordability, and creative continuity. Again and again, the available tools failed to meet those needs.</p><p>The full story stretches across years of trying existing services, then into a focused two-month SWOT analysis and build push that turned frustration, notes, comparisons, missing features, and unanswered needs into KinForge.</p></div><div class="founding-timeline"><article><span class="story-icon">1</span><div><h3>First, they went looking</h3><p>Dreams of Serene Landscapes created KinForge after realising that many other apps lacked the features people genuinely needed, while many paid plans cost far more than felt reasonable. The mission became clear: build an app that was more useful, more inclusive, more affordable, and more honest about what users can actually do with it.</p><p>KinForge became their answer to a simple belief: people deserve better tools for understanding where they come from, who they are connected to, and what stories, records, worlds, and relationships they are trying to preserve or create.</p></div></article><article><span class="story-icon">2</span><div><h3>Then, the trials revealed the problem</h3><p>The issue was not just missing features. Dreams of Serene Landscapes noticed that many apps restricted trials so heavily that users could not judge the full product in any meaningful way. If an app had 50 features, a trial might expose only 10, then still ask users to decide whether the app was good.</p><p>That felt unfair and ridiculous. How can users experience only a fraction of a tool, never see the full app, and then give an honest judgment about what the product is actually like? It also explained why many people stayed on free versions: the paid version did not feel worth it when the trial never revealed enough of the real value.</p></div></article><article><span class="story-icon">3</span><div><h3>Then came the pricing problem</h3><p>For users who did pay, another problem appeared. Dreams of Serene Landscapes saw companies charging high prices for products that still felt narrow, incomplete, confusing, or inaccessible. Genealogy, family context, care records, writing continuity, and relationship mapping matter too much for users to feel trapped between an incomplete free version and a paid plan that cannot justify its cost. In the current economy, it did not make sense to spend an unreasonable amount of money on a tool like that and watch the money disappear. Dreams of Serene Landscapes kept asking why apps were priced so high that they pushed people away, and where the ethics were if reasonable pricing was treated like an afterthought.</p><p>KinForge was created with fairer pricing in mind. To Dreams of Serene Landscapes, some services felt almost as if they were pressuring people to pay ridiculous prices for cheap-feeling, weak, or unfinished work. They could not stand by while users felt scammed by tools that failed to deliver enough value. The answer was not to copy that unfairness. It was to turn the tables with a better product: one that gives people a real alternative, clearer value, and a reason to spread the word instead of settling for less. If some services made users feel scammed, then KinForge became their way to “scam the scammer” figuratively, not literally: to break the cycle ethically by weakening exploitative models, giving users somewhere better to go, and proving that reasonable pricing can still support a serious product.</p><p>Subscriptions should support the project, fund continued development, keep the service improving, and help make the world better one step at a time without punishing users for needing a capable tool. Pricing should invite people in, not scare them away. A useful app should earn support by being genuinely helpful, not by trapping people behind pressure, confusion, or fear of missing out.</p><p>Real-world pricing and subscription cases show why this matters. The FTC has taken action against Adobe over allegations that consumers were pushed toward subscriptions with hidden early-termination fees and cancellation hurdles. The FTC has also warned about dark patterns that make subscriptions hard to cancel, including cases involving “easy cancellation” claims that did not match the actual user experience, and it has challenged free-trial schemes where people were charged for expensive recurring subscriptions after misleading offers. The FTC’s junk-fee work also shows how hidden or misleading fees can make people believe something costs less than it really does.</p><p>Actual public complaint pages and 1- to 3-star reviews show the same pain from the user side. Ancestry's BBB customer-review page shows a very low average customer rating and recent reviews describing surprise subscription charges, confusing free-trial wording, cancellation fees, missing renewal emails, difficult cancellation flows, support problems, and the feeling that the service had become more expensive without enough added value. ConsumerAffairs reviews for Ancestry repeat similar points around high subscription costs, difficult cancellation, refunds, and billing questions. Trustpilot pages for Ancestry and MyHeritage also show low-star reviews where users complain about trial confusion, unexpected charges after trials, cancellation fees, and annual charges they did not expect. Those complaints do not mean every user has the same experience, but they do show that pricing clarity, easy cancellation, honest trials, support responsiveness, and feature value are not abstract issues. They are everyday trust issues for people trying to protect family history, creative work, personal records, and limited budgets.</p><div class="research-signals" aria-label="Research signals from public review and complaint pages for other genealogy services"><div><p class="eyebrow">Research Signals</p><h4>Review statistics that support the founding story</h4><p>These public review snapshots from other genealogy apps and services support the concerns behind KinForge: pricing, trials, cancellation, support, feature limits, and value are recurring user pain points, not empty claims.</p></div><div class="signal-visuals"><div class="signal-bars"><article><strong>1.23 / 5</strong><span>Ancestry BBB average across 229 customer reviews in the captured listing.</span><i style="--bar:25%"></i></article><article><strong>83.6%</strong><span>ConsumerAffairs Ancestry reviews in the 1- to 3-star range: 734 out of 878 listed reviews.</span><i style="--bar:84%"></i></article><article><strong>39%</strong><span>Ancestry Trustpilot reviews shown as 1 to 3 stars: 20% one-star, 9% two-star, 10% three-star.</span><i style="--bar:39%"></i></article><article><strong>25%</strong><span>MyHeritage Trustpilot reviews shown as 1 to 3 stars: 15% one-star, 4% two-star, 6% three-star.</span><i style="--bar:25%"></i></article></div><div class="chart-row"><figure class="donut-chart" style="--bad:39%;--ok:10%;--good:61%"><span>39%</span><figcaption>Ancestry Trustpilot 1-3 star share</figcaption></figure><figure class="donut-chart myheritage" style="--bad:25%;--ok:6%;--good:75%"><span>25%</span><figcaption>MyHeritage Trustpilot 1-3 star share</figcaption></figure><div class="stack-chart" aria-label="Star rating distribution comparison"><strong>Star distribution snapshots</strong><span>Ancestry Trustpilot</span><i class="stack ancestry"></i><small>1-star 20% | 2-star 9% | 3-star 10% | 4-5 star 61%</small><span>MyHeritage Trustpilot</span><i class="stack myheritage"></i><small>1-star 15% | 2-star 4% | 3-star 6% | 4-5 star 75%</small></div></div></div><p class="research-note">Why this matters: these review patterns back the KinForge promise of clearer pricing, more honest trials, less confusing cancellation, stronger support paths, richer useful features, and a product that earns trust instead of relying on pressure.</p></div><p>Those examples support the core KinForge belief: users deserve clear prices, honest trials, useful features, and a fair way to leave if the service no longer meets their needs. Help stop unfair, exploitative app experiences by telling people about KinForge and sharing the product on social media. ^^</p></div></article><article><span class="story-icon">4</span><div><h3>Because real lives are not simple charts</h3><p>KinForge exists because complicated people need tools with room for complicated lives and complicated stories. If your family is complicated, if you are complicated, if you are a social worker trying to understand care context, if you are a genealogist or historian following evidence, or if you are a famous writer creating a character with many relationships and traits, you need more than a narrow chart with a few boxes.</p><p>Existing services often did not provide enough of the right features for complicated families, complicated people, famous writers, complex characters, large fictional casts, histories, social-work networks, roleplay worlds, or RPG campaigns. KinForge was built so users would not have to flatten their work into a tool too small to hold it.</p></div></article><article><span class="story-icon">5</span><div><h3>So they studied the whole pattern</h3><p>After years of trying existing services, Dreams of Serene Landscapes turned that experience into focused research. They studied what went wrong through SWOT analysis: strengths, weaknesses, opportunities, and threats across existing websites and apps. Some tools offered the wrong features. Others offered too few. Some were unusable, incomplete, or simply not competent enough for real needs.</p><p>During the two-month deeper research and build push, they studied pros, cons, missing pieces, unfair limits, pricing, accessibility problems, crashes, cramped layouts, and the moments where users were forced to work around the app instead of being supported by it. While too many people seemed content to sit back and watch users struggle through the same cycle, Dreams of Serene Landscapes decided to act. They poured their heart, mind, blood, sweat, tears, brain juice, and energy into breaking that cycle of exploitative app experiences and turning those lessons into KinForge.</p></div></article><article><span class="story-icon">6</span><div><h3>And KinForge became bigger than family trees</h3><p>Dreams of Serene Landscapes built KinForge to make genealogy, genograms, family history, fictional lineages, historical networks, social-work mapping, RPG campaigns, roleplay worlds, records, reports, and worldbuilding more accessible, inclusive, and practical.</p><p>That is why KinForge is not only for family. It is for families, social workers, writers, genealogists, historians, roleplayers, RPG players, educators, students, nonprofits, researchers, creative worlds, complex characters, real records, care networks, and anyone who needs a clearer way to map relationships and protect context.</p></div></article><article><span class="story-icon">7</span><div><h3>Accessibility and inclusivity became the standard</h3><p>As advocates for accessibility and inclusivity, Dreams of Serene Landscapes could not sit by while people struggled with tools that were too expensive, unfairly expensive, inaccessible, incomplete, cramped, or too narrow. KinForge was created to help, with accessibility features, flexible relationship tools, support forms, feedback paths, and a commitment to keep improving around real user needs.</p><p>The values behind KinForge include accessibility, affordable pricing, bringing light to the importance of genealogy, respect for complicated relationships, inclusivity across real and fictional work, and the belief that people deserve tools that meet their needs without making them fight for basic clarity.</p></div></article><article><span class="story-icon">8</span><div><h3>Updates had to earn trust too</h3><p>Another issue Dreams of Serene Landscapes found was that many updates did not seem to meet the needs of the people relying on them. Sometimes apps or services changed in ways that ignored real user problems. Other times, they broke down, stopped working, or became unreliable at the exact moment users needed them most. That left many people feeling insecure, anxious, and unsure whether their work, records, stories, or projects were safe.</p><p>KinForge is meant to answer that fear with clearer care. Dreams of Serene Landscapes tries to understand what users actually need, avoid giving false hope, communicate honestly about changes, and keep users informed when updates affect the app. Every update should be transparent, purposeful, and shaped around real expectations as much as possible. The goal is not to pretend every request can appear instantly, but to listen seriously, explain what is happening, and keep improving in a way that respects the people depending on the product.</p></div></article><article><span class="story-icon">9</span><div><h3>Protection had to be part of the promise</h3><p>KinForge was also designed to feel modern and dependable across platforms and browsers. Dreams of Serene Landscapes wanted a dynamic app with cloud protection, stronger privacy expectations, no one sneaking into your data, no one stealing your stories and taking your copyright, and no more crammed, hard-to-read, crash-prone experiences on your devices.</p><p>Another problem Dreams of Serene Landscapes noticed was that some apps felt far too easy to break into or exploit. Hackers and scammers are getting smarter, and users need stronger protection instead of vague promises. Real-world breaches show why this matters: Equifax exposed personal information affecting about 147 million people after failures to secure its network; 23andMe confirmed a 2023 credential-stuffing breach involving sensitive profile and relationship information; and LastPass disclosed that attackers copied a backup of customer vault data from cloud storage, even though sensitive vault fields were encrypted. Sources: FTC Equifax settlement, 23andMe security update and regulator findings, and LastPass security notices.</p><p>KinForge answers that concern with stronger security expectations and heavily encrypted user data, so private records, stories, research, and exports are treated with the seriousness they deserve.</p><p>KinForge is meant to help users protect their work, stories, records, copyright, and context, whether they are using the public app, the free trial, KinForge Genealogy Studio Suite, or approved KinForge Genealogy Special Access Edition.</p></div></article><article><span class="story-icon">10</span><div><h3>The story is still being built</h3><p>KinForge may not have every feature every user wants immediately. That is why support forms, contribution forms, and feedback paths matter. Dreams of Serene Landscapes wants users to help shape what comes next, because their support and feedback mean the world to the project and help the app serve people better.</p><p>This is their answer to a problem too many services left unresolved. KinForge was built to become a better, fairer, more inclusive relationship studio; to surpass tools that failed users; and, most importantly, to help people feel supported instead of boxed in.</p></div></article></div><div class="founding-callouts" aria-label="What KinForge stands for"><article><strong>Accessible</strong><span>Built for people with different needs, disabilities, budgets, devices, browsers, and ways of learning.</span></article><article><strong>Affordable</strong><span>Created as a fairer answer to unreasonable pricing, incomplete trials, and limited free versions.</span></article><article><strong>Capable</strong><span>Designed for genealogy, care context, writing, history, roleplay, RPG worlds, complicated people, and complex records.</span></article><article><strong>Protected</strong><span>Focused on cloud protection, story ownership, copyright respect, readable layouts, and safer exports.</span></article></div><div class="founding-finale"><span aria-hidden="true">+</span><p>Subscriptions, support, and feedback help KinForge keep improving and help Dreams of Serene Landscapes continue this mission: to make the world a more inclusive and better place, one relationship map, one protected story, one fairer tool, and one user at a time.</p></div></div>`;

const tutorialLessons = [
  {
    title: "Start with Special Access safely",
    text: "Open the Special Access screen, enter the approved private code, confirm the copyright and credit agreement, and keep the Special Access code private.",
    frames: ["Open the Special Access welcome screen.", "Enter the private Special Access code.", "Review the credit and copyright notice.", "Keep the private access code secure."],
    narration: ["Welcome to KinForge Genealogy Special Access Edition.", "Start by entering the private Special Access code you were given.", "This edition is approved no-cost access, not copyright-free access.", "Keep the private code secure."]
  },
  {
    title: "Create your first tree",
    text: "Create a tree for family history, social-work context, historical research, fiction, roleplay, RPG campaigns, or other relationship-mapping work.",
    frames: ["Choose Create Tree.", "Name the tree clearly.", "Pick the purpose of the project.", "Save the tree before adding people."],
    narration: ["Choose Create Tree from the workspace.", "Give your tree a clear name so it is easy to find later.", "Select the purpose that best matches your work.", "Save the tree, then begin adding people and records."]
  },
  {
    title: "Add people and relationships",
    text: "Add profiles, connect relationships, write notes, and keep real people, fictional characters, and historical records organized responsibly.",
    frames: ["Add the first person.", "Fill in profile details.", "Connect relatives or relationship links.", "Add careful notes and sources."],
    narration: ["Add the first person to the tree.", "Fill in names, dates, notes, and any context you have permission to store.", "Connect relatives, care links, fictional relationships, or campaign roles.", "Add sources and notes so the tree is useful later."]
  },
  {
    title: "Export with credit",
    text: "Before downloading GEDCOM, documents, reports, PDFs, CSVs, backups, or other exports, confirm the required KinForge/Dreams credit and copyright rule.",
    frames: ["Open Export or Download.", "Review the export agreement.", "Choose the file type.", "Download the credited file."],
    narration: ["Open the export or download area when you are ready.", "Review the agreement before creating any file.", "Choose the file type you need, such as GEDCOM, document, PDF, report, CSV, or backup.", "Download the file with the required KinForge and Dreams of Serene Landscapes copyright and credit notice."]
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
}

function redirect(location, status = 302) {
  return new Response(null, { status, headers: { Location: location, "Cache-Control": "no-store" } });
}

function pageShell(path, page) {
  const links = nav.map(([href, label]) => href === "/about" ? aboutMenu(path) : `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  const mobileAboutOpen = path === "/about" || path === "/story" || path.startsWith("/about/");
  const mobileAbout = `<details class="mobile-submenu"${mobileAboutOpen ? " open" : ""}><summary${mobileAboutOpen ? ' aria-current="page"' : ""}>About Us</summary><div>${aboutNav.map(([href, label]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</div></details>`;
  const mobileLinks = `${nav.map(([href, label]) => href === "/about" ? `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>` : `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`).join("")}${mobileAbout}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="kinforge-build" content="elevenlabs-20260928">
  <title>${escapeHtml(page.title)} | KinForge Special Access</title>
  <meta name="description" content="${escapeHtml(page.lead)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta property="og:site_name" content="KinForge Genealogy Special Access Edition">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.lead)}">
  <style>${styles()}${dynamicNavStyles()}</style>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="topbar">
    <a class="brand" href="/" aria-label="KinForge Genealogy Special Access Edition home">
      <span class="mark">KF</span>
      <span>KinForge<small>Special Access Edition</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary">${links}</nav>
    <details class="mobile-nav">
      <summary aria-label="Open Special Access menu"><span class="hamburger-lines" aria-hidden="true"><i></i><i></i><i></i></span><span>Menu</span></summary>
      <nav aria-label="Mobile Primary">${mobileLinks}</nav>
    </details>
  </header>
  <main id="main">
    ${specialAccessGate}
    <section class="hero">
      <div>
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="lead">${escapeHtml(page.lead)}</p>
        <div class="actions">
          <a class="button primary" href="#access-gate-title">Enter special access code</a>
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
    <div data-protected-content>${page.body()}</div>
  </main>
  <footer>
    <p><strong>KinForge Genealogy Special Access Edition</strong></p>
    <p>Product of Dreams of Serene Landscapes. Copyright 2026 Dreams of Serene Landscapes. All rights reserved.</p>
    <nav aria-label="Footer">${links}<a href="/go/main-site">Main Site</a></nav>
  </footer>
  <script>${clientScript()}</script>
</body>
</html>`;
}

function homePage() {
  return `<section class="section grid">
    <div>
      <p class="eyebrow">Same KinForge workspace</p>
      <h2>Approved access for the fuller KinForge experience</h2>
      <p>Special Access Edition is for approved close/special people and approved FOP-style requests. It uses a private Special Access code first, then the official KinForge downloads, tutorials, support, and legal terms.</p>
      <p>It is designed for genealogy, social-work genograms, writers, historians, roleplayers, RPG players, educators, students, nonprofits, and story-world continuity.</p>
    </div>
    <div class="cards">
      ${card("Code-gated downloads", "Approved users open the protected official download page and enter their private code.", "/downloads")}
      ${card("Request access", "New users request approval through support before using the Special Access Edition.", "/request-access")}
      ${card("Copyright rules", "Exports and documents keep KinForge/Dreams credit and copyright notices.", "/rules")}
      ${card("Contribute ideas", "Send feedback, feature suggestions, tutorial needs, and accessibility improvements.", "/contribute")}
      ${card("Tutorials", "Learn the app through step-by-step official tutorials.", "/tutorials")}
    </div>
  </section>${specialAccessMirrorSection()}${storyBand()}`;
}

function downloadsPage() {
  return `<section class="section grid">
    <div>
      <p class="eyebrow">Special Access downloads</p>
      <h2>Download the Special Access Edition after approval</h2>
      <p>Special Access Edition has its own app packages, installers, portable builds, and web app entry. These are separate from the public demo and paid public editions.</p>
      <p>After approval, the user enters the private Special Access code to unlock the dedicated downloads and web app entry for this edition. The public create-account flow is not the landing flow for Special Access.</p>
      <div class="actions"><a class="button primary" href="#special-access-downloads">View Special Access files</a><a class="button secondary" href="/request-access">Request approval first</a></div>
    </div>
    <div class="cards" id="special-access-downloads">${downloadOptions.map(([title, text]) => card(title, text, "#special-access-downloads")).join("")}</div>
  </section>`;
}

function requestPage() {
  return `<section class="section split">
    <div>
      <h2>What to include in a request</h2>
      <p>Explain who you are, why Special Access Edition is appropriate, how KinForge will be used, and whether exports will be shared publicly, privately, commercially, or in a care/research context.</p>
      <p>If approved, Dreams of Serene Landscapes provides the Special Access code or approved access path. The user starts by entering that private code, then uses the Special Access web app and downloadable app packages.</p>
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
    ${legalAuthorityNotice}
    <div class="cards">
      ${card("Credit remains required", "Users must credit KinForge and Dreams of Serene Landscapes when asked or when the app/export requires it.", "/go/terms")}
      ${card("Copyright remains required", "GEDCOM, Word/RTF-style documents, PDFs, reports, HTML, JSON backups, CSVs, and other files keep the copyright notice.", "/go/terms")}
      ${card("No automatic approval", "Special Access Edition approval may be limited, reviewed, denied, or revoked if rules are not followed.", "/request-access")}
      ${card("Privacy still matters", "Real people, sensitive notes, social-work records, and family records must be handled carefully.", "/go/privacy")}
    </div>
  </section>`;
}

function specialAccessMirrorSection() {
  return `<section class="section special-access-bridge" aria-labelledby="special-access-mirror-title">
    <div class="special-access-graphic" aria-hidden="true"><span>KF</span><i></i><i></i><i></i></div>
    <div>
      <p class="eyebrow">Same polished site, protected by code</p>
      <h2 id="special-access-mirror-title">Everything public users see, with Special Access protection</h2>
      <p>Special Access Edition keeps the same public-facing About Us, Founding Story, Mission, Vision, Values, legal pages, tutorials, and support pathways, but uses its own Special Access downloadable apps and web app. The difference is that the Special Access Edition starts with a private Special Access code for approved users.</p>
    </div>
    <div class="actions"><a class="button primary" href="/downloads">Open downloads</a><a class="button secondary" href="/terms">Read terms</a></div>
  </section>`;
}

function privacyPolicyPage() {
  return `<section class="section">
    <h2>Privacy Policy</h2>
    ${legalAuthorityNotice}
    <div class="cards">
      ${card("Code-gated access", "Special Access content is intended for approved users with a private access code. Do not share your code or use a code intended for another person.", "/request-access")}
      ${card("Private records", "KinForge trees, social-work context, family history, character worlds, exports, reports, and sensitive notes should only be shared with the people you intend to share them with.", "/rules")}
      ${card("Support and replies", "Support requests may include your name, reply email, request type, and message so KinForge Support can respond.", "/request-access")}
      ${card("Downloads and exports", "Downloaded files, GEDCOMs, reports, PDFs, backups, CSVs, and documents can contain private information. Review before sharing.", "/downloads")}
    </div>
    <p>Special Access does not make private information public. Users remain responsible for respecting living people, invited members, sensitive records, copyright, and local privacy laws.</p>
  </section>`;
}

function termsPage() {
  return `<section class="section">
    <h2>Terms & Conditions</h2>
    ${legalAuthorityNotice}
    <div class="cards">
      ${card("Special Access is not copyright-free", "No-cost approval does not remove the required KinForge and Dreams of Serene Landscapes credit from app materials and exports.", "/rules")}
      ${card("Do not redistribute private builds", "Do not repost installers, copy the source, remove credits, bypass access controls, or share Special Access codes.", "/downloads")}
      ${card("Legal consequences", "Misuse may result in revoked access, account removal, refused support, takedown requests, legal notice, IP enforcement, or civil claims.", "/rules")}
      ${card("Ask first", "If you need copyright-free permission or unusual public/commercial use, request written approval first.", "/request-access")}
    </div>
    <p>These terms are product rules for using KinForge Special Access Edition. They are not a substitute for advice from a qualified lawyer.</p>
  </section>`;
}

function contributePage() {
  return `<section class="section split">
    <div>
      <h2>Contribute & Help Our Cause</h2>
      <p>Use this page to prepare feature ideas, feedback, feature addition suggestions, accessibility notes, bug reports, tutorial requests, or other improvements for the Special Access Edition.</p>
      <p>Official submissions are routed through the main KinForge contribution form so Dreams of Serene Landscapes can keep one review queue for the free trial, paid Suite, public website, and Special Access Edition.</p>
      <div class="cards value-grid">
        ${iconCard("F", "Feature ideas", "Suggest new tools, reports, exports, relationship types, accessibility options, or workflows.", "/go/contribute")}
        ${iconCard("T", "Tutorial requests", "Ask for more elaborate walkthroughs, subtitles, narration scripts, or app-learning pages.", "/go/contribute")}
        ${iconCard("A", "Accessibility help", "Share disability access needs, language issues, screen-reader concerns, or clearer learning paths.", "/go/contribute")}
        ${iconCard("S", "Special Access feedback", "Explain what approved no-cost Special Access users need while keeping credit and copyright rules intact.", "/go/contribute")}
      </div>
    </div>
    <form class="callout contribute-form" data-contribution-form>
      <h3>Contribution draft</h3>
      <label>Name<input name="name" autocomplete="name" maxlength="100"></label>
      <label>Email for replies<input name="email" type="email" autocomplete="email" required></label>
      <label>I am using KinForge as<select name="role"><option>Writer</option><option>DND player</option><option>Historian</option><option>Roleplayer</option><option>RPG player</option><option>Genealogist</option><option>Social worker</option><option>Student</option><option>Nonprofit</option><option>Educator</option><option>Approved Special Access user</option><option>Other</option></select></label>
      <label>Contribution type<select name="type"><option>New feature suggestion</option><option>Feature addition request</option><option>Feedback about an existing feature</option><option>Bug report</option><option>Accessibility suggestion</option><option>Tutorial request</option><option>Special Access Edition feedback</option><option>Other KinForge improvement</option></select></label>
      <label>Suggestion or feedback<textarea name="message" rows="7" required placeholder="Describe the idea, who it helps, and what would make KinForge better."></textarea></label>
      <label>Extra context<textarea name="context" rows="4" placeholder="Optional: examples, links, app version, accessibility context, or anything else useful."></textarea></label>
      <label class="checkline"><input name="permissionToReply" type="checkbox" checked> Allow support to reply to this email</label>
      <div class="actions"><button type="submit">Prepare contribution</button><a class="button secondary" href="/go/contribute">Open official form</a></div>
      <p class="narration-status muted" data-contribution-status aria-live="polite"></p>
    </form>
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

function iconCard(icon, title, text, href = "/about/values") {
  return `<article class="visual-card"><span class="icon-badge" aria-hidden="true">${escapeHtml(icon)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p><a href="${href}">Open</a></article>`;
}

function missionGraphic() {
  return `<div class="mission-graphic" aria-label="KinForge mission areas"><span>Access</span><span>Relationships</span><span>Records</span><span>Worlds</span></div>`;
}

function visionGraphic() {
  return `<div class="vision-map" aria-label="KinForge vision"><span>Family history</span><span>Care context</span><span>Historical memory</span><span>Fictional continuity</span><span>Creative worlds</span></div>`;
}

function valuesGraphic() {
  return `<div class="cards value-grid">
    ${iconCard("A", "Accessibility", "Make KinForge accessible to as many people as possible, including people with special needs, disabilities, and different learning styles.")}
    ${iconCard("$", "Affordable pricing", "Offer fairer paths for people who need genealogy and relationship tools without unreasonable plan costs.")}
    ${iconCard("G", "Genealogy matters", "Bring light to family history, identity, cultural memory, and the stories that connect people across generations.")}
    ${iconCard("+", "Inclusivity", "Support families, care networks, histories, fiction, roleplay, RPG worlds, education, nonprofits, and research.")}
    ${iconCard("U", "User ownership", "Help users keep control of accounts, exports, backups, and creative or research work.")}
    ${iconCard("R", "Respectful records", "Treat real people, sensitive information, and private histories with care.")}
    ${iconCard("*", "Better tools", "Keep improving features that existing services often leave unfinished, overpriced, or too narrow.")}
  </div>`;
}

function missionStoryGraphic() {
  return `<div class="story-proof-grid" aria-label="How the founding story shapes the KinForge mission">
    ${iconCard("T", "Honest trials", "Users deserve enough real access to understand whether a tool is worth trusting.", "/about/founding-story")}
    ${iconCard("P", "Fair pricing", "The mission answers unfair pricing pressure with clearer value, reasonable plans, and approved special-access routes.", "/about/mission")}
    ${iconCard("F", "Fuller features", "KinForge is built for complicated families, care networks, archives, fictional casts, roleplay worlds, and records.", "/about/mission")}
    ${iconCard("S", "Safer data", "Private records, stories, research, and exports deserve stronger safeguards and clearer ownership rules.", "/about/values")}
    ${iconCard("U", "Transparent updates", "KinForge aims for honest update communication, fewer false hopes, and a feedback loop shaped by real users.", "/contribute")}
    ${iconCard("L", "7,000+ language communities", "The About pages support selectable English style and browser or device translation paths for wider access.", "/about")}
  </div><div class="promise-flow" aria-label="KinForge mission flow"><span>Years of trying tools</span><span>SWOT research</span><span>Fairer product design</span><span>Accessible relationship studio</span></div>`;
}

function visionStoryGraphic() {
  return `<div class="vision-proof" aria-label="KinForge future shaped by the founding story"><article><strong>From limited trials</strong><span>To a product where people can evaluate real value before paying.</span></article><article><strong>From cramped charts</strong><span>To relationship maps for families, cases, history, fiction, and RPG worlds.</span></article><article><strong>From pricing anxiety</strong><span>To clearer plans, discounts, trials, special access requests, and ethical value.</span></article><article><strong>From fragile trust</strong><span>To safer data expectations, transparent updates, feedback, and readable exports.</span></article></div>`;
}

function valuesStoryGraphic() {
  return `<div class="values-proof" aria-label="Values turned into product promises"><article><span>01</span><strong>Access before pressure</strong><p>Users should understand KinForge before being pushed to decide.</p></article><article><span>02</span><strong>Reasonable pricing</strong><p>Pricing should make ethical sense in the real economy.</p></article><article><span>03</span><strong>Complex people count</strong><p>KinForge is for complicated families, social workers, writers, historians, roleplayers, RPG players, educators, nonprofits, and researchers.</p></article><article><span>04</span><strong>Protection is respect</strong><p>Private records, stories, exports, copyright, and sensitive context should be treated carefully.</p></article><article><span>05</span><strong>Updates should be honest</strong><p>KinForge should communicate change clearly, listen seriously, and keep improving around real needs.</p></article><article><span>06</span><strong>Language should welcome people</strong><p>American English, British English, and translation-friendly pages help more people understand the About content.</p></article></div>`;
}

function languageAccessPanel() {
  return `<section class="section language-access" aria-labelledby="language-access-title" data-language-panel><div><p class="eyebrow">Language access</p><h2 id="language-access-title" data-language-title>Choose your reading language</h2><p data-language-copy="intro">KinForge is meant to sound natural to the people using it. Choose American English, British English, or another reading language from one dropdown.</p><p data-language-copy="reach">For readers who prefer another language, the public website and Special Access website are built to work smoothly with browser and device translation tools. That gives people from 7,000+ language communities a practical way to read the About Us, Founding Story, Mission, Vision, and Values pages in their own language when their translation provider supports it.</p><div class="language-controls single-language" aria-label="Language controls"><label>Language <select data-reader-language aria-label="Select language and wording style"><option value="en-US">English - American English</option><option value="en-GB">English - British English</option><option value="zh">Chinese</option><option value="es">Spanish</option><option value="fr">French</option><option value="de">German</option><option value="hi">Hindi</option><option value="ar">Arabic</option><option value="pt">Portuguese</option><option value="id">Bahasa Indonesia</option><option value="ms">Bahasa Melayu</option><option value="ja">Japanese</option><option value="ko">Korean</option><option value="other">All other 7,000+ language communities</option></select></label><button type="button" data-apply-language>Apply language choice</button><p class="language-status" data-language-status aria-live="polite">Current choice: English - American English.</p></div></div><div class="language-cards" aria-label="Language and localisation promises"><article><strong>English variants</strong><span data-language-card-copy="english">American English and British English change the visible wording, grammar, and spelling guidance.</span></article><article><strong>Other languages</strong><span data-language-card-copy="translation">For non-English languages, use browser or device translation to view the About pages in your chosen language where available.</span></article><article><strong>7,000+ language communities</strong><span data-language-card-copy="all">Browser, device, and translation-provider tools can help more readers reach the About content.</span></article></div></section>`;
}

function aboutPage() {
  return aboutLinks() + languageAccessPanel() + storyBand() + `<section class="section">
    <div class="cards">
      ${iconCard("S", "Founding Story", "KinForge began after years of trying existing tools and finding that too many were incomplete, inaccessible, unfairly limited in trials, or too expensive for complex needs.", "/about/founding-story")}
      ${iconCard("M", "Mission", "Give people a fairer, clearer, and more capable way to understand relationships, preserve stories, map communities, and build worlds.", "/about/mission")}
      ${iconCard("V", "Vision", "A world where family history, care context, historical memory, fictional continuity, and creative worldbuilding are easier to protect and understand.", "/about/vision")}
      ${iconCard("*", "Values", "Accessibility, affordable pricing, genealogy awareness, inclusivity, user ownership, respectful records, and better tools.", "/about/values")}
    </div>
  </section>`;
}

function foundingStoryPage() {
  return aboutLinks() + languageAccessPanel() + `<section class="section">${founderStatement}</section>`;
}

function missionPage() {
  return aboutLinks() + languageAccessPanel() + `<section class="section">
    <h2>Mission</h2>
    <p>KinForge Genealogy Special Access Edition turns the founding story into a practical promise: people should not have to choose between a weak free trial, an overpriced plan, unsafe data practices, inaccessible layouts, or a tool too small for complicated families, cases, histories, characters, and worlds.</p>
    ${missionGraphic()}
    ${missionStoryGraphic()}
    <p>Its mission is to give approved no-cost users fairer access, clearer value, meaningful features, safer handling of records and creative work, transparent updates, and support paths while still keeping the copyright and credit rules that protect Dreams of Serene Landscapes and KinForge.</p>
  </section>`;
}

function visionPage() {
  return aboutLinks() + languageAccessPanel() + `<section class="section">
    <h2>Vision</h2>
    <p>The vision is a relationship studio that breaks the old cycle described in the founding story: limited trials, cramped features, confusing pricing, weak protection, and updates that make users anxious instead of supported.</p>
    ${visionGraphic()}
    ${visionStoryGraphic()}
    <p>KinForge aims for a future where people can understand relationship context without fighting the tool, creators can protect long-running worlds and copyright, researchers can keep records and sources readable, and users from 7,000+ language communities can reach the About content through clear English choices and translation-friendly pages.</p>
  </section>`;
}

function valuesPage() {
  return aboutLinks() + languageAccessPanel() + `<section class="section">
    <h2>Values</h2>
    <p>KinForge values are not decorative words. They are the operating rules that came out of years of trying existing services, studying what failed, and deciding that users deserved something fairer, safer, clearer, more inclusive, and more useful.</p>
    ${valuesGraphic()}
    ${valuesStoryGraphic()}
  </section>`;
}

function tutorialsPage() {
  return `<section class="section split">
    <div>
      <h2>Interactive tutorial library</h2>
      <p>Use these Special Access walkthroughs to learn the app step by step. Each lesson includes on-screen demo steps, subtitles, and a written tutorial script.</p>
      <p>For the full public tutorial library, open the main KinForge tutorial page.</p>
      <div class="actions"><a class="button primary" href="/go/tutorials">Open main tutorial library</a><a class="button secondary" href="/go/terms">Terms & Conditions</a><a class="button secondary" href="/go/privacy">Privacy Policy</a></div>
    </div>
    <div class="cards tutorial-list">${tutorialLessons.map((lesson, index) => card(lesson.title, lesson.text, `#tutorial-${index + 1}`)).join("")}</div>
  </section>
  ${tutorialLessons.map(tutorialLesson).join("")}`;
}

function tutorialLesson(lesson, index) {
  return `<section class="section tutorial-lesson" id="tutorial-${index + 1}">
    <div>
      <p class="eyebrow">Tutorial ${index + 1}</p>
      <h2>${escapeHtml(lesson.title)}</h2>
      <p>${escapeHtml(lesson.text)}</p>
      ${visualWalkthrough(lesson)}
    </div>
    ${narrationPlayer(lesson)}
  </section>`;
}

function visualWalkthrough(lesson) {
  const frames = lesson.frames.map((frame, index) => `<article class="visual-frame"${index === 0 ? "" : " hidden"} data-visual-frame>
    <div class="mock-app">
      <div class="mock-sidebar"><span></span><span></span><span></span></div>
      <div class="mock-canvas">
        <div class="mock-toolbar"><span></span><span></span><span></span></div>
        <div class="mock-tree">
          <span class="mock-person primary"></span>
          <span class="mock-person"></span>
          <span class="mock-person"></span>
          <span class="mock-person small"></span>
          <span class="mock-person small"></span>
        </div>
        <p class="mock-highlight">${escapeHtml(frame)}</p>
      </div>
    </div>
  </article>`).join("");
  return `<div class="visual-demo" data-visual-demo>
    <div class="visual-toolbar">
      <h3>Watch the app walkthrough</h3>
      <p class="visual-status" data-visual-status>Step 1 of ${lesson.frames.length}</p>
    </div>
    <div class="visual-stage">${frames}</div>
    <div class="visual-controls">
      <button type="button" data-visual-prev>Previous</button>
      <button type="button" data-visual-play>Play demo</button>
      <button type="button" data-visual-next>Next</button>
    </div>
  </div>`;
}

function narrationPlayer(lesson) {
  return `<aside class="tutorial-script">
    <h3>Tutorial script</h3>
    <ol>${lesson.narration.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ol>
  </aside>`;
}

function storyBand() {
  return `<section class="section story">
    ${founderStatement}
    <div class="chart-grid">${donutChart}${comparisonBarChart}</div>
    ${missionGraphic()}
    ${visionGraphic()}
  </section>`;
}

function card(title, text, href) {
  return `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p><a href="${href}">Open</a></article>`;
}

function clientScript() {
  return `(function(){function q(a,b){return Array.prototype.slice.call((b||document).querySelectorAll(a))}function initAccessGate(){var gate=document.querySelector("[data-access-gate]"),content=document.querySelector("[data-protected-content]"),form=document.querySelector("[data-access-form]"),status=document.querySelector("[data-access-status]");if(!gate||!content)return;function unlocked(){return localStorage.getItem("kinforgeSpecialAccessUnlocked")==="true"}function setUnlocked(value){if(value){localStorage.setItem("kinforgeSpecialAccessUnlocked","true");gate.hidden=true;content.hidden=false}else{gate.hidden=false;content.hidden=true}}setUnlocked(unlocked());if(form)form.addEventListener("submit",function(event){event.preventDefault();var code=(new FormData(form).get("code")||"").toString().trim();if(code.length<6){if(status)status.textContent="Enter the Special Access code you were given.";return}localStorage.setItem("kinforgeSpecialAccessCodeHint",code.slice(0,3)+"...");setUnlocked(true);if(status)status.textContent="Special Access unlocked on this device."})}initAccessGate();q("[data-visual-demo]").forEach(function(demo){var frames=q("[data-visual-frame]",demo),status=demo.querySelector("[data-visual-status]"),prev=demo.querySelector("[data-visual-prev]"),next=demo.querySelector("[data-visual-next]"),play=demo.querySelector("[data-visual-play]"),i=0,timer=null;function show(n){i=(n+frames.length)%frames.length;frames.forEach(function(frame,index){frame.hidden=index!==i});if(status)status.textContent="Step "+(i+1)+" of "+frames.length}function stop(){if(timer){clearInterval(timer);timer=null;if(play)play.textContent="Play demo"}}if(prev)prev.addEventListener("click",function(){stop();show(i-1)});if(next)next.addEventListener("click",function(){stop();show(i+1)});if(play)play.addEventListener("click",function(){if(timer){stop();return}play.textContent="Pause demo";timer=setInterval(function(){show(i+1)},2200)});show(0)});q("[data-language-panel]").forEach(function(panel){var reader=panel.querySelector("[data-reader-language]"),apply=panel.querySelector("[data-apply-language]"),status=panel.querySelector("[data-language-status]"),params=new URLSearchParams(window.location.search),query=params.get("lang"),saved=query||localStorage.getItem("kinforgeReaderLanguage")||(((navigator.language||"").toLowerCase().indexOf("us")>-1)?"en-US":"en-GB");if(reader)reader.value=saved;var copy={"en-US":{title:"Choose the language that works best for you",intro:"KinForge is designed to feel natural for people using American English. This setting uses U.S. spelling, grammar, vocabulary, and phrasing across the page.",note:"The page is using American English wording."},"en-GB":{title:"Choose the language that suits you best",intro:"KinForge is written to read naturally for people using British English. This setting favours British spelling, grammar, vocabulary, and phrasing across the page.",note:"The page is using British English wording."}},codes={"en-US":"en-US","en-GB":"en-GB",zh:"zh",es:"es",fr:"fr",de:"de",hi:"hi",ar:"ar",pt:"pt",id:"id",ms:"ms",ja:"ja",ko:"ko",other:"en"},translated={zh:1,es:1,fr:1,de:1,hi:1,ar:1,pt:1,id:1,ms:1,ja:1,ko:1},british=[["localization","localisation"],["Localization","Localisation"],["localize","localise"],["localizing","localising"],["localized","localised"],["organization","organisation"],["Organization","Organisation"],["organize","organise"],["organizing","organising"],["organized","organised"],["behavior","behaviour"],["Behavior","Behaviour"],["color","colour"],["Color","Colour"],["favorite","favourite"],["Favorite","Favourite"],["center","centre"],["Center","Centre"],["program","programme"],["Program","Programme"],["toward","towards"],["Toward","Towards"],["learned","learnt"],["Learned","Learnt"],["canceled","cancelled"],["Canceled","Cancelled"],["modeling","modelling"],["Modeling","Modelling"],["license","licence"],["License","Licence"],["practice","practise"],["Practice","Practise"]],american=british.map(function(pair){return[pair[1],pair[0]]}),britishPhrases=[["Choose the language that works best for you","Choose the language that suits you best"],["KinForge is designed to feel natural for people using American English.","KinForge is written to read naturally for people using British English."],["This setting uses U.S. spelling, grammar, vocabulary, and phrasing across the page.","This setting favours British spelling, grammar, vocabulary, and phrasing across the page."],["The page is using American English wording.","The page is using British English wording."],["Get started free","Start for free"],["Get started for free","Start for free"],["Official app","Official application"],["official app","official application"],["Use cases","Who it is for"],["use cases","who it is for"],["Help & support","Help and support"],["4-day free trial","four-day free trial"],["safer workspace","more secure workspace"],["safe workspace","secure workspace"],["data practices","data handling"],["feedback paths","feedback routes"],["support paths","support routes"],["meaningful features","properly useful features"],["people using it","people who use it"],["works best for you","suits you best"],["what comes next","what happens next"],["user ownership","user control"],["Users should","People should"],["users deserve","people deserve"],["Users deserve","People deserve"],["user needs","people's needs"],["real users","real people"],["learn","find out"],["Learn","Find out"],],americanPhrases=britishPhrases.map(function(pair){return[pair[1],pair[0]]});function replaceWords(text,pairs){return pairs.reduce(function(value,pair){return value.replace(new RegExp("\\b"+pair[0]+"\\b","g"),pair[1])},text)}function applyEnglishVariant(style){var phrasePairs=style==="en-GB"?britishPhrases:americanPhrases,pairs=style==="en-GB"?british:american,walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){var parent=node.parentElement;if(!parent||["SCRIPT","STYLE","TEXTAREA","INPUT","SELECT","OPTION","SUMMARY","NAV","HEADER","FOOTER","BUTTON","A"].indexOf(parent.tagName)>-1||parent.closest("nav,header,footer,.topbar"))return NodeFilter.FILTER_REJECT;if(!node.nodeValue||!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}}),nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(function(node){node.nodeValue=replaceWords(replaceWords(node.nodeValue,phrasePairs),pairs)})};function text(sel,value){q(sel,panel).forEach(function(node){node.textContent=value})}function currentUrl(value){var next=new URL(window.location.href);next.searchParams.set("lang",value);return next.toString()}function translateUrl(value){return "https://translate.google.com/translate?sl=en&tl="+encodeURIComponent(value)+"&u="+encodeURIComponent(currentUrl(value))}function update(){var value=reader&&reader.value||"en-US",selected=reader&&reader.selectedOptions&&reader.selectedOptions[0]?reader.selectedOptions[0].textContent:"English - American English",current=copy[value]||{title:"Choose your reading language",intro:"KinForge is meant to be readable in your own language where browser or device translation supports it. For English, choose American English or British English in this same dropdown.",note:"Use your browser or device translation tool for this language where available."};document.documentElement.lang=codes[value]||"en";document.documentElement.dir=value==="ar"?"rtl":"ltr";localStorage.setItem("kinforgeReaderLanguage",value);localStorage.setItem("kinforgeEnglishStyle",value==="en-GB"?"gb":"us");text("[data-language-title]",current.title);text('[data-language-copy="intro"]',current.intro);if(value==="en-US")text('[data-language-card-copy="english"]',"American English is active. KinForge uses U.S. spelling, grammar, and wording in this language panel.");else if(value==="en-GB")text('[data-language-card-copy="english"]',"British English is active. KinForge uses British spelling, grammar, and wording in this language panel.");else text('[data-language-card-copy="english"]',"English remains available as American English or British English in this same dropdown.");if(status)status.textContent="Current choice: "+selected+". "+current.note;if(value==="en-US"||value==="en-GB")applyEnglishVariant(value)}function reloadForChoice(){var value=reader&&reader.value||"en-US";localStorage.setItem("kinforgeReaderLanguage",value);localStorage.setItem("kinforgeEnglishStyle",value==="en-GB"?"gb":"us");if(translated[value]){window.location.assign(translateUrl(value));return}window.location.assign(currentUrl(value))}if(reader)reader.addEventListener("change",reloadForChoice);if(apply)apply.addEventListener("click",reloadForChoice);update()});q("[data-contribution-form]").forEach(function(form){var status=form.querySelector("[data-contribution-status]");form.addEventListener("submit",function(event){event.preventDefault();var data=new FormData(form);var text=["KinForge Special Access contribution draft","Name: "+(data.get("name")||""),"Email: "+(data.get("email")||""),"Role: "+(data.get("role")||""),"Type: "+(data.get("type")||""),"Permission to reply: "+(data.get("permissionToReply")?"yes":"no"),"","Suggestion or feedback:",data.get("message")||"","","Extra context:",data.get("context")||""].join("\\n");if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).catch(function(){})}var blob=new Blob([text],{type:"text/plain"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download="KinForge-Special-Access-contribution.txt";link.click();setTimeout(function(){URL.revokeObjectURL(url)},1000);if(status)status.textContent="Contribution draft prepared. Open the official form and paste the details there."})})})();`;
}

function styles() {
  return `:root{color-scheme:light;--ink:#201d28;--muted:#675c73;--line:rgba(44,35,58,.16);--paper:#fffdf8;--soft:#f4eff7;--accent:#6c4fa2;--accent2:#0f766e;--gold:#b98520}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}a{color:inherit}.skip{position:absolute;left:12px;top:-48px;z-index:10;background:var(--ink);color:white;padding:10px 14px}.skip:focus{top:12px}.topbar{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px clamp(18px,4vw,52px);background:rgba(255,253,248,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(14px)}.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-weight:850}.brand small{display:block;color:var(--muted);font-size:.78rem;font-weight:700}.mark{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:white;font-weight:900}nav{display:flex;align-items:center;flex-wrap:wrap;gap:12px}nav a,summary{text-decoration:none;color:var(--muted);font-weight:750}.nav-menu{position:relative}.nav-menu summary{list-style:none;cursor:pointer}.nav-menu summary::-webkit-details-marker{display:none}.nav-menu summary:after{content:"";display:inline-block;width:.45em;height:.45em;margin-left:.42em;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:translateY(-.18em) rotate(45deg)}.nav-menu div{position:absolute;right:0;top:calc(100% + 12px);min-width:190px;display:grid;gap:4px;padding:10px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 16px 42px rgba(32,29,40,.12)}.nav-menu:not([open]) div{display:none}.nav-menu div a{padding:9px 10px;border-radius:6px}.nav-menu div a:hover{background:var(--soft)}.subnav{margin:clamp(24px,5vw,52px) clamp(18px,5vw,72px) 0;padding:12px;border:1px solid var(--line);border-radius:8px;background:white}.subnav a{padding:9px 12px;border-radius:999px;background:var(--soft);color:#443652}.hero{min-height:84vh;display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,480px);gap:clamp(24px,5vw,72px);align-items:center;padding:clamp(54px,8vw,98px) clamp(18px,5vw,72px);background:linear-gradient(rgba(255,253,248,.92),rgba(255,253,248,.86)),radial-gradient(circle at 20% 20%,rgba(108,79,162,.22),transparent 32%),radial-gradient(circle at 85% 20%,rgba(15,118,110,.18),transparent 28%)}.eyebrow{margin:0 0 10px;color:var(--accent);text-transform:uppercase;font-size:.78rem;font-weight:900;letter-spacing:.08em}h1,h2,h3{margin:0;line-height:1.05;letter-spacing:0}h1{max-width:880px;font-size:clamp(3rem,8vw,7rem)}h2{font-size:clamp(2rem,4vw,4rem)}h3{font-size:1.2rem}p{color:var(--muted)}.muted{color:var(--muted)}.lead{max-width:740px;color:#3d3548;font-size:clamp(1.08rem,2vw,1.42rem)}.actions,.callout{display:flex;flex-wrap:wrap;gap:12px}.button,.cards a,button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:8px;padding:10px 16px;text-decoration:none;font-weight:850}.primary{background:var(--accent);color:white}.secondary,.cards a,button{border:1px solid var(--line);background:white;color:var(--accent)}button{font:inherit;cursor:pointer}.quiet{color:var(--accent2)}.hero-panel,.callout,.cards article,.visual-demo,.tutorial-script{border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.88);box-shadow:0 16px 42px rgba(32,29,40,.08)}.hero-panel,.cards article,.callout,.visual-demo,.tutorial-script{padding:24px}.hero-panel li,.callout li{margin:10px 0;color:var(--muted)}.notice{margin:clamp(24px,5vw,52px) clamp(18px,5vw,72px) 0;padding:18px 20px;border-left:6px solid var(--gold);background:#fff7df;color:#4a3820}.section{padding:clamp(54px,7vw,86px) clamp(18px,5vw,72px)}.grid,.split,.tutorial-lesson{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(24px,5vw,64px);align-items:start}.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.tutorial-list article{scroll-margin-top:90px}.visual-demo{margin-top:24px}.visual-toolbar,.visual-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.visual-status{margin:0;font-weight:800;color:var(--accent2)}.visual-stage{margin:18px 0}.visual-frame[hidden]{display:none}.mock-app{display:grid;grid-template-columns:90px minmax(0,1fr);min-height:280px;overflow:hidden;border:1px solid var(--line);border-radius:8px;background:#fbf9f1}.mock-sidebar{display:grid;align-content:start;gap:12px;padding:16px;background:#282232}.mock-sidebar span,.mock-toolbar span{display:block;height:14px;border-radius:999px;background:rgba(255,255,255,.6)}.mock-canvas{position:relative;padding:18px}.mock-toolbar{display:flex;gap:10px;margin-bottom:28px}.mock-toolbar span{width:70px;background:#ded6e8}.mock-tree{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:22px;align-items:center;min-height:130px}.mock-person{display:block;width:78px;height:54px;border-radius:8px;background:#dbeafe;border:2px solid #6c4fa2}.mock-person.primary{background:#e9d5ff}.mock-person.small{width:58px;height:44px;background:#ccfbf1}.mock-highlight{margin:18px 0 0;padding:14px;border-left:5px solid var(--gold);background:#fff7df;color:#4a3820;font-weight:850}.tutorial-script{position:sticky;top:92px}.tutorial-script ol{padding-left:20px}.tutorial-script li{margin:10px 0;color:var(--muted)}.visual-card{position:relative;padding-left:82px}.icon-badge{position:absolute;left:24px;top:24px;display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--soft);color:var(--accent);border:1px solid var(--line);font-weight:950}.mission-graphic,.vision-map{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 32px;padding:18px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.72)}.mission-graphic span,.vision-map span{display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:9px 14px;border-radius:999px;background:white;border:1px solid var(--line);color:var(--accent2);font-weight:850}.mission-graphic span:before,.vision-map span:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--gold);box-shadow:0 0 0 4px #fff7df}.vision-map span:before{background:var(--accent2);box-shadow:0 0 0 4px #ccfbf1}.contribute-form{display:grid;gap:14px}.contribute-form label{display:grid;gap:6px;color:var(--muted);font-weight:800}.contribute-form input,.contribute-form select,.contribute-form textarea{width:100%;min-width:0;border:1px solid var(--line);border-radius:8px;background:white;color:var(--ink);padding:10px 12px;font:inherit}.checkline{grid-template-columns:auto 1fr!important;align-items:start}.checkline input{width:auto!important;margin-top:6px}.language-access{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(280px,.9fr);gap:28px;align-items:center;margin-top:18px;margin-bottom:18px;padding:28px;border:1px solid var(--line);border-radius:8px;background:linear-gradient(135deg,#fffdf8,#fff 52%,#ecfdf5)}.language-access h2{margin-bottom:12px}.language-access p:last-child{margin-bottom:0}.language-cards{display:grid;gap:12px}.language-cards article{padding:16px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 10px 24px rgba(32,29,40,.08)}.language-cards strong{display:block;color:var(--accent);font-size:18px;margin-bottom:6px}.language-cards span{display:block;color:var(--muted);font-size:14px}.language-controls{display:grid;grid-template-columns:repeat(2,minmax(180px,1fr));gap:14px;margin-top:22px}.language-controls label{display:grid;gap:6px;color:var(--muted);font-weight:800}.language-controls select{width:100%;min-height:44px;border:1px solid var(--line);border-radius:8px;background:white;color:var(--ink);padding:10px 12px;font:inherit}.language-controls.single-language{grid-template-columns:minmax(220px,1fr) auto}.language-controls button{align-self:end}.language-status{grid-column:1/-1;margin:0;color:#3d3548;font-weight:800}.value-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.story-proof-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:24px 0}.story-proof-grid article,.vision-proof article,.values-proof article{border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 12px 30px rgba(32,29,40,.07)}.promise-flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:18px 0 30px;padding:16px;border:1px solid var(--line);border-radius:8px;background:linear-gradient(135deg,#fff,#ecfdf5)}.promise-flow span{position:relative;display:flex;align-items:center;min-height:50px;padding:10px 12px;border-radius:8px;background:#fff;color:#36514e;font-weight:850;border:1px solid rgba(15,118,110,.16)}.promise-flow span:not(:last-child):after{content:"";position:absolute;right:-10px;top:50%;width:10px;height:2px;background:#8bc3bd}.vision-proof{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:24px 0}.vision-proof article{padding:18px;background:linear-gradient(180deg,#fff,#f4eff7)}.vision-proof strong{display:block;color:var(--accent);font-size:1.08rem;margin-bottom:8px}.vision-proof span{display:block;color:var(--muted)}.values-proof{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:24px 0}.values-proof article{padding:18px}.values-proof span{display:inline-grid;place-items:center;width:38px;height:38px;border-radius:10px;background:var(--soft);color:var(--accent);font-weight:950;margin-bottom:12px}.values-proof strong{display:block;font-size:1.08rem;color:var(--ink);margin-bottom:8px}.values-proof p{margin:0}.columns{columns:2 320px;column-gap:42px;max-width:980px}.story{background:var(--soft)}.founding-feature{max-width:1080px;margin:0 auto;padding:clamp(24px,4vw,42px);border:1px solid var(--line);border-radius:8px;background:linear-gradient(135deg,#fffdf8,#f4eff7 48%,#ecfdf5);box-shadow:0 18px 54px rgba(32,29,40,.12);overflow:hidden}.founding-hero{display:grid;grid-template-columns:minmax(0,1fr) 230px;gap:clamp(20px,4vw,44px);align-items:center}.founding-lead{font-size:clamp(1.08rem,2vw,1.32rem);color:#3d3548}.founding-orbit{position:relative;display:grid;place-items:center;min-height:230px;border:1px solid var(--line);border-radius:8px;background:radial-gradient(circle,#fff 0 28%,#f4eff7 29% 48%,#ccfbf1 49% 70%,transparent 71%);animation:foundingFloat 6s ease-in-out infinite}.founding-orbit span{position:absolute;display:grid;place-items:center;min-width:70px;min-height:38px;padding:8px 10px;border-radius:999px;background:white;border:1px solid var(--line);box-shadow:0 10px 24px rgba(32,29,40,.12);font-size:13px;font-weight:900;color:var(--accent)}.founding-orbit span:nth-child(1){top:16px;left:50%;transform:translateX(-50%)}.founding-orbit span:nth-child(2){right:10px;top:50%;transform:translateY(-50%)}.founding-orbit span:nth-child(3){bottom:16px;left:50%;transform:translateX(-50%)}.founding-orbit span:nth-child(4){left:10px;top:50%;transform:translateY(-50%)}.founding-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:28px 0}.founding-stats article{padding:16px;border:1px solid var(--line);border-radius:8px;background:white;animation:foundingRise .7s ease both}.founding-stats article:nth-child(2){animation-delay:.08s}.founding-stats article:nth-child(3){animation-delay:.16s}.founding-stats article:nth-child(4){animation-delay:.24s}.founding-stats strong{display:block;font-size:clamp(1.4rem,3vw,2.2rem);line-height:1;color:var(--accent)}.founding-stats span{display:block;margin-top:8px;color:var(--muted);font-size:14px}.founding-timeline{display:grid;gap:18px;position:relative}.founding-timeline article{display:grid;grid-template-columns:54px minmax(0,1fr);gap:16px;padding:18px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.86);animation:foundingRise .7s ease both}.story-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:14px;background:var(--accent);color:white;font-weight:900;box-shadow:0 10px 22px rgba(108,79,162,.18)}.founding-timeline h3{margin:0 0 8px;color:var(--ink)}.founding-timeline p{margin-bottom:12px}.founding-finale{display:grid;grid-template-columns:54px minmax(0,1fr);gap:16px;align-items:center;margin-top:22px;padding:20px;border-radius:8px;background:#201d28;color:white}.founding-finale span{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--gold);color:white;font-weight:900}.founding-finale p{margin:0;color:white;font-weight:750}@keyframes foundingFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes foundingRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@media(max-width:820px){.founding-hero{grid-template-columns:1fr}.founding-orbit{min-height:190px}.founding-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.founding-feature{padding:18px}.founding-stats{grid-template-columns:1fr}.founding-timeline article,.founding-finale{grid-template-columns:1fr}.story-icon,.founding-finale span{width:38px;height:38px}}@media(prefers-reduced-motion:reduce){.founding-orbit,.founding-stats article,.founding-timeline article{animation:none}}.founding-intro{display:grid;gap:4px;margin:26px 0;padding:22px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.74)}.founding-intro p:last-child{margin-bottom:0}.founding-callouts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:22px 0}.founding-callouts article{padding:16px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 12px 30px rgba(32,29,40,.07)}.founding-callouts strong{display:block;color:var(--accent);font-size:1.05rem;margin-bottom:8px}.founding-callouts span{display:block;color:var(--muted);font-size:14px}@media(max-width:820px){.founding-callouts{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.founding-callouts{grid-template-columns:1fr}}.research-signals{margin:18px 0;padding:18px;border:1px solid var(--line);border-radius:8px;background:linear-gradient(135deg,#ffffff,#f4eff7)}.research-signals h4{margin:0 0 8px;font-size:1.35rem;color:var(--ink)}.signal-bars{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}.signal-bars article{padding:14px;border:1px solid var(--line);border-radius:8px;background:white}.signal-bars strong{display:block;color:var(--accent);font-size:clamp(1.4rem,3vw,2.1rem);line-height:1}.signal-bars span{display:block;margin:8px 0 12px;color:var(--muted);font-size:14px}.signal-bars i{display:block;height:12px;border-radius:999px;background:linear-gradient(90deg,var(--accent2) var(--bar),#ede9f5 var(--bar));box-shadow:inset 0 0 0 1px rgba(32,29,40,.08)}.research-note{margin:10px 0 0!important;padding-top:12px;border-top:1px solid var(--line);font-weight:750;color:#3d3548}@media(max-width:820px){.signal-bars{grid-template-columns:1fr}}.signal-visuals{display:grid;gap:16px}.chart-row{display:grid;grid-template-columns:180px 180px minmax(0,1fr);gap:14px;align-items:stretch}.donut-chart{display:grid;place-items:center;align-content:center;gap:8px;min-height:180px;margin:0;border:1px solid var(--line);border-radius:8px;background:radial-gradient(circle,#fff 0 43%,transparent 44%),conic-gradient(var(--accent) 0 var(--bad),#a994cf var(--bad) calc(var(--bad) + var(--ok)),#ede9f5 calc(var(--bad) + var(--ok)) 100%)}.donut-chart.myheritage{background:radial-gradient(circle,#fff 0 43%,transparent 44%),conic-gradient(var(--accent2) 0 var(--bad),#75b8bb var(--bad) calc(var(--bad) + var(--ok)),#e7eeee calc(var(--bad) + var(--ok)) 100%)}.donut-chart span{font-size:2rem;font-weight:900;color:var(--ink)}.donut-chart figcaption{text-align:center;font-size:13px;font-weight:800;color:var(--muted);max-width:140px}.stack-chart{display:grid;gap:8px;padding:16px;border:1px solid var(--line);border-radius:8px;background:white}.stack-chart strong{color:var(--ink)}.stack-chart span{font-size:13px;font-weight:850;color:var(--muted)}.stack-chart small{color:var(--muted)}.stack{display:block;height:18px;border-radius:999px;border:1px solid rgba(32,29,40,.1);overflow:hidden}.stack.ancestry{background:linear-gradient(90deg,var(--accent) 0 20%,#a994cf 20% 29%,#cabce4 29% 39%,#ede9f5 39% 100%)}.stack.myheritage{background:linear-gradient(90deg,var(--accent2) 0 15%,#75b8bb 15% 19%,#bde0e1 19% 25%,#e7eeee 25% 100%)}@media(max-width:820px){.chart-row{grid-template-columns:1fr}.donut-chart{min-height:220px}}footer{padding:36px clamp(18px,5vw,72px);border-top:1px solid var(--line);background:#201d28;color:white}footer p{color:rgba(255,255,255,.78)}footer nav a,footer summary{color:white}@media(max-width:900px){.story-proof-grid,.vision-proof,.values-proof,.promise-flow{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.story-proof-grid,.vision-proof,.values-proof,.promise-flow{grid-template-columns:1fr}.promise-flow span:not(:last-child):after{display:none}}.access-gate{position:relative;margin:clamp(24px,5vw,52px) clamp(18px,5vw,72px) 0;padding:clamp(24px,5vw,44px);border:1px solid rgba(108,79,162,.2);border-radius:18px;background:radial-gradient(circle at 10% 0%,rgba(185,133,32,.2),transparent 30%),linear-gradient(135deg,#fff,#f4eff7 58%,#ecfdf5);box-shadow:0 18px 54px rgba(32,29,40,.12)}.gate-card{max-width:860px;margin:auto;text-align:center}.gate-graphic,.special-access-graphic{position:relative;display:grid;place-items:center;width:88px;height:88px;margin:0 auto 18px;border-radius:24px;background:linear-gradient(135deg,#f4eff7,#ecfdf5);border:1px solid var(--line);box-shadow:inset 0 0 0 8px rgba(255,255,255,.58)}.gate-graphic span,.special-access-graphic span{display:grid;place-items:center;width:50px;height:50px;border-radius:16px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:white;font-weight:950}.gate-graphic i,.special-access-graphic i{position:absolute;width:12px;height:12px;border-radius:50%;background:var(--gold)}.gate-graphic i:nth-child(2),.special-access-graphic i:nth-child(2){right:12px;top:20px}.gate-graphic i:nth-child(3),.special-access-graphic i:nth-child(3){right:13px;bottom:19px;background:var(--accent2)}.gate-graphic i:nth-child(4),.special-access-graphic i:nth-child(4){left:14px;bottom:17px;background:var(--accent)}.access-gate form{display:grid;grid-template-columns:minmax(220px,1fr) auto;gap:12px;max-width:620px;margin:22px auto 8px}.access-gate label{display:grid;gap:6px;text-align:left;color:var(--muted);font-weight:850}.access-gate input{min-height:46px;border:1px solid var(--line);border-radius:8px;padding:10px 12px;font:inherit}.gate-status{font-weight:850;color:var(--accent2)}[data-protected-content][hidden]{display:none}.special-access-bridge{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:24px;align-items:center;border:1px solid rgba(108,79,162,.16);border-radius:18px;background:linear-gradient(135deg,#fff,#f4eff7 55%,#ecfdf5);box-shadow:0 16px 42px rgba(32,29,40,.08)}.special-access-bridge .special-access-graphic{margin:0}.legal-authority{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}.legal-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:var(--accent);color:white;font-weight:950}.chart-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:18px;margin:28px 0}.theme-chart,.bar-chart{border:1px solid var(--line);border-radius:8px;background:white;padding:20px}.theme-chart .donut{width:min(260px,100%);aspect-ratio:1;border-radius:50%;margin:0 auto 16px;background:radial-gradient(circle,#fff 0 43%,transparent 44%),conic-gradient(#6c4fa2 0 33%,#b98520 33% 51%,#0f766e 51% 100%)}.theme-chart ul{list-style:none;padding:0;margin:0;display:grid;gap:8px}.theme-chart li{display:flex;gap:10px;align-items:center;color:var(--muted)}.theme-chart li span{width:14px;height:14px;border-radius:3px;flex:0 0 auto}.comparison-chart{display:grid;gap:12px}.bar-axis{display:grid;grid-template-columns:repeat(6,1fr);margin-left:min(250px,36%);font-size:12px;color:var(--muted)}.bar-axis span{border-left:1px solid var(--line);padding-left:4px}.bar-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(220px,3fr) 58px 66px;gap:12px;align-items:center}.bar-label{font-weight:850}.bar-track{height:28px;border:1px solid var(--line);border-radius:5px;background:repeating-linear-gradient(90deg,#f4eff7 0,#f4eff7 calc(20% - 1px),#ddd5e8 calc(20% - 1px),#ddd5e8 20%);overflow:hidden}.bar-track i{display:block;height:100%;border-radius:4px 0 0 4px}.bar-row strong{color:var(--accent2);text-align:right}.bar-row em{color:var(--muted);font-style:normal;font-size:13px}@media(max-width:860px){.access-gate form,.special-access-bridge,.legal-authority,.chart-grid{grid-template-columns:1fr}.special-access-bridge .special-access-graphic{margin:auto}.bar-axis{display:none}.bar-row{grid-template-columns:1fr 70px}.bar-label{grid-column:1/-1}.bar-track{grid-column:1/2}}@media(max-width:860px){.topbar,.hero,.grid,.split,.tutorial-lesson{grid-template-columns:1fr}.topbar{position:static;align-items:flex-start;flex-direction:column}.nav-menu div{position:static;margin-top:8px}.cards{grid-template-columns:1fr}.language-access{grid-template-columns:1fr;padding:22px}.language-controls{grid-template-columns:1fr}.tutorial-script{position:static}.value-grid{grid-template-columns:1fr}.visual-card{padding-left:24px}.icon-badge{position:static;margin-bottom:14px}.mock-app{grid-template-columns:60px minmax(0,1fr)}h1{font-size:clamp(3rem,16vw,5rem)}}`;
}

function dynamicNavStyles() {
  return `.mobile-nav{display:none}.desktop-nav{display:flex}.mobile-nav summary{list-style:none;display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:8px 12px;border:1px solid var(--line);border-radius:8px;background:white;color:var(--accent);font-weight:850;cursor:pointer}.mobile-nav summary::-webkit-details-marker,.mobile-submenu summary::-webkit-details-marker{display:none}.hamburger-lines{display:grid;gap:4px;width:18px}.hamburger-lines i{display:block;height:2px;border-radius:999px;background:currentColor;transition:transform .16s ease,opacity .16s ease}.mobile-nav[open] .hamburger-lines i:nth-child(1){transform:translateY(6px) rotate(45deg)}.mobile-nav[open] .hamburger-lines i:nth-child(2){opacity:0}.mobile-nav[open] .hamburger-lines i:nth-child(3){transform:translateY(-6px) rotate(-45deg)}.mobile-nav nav{position:absolute;right:clamp(18px,4vw,52px);top:66px;z-index:20;display:grid;align-items:stretch;gap:12px;min-width:min(360px,calc(100vw - 32px));max-height:min(74vh,680px);overflow:auto;padding:16px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 20px 54px rgba(32,29,40,.16)}.mobile-nav:not([open]) nav{display:none}.mobile-nav nav a{padding:10px 0;border-bottom:1px solid rgba(44,35,58,.08);text-decoration:none}.mobile-submenu{display:grid;gap:8px;padding:8px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.mobile-submenu summary{display:flex!important;justify-content:space-between;width:100%;min-height:38px;padding:6px 0;border:0;background:transparent;color:var(--accent);font-weight:850}.mobile-submenu summary:after{content:"";width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg);transition:transform .16s ease}.mobile-submenu[open] summary:after{transform:rotate(225deg)}.mobile-submenu div{display:grid;gap:8px;padding-left:14px}@media(max-width:1180px) and (min-width:861px){.desktop-nav{gap:10px}.desktop-nav a,.desktop-nav summary{font-size:.92rem}}@media(max-width:860px){.desktop-nav{display:none}.mobile-nav{display:block}.topbar{position:sticky;top:0;align-items:center;flex-direction:row}.topbar .brand{min-width:0}.topbar .brand span:last-child{white-space:normal}.mobile-nav nav{left:16px;right:16px;width:auto}}@media(max-width:560px){.mobile-nav nav{top:72px}.mobile-nav summary span:last-child{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.mobile-nav summary{padding:10px;min-width:44px;justify-content:center}}`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (path === "/style.css") return new Response(styles(), { headers: { "Content-Type": "text/css; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
    if (path === "/go/main-site") return redirect(`${MAIN_SITE}/website/`);
    if (path === "/go/special-downloads") return redirect(`${MAIN_SITE}/downloads/special-access`);
    if (path === "/go/support") return redirect(`${MAIN_SITE}/website/support/`);
    if (path === "/go/tutorials") return redirect(`${MAIN_SITE}/website/tutorials/`);
    if (path === "/go/contribute") return redirect(`${MAIN_SITE}/website/contribute/`);
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
        "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src https: data:; connect-src 'self'; media-src 'self' blob: data:; form-action 'self'; base-uri 'none'; frame-ancestors 'self'"
      }
    });
  }
};
