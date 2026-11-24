# Project History – 007 Education Industry Demo Website

**Project Collection:** Industry-Specific Website Demonstrations  
**Project Name:** 007 Education Demo Website  
**Demo Brand:** EDVANCE – Education & Learning Institute  
**Tagline:** Learn Today. Lead Tomorrow.  
**Category:** Education, Coaching, Training and Skill Development  
**GitHub Repository:** [https://github.com/ilath9198-wq/007-education.git](https://github.com/ilath9198-wq/007-education.git)  
**Production Deployment:** [https://007-education.vercel.app](https://007-education.vercel.app)

---

## 1. Executive Summary & Brand Identity

**EDVANCE – Education & Learning Institute** is a flagship multi-page institutional web platform created as an industry-specific digital demonstration. It demonstrates how modern schools, universities, coaching academies, IT institutes, competitive exam centres, and skill development institutes can present their courses, faculty, infrastructure, academic results, and admission pathways.

### Brand Palette & Visual Identity
- **Primary Institutional Navy:** `#0a192f` / `#0f274a` (Trust, heritage, scholastic rigor)
- **Vibrant Royal Blue:** `#2563eb` / `#1d4ed8` (Modern digital intelligence)
- **Warm Gold & Amber:** `#f59e0b` / `#fbbf24` (Achievement, distinction, high contrast)
- **Crisp Off-White & Slate:** `#f8fafc` / `#ffffff` (Clean typography, textbook clarity)

---

## 2. Standing Chat Rules Compliance

1. **Strictly ZERO `.html` Extensions:**
   - No `.html` anywhere in project directories, filenames, routing, or internal hyperlinks. Built with clean Next.js 14 App Router folder-based routes (`/about`, `/courses`, `/admissions`, etc.).
2. **Mandatory Atmospheric Photographic Hero Sections:**
   - Every single page features an authentic, high-resolution educational photographic background.
   - Deep navy-to-charcoal multi-layered gradient scrims (`from-navy-950/95 via-navy-900/85 to-navy-950/75`).
   - Crisp white drop-shadowed typography for maximum readability.
3. **Solid High-Contrast Visible CTA Buttons:**
   - No transparent or missing buttons. All CTA buttons use vibrant amber-500, royal-600, or solid navy backgrounds with high-contrast text.
4. **Unique Interactive Learning Index Navigation:**
   - Replaces generic menus with a vertically expanding academic course syllabus index.
   - Features numbered academic sections (`01` to `11` with `SEC-1.0` to `SEC-11.0`), academic icons, active route pills, and quick action ribbons.

---

## 3. Dedicated 11 Pages & Route Architecture

| Route | Page Name | Primary Features |
|---|---|---|
| `/` | **Home** | Institutional hero, 4-pillar advantage, popular courses, campus facilities preview, student testimonials, and admissions banner. |
| `/about` | **About Us** | Heritage story, vision & mission, 4 core values, 4-stage cognitive mastery pedagogy, and governing leadership. |
| `/academics` | **Academics** | 6 specialized academic streams with eligibility, durations, core curricular highlights, progression paths, and demonstration disclaimer. |
| `/courses` | **Courses** | 12-course catalogue with live keyword search, 7 category filter pills, and interactive course detail modal showing full modular syllabi. |
| `/admissions` | **Admissions** | 4-step admission roadmap, deadlines calendar table, on-page admission application form with code generator (`EDV-ADM-2026-XXXX`), and FAQ accordion. |
| `/faculty` | **Faculty** | 6 detailed faculty profiles with department filter bar, research bios, expertise tags, and mentorship booking triggers. |
| `/campus` | **Campus & Facilities** | 6 campus infrastructure pillars, safety/HEPA filtration specifications, and campus tour booking. |
| `/student-life` | **Student Life** | 6 student clubs & guilds, annual milestone events calendar, and psychological wellness support. |
| `/results` | **Results & Achievements** | Academic performance cards, competitive exam rankings (JEE, NEET, GATE, UPSC), placement metrics ($42k highest package), and ranker quotes. |
| `/resources` | **Resources** | 8 downloadable study notes, sample examination papers, handbooks, live search, and simulated download triggers. |
| `/contact` | **Contact Us** | Campus location address, direct phone/email channels, operating hours, interactive inquiry form with ticket generator (`EDV-ENQ-2026-XXXX`), and WhatsApp counselor link. |

---

## 4. Interactive Components & Modals

1. **`LearningIndexNavigation.tsx`**:
   - Distinctive vertically unfolding academic syllabus index panel.
   - Displays numbered sections, active route indicators, quick apply ribbon, and student portal link.
2. **`AdmissionModal.tsx`**:
   - Multi-step interactive application form with input validation, programme selection, and voucher generator (`EDV-ADM-2026-XXXX`).
3. **`StudentLoginModal.tsx`**:
   - Institutional LMS student portal simulation with pre-filled demo credentials and live lecture schedule.
4. **`EnrollmentContext.tsx`**:
   - Global React state management providing seamless modal triggers across all 11 routes.

---

## 5. Pre-Verified Educational Image Assets (22/22 HTTP 200 OK)

All photography was verified via automated HTTP requests (`verify-edu-images.js`) to ensure zero broken assets:
- `photo-1523240795612-9a054b0db644`: University students smiling / graduating (Results & Academics)
- `photo-1531482615713-2afd69097998`: Modern classroom meeting (Hero & About)
- `photo-1525921429624-479b6a26d84d`: College student reading on lawn (Admissions)
- `photo-1541339907198-e08756dedf3f`: University campus main building (Contact Us & Campus)
- `photo-1524178232363-1fb2b075b655`: Teacher in modern lecture hall (Faculty & Academics)
- `photo-1562774053-701939374585`: College building & campus courtyard (Campus & Map)
- `photo-1516321318423-f06f85e504b3`: Digital learning & tech laptops (Courses & Software Engineering)
- `photo-1497633762265-9d179a990aa6`: Central reading hall & study commons (Resources & Campus)
- `photo-1509062522246-3755977927d7`: Classroom instruction & competitive coaching (Courses)
- `photo-1522202176988-66273c2fd55f`: Collaborative group study & hackathons (Student Life)
- `photo-1581091226825-a6a2a5aee158`: Engineering & tech student (Courses)
- `photo-1532094349884-543bc11b234d`: Science laboratory research & chemistry pods (Campus)
- `photo-1571260899304-425eee4c7efc`: Computer lab training & terminals (Campus)
- `photo-1427504494785-3a9ca7044f45`: Students in hallway (Student Life)
- `photo-1524995997946-a1c2e315a42f`: Library books & wooden archives (Resources)
- `photo-1517486808906-6ca8b3f04846`: Seminar & auditorium presentation (Student Life)
- `photo-1534447677768-be436bb09401`: Outdoor campus grounds (Campus)
- Verified Faculty Portraits:
  - `photo-1573496359142-b8d87734a5a2` (Dr. Aarav Mehta)
  - `photo-1560250097-0b93528c311a` (Prof. Sunita Deshmukh)
  - `photo-1580894732444-8ecded7900cd` (Dr. Vikram Ramanathan)
  - `photo-1534528741775-53994a69daeb` (Prof. Nandini Roy)
  - `photo-1507003211169-0a1dd7228f2d` (Dr. Devendra Sanyal)
