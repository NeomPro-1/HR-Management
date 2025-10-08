import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { EmployeeAccessInfo } from "@/lib/placeholder-data";


type AccessInfoProps = {
    accessInfo: EmployeeAccessInfo;
}

export function AccessInfo({ accessInfo }: AccessInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login & Access Information</CardTitle>
        <CardDescription>Manage security settings and login credentials.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
            <div className="grid grid-cols-3 items-center">
                <Label className="text-muted-foreground">Username</Label>
                <p className="col-span-2">{accessInfo.username}</p>
            </div>
             <div className="grid grid-cols-3 items-center">
                <Label className="text-muted-foreground">Email</Label>
                <p className="col-span-2">{accessInfo.email}</p>
            </div>
             <div className="grid grid-cols-3 items-center">
                <Label className="text-muted-foreground">Password</Label>
                <div className="col-span-2 flex items-center justify-between">
                    <p>••••••••</p>
                    <Button variant="link" size="sm" className="p-0 h-auto">Manage 2FA</Button>
                </div>
            </div>
             <div className="grid grid-cols-3 items-center">
                <Label className="text-muted-foreground">Last Login</Label>
                <p className="col-span-2">{accessInfo.lastLogin}</p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <Label className="text-muted-foreground">Security Google</Label>
                <div className="col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Progress value={80} className="w-24 h-2" indicatorClassName="bg-status-strong"/>
                        <span className="text-sm">Strong</span>
                    </div>
                    <Button variant="link" size="sm" className="p-0 h-auto">Sign Out All</Button>
                </div>
            </div>
        </div>
        <div className="space-y-4">
           <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <Label htmlFor="account-status">Account Status</Label>
                    <p className="text-xs text-muted-foreground">Enable or disable employee account access.</p>
                </div>
                <Switch id="account-status" checked={accessInfo.accountStatus === 'Active'} />
           </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <Label htmlFor="api-access">API Access</Label>
                    <p className="text-xs text-muted-foreground">Allow access to internal APIs.</p>
                </div>
                <Switch id="api-access" checked={accessInfo.apiAccess} />
           </div>
           <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <Label htmlFor="mfa-enabled">MFA Enabled</Label>
                    <p className="text-xs text-muted-foreground">Require multi-factor authentication.</p>
                </div>
                <Switch id="mfa-enabled" checked={accessInfo.mfaEnabled} />
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
