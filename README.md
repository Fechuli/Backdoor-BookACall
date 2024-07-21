# Backdoor Book A Call

Backdoor Book A Call is an application designed to schedule appointments with members of Backdoor, our design studio focused on 3D experiences and website creation. This app allows users to select who they want to talk to, choose a convenient time, and provide details for the appointment. Once a Backdoor team member accepts or declines the appointment, an SMS notification is sent to inform the user of the outcome. At this time, SMS operation is diabilitated since this is a test account.

## Key Features

- **Appointment Scheduling**: Users can select a specific team member, pick a suitable date, and provide details for the appointment.
- **SMS Notifications**: Users receive SMS notifications to confirm whether their appointment request has been accepted or declined.

## Technologies Used

- **Typescript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Next.js**: A powerful React framework for server-side rendering and generating static websites.
- **Tailwind CSS**: A utility-first CSS framework that allows for fast and customizable styling.
- **Appwrite**: A backend-as-a-service platform used for managing databases and authentication.
- **Twilio**: An API for sending SMS notifications, ensuring users are informed about their appointment status.
- **Sentry**: A tool for error tracking and performance monitoring, helping maintain the application's reliability.
- **React**: A JavaScript library for building user interfaces, crucial for the dynamic components of the app.
- **shadcn**: A library providing pre-built UI components that are easily customizable, streamlining the UI development process.
- **Vercel**: A deployment platform optimized for Next.js applications, ensuring fast and reliable hosting.

## Environment Variables

The application requires the following environment variables to function properly. Make sure to configure these in your `.env.local` file:

```env
PROJECT_ID=your-project-id
API_KEY=your-api-key
DATABASE_ID=your-database-id
CLIENT_COLLECTION_ID=your-client-collection-id
APPOINTMENT_COLLECTION_ID=your-appointment-collection-id
NEXT_PUBLIC_ENDPOINT=your-endpoint
NEXT_PUBLIC_BACKDOOR_PASSKEY=your-backdoor-passkey
SENTRY_AUTH_TOKEN=your-sentry-auth-token
```

## Application Overview

The application opens with a home page that will ask for basic information from the prospective customer.
After filling in the relevant fields the customer will be taken to a further form with several more detailed inputs. 
Upon completion of these, the client is taken to a final choice, namely, who he or she wants to talk to among the Backdoor members. 
Upon completion the admin will be notified that there is a new request in the admin panel. From here the team can choose to cancel or schedule a call. This is all handled by Appwrite.

## Contact

For any questions or suggestions, please feel free to contact us at [info@backdoor.com](mailto:info@backdoor-studio.com).
