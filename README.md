🏦 Project Overview
UnityBankGTC is a professional, mature, full-featured online banking frontend built to work seamlessly with Supabase as the backend. It includes all essential banking features such as:
User registration and login
Account dashboards with balances
Money transfers (secure & bulletproof)
Transaction history and filters
Loans management and payments
Virtual card management
Profile management
Admin dashboard for user & system management
Account frozen notifications
This frontend is designed for desktop and mobile with a professional banking aesthetic.


🎨 Design & Features
Color Scheme: White (#FFFFFF), Deep Trust Blue (#1E40AF), Bright Action Blue (#3B82F6), Accent Gold (#D4AF37)
Font: Inter (Google Fonts)
Effects: Smooth transitions, hover animations, glassmorphism on cards
Layout: Responsive sidebar (desktop), hamburger menu (mobile)
Hero Section: Animated gradient background, trust badges, animated transaction counters, customer testimonials
All Buttons & Forms: Loading states, validation, and real-time feedback
Copy code


📂 Project Structure
UnityBankGTC-frontend/ ├── index.html             # Hero & login page ├── signup.html            # Registration page ├── login.html             # Login page ├── dashboard.html         # User dashboard ├── transactions.html      # Transaction history ├── transfer.html          # Send money page ├── loans.html             # Loan management ├── cards.html             # Virtual card management ├── profile.html           # Profile view/edit ├── admin-dashboard.html   # Admin panel ├── account-frozen.html    # Frozen account notice ├── css/ │   └── style.css          # All styling └── js/ └── script.js          # All JavaScript logic & Supabase API integration


⚡ Supabase Integration
Replace the placeholders in js/script.js with your own Supabase project details:
const supabase = supabase.createClient( 'https://vilrnllorzsdvkvylfqs.supabase.co⁠�',  // Your Supabase URL 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbHJubGxvcnpzZHZrdnlsZnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NDgwNzEsImV4cCI6MjA4ODEyNDA3MX0.LMd9UlI5yb0x6xvYNHE1ZJI7GJWpo8-AAqP3ILOGZXs' // Your Anon Key );
Copy code


🛠 Features & Functionality
User Features:
Sign up / login with validation & error handling
View account balance & recent transactions
Send money securely with balance check & recipient validation
Apply for loans, view active loans, make payments
Manage virtual cards (view, status)
Edit personal profile (name, email, phone, currency)
Admin Features:
Access only via admin role
View all users & transactions
Approve loans and manage balances
Freeze/unfreeze accounts
View system statistics
Real-time Features:
Automatic balance updates
Transaction notifications
Updates without page reload


🚀 Deployment
GitHub Pages (Free Hosting):
Upload entire UnityBankGTC-frontend folder to a GitHub repository
Go to Settings → Pages
Set Source to the main branch (or whichever branch you use)
GitHub will generate a URL for your live site
Open the URL and test all pages
Tip: Make sure css/ and js/ folders are correctly linked in HTML:
�
```

⚠️ Notes
- Do not share your Supabase Service Role Key publicly; only use Anon Key in frontend
- Ensure row-level security is enabled in Supabase tables
- All functions are designed to prevent undefined or null errors
- Tested for mobile & desktop responsiveness

📈 Future Improvements
- Add multi-currency support for transfers
- Implement full admin analytics dashboard
- Enable email/SMS notifications for transactions
Copy code

🧾 Credits
- Developed by Agility David
- Powered by Supabase
- Frontend inspired by AGILITY AND smallie designs

UnityBankGTC – Professional, secure, and ready for real banking experiences.
