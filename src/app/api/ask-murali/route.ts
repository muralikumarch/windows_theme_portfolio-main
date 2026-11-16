import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  profile,
  experience,
  projects,
  skills,
  achievements,
  certifications,
} from "@/data/portfolioData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function buildPortfolioContext(): string {
  return [
    `PROFILE:
Name: ${profile.name}
Headline: ${profile.headline}
Summary: ${profile.summary}
Location: ${profile.location}`,

    `EDUCATION:
Degree: ${profile.education.degree}
Institution: ${profile.education.institution}
University affiliation: ${profile.education.affiliation}
CGPA: ${profile.education.cgpa}
Graduation: ${profile.education.graduation}`,

    `EXPERIENCE:
${experience
  .map(
    (item) =>
      `- ${item.role} at ${item.organization} (${item.period}, ${item.mode}). ${item.points.join(
        ". "
      )}.${item.project ? ` Project: ${item.project} (${item.projectStatus}).` : ""}`
  )
  .join("\n")}`,

    `PROJECTS:
${projects
  .map(
    (project) =>
      `- ${project.name} [${project.status}] (${project.category}): ${
        project.purpose
      } Tech: ${project.stack.join(", ")}. Facts: ${project.facts.join(", ")}.${
        project.github ? ` GitHub: ${project.github}` : ""
      }${project.demo ? ` Demo: ${project.demo}` : ""}${
        project.limitations ? ` Limitation: ${project.limitations}` : ""
      }`
  )
  .join("\n")}`,

    `SKILLS:
${skills
  .map((skill) => `- ${skill.category}: ${skill.items.join(", ")}`)
  .join("\n")}`,

    `ACHIEVEMENTS:
${achievements
  .map(
    (achievement) =>
      `- ${achievement.title}${
        achievement.organization ? ` (${achievement.organization})` : ""
      }${achievement.track ? ` — ${achievement.track}` : ""}${
        achievement.location ? ` — ${achievement.location}` : ""
      }${achievement.team ? ` — Team: ${achievement.team}` : ""}${
        achievement.scale ? ` — Scale: ${achievement.scale}` : ""
      }`
  )
  .join("\n")}`,

    `CERTIFICATIONS:
${certifications
  .map(
    (certification) =>
      `- ${certification.title} — ${certification.issuer} (${certification.issued})`
  )
  .join("\n")}`,

    `CONTACT:
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}`,

    `RESUME:
Venkata Murali Kumar Chintala's resume is available as a PDF document in the portfolio.
If the visitor asks to see/download the resume, use [OPEN_RESUME].`,
  ].join("\n\n");
}

function generateLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("hire") || q.includes("why should") || q.includes("why hire")) {
    return "Here is why Venkata Murali Kumar Chintala stands out:\n\n• Solution Architecture Leadership: 16+ years software engineering experience, including 7+ years architecting enterprise platforms across Banking, Fintech, and Healthcare.\n• Multi-Cloud & AI Expertise: Hands-on Python AI development (FastAPI, Bedrock, Azure AI, LangChain, CrewAI) alongside enterprise Java & Spring Boot microservices.\n• Delivery & Mentorship: Proven track record leading pods of 10+ engineers and driving AI-assisted coding practices with TDD and Azure DevOps.\n\nCheck out his work! [OPEN_PROJECTS] [OPEN_ABOUT]";
  }

  if (q.includes("project") || q.includes("built") || q.includes("work") || q.includes("platform") || q.includes("system")) {
    return "Murali has architected key enterprise platforms across multi-cloud and AI domains:\n\n• Generative AI Agentic Ecosystem: Multi-cloud agentic platform across Amazon Bedrock & Azure AI\n• Mission-Critical Financial Transaction Platform: High-availability Spring Boot microservices on AWS & Azure\n• Legacy Monolith Modernization: Modernizing legacy enterprise monoliths into decoupled microservices\n• Autonomous Agentic Predictive Modeling Engine: Python workflows with LangChain & CrewAI\n\nTap below to explore all projects! [OPEN_PROJECTS]";
  }

  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("technology") ||
    q.includes("languages")
  ) {
    return "Here is a quick look at Murali's tech stack:\n\n• Enterprise & Backend: Java/J2EE, Spring Boot, Microservices, Python, FastAPI, RESTful APIs\n• AI & Agents: Amazon Bedrock, Azure AI, LangChain, CrewAI, Vector DBs, Prompt Engineering\n• Cloud & DevOps: AWS (Lambda, ECS, EKS, API Gateway), Azure (AKS, Functions, APIM), Docker, Azure DevOps\n• Frontend & UI: Angular, TypeScript, JavaScript, Kony Mobile, JSF, PrimeFaces\n\nExplore his full skills breakdown! [OPEN_SKILLS]";
  }

  if (
    q.includes("experience") ||
    q.includes("role") ||
    q.includes("lead") ||
    q.includes("history")
  ) {
    return "Murali's leadership experience includes:\n\n• Technical Lead @ RCG Global Services (Myridius) (July 2025 – Present)\n• Principal Software Engineer & Architect @ Parexel International (Nov 2017 – June 2025)\n• Senior Software Engineer @ Parexel International (Sep 2014 – Nov 2017)\n• Senior Software Engineer @ Kony IT Services (Oct 2013 – Sep 2014)\n• Software Engineer @ Wipro Technologies (Mar 2010 – Oct 2013)\n\n[OPEN_EXPERIENCE]";
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return "You can view and download Venkata Murali Kumar Chintala's updated resume right here in the portfolio! [OPEN_RESUME]";
  }

  if (
    q.includes("certif") ||
    q.includes("course") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university")
  ) {
    return "Murali holds an MCA (2006) and B.Sc. Computer Science (2003) from Andhra University. He holds top certifications including GitHub Copilot (2026), AWS AI Practitioner (2025), Azure AI Engineer Associate (2024), AWS Solutions Architect Associate (2026), Azure Solutions Architect Expert (2022), and Oracle Certified Programmer. [OPEN_CERTIFICATIONS]";
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("github") ||
    q.includes("linkedin")
  ) {
    return "Let's connect! You can reach Venkata Murali Kumar Chintala here:\n\n• Email: muralikumar.ch@gmail.com\n• LinkedIn: linkedin.com/in/chvmuralikumar\n• GitHub: github.com/chvmuralikumar\n\nClick below to open his contact panel! [OPEN_CONTACT]";
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("who are you")
  ) {
    return "Hey there! I'm Ask Murali, his portfolio assistant. Feel free to ask about his 16+ years of software architecture experience, Generative AI agentic systems, enterprise microservices, or leadership background! [OPEN_ABOUT]";
  }

  return `Venkata Murali Kumar Chintala is a Technical Lead & Solution Architect with 16+ years of software engineering experience in Banking, Payments, Fintech, Healthcare, and Generative AI.\n\nFeel free to ask about his work or view his resume! [OPEN_PROJECTS]`;
}

const systemInstruction = `
You are Ask Murali, an intelligent conversational AI assistant for Venkata Murali Kumar Chintala's professional portfolio.

Your purpose is to answer visitors naturally, intelligently, and conversationally.

CORE BEHAVIOR:
1. Use the portfolio data supplied with the request as your factual source about Venkata Murali Kumar Chintala.
2. Do NOT behave like a fixed FAQ bot.
3. Generate a fresh response for every visitor question.
4. Answer the visitor's actual question directly.
5. Keep normal answers concise but complete (2-5 sentences).
6. Do not use Markdown formatting (** or ##).
7. Never invent facts.
8. When relevant, append ONE UI action marker like [OPEN_PROJECTS], [OPEN_ABOUT], [OPEN_RESUME], [OPEN_SKILLS], [OPEN_EXPERIENCE], [OPEN_CERTIFICATIONS], [OPEN_CONTACT].
`;

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

function getHistory(value: unknown): HistoryMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (message): message is HistoryMessage =>
        typeof message === "object" &&
        message !== null &&
        ((message as HistoryMessage).role === "user" ||
          (message as HistoryMessage).role === "assistant") &&
        typeof (message as HistoryMessage).content === "string"
    )
    .slice(-6);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const question =
      typeof body.question === "string" ? body.question.trim() : "";

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey !== "your_gemini_api_key_here") {
      try {
        const portfolioContext = buildPortfolioContext();
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction,
        });

        const history = getHistory(body.history).map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        }));

        const chat = model.startChat({
          history,
          generationConfig: { maxOutputTokens: 700 },
        });

        const userMessage = `PORTFOLIO DATA:\n\n${portfolioContext}\n\nVISITOR QUESTION:\n\n${question}`;
        const result = await chat.sendMessageStream(userMessage);

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of result.stream) {
                const text = chunk.text();
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              }
              controller.close();
            } catch (error) {
              console.error("Ask Murali streaming error:", error);
              controller.error(error);
            }
          },
        });

        return new Response(stream, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
          },
        });
      } catch (geminiErr) {
        console.warn(
          "Gemini API failed, falling back to local QA engine:",
          geminiErr
        );
      }
    }

    // Fallback local response stream when API key is missing or Gemini API fails
    const localAnswer = generateLocalResponse(question);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(localAnswer));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("Ask Murali error:", error);

    const fallback = generateLocalResponse("general");
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(fallback));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}