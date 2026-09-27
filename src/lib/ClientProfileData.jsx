import { getSupabaseClient } from "./supabase";
export async function ClientProfileData() {

const supabase = await getSupabaseClient();
 
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

  return { ...profile, email: user.email }
  
}
ClientProfileData()