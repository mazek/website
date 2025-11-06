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

    const apiKey = import.meta.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not configured",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(
      brevo.ContactsApiApiKeys.apiKey,
      apiKey
    );

    const templateId = Number(import.meta.env.BREVO_DOI_TEMPLATE_ID);
    const redirectionUrl = import.meta.env.BREVO_REDIRECTION_URL || import.meta.env.SITE || "https://bitropy.com";

    if (!templateId) {
      console.error("BREVO_DOI_TEMPLATE_ID is not configured");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured",
        }),
        {
          status: 500,
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
    console.error("Brevo API error:", error);

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
