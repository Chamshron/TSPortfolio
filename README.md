TypeScript Portfolio Website

Aim: To create a Typescript portfolio website where an user can download my CV, access import links such as my Github/LinkedIn, access projects I have previously worked on, and be able to send me an email.

Goals:
1. Learn more about Typescript
2. Learn more about Tailwind CSS and how screensize influences styling
3. Learn more about animation with Framer Motion [Header with Intro Animation]

Packages Used:
1. React Icons (icons)
2. Framer Motion (animations)

What I've Learned:
1. Framer Motion & Tailwind CSS: I had centered the header using left-1/2 however, that meant the header component started at the center mark, the item was not centered itself. Using -translate-x-1/2 I was center the component however, when I used Framer Motion, the X value was reset so needed to set the x value to "-50%" to ensure the item was centered and not off-centre.

Get the App Running:
1. Within the portfolio folder, type into the terminal:npm install
2. Run the application npm run dev
