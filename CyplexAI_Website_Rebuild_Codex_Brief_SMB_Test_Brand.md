# CyplexAI Website Rebuild Plan for Codex
## SMB / Business Skills Store Direction
**Date:** 2026-06-02  
**Status:** Strategic rebuild brief  
**Branding status:** Test mode only. Do not replace current approved brand system yet.  

---

## 0. Codex Role

You are acting as a senior front-end developer, information architect, and brand-aware implementation partner for CyplexAI.

Your job is to help rebuild the CyplexAI website so it reflects the new business-forward direction:

> CyplexAI teaches practical AI, workflow, and business thinking skills for people who need to get real work done.

This is not a generic AI startup site.  
This is not a prompt marketplace.  
This is not a children’s learning platform, even though CyplexAI may still keep a families / schools track.

The new site should feel like:

- Executive education
- Practical business training
- Strategic thinking partner
- Workshop-ready
- Human-centered AI literacy
- A storefront for useful business skills

The site must communicate clarity, trust, and practical value.

---

## 1. Important Brand Instruction

### Current Approved Brand

Leave the existing brand system in place as the default until Dave confirms that Jeff and Stefanie have approved the new SMB brand direction.

Do **not** delete or overwrite the current approved brand styles.

### New SMB Brand Direction

The new SMB brand is currently in test mode and may become the next approved brand.

Use it as an experimental theme layer only.

Expected source files may include:

- `CyplexAI_Harbor_Teal_Update.html`
- `CyplexAI_SMB_Brand_Kit_v1.0_FULL.md`
- Any existing current brand kit or current site CSS files already in the repo

### Implementation Requirement

Create a clean theme structure that allows Dave to switch between:

1. Current approved brand
2. SMB test brand

Recommended implementation:

```css
:root {
  /* current approved theme remains here or in existing global stylesheet */
}

[data-theme="smb-test"] {
  /* experimental SMB brand variables */
}
```

Or, if the current codebase uses another structure, preserve that architecture and add an equivalent theme override.

Do not hard-code the new SMB colors directly throughout components.  
Use design tokens / CSS variables.

---

## 2. New SMB Test Brand Tokens

Use the following only for the experimental SMB theme.

### Typography

Headings:

```css
font-family: "Newsreader", serif;
```

Use for:

- Hero headlines
- Page titles
- Section headings
- Pull quotes
- Big strategic statements

Body:

```css
font-family: "IBM Plex Sans", system-ui, sans-serif;
```

Use for:

- Body copy
- Navigation
- Cards
- Forms
- Learning content
- Course descriptions

System / Prompt Layer:

```css
font-family: "IBM Plex Mono", monospace;
```

Use for:

- Prompt examples
- System labels
- Workflow examples
- Agent instructions
- Framework cards
- Code-like snippets

### SMB Test Palette

```css
--bg: #F8FAFC;              /* Nordic Frost */
--paper: #FFFFFF;           /* Clean Paper */
--ink: #0F172A;             /* Midnight Slate */
--deep-ocean: #155E75;      /* Primary brand accent */
--harbor-teal: #158D80;     /* Secondary accent */
--steel-blue: #4B6B88;      /* Supporting text / icons */
--muted: #64748B;           /* Helper text */
--mist: #EAF2F4;            /* Soft surface */
--border: #CBD5E1;          /* Borders */
--pop: #DB0D70;             /* Signature POP */
```

### Color Use Rules

Use approximately:

- 80% Nordic Frost, Clean Paper, Midnight Slate, Deep Ocean
- 15% Harbor Teal, Steel Blue, Quiet Bluegray, Arctic Mist
- 5% Signature POP

Never use magenta as the dominant color.  
Magenta is for rare emphasis only:

- Key insights
- Selected states
- Highlight statistics
- Special callouts
- Rare CTA moments

Deep Ocean should carry the main brand structure.  
Harbor Teal should feel optimistic and usable.  
Magenta should behave like a highlighter, not a paint bucket.

---

## 3. Strategic Repositioning

### Old Risk

The site may currently look or sound like:

- A kids / family AI course site
- A general AI education site
- A founder idea page
- A vague “learn AI” landing page
- A consulting site without a clear product shelf

### New Direction

The site should clearly position CyplexAI as:

> A practical AI and business skills training company for business people, teams, and organizations.

The website should support a LearnWorlds storefront where CyplexAI can sell:

- Micro-courses
- Quick-win trainings
- Business skill modules
- AI workflow guides
- Prompt/workflow packs
- Team training pathways
- Chamber / workshop follow-up products
- Families / schools content as a separate track

---

## 4. Audience Correction

Do not write only for “business owners.”

That is too narrow.

The audience includes:

- Small business owners
- Managers
- Team leaders
- Admins
- Salespeople
- Marketers
- HR staff
- Operations leads
- Trainers
- Nonprofit directors
- Chamber members
- Consultants
- Executive assistants
- Project coordinators
- Employees who become the unofficial “AI person”
- Business operators inside SMBs and mid-sized organizations

### Preferred Audience Language

Use:

- business people
- business professionals
- small business teams
- teams and leaders
- people doing real business work
- organizations
- operators
- managers and teams

Avoid relying too heavily on:

- owners only
- entrepreneurs only
- founders only

Owners matter, but they are not the whole market.

---

## 5. Core Messaging

### Primary Site Message

Use one of these directions as the basis for the homepage hero:

Option A:

> Practical AI training for real business work.

Option B:

> Learn how to think with AI, not just use AI tools.

Option C:

> Cut through the AI noise and build skills your business can actually use.

Option D:

> AI, workflow, and business thinking skills for people who need to get real work done.

### Recommended Hero Draft

Headline:

> Practical AI training for real business work.

Subheadline:

> CyplexAI helps business people and teams cut through the AI noise, improve their judgment, and build useful workflows for marketing, sales, operations, training, and everyday productivity.

Primary CTA:

> Explore Courses

Secondary CTA:

> Start with AI Basics

Optional tertiary CTA:

> Book a Workshop

### Avoid These Phrases

Avoid:

- Unlock your full potential
- Transform your business overnight
- Supercharge everything
- Master AI in minutes
- Future-proof your business
- The ultimate AI solution
- Prompt engineering secrets
- AI-powered revolution

Keep the language grounded.  
No hype fog. No wizard robe.

---

## 6. Site Architecture

Build the site around a storefront model, not a brochure model.

### Recommended Top Navigation

1. Home
2. Courses
3. Business Skills Store
4. Workshops
5. Families & Schools
6. Free Resources
7. About
8. Contact

If navigation needs to be tighter:

1. Home
2. Courses
3. Workshops
4. Families & Schools
5. Resources
6. About

### Homepage Purpose

The homepage should answer:

1. What is CyplexAI?
2. Who is it for?
3. What problems does it solve?
4. What can visitors do next?
5. What courses or pathways are available?
6. Why should they trust this company?

The homepage should drive users toward:

- LearnWorlds course catalog
- Starter course
- Free resource
- Workshop inquiry
- Business skills store
- Families / schools track

---

## 7. Homepage Section Plan

### Section 1: Hero

Purpose: immediate clarity.

Include:

- Clear headline
- Short subheadline
- Primary CTA
- Secondary CTA
- Three proof/value bullets

Example bullets:

- Build practical AI habits for daily work
- Turn messy ideas into usable business assets
- Learn safe, responsible workflows before automating

Visual direction:

- Clean editorial layout
- Large Newsreader headline
- Soft Nordic Frost background
- Deep Ocean CTA
- Harbor Teal secondary CTA
- One restrained magenta highlight

---

### Section 2: The Problem

Purpose: name the pain.

Suggested heading:

> The AI noise is loud. Most teams need a clearer way in.

Suggested copy:

> Business people are being told to use AI, automate everything, and keep up with new tools every week. But most teams do not need more noise. They need practical skills, safer workflows, and better judgment.

Include 3 problem cards:

1. Tool confusion  
   “Which AI tool should I use for this?”

2. Poor outputs  
   “Why does AI keep giving me generic answers?”

3. No workflow  
   “How do we turn AI experiments into real business value?”

---

### Section 3: What CyplexAI Teaches

Purpose: show the capability shelves.

Suggested heading:

> Learn the skills behind better AI use.

Course / skill categories:

1. AI Basics
2. Prompting for Real Work
3. Marketing & Sales
4. Operations & SOPs
5. Productivity & Workflow
6. Privacy & Risk
7. Hiring & Training
8. Strategy & Decision-Making
9. Families & Schools

Each category should have:

- Short description
- Icon or simple visual marker
- CTA to related courses if available
- Hidden / disabled state if no course exists yet

Important: Do not show empty shelves as active links.

---

### Section 4: Featured Courses

Purpose: make the site feel immediately buyable.

Suggested heading:

> Start with a practical win.

Initial course cards may include:

1. AI for Business: Start Here
2. What Not to Put Into AI
3. Prompting for Real Business Work
4. Build a Simple Market Research Agent
5. Create a 30-Day Marketing Calendar
6. Write Your First SOP with AI

Each card should include:

- Course title
- Who it is for
- What the learner will create
- Time estimate
- Skill level
- Price if available
- CTA

Card copy should emphasize output, not abstract learning.

Use this structure:

```text
You will create:
[Specific output]

Best for:
[Audience]

Time:
[Time estimate]
```

---

### Section 5: Business Skills Store Explanation

Purpose: explain the product model.

Suggested heading:

> A store stocked with the skills your team actually needs.

Suggested copy:

> CyplexAI courses are designed as practical learning assets. Some are quick wins. Some are deeper skill builders. All are built around real business problems: writing better emails, building SOPs, planning content, checking AI outputs, preparing for meetings, and turning ideas into usable work.

Include a three-tier product system:

1. Quick Wins  
   10–30 minutes  
   Free to low-cost  
   One immediate result

2. Skill Builders  
   45–90 minutes  
   Focused business capability  
   Includes templates or workflows

3. Business Systems  
   Multi-module pathways  
   Team-ready learning  
   Good for workshops or internal rollout

---

### Section 6: Workshops and Speaking

Purpose: support Chamber / professional organization sales.

Suggested heading:

> Bring practical AI training to your team or organization.

Suggested copy:

> CyplexAI offers beginner-friendly workshops for chambers, professional groups, teams, and organizations that want practical AI education without a hard sell or technical overwhelm.

CTA:

> Plan a Workshop

Potential workshop formats:

- 45-minute AI introduction
- 90-minute hands-on business workflow lab
- Half-day team training
- Chamber lunch-and-learn
- Executive AI readiness session

---

### Section 7: Families & Schools Track

Purpose: keep the mission track alive without making it dominate the business site.

Suggested heading:

> Helping families and educators teach better thinking in an AI world.

Suggested copy:

> CyplexAI also develops learning experiences for families, students, and educators focused on critical thinking, responsible AI use, and curiosity-driven learning.

CTA options:

- Explore Family AI Learning
- Join the Pilot
- Learn About Educator Workshops

Do not let this section overtake the SMB direction.  
This should be a clear secondary path.

---

### Section 8: Why CyplexAI

Purpose: define differentiation.

Suggested heading:

> We teach thinking before prompting.

Use three pillars:

1. Judgment before automation  
   AI is only useful when people know how to evaluate it.

2. Workflows before tricks  
   Prompts matter, but repeatable business workflows matter more.

3. Humans before tools  
   The goal is better decisions, not blind dependence.

---

### Section 9: Final CTA

Suggested heading:

> Start small. Build useful AI habits.

Primary CTA:

> Explore the Store

Secondary CTA:

> Book a Workshop

---

## 8. Course Catalog / Store Page

Create or revise a dedicated course/store page.

Recommended page title:

> The CyplexAI Business Skills Store

Subtitle:

> Practical AI and workflow courses for people doing real business work.

### Store Filters / Categories

Include filters if technically practical:

- Start Here
- AI Basics
- Prompting
- Marketing & Sales
- Operations
- Productivity
- Privacy & Risk
- Training & HR
- Strategy
- Families & Schools

### Course Card Requirements

Each card should have:

- Title
- Category
- Short outcome-based description
- Audience
- Time estimate
- Skill level
- Price or “Coming Soon”
- CTA

### Coming Soon Handling

If a course is not available:

- Do not link to checkout.
- Mark as “Coming Soon.”
- Allow optional email capture only if existing stack supports it.

Avoid fake inventory.

---

## 9. Course Detail Page Template

Each course landing page should include:

1. Course title
2. One-sentence promise
3. Who it is for
4. The business problem it solves
5. What the learner will create
6. What is included
7. Time required
8. Skill level
9. Tools needed
10. Preview lesson / sample
11. Price
12. CTA
13. Recommended next course

### Required Section

Add this block to every course:

```text
What you will create

By the end of this course, you will have:
- [Output 1]
- [Output 2]
- [Output 3]
```

This is essential. Business people buy outcomes.

---

## 10. Families & Schools Page

This should exist, but not dominate the homepage.

Position it as:

> Critical thinking and responsible AI learning for families, students, and educators.

Possible sections:

1. Why this matters
2. Current pilot
3. What students learn
4. What parents learn
5. Educator / school inquiry
6. Free Module 1 pilot CTA
7. Feedback / testimonials when available

Important language:

- Teach kids to think with AI
- Critical thinking in an AI world
- Parent-supported learning
- Responsible use
- Curiosity and judgment

Avoid implying the product is only for children.  
Avoid anything that triggers unnecessary legal exposure or overpromises safety.

---

## 11. Workshops Page

Create a page for live sessions.

Recommended title:

> Practical AI Workshops for Business Teams and Organizations

Sections:

1. Overview
2. Who it is for
3. Workshop formats
4. Popular topics
5. What participants leave with
6. Inquiry form / contact CTA

Popular topics:

- AI for Business: Start Here
- Prompting for Real Business Work
- AI Privacy and Safe Use
- Marketing Content with AI
- SOPs and Workflow Design
- AI for Managers and Team Leads
- Building Better Business Decisions with AI

Tone:

- Executive workshop
- Practical education
- No hard sell
- No technical overwhelm

---

## 12. About Page

The About page should establish credibility without becoming Dave’s biography museum.

Suggested structure:

1. What CyplexAI believes
2. Why thinking matters in the AI era
3. Dave’s background
4. Instructional design and business experience
5. Human-centered approach
6. Team / collaborators if ready
7. CTA to courses or workshops

Key message:

> CyplexAI exists because AI is not just a tool problem. It is a thinking, judgment, workflow, and learning problem.

---

## 13. Free Resources Page

Purpose: list lead magnets and free samples.

Possible resources:

- AI Readiness Checklist
- What Not to Put Into AI
- Prompt Ladder Quick Guide
- Meeting Notes to Action Items
- AI Tool Comparison Guide
- Small Business AI Starter Map
- Family AI Conversation Guide

Each resource should have:

- Title
- Short description
- Download CTA
- Optional email capture

---

## 14. Copywriting Rules

### Voice

Use:

- Clear
- Practical
- Direct
- Human
- Strategic
- Slightly editorial
- Business-forward

Avoid:

- Tech hype
- Cute kid language
- Overly academic language
- Overly casual slang
- Generic SaaS wording
- Empty consulting phrases

### Preferred Phrases

Use:

- Practical AI training
- Real business work
- Thinking before prompting
- Judgment before automation
- Workflows before tricks
- Learn by doing
- Business skills for an AI world
- Cut through the AI noise
- Build useful AI habits
- Start with a practical win

### Avoid or Minimize

- Unlock potential
- AI revolution
- Game-changing
- Supercharge
- Master AI instantly
- Future-proof
- Seamless transformation
- Prompt hacks
- Magic
- Disruptive innovation

---

## 15. Design Requirements

### General Layout

- Editorial hero sections
- Clean cards
- Clear hierarchy
- Strong white space
- Premium workshop feel
- Avoid generic AI gradients
- Avoid neon robot visuals
- Avoid childish illustration style for the business sections

### Cards

SMB test brand recommendations:

```css
border-radius: 22px;
border: 1px solid var(--border);
box-shadow: 0 8px 26px rgba(15,23,42,.07);
```

### Buttons

Primary:

```css
background: var(--deep-ocean);
color: #fff;
border-radius: 12px;
```

Secondary:

```css
background: var(--harbor-teal);
color: #fff;
border-radius: 12px;
```

Ghost:

```css
background: transparent;
color: var(--deep-ocean);
border: 1px solid var(--border);
```

Magenta / POP:

Only for rare CTA or highlight moments.

```css
background: var(--pop);
color: #fff;
```

### System Blocks

Use dark system blocks for prompts, workflows, and agent examples.

```css
background: #0F172A;
color: #EAF2F4;
border-left: 5px solid #DB0D70;
font-family: "IBM Plex Mono", monospace;
```

---

## 16. Content Model for Initial Store Inventory

Build with this initial content map, even if some courses are placeholder / coming soon.

### Start Here

1. AI for Business: Start Here
2. What AI Can and Cannot Do
3. Choosing the Right AI Tool for the Job

### Prompting / Thinking

1. Prompting for Real Business Work
2. The Prompt Ladder
3. How to Ask Better Questions with AI
4. Reality Check: How to Verify AI Outputs

### Marketing & Sales

1. Create a 30-Day Marketing Calendar with AI
2. Turn One Idea into 10 Marketing Assets
3. Write Better Follow-Up Emails
4. Build a Simple Market Research Agent

### Operations

1. Write Your First SOP with AI
2. Turn Chaos into a Checklist
3. Build a Simple Internal Knowledge Base

### Productivity

1. Inbox, Calendar, and Task Cleanup with AI
2. Meeting Notes to Action Items
3. Stop Starting From a Blank Page

### Privacy & Risk

1. What Not to Put Into AI
2. AI Privacy Basics for Business Teams
3. Create a Simple AI Use Policy

### Training / HR

1. Build a 30-Day Onboarding Plan
2. Turn Expert Knowledge into Training
3. Create Better Job Aids with AI

### Strategy

1. Should We Automate, Hire, Outsource, or Wait?
2. AI Strategy Without the Hype
3. ROI Thinking for AI Tools

### Families & Schools

1. AI Thinkers Academy Module 1
2. Family AI Starter Pilot
3. Educator AI Thinking Workshop

---

## 17. Initial Launch Priority

Do not build everything.

Launch with one clean aisle.

### First Priority Products

1. AI for Business: Start Here
2. What Not to Put Into AI
3. Prompting for Real Business Work
4. Build a Simple Market Research Agent
5. Create a 30-Day Marketing Calendar with AI
6. Write Your First SOP with AI

### Rule

Only show a course as active if it actually exists and can be accessed.

Everything else can be:

- Coming Soon
- Hidden
- Listed as a future category only

---

## 18. Technical Requirements

Before making changes:

1. Inspect repo structure.
2. Identify framework and routing system.
3. Identify current styling system.
4. Identify where brand tokens live.
5. Identify current pages/components.
6. Identify how LearnWorlds links are currently handled.
7. Identify existing assets, logos, and images.
8. Preserve working code.

### Do Not

- Break current navigation
- Delete existing pages without confirmation
- Replace current brand permanently
- Hard-code all styles
- Add dependencies without explaining why
- Invent fake course links
- Invent prices unless provided
- Use stock photos that feel generic or cheesy
- Make the families/schools track disappear

### Do

- Create reusable components
- Use design tokens
- Use clean semantic HTML
- Maintain accessibility
- Make copy easy to edit
- Make course cards data-driven if practical
- Add comments where Dave needs to update URLs or text
- Keep the design professional and business-forward

---

## 19. Recommended Component Structure

If the current stack supports components, create or update:

- `HeroSection`
- `ProblemSection`
- `SkillCategoryGrid`
- `FeaturedCourses`
- `CourseCard`
- `StorefrontCTA`
- `WorkshopSection`
- `FamiliesSchoolsTeaser`
- `WhyCyplexAI`
- `FinalCTA`
- `SystemBlock`
- `ResourceCard`
- `ThemeProvider` or theme token file if applicable

Course data should ideally live in a simple editable file, such as:

- `courses.ts`
- `courses.js`
- `courses.json`
- CMS / data file already used by the project

Course object example:

```js
{
  title: "Build a Simple Market Research Agent",
  category: "Marketing & Sales",
  audience: "Business professionals, marketers, sales leads, and team managers",
  outcome: "Create a reusable AI research assistant for tracking market signals and opportunities.",
  time: "45–60 minutes",
  level: "Beginner",
  status: "available",
  price: "$49",
  url: "REPLACE_WITH_LEARNWORLDS_URL"
}
```

---

## 20. Accessibility Requirements

- Maintain strong color contrast.
- Do not put important text over busy images.
- Use semantic headings.
- Ensure buttons and links are keyboard accessible.
- Include visible focus states.
- Avoid relying on color alone to communicate status.
- Add alt text for meaningful images.
- Keep paragraph widths readable.
- Test mobile layouts carefully.

---

## 21. QA Checklist Before Public Launch

Every page must pass:

### Visual

- Layout works on desktop
- Layout works on tablet
- Layout works on mobile
- No awkward spacing
- No unreadable text
- No overuse of magenta
- No childish visual language in business sections

### Functional

- Navigation works
- CTAs work
- Course links work
- LearnWorlds links open correctly
- Contact links work
- Forms work if present
- No broken images
- No console errors

### Content

- No typo issues
- No old “owners only” language where broader audience is needed
- No overhyped AI claims
- No fake course availability
- Families/schools track still exists, but secondary
- Business store direction is obvious

### Brand

- Current approved brand remains available
- SMB test theme is separate and easy to evaluate
- Fonts load correctly
- Color tokens are used consistently
- Magenta is limited to POP moments

---

## 22. Suggested Implementation Sequence

### Step 1: Audit

Inspect current website structure and report:

- Framework
- Pages
- Components
- Styling system
- Current brand tokens
- Current course links
- Current LearnWorlds integration points

### Step 2: Create Theme Layer

Add the SMB test brand tokens without replacing current brand.

### Step 3: Rebuild Homepage

Implement new homepage content and structure.

### Step 4: Build Store / Courses Page

Create the Business Skills Store page with course categories and course cards.

### Step 5: Add Supporting Pages

Create or update:

- Workshops
- Families & Schools
- Free Resources
- About

### Step 6: Link to LearnWorlds

Use placeholder comments for unknown URLs.

Never invent real links.

### Step 7: QA

Run accessibility, mobile, link, and content checks.

### Step 8: Provide Summary

Return:

- What changed
- Files modified
- New components created
- Any risks
- Any placeholder URLs Dave must replace
- Any questions for Dave before final publishing

---

## 23. Final Direction

The website should make this clear within five seconds:

> CyplexAI is a practical AI and business skills training company for people doing real work.

The site should no longer feel like a loose collection of AI ideas.

It should feel like:

- a storefront
- a training company
- a thought partner
- a business education platform
- a practical way into AI for teams and professionals

The families / schools work remains alive, but the site’s commercial front door should now point toward business skills, practical AI literacy, and workflow training.

End state:

> CyplexAI helps business people think better, work smarter, and use AI responsibly without getting lost in the noise.
