/** Become a Co-Agent, Privacy Policy, Terms of Use and the shared PDPA form notice. Merged into dict.ts. */

export type LegalBlock = { p: string } | { ul: string[] };
export type LegalSection = { h: string; blocks: LegalBlock[] };
type Item = { t: string; d: string };

export type LegalDict = {
  draftBanner: string;
  pdpa: { before: string; link: string; after: string };
  legalLinks: { privacy: string; terms: string; otherServices: string };
  coAgent: {
    eyebrow: string;
    title: string;
    body: string;
    line: string;
    whatsapp: string;
    contact: string;
    whoTitle: string;
    who: string[];
    providesTitle: string;
    provides: Item[];
    doesTitle: string;
    does: string[];
    joinTitle: string;
    steps: Item[];
    ctaTitle: string;
    ctaBody: string;
  };
  privacy: {
    title: string;
    updated: string;
    sections: LegalSection[];
    contactTitle: string;
    contactName: string;
    emailLabel: string;
    phoneLabel: string;
    chatLabel: string;
    chatBefore: string;
    chatLink: string;
    chatAfter: string;
    hoursLabel: string;
    hours: string;
  };
  terms: {
    title: string;
    updated: string;
    before: string;
    link: string;
    after: string;
    contactLabel: string;
  };
};

export const legalEn: LegalDict = {
  draftBanner: "Draft - Under Review",
  pdpa: { before: "We use your details only to respond to your request. See our ", link: "Privacy Policy", after: "." },
  legalLinks: { privacy: "Privacy Policy", terms: "Terms of Use", otherServices: "Other services" },
  coAgent: {
    eyebrow: "Become a Co-Agent",
    title: "Grow with Chiangrai Properties (CRP)",
    body: "Are you a local property agent in Chiang Rai? Work with us as a Co-Agent. You bring your local knowledge. We bring marketing, clients from abroad, and the paperwork support.",
    line: "Chat on LINE",
    whatsapp: "WhatsApp us",
    contact: "Contact us",
    whoTitle: "Who this is for",
    who: [
      "Independent property agents working in Chiang Rai province.",
      "People with good local contacts who meet owners, buyers or tenants.",
      "People who want to work in a fair and transparent way.",
    ],
    providesTitle: "What Chiangrai Properties (CRP) provides",
    provides: [
      { t: "Marketing", d: "We list approved properties on chiangrai-properties.com and on our other online channels." },
      { t: "Clients from abroad", d: "Our website is in English first, so we reach foreign buyers and tenants." },
      { t: "Contract and document templates", d: "We prepare our standard templates for sale, lease, client registration and related documents." },
      { t: "Admin support", d: "We record and confirm your deal registrations, coordinate between owners, clients and you, and follow each deal until it closes." },
      { t: "Commission collection", d: "We collect the commission from the owner and pay your share to you." },
    ],
    doesTitle: "What a Co-Agent does",
    does: [
      "Finds owners who want to sell or rent out, and finds buyers and tenants.",
      "Registers each client and each property with CRP before any viewing or offer.",
      "Fills in all client details completely and accurately in our forms, and attaches all supporting documents.",
      "Arranges viewings, gives true information, and helps both sides reach an agreement.",
      "Follows our standards: honest information, no misleading adverts, and no posting of CRP properties without our approval.",
      "Keeps client personal data safe and confidential, as Thailand's PDPA requires.",
    ],
    joinTitle: "How to join",
    steps: [
      { t: "Contact us", d: "Reach out via LINE, WhatsApp, or our Contact page." },
      { t: "Get to know each other before partnering together", d: "We call or message you." },
      { t: "Sign the Co-Agent Agreement", d: "We go through it together. Both sides attach a certified copy of their ID card." },
      { t: "Start working", d: "Register your first client or property with us and we start marketing." },
    ],
    ctaTitle: "Contact us",
    ctaBody: "Reach out via LINE, WhatsApp, or our Contact page.",
  },
  privacy: {
    title: "Privacy Policy (PDPA)",
    updated: "Last updated: Draft - Under Review",
    sections: [
      {
        h: "1. Data Controller",
        blocks: [
          { p: "Chiangrai Properties (CRP) (\"CRP\", \"we\", \"us\") is the data controller for personal data collected through chiangrai-properties.com, our forms, LINE, WhatsApp, phone, and email, under Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA)." },
          { p: "Address: Chiang Rai, Thailand (business address to be confirmed prior to launch)." },
        ],
      },
      {
        h: "2. Personal Data We Collect",
        blocks: [
          {
            ul: [
              "Contact and enquiry details: name, phone number, email, LINE ID, WhatsApp, country, and what property or service you ask about.",
              "Owner and Co-Agent details: property details, photos, expected price or rent, and Co-Agent details (areas covered, experience, languages).",
              "Transaction records (when a deal proceeds): ID card or passport copy, ownership or company documents, and payment details for Co-Agents.",
            ],
          },
        ],
      },
      {
        h: "3. Purpose, Legal Basis, and Sharing",
        blocks: [
          { p: "We collect and use your data only to:" },
          {
            ul: [
              "answer enquiries, recommend properties, and arrange viewings with property owners and Co-Agents (pre-contract steps, legitimate interest, or your consent);",
              "market listed properties, manage Co-Agent partnerships, and prepare sale or lease agreements (contract performance);",
              "send property news or updates only if you have opted in or given consent (your consent).",
            ],
          },
          { p: "If you do not provide the information required to perform a contract or comply with the law, CRP may not be able to answer your enquiry, arrange property viewings, prepare sale or lease agreements, or pay Co-Agent compensation." },
          { p: "We do not sell your data. We share it only when needed with property owners, Co-Agents bound by confidentiality, legal or tax advisers, government authorities required by law, and essential service providers, some of whom process data outside Thailand under PDPA safeguards." },
        ],
      },
      {
        h: "4. Data Retention",
        blocks: [
          {
            ul: [
              "General enquiries with no transaction: up to 2 years from last contact.",
              "Client registrations: at least 6 months from last contact, up to 2 years.",
              "Transaction, contract, and Co-Agent records: up to 10 years after the deal or agreement ends for legal and tax compliance.",
              "Marketing updates: until consent is withdrawn or unsubscribed.",
            ],
          },
        ],
      },
      {
        h: "5. Your Rights Under the PDPA",
        blocks: [
          { p: "You may withdraw consent, request access or a copy of your data, request disclosure of the source of data obtained without your consent, request data portability, object to or restrict processing, request correction or deletion, or complain to the Personal Data Protection Committee (PDPC) at www.pdpc.or.th. We reply within 30 days unless the law requires us to retain the record." },
        ],
      },
    ],
    contactTitle: "6. Contact Us",
    contactName: "Chiangrai Properties (CRP)",
    emailLabel: "Email",
    phoneLabel: "Phone",
    chatLabel: "LINE and WhatsApp",
    chatBefore: "see the ",
    chatLink: "Contact page",
    chatAfter: ".",
    hoursLabel: "Office hours",
    hours: "Monday to Saturday, 09:00 to 18:00 (UTC+7).",
  },
  terms: {
    title: "Terms of Use",
    updated: "Last updated: Draft - Under Review",
    before: "By using chiangrai-properties.com, you agree that listings are information only, not an offer or legal advice; Chiangrai Properties (CRP) limits liability as Thai law allows (except for fraud or gross negligence), applies our ",
    link: "Privacy Policy",
    after: ", and Thai law governs disputes.",
    contactLabel: "Contact",
  },
};

export const legalTh: LegalDict = {
  draftBanner: "ฉบับร่าง - อยู่ระหว่างตรวจสอบ",
  pdpa: { before: "เราใช้ข้อมูลของท่านเพื่อติดต่อกลับตามคำขอนี้เท่านั้น อ่าน", link: "นโยบายความเป็นส่วนตัว", after: "" },
  legalLinks: { privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดการใช้งาน", otherServices: "บริการอื่น ๆ" },
  coAgent: {
    eyebrow: "สมัครเป็นตัวแทนร่วม (Co-Agent)",
    title: "เติบโตไปด้วยกันกับ Chiangrai Properties (CRP)",
    body: "คุณเป็นนายหน้าอสังหาริมทรัพย์ในเชียงรายใช่ไหม ร่วมงานกับเราในฐานะตัวแทนร่วม (Co-Agent) คุณมีความรู้ในพื้นที่ เรามีการตลาด ลูกค้าจากต่างประเทศ และการสนับสนุนด้านเอกสาร",
    line: "คุยทาง LINE",
    whatsapp: "WhatsApp",
    contact: "ติดต่อเรา",
    whoTitle: "เหมาะสำหรับใคร",
    who: [
      "นายหน้าอสังหาริมทรัพย์อิสระที่ทำงานในจังหวัดเชียงราย",
      "ผู้ที่มีเครือข่ายในพื้นที่ และได้พบเจ้าของทรัพย์ ผู้ซื้อ หรือผู้เช่า",
      "ผู้ที่ต้องการทำงานอย่างเป็นธรรมและโปร่งใส",
    ],
    providesTitle: "สิ่งที่ Chiangrai Properties (CRP) สนับสนุน",
    provides: [
      { t: "การตลาด", d: "นำเสนอทรัพย์ที่ได้รับอนุมัติบนเว็บไซต์ chiangrai-properties.com และช่องทางออนไลน์อื่นของเรา" },
      { t: "ลูกค้าจากต่างประเทศ", d: "เว็บไซต์ของเราเป็นภาษาอังกฤษเป็นหลัก จึงเข้าถึงผู้ซื้อและผู้เช่าชาวต่างชาติ" },
      { t: "แบบสัญญาและเอกสาร", d: "เราจัดเตรียมแบบมาตรฐานสำหรับการขาย การเช่า การลงทะเบียนลูกค้า และเอกสารที่เกี่ยวข้อง" },
      { t: "งานธุรการ", d: "บันทึกและยืนยันการลงทะเบียนดีล ประสานงานระหว่างเจ้าของทรัพย์ ลูกค้า และตัวแทนร่วม และติดตามดีลจนปิดการขาย" },
      { t: "การเรียกเก็บค่าคอมมิชชัน", d: "เราเรียกเก็บค่าคอมมิชชันจากเจ้าของทรัพย์ และโอนส่วนแบ่งให้ตัวแทนร่วม" },
    ],
    doesTitle: "หน้าที่ของตัวแทนร่วม",
    does: [
      "หาเจ้าของทรัพย์ที่ต้องการขายหรือให้เช่า และหาผู้ซื้อหรือผู้เช่า",
      "ลงทะเบียนลูกค้าและทรัพย์ทุกรายกับ CRP ก่อนพาชมหรือเสนอราคา",
      "กรอกข้อมูลลูกค้าในแบบฟอร์มให้ครบถ้วนและถูกต้อง และแนบเอกสารประกอบให้ครบ",
      "นัดชมทรัพย์ ให้ข้อมูลตามความเป็นจริง และช่วยให้ทั้งสองฝ่ายตกลงกันได้",
      "ปฏิบัติตามมาตรฐานของเรา คือ ให้ข้อมูลจริง ไม่โฆษณาเกินจริง และไม่ประกาศทรัพย์ของ CRP โดยไม่ได้รับอนุญาต",
      "เก็บรักษาข้อมูลส่วนบุคคลของลูกค้าเป็นความลับ ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
    ],
    joinTitle: "ขั้นตอนการเข้าร่วม",
    steps: [
      { t: "ติดต่อเรา", d: "ทักหาเราทาง LINE, WhatsApp หรือหน้าติดต่อเรา" },
      { t: "ทำความรู้จักกันก่อนที่จะร่วมงานกัน", d: "เราจะโทรหรือส่งข้อความถึงคุณ" },
      { t: "ลงนามสัญญาตัวแทนร่วม", d: "เราอ่านสัญญาไปด้วยกัน ทั้งสองฝ่ายแนบสำเนาบัตรประชาชนพร้อมรับรองสำเนาถูกต้อง" },
      { t: "เริ่มงาน", d: "ลงทะเบียนลูกค้าหรือทรัพย์รายแรกกับเรา แล้วเราเริ่มทำการตลาด" },
    ],
    ctaTitle: "ติดต่อเรา",
    ctaBody: "ทักหาเราทาง LINE, WhatsApp หรือหน้าติดต่อเรา",
  },
  privacy: {
    title: "นโยบายความเป็นส่วนตัว (PDPA)",
    updated: "ปรับปรุงล่าสุด: ฉบับร่าง - อยู่ระหว่างตรวจสอบ",
    sections: [
      {
        h: "1. ผู้ควบคุมข้อมูลส่วนบุคคล",
        blocks: [
          { p: "Chiangrai Properties (CRP) (\"CRP\" หรือ \"เรา\") เป็นผู้ควบคุมข้อมูลส่วนบุคคลสำหรับข้อมูลที่เก็บผ่านเว็บไซต์ chiangrai-properties.com แบบฟอร์ม LINE, WhatsApp โทรศัพท์ และอีเมล ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)" },
          { p: "ที่อยู่: จังหวัดเชียงราย ประเทศไทย (อยู่ระหว่างยืนยันที่อยู่ทางธุรกิจก่อนเปิดตัว)" },
        ],
      },
      {
        h: "2. ข้อมูลส่วนบุคคลที่เก็บรวบรวม",
        blocks: [
          {
            ul: [
              "ข้อมูลติดต่อและการสอบถาม: ชื่อ นามสกุล เบอร์โทรศัพท์ อีเมล LINE ID เบอร์ WhatsApp ประเทศ และรายละเอียดทรัพย์หรือบริการที่ท่านสอบถาม",
              "ข้อมูลเจ้าของทรัพย์และตัวแทนร่วม: รายละเอียดทรัพย์ ภาพถ่าย ราคาหรือค่าเช่าที่ต้องการ และข้อมูลตัวแทนร่วม (พื้นที่ที่ดูแล ประสบการณ์ ภาษา)",
              "เอกสารเมื่อมีการทำธุรกรรม: สำเนาบัตรประชาชนหรือหนังสือเดินทาง เอกสารสิทธิ์หรือเอกสารบริษัท และข้อมูลบัญชีสำหรับโอนส่วนแบ่งให้ตัวแทนร่วม",
            ],
          },
        ],
      },
      {
        h: "3. วัตถุประสงค์ ฐานกฎหมาย และการเปิดเผยข้อมูล",
        blocks: [
          { p: "เราเก็บและใช้ข้อมูลของท่านเพื่อ" },
          {
            ul: [
              "ตอบคำถาม แนะนำทรัพย์ และนัดชมทรัพย์กับเจ้าของทรัพย์และตัวแทนร่วม (การดำเนินการก่อนเข้าทำสัญญา ประโยชน์โดยชอบด้วยกฎหมาย หรือความยินยอม)",
              "ทำการตลาดทรัพย์ที่ฝากขายหรือเช่า ประสานงานความร่วมมือกับตัวแทนร่วม และจัดทำสัญญาซื้อขายหรือเช่า (การปฏิบัติตามสัญญา)",
              "ส่งข่าวสารหรือรายการทรัพย์ใหม่เฉพาะเมื่อท่านให้ความยินยอมรับข่าวสารเพิ่มเติม (ความยินยอม)",
            ],
          },
          { p: "หากท่านไม่ให้ข้อมูลส่วนบุคคลที่จำเป็นต่อการเข้าทำสัญญาหรือปฏิบัติตามกฎหมาย CRP อาจไม่สามารถตอบคำถาม นัดชมทรัพย์ จัดทำสัญญาซื้อขายหรือเช่า หรือจ่ายค่าตอบแทนตัวแทนร่วมได้" },
          { p: "เราไม่ขายข้อมูลของท่าน และเปิดเผยเฉพาะเท่าที่จำเป็นแก่เจ้าของทรัพย์ ตัวแทนร่วมที่มีหน้าที่รักษาความลับ ที่ปรึกษาทางกฎหมายหรือบัญชี หน่วยงานรัฐตามกฎหมาย และผู้ให้บริการระบบหลัก ซึ่งบางรายอาจประมวลผลข้อมูลนอกประเทศไทยภายใต้มาตรการคุ้มครองตาม PDPA" },
        ],
      },
      {
        h: "4. ระยะเวลาการเก็บข้อมูล",
        blocks: [
          {
            ul: [
              "การสอบถามทั่วไปที่ไม่มีการทำธุรกรรม: ไม่เกิน 2 ปี นับจากติดต่อครั้งล่าสุด",
              "การลงทะเบียนลูกค้า: อย่างน้อย 6 เดือนนับจากติดต่อครั้งล่าสุด และไม่เกิน 2 ปี",
              "เอกสารธุรกรรม สัญญา และข้อมูลตัวแทนร่วม: ไม่เกิน 10 ปี หลังสัญญาหรือธุรกรรมสิ้นสุด เพื่อปฏิบัติตามกฎหมายและภาษี",
              "รายชื่อรับข่าวสาร: จนกว่าจะมีการถอนความยินยอมหรือยกเลิกการรับข่าวสาร",
            ],
          },
        ],
      },
      {
        h: "5. สิทธิของท่านตามกฎหมาย PDPA",
        blocks: [
          { p: "ท่านมีสิทธิถอนความยินยอม ขอเข้าถึงหรือขอรับสำเนาข้อมูล ขอให้เปิดเผยถึงการได้มาซึ่งข้อมูลที่ไม่ได้ให้ความยินยอม ขอโอนข้อมูล คัดค้านหรือขอระงับการใช้ ขอแก้ไขหรือลบข้อมูล และร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) ที่ www.pdpc.or.th เราจะตอบคำขอภายใน 30 วัน เว้นแต่กฎหมายกำหนดให้ต้องเก็บข้อมูลไว้" },
        ],
      },
    ],
    contactTitle: "6. ติดต่อเรา",
    contactName: "Chiangrai Properties (CRP)",
    emailLabel: "อีเมล",
    phoneLabel: "โทร",
    chatLabel: "LINE และ WhatsApp",
    chatBefore: "ดูที่",
    chatLink: "หน้าติดต่อเรา",
    chatAfter: "",
    hoursLabel: "เวลาทำการ",
    hours: "วันจันทร์ถึงวันเสาร์ 9:00 ถึง 18:00 น. (UTC+7)",
  },
  terms: {
    title: "ข้อกำหนดการใช้งานเว็บไซต์",
    updated: "ปรับปรุงล่าสุด: ฉบับร่าง - อยู่ระหว่างตรวจสอบ",
    before: "การใช้เว็บไซต์ chiangrai-properties.com ถือว่าท่านยอมรับว่าข้อมูลทรัพย์เป็นข้อมูลประกอบเท่านั้น ไม่ใช่คำเสนอหรือคำปรึกษาทางกฎหมาย Chiangrai Properties (CRP) จำกัดความรับผิดเท่าที่กฎหมายไทยอนุญาต (เว้นแต่กรณีฉ้อฉลหรือประมาทเลินเล่ออย่างร้ายแรง) ใช้บังคับร่วมกับ",
    link: "นโยบายความเป็นส่วนตัว",
    after: " และอยู่ภายใต้กฎหมายไทย",
    contactLabel: "ติดต่อ",
  },
};
