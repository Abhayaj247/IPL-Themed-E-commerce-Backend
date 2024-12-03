export interface TeamTheme {
    primaryColor: string;
    secondaryColor: string;
    logoUrl: string;
    welcomeMessage: string;
}

export const teamThemes: Record<string, TeamTheme> = {
    "Mumbai Indians": {
        primaryColor: "#004BA0",
        secondaryColor: "#B2DFFF",
        logoUrl: "https://example.com/mi-logo.png",
        welcomeMessage: "Welcome to the Mumbai Indians Fan Store!"
    },
    "Chennai Super Kings": {
        primaryColor: "#FFFF3C",
        secondaryColor: "#F9A825",
        logoUrl: "https://example.com/csk-logo.png",
        welcomeMessage: "Welcome to the Chennai Super Kings Fan Store!"
    },
    "Royal Challengers Bangalore": {
        primaryColor: "#EC1C24",
        secondaryColor: "#000000",
        logoUrl: "https://example.com/rcb-logo.png",
        welcomeMessage: "Welcome to the Royal Challengers Bangalore Fan Store!"
    },
    "Kolkata Knight Riders": {
        primaryColor: "#3A225D",
        secondaryColor: "#B3A123",
        logoUrl: "https://example.com/kkr-logo.png",
        welcomeMessage: "Welcome to the Kolkata Knight Riders Fan Store!"
    },
    "Delhi Capitals": {
        primaryColor: "#282968",
        secondaryColor: "#EF1B23",
        logoUrl: "https://example.com/dc-logo.png",
        welcomeMessage: "Welcome to the Delhi Capitals Fan Store!"
    },
    "Punjab Kings": {
        primaryColor: "#ED1B24",
        secondaryColor: "#FFFFFF",
        logoUrl: "https://example.com/pbks-logo.png",
        welcomeMessage: "Welcome to the Punjab Kings Fan Store!"
    },
    "Rajasthan Royals": {
        primaryColor: "#254AA5",
        secondaryColor: "#EA1B85",
        logoUrl: "https://example.com/rr-logo.png",
        welcomeMessage: "Welcome to the Rajasthan Royals Fan Store!"
    },
    "Sunrisers Hyderabad": {
        primaryColor: "#F7A721",
        secondaryColor: "#000000",
        logoUrl: "https://example.com/srh-logo.png",
        welcomeMessage: "Welcome to the Sunrisers Hyderabad Fan Store!"
    }
};