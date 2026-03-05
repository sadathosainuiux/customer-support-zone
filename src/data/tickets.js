const tickets = [
    {
        id: "#1001",
        title: "Login Issues - Can't Access Account",
        description:
            "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
        customer: "John Smith",
        status: "Open",
        priority: "HIGH PRIORITY",
        createdAt: "1/15/2024",
    },
    {
        id: "#1002",
        title: "Payment Failed - Card Declined",
        description:
            "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
        customer: "Sarah Johnson",
        status: "Open",
        priority: "HIGH PRIORITY",
        createdAt: "1/16/2024",
    },
    {
        id: "#1003",
        title: "Unable to Download Invoice",
        description:
            "Customer cannot download their January invoice from the billing section. The download button is...",
        customer: "Michael Brown",
        status: "In-Progress",
        priority: "MEDIUM PRIORITY",
        createdAt: "1/17/2024",
    },
    {
        id: "#1004",
        title: "Incorrect Billing Address",
        description:
            "Customer's billing address shows a different city. They updated it but it still displays the old one.",
        customer: "Emily Davis",
        status: "Open",
        priority: "LOW PRIORITY",
        createdAt: "1/18/2024",
    },
    {
        id: "#1005",
        title: "App Crash on Launch",
        description:
            "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
        customer: "David Wilson",
        status: "Open",
        priority: "HIGH PRIORITY",
        createdAt: "1/19/2024",
    },
    {
        id: "#1006",
        title: "Refund Not Processed",
        description:
            "Customer requested a refund two weeks ago but has not received the amount yet.",
        customer: "Sophia Taylor",
        status: "In-Progress",
        priority: "MEDIUM PRIORITY",
        createdAt: "1/20/2024",
    },
    {
        id: "#1007",
        title: "Two-Factor Authentication Issue",
        description:
            "Customer is not receiving 2FA codes on their registered phone number.",
        customer: "James Anderson",
        status: "Open",
        priority: "HIGH PRIORITY",
        createdAt: "1/21/2024",
    },
    {
        id: "#1008",
        title: "Unable to Update Profile Picture",
        description:
            "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
        customer: "Olivia Martinez",
        status: "Open",
        priority: "LOW PRIORITY",
        createdAt: "1/22/2024",
    },
    {
        id: "#1009",
        title: "Subscription Auto-Renewal",
        description:
            "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
        customer: "Liam Thomas",
        status: "In-Progress",
        priority: "MEDIUM PRIORITY",
        createdAt: "1/7/2024",
    },
    {
        id: "#1010",
        title: "Missing Order Confirmation Email",
        description:
            "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
        customer: "Isabella Garcia",
        status: "Open",
        priority: "MEDIUM PRIORITY",
        createdAt: "1/24/2024",
    },
    {
        id: "#1011",
        title: "Slow Dashboard Loading",
        description:
            "Customer reports that the admin dashboard takes over 30 seconds to load. Other pages work fine.",
        customer: "Noah Williams",
        status: "Open",
        priority: "HIGH PRIORITY",
        createdAt: "1/25/2024",
    },
    {
        id: "#1012",
        title: "Email Notifications Not Working",
        description:
            "Customer is not receiving any email notifications despite having all notification settings enabled.",
        customer: "Emma Clark",
        status: "In-Progress",
        priority: "MEDIUM PRIORITY",
        createdAt: "1/26/2024",
    },
    {
        id: "#1013",
        title: "Data Export Failure",
        description:
            "Customer attempted to export their account data as CSV but the download keeps failing with a timeout error.",
        customer: "Ethan Moore",
        status: "Open",
        priority: "LOW PRIORITY",
        createdAt: "1/27/2024",
    },
    {
        id: "#1014",
        title: "Incorrect Tax Calculation",
        description:
            "Customer noticed that the tax amount on their invoice doesn't match the expected rate for their region.",
        customer: "Ava Robinson",
        status: "Open",
        priority: "HIGH PRIORITY",
        createdAt: "1/28/2024",
    },
    {
        id: "#1015",
        title: "Account Deactivation Request",
        description:
            "Customer wants to deactivate their account but the option is grayed out in settings. They need assistance.",
        customer: "Mason Lee",
        status: "Open",
        priority: "MEDIUM PRIORITY",
        createdAt: "1/29/2024",
    },
];

export default tickets;
