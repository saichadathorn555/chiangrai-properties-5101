import { BarChart, ChartGrid, Timeline } from "./report-charts";

/** Full text of "Chiang Rai Property Market Review Q4 2026" (EN), from CRP_Market_Review_Q4_2026_EN_Draft.md.
 * Private-company names are omitted from the article body by request (references list unchanged). */
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="font-serif text-[28px] leading-tight text-ink md:text-[34px]">{children}</h2>;
const H3 = ({ children }: { children: React.ReactNode }) => <h3 className="mt-10 font-serif text-[22px] leading-tight text-ink md:text-[24px]">{children}</h3>;
const H4 = ({ children }: { children: React.ReactNode }) => <h4 className="mt-8 text-[13px] font-semibold tracking-[0.12em] text-[#927144] uppercase">{children}</h4>;
const P = ({ children }: { children: React.ReactNode }) => <p className="mt-4">{children}</p>;
const UL = ({ children }: { children: React.ReactNode }) => <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-[#927144]">{children}</ul>;
const Lead = ({ children }: { children: React.ReactNode }) => <strong className="font-semibold text-ink">{children}</strong>;
const View = ({ children }: { children: React.ReactNode }) => <p className="mt-6 border-l-2 border-[#927144] bg-[#F3E9DD]/60 py-4 pr-4 pl-5">{children}</p>;

function Table({ caption, head, rows, note }: { caption: string; head: string[]; rows: string[][]; note?: string }) {
  return (
    <figure className="mt-6">
      {caption && <figcaption className="mb-3 text-[14px] font-semibold text-ink">{caption}</figcaption>}
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-[14px] leading-snug">
          <thead className="bg-[#F3E9DD]">
            <tr>{head.map((h) => <th key={h} scope="col" className="border-b border-line px-3 py-2.5 font-semibold text-ink">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-line last:border-0">
                {r.map((c, i) => i === 0 ? <th key={i} scope="row" className="px-3 py-2.5 font-medium text-ink">{c}</th> : <td key={i} className="px-3 py-2.5">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-[13px] leading-relaxed text-stone">{note}</p>}
    </figure>
  );
}

type Ref = [number, string, string[]];
const REFS: { group: string; items: Ref[] }[] = [
  { group: "Prices & market data", items: [
    [1, "Online listing portal data", ["https://www.fazwaz.com/property-for-rent/thailand/chiang-rai"]],
    [2, "Online listing portal data", ["https://www.fazwaz.com/property-for-rent/thailand/chiang-mai"]],
    [3, "Online listing portal data", ["https://www.fazwaz.com/property-for-rent/thailand/phuket"]],
    [4, "Online listing portal data", ["https://www.fazwaz.com/property-for-sale/thailand/chiang-rai"]],
    [5, "Online listing portal data", ["https://www.fazwaz.com/property-for-sale/thailand/chiang-mai"]],
    [6, "Online listing portal data", ["https://www.fazwaz.com/property-for-sale/thailand/phuket"]],
    [7, "Online listing portal data", ["https://www.fazwaz.com/house-for-sale/thailand/chiang-rai", "https://www.fazwaz.com/house-for-sale/thailand/chiang-mai", "https://www.fazwaz.com/house-for-sale/thailand/phuket"]],
    [8, "Online listing portal data", ["https://www.fazwaz.com/condo-for-sale/thailand/chiang-rai", "https://www.fazwaz.com/condo-for-sale/thailand/chiang-mai", "https://www.fazwaz.com/condo-for-sale/thailand/phuket"]],
    [9, "REIC – Northern Housing Market H1 2026 (25 Sep 2026)", ["https://www.reic.or.th/Upload/2026-09-25-reic-press-release-northern-housing-market-h1_365_1790333283_13363.pdf"]],
    [10, "Ministry of Tourism & Sports – Tourism statistics by province 2025 (preliminary)", ["https://www.mots.go.th/news/category/808", "file: https://www.mots.go.th/images/v2022_15ee571b-7f8f-4ad4-8a89-f0f2525b3cb7.xlsx"]],
    [11, "NSO Chiang Rai Provincial Statistical Report 2025", ["https://chiangrai.nso.go.th/images/2026/ball/nso-report/RP2568.pdf"]],
  ] },
  { group: "Retail, economy & business", items: [
    [12, "CP AXTRA press release via RYT9 (4 Nov 2026) – Lotus's Chiang Rai 100% leased", ["https://www.ryt9.com/en/prg/12854385"]],
    [13, "Chiangrai Focus – Lotus's Chiang Rai opens 20 Nov 2026", ["https://www.chiangraifocus.com/46519/"]],
    [14, "Nakorn Chiang Rai News – Greenpark Chiang Rai community mall (21 Jan 2026)", ["https://nakornchiangrainews.com/greenpark-chiang-rai-community-mall-launch"]],
    [15, "Nakorn Chiang Rai News – DBD business registrations H1 2026 (31 Jul 2026)", ["https://nakornchiangrainews.com/chiang-rai-business-registration-surges"]],
    [16, "Bank of Thailand – Northern economy page", ["https://www.bot.or.th/th/thai-economy/regional-economy/northern-economy.html"]],
    [17, "Bank of Thailand – Northern GRP forecast (Oct 2026)", ["https://www.bot.or.th/content/dam/bot/documents/th/thai-economy/regional-economy/grp_forecast/norhern_grp_jpg/2569/grp-north-2026-10/GRP_Dashboard_North_2026_10-2.pdf"]],
  ] },
  { group: "Infrastructure", items: [
    [18, "Thairath English – Double-track progress 74.076% (11 Nov 2026)", ["https://en.thairath.co.th/news/governmentpolicy/2971909"]],
    [19, "Bangkok Post – New North line set for 2028 opening (Nov 2026)", ["https://www.bangkokpost.com/thailand/general/3353744/new-north-line-set-for-2028-opening"]],
    [20, "Khaosod English – Ngao tunnel (11 Nov 2026)", ["https://www.khaosodenglish.com/news/transpo/2026/11/11/thailands-longest-railway-tunnel-nears-completion-opening-planned-for-2028/"]],
    [21, "AOT Annual Report 2025", ["https://www.airportthai.co.th/wp-content/uploads/2026/06/ANNUAL-REPORT-2025.pdf"]],
    [22, "Bangkok Post – AOT approves THB 5.7 bn Chiang Rai terminal", ["https://www.bangkokpost.com/business/general/3091421/aot-approves-b5-7bn-plan-for-new-terminal-at-chiang-rai-airport"]],
    [23, "AOT MD&A Q3 FY2025", ["https://investor.airportthai.co.th/newsroom/0765NWS130820251702548610E.pdf"]],
    [24, "BOI – Guide to investment in SEZ", ["https://www.boi.go.th/upload/menu/A%20guide%20to%20investment%20in%20SEZ_5a30c1cd01777.pdf"]],
    [25, "data.go.th – Chiang Rai border trade", ["https://data.go.th/dataset/dataset40_08"]],
    [26, "Chiang Rai Times – Mae Sai checkpoint / border trade", ["https://www.chiangraitimes.com/business/chiang-rai-mae-sai-checkpoint/"]],
    [27, "UNESCO – Chiang Rai, Creative City of Design", ["https://www.unesco.org/en/creative-cities/chiang-rai"]],
  ] },
  { group: "PM2.5", items: [
    [28, "Chiang Rai Times – Burning ban & PM2.5 readings (Mar–Apr 2026)", ["https://www.chiangraitimes.com/chiang-rai/chiang-rai-tightens-wildfire-and-pm2-5-controls-extends-burning-ban/"]],
    [29, "Government PR Department – PM2.5 (29 Mar 2026)", ["https://prd.go.th/main/article/4309bb39-6d00-43af-bc84-731cc28f6c39"]],
    [30, "MNRE – CLEAR Sky trilateral cooperation, Chiang Rai (4 Dec 2025)", ["https://www.mnre.go.th/en/news/detail/230299"]],
    [31, "MFA Department of ASEAN Affairs – CLEAR Sky dialogue in Chiang Rai", ["https://asean.mfa.go.th/en/content/secretary-to-the-minister-of-foreign-affairs-reaff?cate=5d68ab2615e39c1b9c05b8c8"]],
    [32, "Khaosod – Clean Air Bill committee update (10 Nov 2026)", ["https://www.khaosod.co.th/politics/news_10467440"]],
  ] },
  { group: "Rivers", items: [
    [33, "Chiang Rai Times – PCD Round 22 results (Sep 2026)", ["https://www.chiangraitimes.com/environment/arsenic-rivers-northern-thailand/"]],
    [34, "The Nation – PCD Round 18 results (26 May 2026)", ["https://www.nationthailand.com/news/general/40066680"]],
    [35, "The Nation – Mae Sai tap-water disruption (9 Nov 2026)", ["https://www.nationthailand.com/news/general/40073283"]],
    [36, "THE STANDARD – MNRE orders PCD monitoring; provincial 3-phase plan (10 Nov 2026)", ["https://thestandard.co/mae-sai-river-arsenic-contamination-crisis/"]],
    [37, "MINING.COM (Bloomberg) – Thailand to raise rivers in Myanmar talks (11 Nov 2026)", ["https://www.mining.com/web/thailand-to-raise-arsenic-tainted-rivers-in-myanmar-talks/"]],
    [38, "Chiang Rai Times – Provincial forum; tap water safe; flood barrier (Jun 2026)", ["https://www.chiangraitimes.com/chiang-rai/chiang-rai-faces-cross-border-water-pollution-concerns-as-tests-find-arsenic-and-lead-at-some-sites-tap-water-still-safe/"]],
    [39, "The Nation – National subcommittee on Kok River (23 May 2025)", ["https://www.nationthailand.com/news/general/40050334"]],
    [40, "FM91 – DWR public hearing; sediment-trap weir cancelled (11 Nov 2025)", ["https://www.fm91bkk.com/newsarticle/60973"]],
    [41, "UNDP Thailand – Kok River community monitoring (8 Nov 2026)", ["https://www.undp.org/thailand/stories/kok-river-still-safe-connecting-data-and-communities-tackle-pollution"]],
    [42, "Pollution Control Department (official portal)", ["https://www.pcd.go.th/"]],
  ] },
  { group: "Law", items: [
    [43, "Civil and Commercial Code s.538 (Thai)", ["https://lawnode.org/eli/th/code/2468/code_ccc_2468/section/538", "EN s.538 / s.540: https://www.thailawonline.com/thai-civil-code/section-538/", "https://www.thailawonline.com/thai-civil-code/section-540/"]],
    [44, "Lease of Immovable Property for Commerce & Industry Act 1999 (FAO)", ["https://faolex.fao.org/docs/pdf/tha161309.pdf"]],
    [45, "Land Code (Department of Lands)", ["https://www.dol.go.th/media/813280848056029184/2026/02/EBAF485hLGxjwntourvyDW2a.pdf"]],
    [46, "Condominium Act s.19 bis (49% foreign quota), unofficial EN", ["https://thailawforum.com/laws/Condominium%20Act.pdf"]],
    [47, "Foreign Business Act (BOI copy)", ["https://www.boi.go.th/upload/Foreign%20Business%20Act_5dd766122ff27.pdf"]],
  ] },
];

function RefLink({ text }: { text: string }) {
  const i = text.indexOf("https://");
  const url = text.slice(i);
  return <>{text.slice(0, i)}<a href={url} target="_blank" rel="noopener noreferrer" className="break-all text-[#927144] underline underline-offset-2 hover:text-ink">{url}</a></>;
}

export function MarketReviewMeta() {
  return (
    <>
      <p className="mt-3 font-serif text-[20px] text-stone md:text-[24px]">Renting &amp; Buying vs. Chiang Mai &amp; Phuket</p>
      <p className="mt-4 text-[13px] tracking-[0.04em] text-stone">Published November 2026 · Data as of 13 November 2026 · English</p>
    </>
  );
}

export function MarketReviewArticle() {
  return (
    <article className="text-[16px] leading-[1.8] text-ink/85">
      <section className="mt-10 border border-[#DCC8A8] bg-[#F7EFE4] p-5 shadow-[0_1px_0_#fff8] md:p-8">
      <H2>1. Key Takeaways</H2>
      <UL>
        <li><Lead>Renting costs much less in Chiang Rai.</Lead> The median asking rent is THB 13,900 a month, compared with THB 23,800 in Chiang Mai and THB 45,700 in Phuket. Per square metre, rent is about 55% of Chiang Mai's and 24% of Phuket's (CRP calculation, online property listing portal asking prices, 13 Nov 2026).</li>
        <li><Lead>The buying gap depends on property type.</Lead> Houses in Chiang Rai are listed at THB 24,600/m², about 82% of Chiang Mai's THB 30,000/m² but only one-third of Phuket's THB 73,900/m². Condos are a small niche in Chiang Rai (only 12 listings on an online property listing portal). Their median is THB 45,600/m², against THB 73,600 in Chiang Mai and THB 147,000 in Phuket.</li>
        <li><Lead>The new-home market favours buyers.</Lead> Developers cut new launches by 43.3% in H1 2026, but new sales still rose 22.9%. Unsold stock of 2,843 units would take about 96 months to clear at the current pace (REIC, Sept 2026). Buyers can negotiate, but resale is slow.</li>
        <li><Lead>Retail is not overbuilt.</Lead> In Chiang Rai, new modern retail space is being taken up. Spending in Chiang Rai comes mainly from local and domestic customers (about 89% of 2025 visitors were Thai).</li>
        <li><Lead>Major infrastructure is under way.</Lead> The Den Chai–Chiang Rai–Chiang Khong double-track railway is 74.076% complete and due to open in 2028. The Chiang Khong Border Trade Service Centre is due in December 2026. Mae Fah Luang Airport has an approved plan to expand capacity from 3 to 6 million passengers a year.</li>
        <li>Two environmental risks need to be stated plainly: seasonal PM2.5 haze (February–April) and arsenic contamination in the Kok, Sai and Ruak rivers, which officials link to suspected upstream mining in Myanmar. Section 4 covers both, together with what the authorities are doing and practical steps for tenants and investors.</li>
      </UL>
      </section>

      <section className="mt-10 border border-[#DCC8A8] bg-[#F7EFE4] p-5 shadow-[0_1px_0_#fff8] md:p-8">
      <H2>2. Rent &amp; Buy Benchmark: Chiang Rai vs. Chiang Mai &amp; Phuket</H2>
      <Table
        caption="Table 1. Asking rents and asking sale prices (online property listing portal asking prices, 13 Nov 2026)"
        head={["Indicator (median, asking)", "Chiang Rai", "Chiang Mai", "Phuket"]}
        rows={[
          ["Rent per month, all property", "THB 13,900", "THB 23,800", "THB 45,700"],
          ["Rent per m² per month", "THB 119", "THB 218", "THB 499"],
          ["Rental listings", "136", "4,822", "10,463"],
          ["Sale price, houses", "THB 4.49 m", "THB 6.00 m", "THB 22.9 m"],
          ["Sale price per m², houses", "THB 24,600", "THB 30,000", "THB 73,900"],
          ["Sale price, condos", "THB 1.34 m (12 listings only)", "THB 2.73 m", "THB 6.64 m"],
          ["Sale price per m², condos", "THB 45,600", "THB 73,600", "THB 147,000"],
          ["Sale price per m², all property", "THB 14,800", "THB 36,900", "THB 127,000"],
          ["Sale listings, all property", "428", "6,833", "24,365"],
        ]}
        note={"Sources: online property listing portal asking prices (13 Nov 2026; links in Section 5). These are asking prices, not completed transactions. CRP makes no price or rent forecasts. The \"all property\" medians include land and large plots, so different mixes are being compared. Use the house and condo rows for like-for-like comparisons."}
      />
      <ChartGrid>
        <BarChart title="Rent per month, all property (median, asking)" rows={[{ label: "Chiang Rai", value: 13900, text: "THB 13,900", highlight: true }, { label: "Chiang Mai", value: 23800, text: "THB 23,800" }, { label: "Phuket", value: 45700, text: "THB 45,700" }]} />
        <BarChart title="Rent per m² per month (median, asking)" rows={[{ label: "Chiang Rai", value: 119, text: "THB 119", highlight: true }, { label: "Chiang Mai", value: 218, text: "THB 218" }, { label: "Phuket", value: 499, text: "THB 499" }]} />
        <BarChart title="Sale price per m², houses (median, asking)" rows={[{ label: "Chiang Rai", value: 24600, text: "THB 24,600", highlight: true }, { label: "Chiang Mai", value: 30000, text: "THB 30,000" }, { label: "Phuket", value: 73900, text: "THB 73,900" }]} />
        <BarChart title="Sale price per m², condos (median, asking)" rows={[{ label: "Chiang Rai", value: 45600, text: "THB 45,600", highlight: true }, { label: "Chiang Mai", value: 73600, text: "THB 73,600" }, { label: "Phuket", value: 147000, text: "THB 147,000" }]} note="Chiang Rai condos: 12 listings only." />
      </ChartGrid>
      <Table
        caption="Table 2. Market context (official data)"
        head={["Indicator", "Chiang Rai", "Chiang Mai", "Phuket", "Source"]}
        rows={[
          ["Visitors 2025 (preliminary)", "6.46 m (+2.88%)", "11.96 m", "14.12 m", "Ministry of Tourism & Sports"],
          ["Foreign visitors 2025", "0.70 m (−15.1%)", "3.38 m (−4.5%)", "10.47 m (−5.4%)", "Ministry of Tourism & Sports"],
          ["Hotel occupancy 2025", "72.10%", "76.74%", "77.23%", "Ministry of Tourism & Sports"],
          ["New-home stock still unsold (H1 2026)", "2,843 units; ~96 months to clear", "11,353 units; ~50 months", "n/a in REIC's Northern report", "REIC"],
        ]}
      />
      <ChartGrid>
        <BarChart title="Visitors 2025 (preliminary)" rows={[{ label: "Chiang Rai", value: 6.46, text: "6.46 m", highlight: true }, { label: "Chiang Mai", value: 11.96, text: "11.96 m" }, { label: "Phuket", value: 14.12, text: "14.12 m" }]} />
        <BarChart title="Hotel occupancy 2025" rows={[{ label: "Chiang Rai", value: 72.1, text: "72.10%", highlight: true }, { label: "Chiang Mai", value: 76.74, text: "76.74%" }, { label: "Phuket", value: 77.23, text: "77.23%" }]} />
        <BarChart title="New-home stock: months to clear (H1 2026)" rows={[{ label: "Chiang Rai", value: 96, text: "~96 months", highlight: true }, { label: "Chiang Mai", value: 50, text: "~50 months" }]} note="Phuket: n/a in REIC's Northern report." />
        <BarChart title="Chiang Rai months of stock by segment (REIC)" rows={[{ label: "Mae Sai", value: 37, text: "~37 months" }, { label: "Airport–Mae Fah Luang University", value: 120, text: "~120 months" }, { label: "Condo segment", value: 6, text: "~6 months" }, { label: "All new homes", value: 96, text: "~96 months", highlight: true }]} />
      </ChartGrid>

      <H3>What the numbers mean:</H3>
      <ol className="mt-4 list-decimal space-y-4 pl-6 marker:text-[#927144]">
        <li><Lead>Low entry costs, especially for renting.</Lead> The biggest discount in Chiang Rai is in rents (THB 119/m² compared with THB 218 in Chiang Mai and THB 499 in Phuket). A household, small business or remote worker can rent here for much less than in the other two markets.</li>
        <li><Lead>Buying a house is cheaper, but not by as much as renting.</Lead> Chiang Rai houses cost about 18% less per m² than Chiang Mai houses, but about two-thirds less than Phuket's. (Note: the all-property median sale price is higher in Chiang Rai (THB 5.38 m) than in Chiang Mai (THB 4.41 m). This is a mix effect: Chiang Rai's listings are mostly houses and land, while Chiang Mai's include many lower-priced condos.)</li>
        <li><Lead>Buyers have leverage, and sellers should be patient.</Lead> REIC reports that Chiang Rai developers launched only 68 new units in H1 2026, all of them landed houses. Even so, unsold stock grew to 2,843 units, and absorption is about 1.0% a month. Results differ by zone. Mae Sai is selling fastest (about 2.3% a month, roughly 37 months of stock). The Airport–Mae Fah Luang University zone is the slowest (0.8% a month, about 120 months). The condo segment is small but tight, with about 6 months of stock. REIC also notes that high household debt and strict bank lending are holding back Thai buyers in the North.</li>
        <li><Lead>Why early movers look at Chiang Rai.</Lead> Rents are low, competition is thin (about 1/35 as many rental listings as Chiang Mai), and major transport projects are being built. What the data does not show: Chiang Rai has a smaller and less liquid market. There are fewer tenants and buyers, re-letting and resale take longer, and there is no official rent index. CRP sees this as a market for long-term holders, not quick sellers.</li>
      </ol>

      <H3>Demand vs. supply in retail and commercial space:</H3>
      <P>Chiang Rai: there is no official retail vacancy index, so CRP does not quote one. The available signals point to steady take-up of new space:</P>
      <UL>
        <li>New business registrations in the Chiang Rai Special Economic Zone rose 52.38% in H1 2026 (128 vs. 84). This is a rebound from a weak 2025 and is still below the 212 recorded in H1 2023 (Department of Business Development data).</li>
      </UL>
      <P>The other side: most spending comes from the local and domestic market. Average monthly household spending in Chiang Rai was THB 11,346 in 2024 (NSO). The Bank of Thailand expects the Northern economy to grow only 1.1–2.1% in 2026 and describes household purchasing power as fragile. Chiang Rai has amenities and plenty of variety, but its crowds are smaller than in major hubs. <Lead>Our view:</Lead> Chiang Rai is not overbuilt. Demand is real but mainly local, so business tenants should plan around local and Thai customers rather than counting on foreign tourist traffic.</P>
      </section>

      <section className="mt-10 border border-[#DCC8A8] bg-[#F7EFE4] p-5 shadow-[0_1px_0_#fff8] md:p-8">
      <H2>3. Market Drivers: Infrastructure &amp; Tourism</H2>
      <Table
        caption=""
        head={["Driver", "Verified status (as of Nov 2026)"]}
        rows={[
          ["Den Chai–Chiang Rai–Chiang Khong double-track railway", "323.1 km; THB 85.3 bn. Overall progress was 74.076% at the end of October 2026. The 6,215 m Ngao tunnel, Thailand's longest railway tunnel, broke through on 11 Nov 2026. Target opening: 2028."],
          ["Chiang Khong Border Trade Service Centre", "About 95% complete; expected to open in December 2026, near the future Chiang Khong station."],
          ["Border trade", "Chiang Khong handles about 69% of the province's border exports. Local media report more than THB 100 bn in border and transit trade in 2025."],
          ["Special Economic Zone (SEZ)", "21 sub-districts in Mae Sai, Chiang Saen and Chiang Khong. The zone lies on the R3A (to Laos and southern China) and R3B (to Myanmar) corridors and includes the Mekong port at Chiang Saen."],
          ["Mae Fah Luang–Chiang Rai International Airport", "2.0 m passengers in 2025 (2.9 m in 2019). A new terminal is planned to raise capacity from 3 m to 6 m passengers a year. Sources give different completion years (2029 to 2033)."],
          ["Tourism 2025 (preliminary)", "6.46 m visitors (+2.88%); revenue THB 51.5 bn (+4.25%); hotel occupancy 72.10%. About 89% of visitors were Thai, and foreign visitors fell 15.13%."],
          ["City identity", "UNESCO Creative City of Design since 2023."],
        ]}
      />
      <Timeline title="Infrastructure timeline (as stated in the report)" items={[
        { when: "11 Nov 2026", what: "Ngao tunnel (6,215 m) broke through" },
        { when: "December 2026", what: "Chiang Khong Border Trade Service Centre expected to open" },
        { when: "2028", what: "Den Chai–Chiang Rai–Chiang Khong double-track railway target opening" },
        { when: "2029 to 2033", what: "New airport terminal (sources give different completion years)" },
      ]} />
      <View><Lead>Our view:</Lead> Of these drivers, only the railway has a firm 2028 opening date. The airport expansion is approved, but its timing is less certain. Foreign tourism is still below its earlier peak, and passenger numbers have not returned to 2019 levels. We see this as a medium- to long-term story for patient investors, not a short-term boom.</View>
      </section>

      <section className="mt-10 border border-[#DCC8A8] bg-[#F7EFE4] p-5 shadow-[0_1px_0_#fff8] md:p-8">
      <H2>4. Balanced Outlook: Key Strengths, Honest Constraints and Active Mitigation</H2>
      <H3>Strengths</H3>
      <UL>
        <li>Rents are well below Chiang Mai and Phuket, and house prices are lower too.</li>
        <li>Competition among landlords is limited, and buyers have room to negotiate in the landed-house segment.</li>
        <li>Major transport projects are being built (railway, border trade centre, airport plan), and the province sits on an SEZ and cross-border corridors.</li>
        <li>Modern retail space is being taken up.</li>
        <li>The province has UNESCO "City of Design" status, a slower pace of life and a broad range of everyday amenities.</li>
      </UL>

      <H3>Constraints and how they are being addressed</H3>
      <H4>A. Seasonal PM2.5 haze (mainly February–April)</H4>
      <P><Lead>The facts:</Lead> Thailand's 24-hour PM2.5 standard is 37.5 µg/m³. On 28 Mar 2026, official readings reached 186.1 in Wiang Phang Kham (Mae Sai), 152.2 in Wiang (Chiang Khong) and 94.1 in central Mueang Chiang Rai. That same day, satellites counted 8,804 hotspots in Myanmar and 4,189 in Laos, so much of the smoke crosses the border. Haze affects the whole upper North, including Chiang Mai.</P>
      <div className="mt-6 md:max-w-xl">
        <BarChart title="PM2.5 on 28 Mar 2026 (µg/m³)" rows={[{ label: "Wiang Phang Kham (Mae Sai)", value: 186.1, text: "186.1" }, { label: "Wiang (Chiang Khong)", value: 152.2, text: "152.2" }, { label: "Central Mueang Chiang Rai", value: 94.1, text: "94.1" }, { label: "Thailand 24-hour standard", value: 37.5, text: "37.5", highlight: true }]} />
      </div>
      <P><Lead>Who is acting:</Lead></P>
      <UL>
        <li><Lead>Chiang Rai Province:</Lead> banned all outdoor burning until 10 May 2026, deployed ISOC patrols in high-risk areas, and prepared rainmaking flights. Under its PHEOC emergency system, the public health office prepared clean rooms and monitored vulnerable patients.</li>
        <li><Lead>Thailand, Laos and Myanmar (CLEAR Sky Strategy):</Lead> the Ministry of Natural Resources and Environment (MNRE) and the Pollution Control Department coordinate this agreement. Progress so far includes a director-general-level hotline between the three countries, training in no-burn farming and firefighting, better air monitoring, and a planned sister-city model.</li>
        <li><Lead>National law:</Lead> the Clean Air Management Bill is in its final stage in Parliament. On 10 Nov 2026, the joint committee announced it had settled all disputed points. Under the bill, each provincial governor would chair a provincial clean-air committee. The committee aims to pass the bill this session. It is not law yet.</li>
      </UL>
      <P><Lead>Practical steps:</Lead> use HEPA air purifiers and sealed bedrooms, check the government's Air4Thai app, and consider lease terms that let you travel during the peak months.</P>

      <H4>B. Arsenic in the Kok, Sai and Ruak rivers (since 2025)</H4>
      <P><Lead>The facts:</Lead></P>
      <UL>
        <li>The Pollution Control Department (PCD) tests the Kok, Sai, Ruak and Mekong rivers every month at 22 monitoring points.</li>
        <li>In round 22 (3–7 Aug 2026), arsenic in the Kok River near Mueang Chiang Rai measured 0.011–0.013 mg/L, just above the 0.010 mg/L surface-water standard. The Sai River at Mae Sai was far higher, up to 0.284 mg/L.</li>
        <li>According to the PCD's regional office, September tests found the Kok, Ruak and Mekong within the standard.</li>
        <li>On 5 Nov 2026, the Sai River became too muddy for the Mae Sai water plant to treat (14,000 NTU of turbidity, against a design limit of 6,000). The Provincial Waterworks Authority (PWA) cut supply to 14 villages. Arsenic in the untreated river water reached 0.25 mg/L on 6 Nov. Normal production resumed on 7 Nov, but arsenic stayed above the standard (0.05 mg/L), so monitoring continues.</li>
        <li>Officials suspect the source is upstream mining in Myanmar's Shan State.</li>
      </UL>
      <P><Lead>Who is acting:</Lead></P>
      <UL>
        <li><Lead>MNRE and the PCD:</Lead> the minister ordered close monitoring of the Sai River on 10 Nov 2026. The PCD publishes results regularly at pcd.go.th.</li>
        <li><Lead>Chiang Rai Province:</Lead> has a three-phase plan.
          <ul className="mt-3 list-[circle] space-y-2 pl-6">
            <li><Lead>Now:</Lead> test for heavy metals before water enters the treatment plant, stop production if turbidity exceeds 6,000 NTU, and keep backup water sources, tankers and mobile treatment units ready.</li>
            <li><Lead>Medium term:</Lead> bring raw water to Mae Sai from Chiang Saen, and add groundwater systems and reserve tanks.</li>
            <li><Lead>Long term:</Lead> build the Doi Hua Mae Kham reservoir and install automatic water-quality stations on the Sai, Ruak and Kok rivers.</li>
          </ul>
        </li>
        <li><Lead>Provincial Waterworks Authority:</Lead> says treated tap water in monitored areas meets drinking standards, and has set aside more than THB 9.25 m for extra testing and treatment upgrades.</li>
        <li><Lead>Diplomacy:</Lead> the Foreign Minister was scheduled to raise the issue with Myanmar's leadership on 12 Nov 2026. The two countries have agreed to form a water-quality working group, with its first meeting expected in late November, and Thailand will ask to install monitoring equipment upstream. A national subcommittee under the National Environment Board has coordinated the response since May 2025.</li>
        <li><Lead>Community input:</Lead> after public hearings in November 2025, the government dropped a proposed sediment-trap weir on the Kok River because residents objected. It is focusing instead on clean-water sources, monitoring stations and CCTV along the river.</li>
        <li><Lead>Flood defences:</Lead> Mae Sai was hit hard by the 2024 floods. Repairs to a semi-permanent flood barrier along the Sai River were more than 60% complete by mid-2026.</li>
      </UL>
      <P><Lead>Practical steps:</Lead> drink treated PWA tap water or bottled water, not river or untreated well water. Ask the landlord which water source the property uses. Mae Sai and properties near the rivers need extra checks. Local health advice is to avoid eating fish organs from monitored rivers.</P>

      <H4>C. Rules for foreign buyers and tenants</H4>
      <UL>
        <li>Foreigners cannot own land (Land Code s.86). They can lease it.</li>
        <li>A lease of more than 3 years must be registered at the Land Office. The maximum term is 30 years, renewable (Civil and Commercial Code s.538 and s.540). Commercial and industrial leases of 30–50 years are possible under the 1999 Act.</li>
        <li>Foreigners can own condo units outright, up to 49% of each building's total floor area (Condominium Act s.19 bis).</li>
        <li>Restaurants, cafés, retail shops and hotels run by foreign-majority companies need a licence under the Foreign Business Act.</li>
        <li><Lead>CRP's advice:</Lead> register every long lease and use a licensed Thai lawyer for any business structure.</li>
      </UL>

      <H4>D. Market depth</H4>
      <P>Chiang Rai has fewer listings, slower resale and lower foreign visitor numbers. It suits owner-occupiers and long-term holders best.</P>

      <View><Lead>CRP's view:</Lead> Chiang Rai offers lower costs than Chiang Mai and Phuket, a market that is not overbuilt, and transport projects that are visibly under construction. It also has real environmental issues that government agencies are working on and that local people discuss openly. We think informed buyers and tenants who plan around these issues are the ones best placed to benefit from the next stage of the city's growth. (This is CRP's opinion, not a forecast.)</View>
      </section>

      <section className="mt-10 border border-[#DCC8A8] bg-[#F7EFE4] p-5 shadow-[0_1px_0_#fff8] md:p-8">
      <H2>5. Verified Sources &amp; References</H2>
      <P>All links opened and status-checked on 13 Nov 2026 (Asia/Bangkok).</P>
      {REFS.map((g) => (
        <div key={g.group}>
          <H4>{g.group}</H4>
          <ol className="mt-3 space-y-2 text-[14px] leading-relaxed">
            {g.items.map(([n, label, links]) => (
              <li key={n} value={n} className="flex gap-2">
                <span className="w-7 shrink-0 text-right text-stone">{n}.</span>
                <span>{label}: {links.map((l, i) => <span key={l}>{i > 0 && " ; "}<RefLink text={l} /></span>)}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
      </section>

      <p className="mt-12 border-t border-line pt-6 text-[13px] leading-relaxed text-stone"><Lead>Disclaimer:</Lead> This report is for general information only. It is not legal, tax or investment advice. Prices are asking prices from a listing portal at a single point in time and may differ from transaction prices. Environmental readings change by season and location; check the latest official PCD and PWA notices.</p>
    </article>
  );
}
