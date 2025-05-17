-- Create a simple profiles table linked to auth.users
create table if not exists profiles (
  id uuid references auth.users(id) primary key,
  full_name text,
  created_at timestamp default now()
);
