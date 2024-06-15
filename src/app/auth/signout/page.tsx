import { auth } from '@/firebase/firebase';
import { redirect } from 'next/navigation';
export default function Signout() {

  auth.signOut();
  redirect("/")
  return null;
}