import { redirect } from 'next/navigation';

export default function AppRootPage() {
  redirect('/hr/employee-dashboard');
  return null;
}
