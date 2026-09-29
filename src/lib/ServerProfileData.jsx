import { createClient } from "./supabase-server";
export async function ServerProfileData() {

const supabase = await createClient();
 
  const {data: { user } } = await supabase.auth.getUser();
  const { data: profile, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', user.id)
    .single()

  if (error) {
    console.log(error)
    return null
  }

  return {  ...profile, email: user.email }
  
}
ServerProfileData()