# LearnLoop — Render Version

LearnLoop is a beginner-friendly skill exchange + professional learning website.

## Features

- Skill Exchange section for free peer-to-peer learning.
- Learn a New Skill section for professional programs.
- ₹499/month LearnLoop Pro presentation.
- Detailed "Read article" content for every skill.
- Join Now registration form.
- Registration ID generated for every successful registration.
- Confirmation email to the learner through Resend.
- Optional notification email to the site owner.
- Responsive mobile navigation.
- Express backend ready for Render.

## Important

The ₹499 Pro pricing is currently a website/pricing feature only. It does NOT charge a card automatically.

To accept real payments, connect a payment gateway such as Razorpay or Stripe and create a checkout/subscription flow.

## Local setup

1. Install Node.js 20+.
2. Open a terminal in this folder.
3. Run:

   npm install

4. Create a `.env` file using `.env.example`.
5. Add your Resend API key.
6. Run:

   npm start

7. Open `http://localhost:10000`.

## Render setup

Create a Render Web Service from this GitHub repository.

Build command:
npm install

Start command:
npm start

Environment variables:
RESEND_API_KEY
RESEND_FROM_EMAIL
ADMIN_EMAIL

Do not put the Resend API key inside frontend JavaScript. Keep it in Render Environment Variables.

## Email setup

Resend is used because the email must be sent from server-side code. For production, verify a domain in Resend and use an email address from that verified domain as RESEND_FROM_EMAIL.

## GitHub structure

learnloop/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── render.yaml
└── server.js
