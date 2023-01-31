import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export function getUser() {
  return client.auth.user();
}

export async function signInUser(email, password) {
  return checkError(
    await client.auth.signIn({
      email,
      password,
    })
  );
}

export async function signOutUser() {
  return checkError(await client.auth.signOut());
}

export async function signUpUser(email, password) {
  return checkError(
    await client.auth.signUp({
      email,
      password,
    })
  );
}
