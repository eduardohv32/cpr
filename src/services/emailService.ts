import { useState } from 'react';

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const RECIPIENT_EMAIL = 'eduardohv32@gmail.com';

interface EmailData {
  name: string;
  email: string;
  course: string;
  message: string;
}

export const useEmailService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: EmailData) => {
    if (!BREVO_API_KEY) {
      setError('Email service is not configured. Please add your Brevo API key to the environment variables.');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: {
            name: 'CPR Training Website',
            email: 'website@lincolncprtraining.com'
          },
          to: [{
            email: RECIPIENT_EMAIL,
            name: 'CPR Training Admin'
          }],
          replyTo: {
            email: data.email,
            name: data.name
          },
          subject: `New Course Inquiry: ${data.course}`,
          htmlContent: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Interested Course:</strong> ${data.course}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to send email');
      }

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send email');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading, error };
};