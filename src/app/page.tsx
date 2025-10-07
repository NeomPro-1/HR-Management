import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/hr/employee-dashboard');
  return null;
}
