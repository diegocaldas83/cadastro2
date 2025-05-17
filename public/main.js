let token = null;

async function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const res = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (res.ok) {
    alert('Signup successful');
  } else {
    alert(data.error);
  }
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (res.ok) {
    token = data.session.access_token;
    document.getElementById('auth').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    loadProfile();
  } else {
    alert(data.error);
  }
}

async function loadProfile() {
  const res = await fetch('/profile', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  if (res.ok) {
    document.getElementById('profile-data').textContent = JSON.stringify(data, null, 2);
  } else {
    alert(data.error);
  }
}

async function loadUsers() {
  const res = await fetch('/users', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  if (res.ok) {
    const list = document.getElementById('user-list');
    list.innerHTML = '';
    data.forEach(u => {
      const li = document.createElement('li');
      li.textContent = `${u.email} (${u.id})`;
      list.appendChild(li);
    });
  } else {
    alert(data.error);
  }
}
