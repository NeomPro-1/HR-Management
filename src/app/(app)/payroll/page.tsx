import { redirect } from 'next/navigation';

export default function PayrollPage() {
  redirect('/payroll/items');
  return null;
}
