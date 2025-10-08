import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EmployeeBankDetails } from "@/lib/placeholder-data";

type BankDetailsProps = {
    bankDetails: EmployeeBankDetails;
}

export function BankDetails({ bankDetails }: BankDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bank Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="grid grid-cols-2">
            <span className="font-medium text-muted-foreground">Account Holder</span>
            <span className="text-right">{bankDetails.accountHolder}</span>
        </div>
        <div className="grid grid-cols-2">
            <span className="font-medium text-muted-foreground">Account Number</span>
            <span className="text-right">{bankDetails.accountNumber}</span>
        </div>
        <div className="grid grid-cols-2">
            <span className="font-medium text-muted-foreground">Bank Name</span>
            <span className="text-right">{bankDetails.bankName}</span>
        </div>
        <div className="grid grid-cols-2">
            <span className="font-medium text-muted-foreground">Branch Location</span>
            <span className="text-right">{bankDetails.branchLocation}</span>
        </div>
        <div className="grid grid-cols-2">
            <span className="font-medium text-muted-foreground">IFSC Code</span>
            <span className="text-right">{bankDetails.ifscCode}</span>
        </div>
         <div className="grid grid-cols-2">
            <span className="font-medium text-muted-foreground">Routing Number</span>
            <span className="text-right">{bankDetails.routingNumber}</span>
        </div>
      </CardContent>
    </Card>
  );
}
