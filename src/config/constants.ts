export const IPL_TEAMS = [
    "Mumbai Indians",
    "Chennai Super Kings",
    "Royal Challengers Bangalore",
    "Kolkata Knight Riders",
    "Delhi Capitals",
    "Punjab Kings",
    "Rajasthan Royals",
    "Sunrisers Hyderabad"
] as const;

export type IPLTeam = typeof IPL_TEAMS[number];

export const PRODUCT_CATEGORIES = [
    "Jersey",
    "Cap",
    "Accessories",
    "Equipment",
    "Memorabilia"
] as const;

export type ProductCategory  = typeof PRODUCT_CATEGORIES[number];
