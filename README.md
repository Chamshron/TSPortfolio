<img width="779" alt="image" src="https://github.com/Chamshron/TSPortfolio/assets/139380629/37ecf532-6668-40b0-bc2a-31b98f19f3ed">

TypeScript Portfolio Website

**Aim:**
To create a Typescript portfolio website where an user can download my CV, access import links such as my Github/LinkedIn, access projects I have previously worked on, and be able to send me an email.

**Goals:**
1. Learn more about Typescript
2. Learn more about Tailwind CSS and how screensize influences styling
3. Learn more about animation with Framer Motion [Header with Intro Animation]
4. Learn more about React email and Resend to have a working email form
5. Learn more about hosting [using Vercel hosting]

**Packages Used:**
1. React Icons (icons)
2. Framer Motion (animations)
3. React email (email components) 
4. Resend (email sending platform)
5. React Hot Toast (react notifications)
6. React Vertical Timeline (experience section)

**What I've Learned:**
1. Framer Motion & Tailwind CSS: I had centered the header using left-1/2 however, that meant the header component started at the center mark, the item was not centered itself. Using -translate-x-1/2 I was center the component however, when I used Framer Motion, the X value was reset so needed to set the x value to "-50%" to ensure the item was centered and not off-centre. Additionally, using group so that I can animate an icon seperately when a button is hovered over.
2. When working on the header and having the active section highlighted, I encountered an issue with the onClick event and scrolling inView conflicting with eachother; example being that when I selected About, since Projects were in view it was highlighting Projects instead of About. I created a useState for timeOfLastClick and setTimeOfLastClick so that I could create be more specific in my if statement that would determine which section would be active/highlighted.
3. I was reusing a lot of the same code on multiple different compnents to set the active section so to reduce repition, and make my code more DRY, I decided to create a custom hook instead. I also did this for the dark/light mode, extracting the theme context provider into it's own file. 

**Set-Up:**
1. Add RESEND_API_KEY environment variable in .env.local (Resend)
2. In the actions/send-email.ts file, change the "to" email to your own email

**Get the App Running:**
1. Within the portfolio folder, type into the terminal:npm install
2. Run the application npm run dev
