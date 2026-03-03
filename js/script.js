// ----------------------------
//  Supabase Initialization
// ----------------------------
const SUPABASE_URL = "https://vilrnllorzsdvkvylfqs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbHJubGxvcnpzZHZrdnlsZnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NDgwNzEsImV4cCI6MjA4ODEyNDA3MX0.LMd9UlI5yb0x6xvYNHE1ZJI7GJWpo8-AAqP3ILOGZXs";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ----------------------------
//  SIGNUP
// ----------------------------
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const full_name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name } }
    });

    if (error) {
      document.getElementById("message").textContent = error.message;
    } else {
      document.getElementById("message").textContent = "Signup successful! Check your email.";
      // Automatically create account in accounts table
      const user_id = data.user.id;
      await supabase.from('accounts').insert([{ user_id, balance: 0 }]);
    }
  });
}

// ----------------------------
//  LOGIN
// ----------------------------
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      document.getElementById("message").textContent = error.message;
    } else {
      window.location.href = "dashboard.html";
    }
  });
}

// ----------------------------
//  DASHBOARD
// ----------------------------
async function checkUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) window.location.href = "login.html";
  else {
    const welcome = document.getElementById("welcome");
    if (welcome) welcome.textContent = "Welcome, " + user.email;
  }
}
checkUser();

// ----------------------------
//  LOGOUT
// ----------------------------
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}

// ----------------------------
//  TRANSFER MONEY
// ----------------------------
async function transferFunds(senderAccountId, recipientAccountId, amount, description='') {
  const { data, error } = await supabase.rpc('transfer_funds', {
    sender: senderAccountId,
    recipient: recipientAccountId,
    amt: amount,
    transfer_description: description
  });
  if (error) alert("Transfer failed: " + error.message);
  else alert("Transfer successful!");
}

// ----------------------------
//  LOAD TRANSACTIONS
// ----------------------------
async function loadTransactions(userId) {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
    .order('created_at', { ascending: false });

  if (error) console.error("Error fetching transactions:", error.message);
  else {
    const table = document.getElementById("transactions-table");
    if (!table) return;
    table.innerHTML = '';
    if (data.length === 0) table.innerHTML = "<tr><td colspan='5'>No transactions yet</td></tr>";
    else data.forEach(tx => {
      table.innerHTML += `<tr>
        <td>${tx.sender_id}</td>
        <td>${tx.recipient_id}</td>
        <td>${tx.amount}</td>
        <td>${tx.status}</td>
        <td>${new Date(tx.created_at).toLocaleString()}</td>
      </tr>`;
    });
  }
}
