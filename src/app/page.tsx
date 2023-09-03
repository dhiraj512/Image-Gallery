import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Images from "@/components/Images";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("images").select('*').order('id', { ascending: true });
  const images = data as ImageProps[];
  return <Images images={images} />
}