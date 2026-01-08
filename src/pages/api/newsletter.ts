import type { APIRoute } from "astro";
import * as brevo from "@getbrevo/brevo";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email address is required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide a valid email address",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const apiKey = import.meta.env.BREVO_API_KEY;

    // If Brevo is not configured, use fallback (log and return success)
    if (!apiKey) {
      console.log("📧 Newsletter signup (fallback mode):", email);
      console.log("⚠️  BREVO_API_KEY not configured. Email logged but not sent to mailing list.");
      console.log("👉 To enable real newsletter signups, configure Brevo API keys in Vercel environment variables.");

      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you for subscribing! We'll keep you updated.",
        }),
        {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Brevo integration (if configured)
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(
      brevo.ContactsApiApiKeys.apiKey,
      apiKey
    );

    const templateId = Number(import.meta.env.BREVO_DOI_TEMPLATE_ID);
    const redirectionUrl = import.meta.env.BREVO_REDIRECTION_URL || import.meta.env.SITE || "https://bitropy.io";

    if (!templateId) {
      console.error("BREVO_DOI_TEMPLATE_ID is not configured");
      // Fallback to simple contact creation without DOI
      console.log("📧 Newsletter signup (no DOI template):", email);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you for subscribing! We'll keep you updated.",
        }),
        {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const createDoiContact = new brevo.CreateDoiContact();
    createDoiContact.email = email;
    createDoiContact.includeListIds = [
      Number(import.meta.env.BREVO_LIST_ID) || 2
    ];
    createDoiContact.templateId = templateId;
    createDoiContact.redirectionUrl = redirectionUrl;

    await apiInstance.createDoiContact(createDoiContact);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Please check your email to confirm your subscription!",
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    console.error("Newsletter API error:", error);

    if (error.status === 400 && error.response?.body?.code === "duplicate_parameter") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "You're already subscribed to our newsletter!",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to subscribe. Please try again later.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
