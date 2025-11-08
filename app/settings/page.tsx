import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AccountSettings } from "@/components/account-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and security</p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-6">
            <AccountSettings />
          </TabsContent>

          <TabsContent value="security" className="mt-6 space-y-6">
            <div className="text-center py-12 text-muted-foreground">Security settings content</div>
          </TabsContent>

          <TabsContent value="preferences" className="mt-6 space-y-6">
            <div className="text-center py-12 text-muted-foreground">User preferences content</div>
          </TabsContent>
        </Tabs>
      </div>

      <SiteFooter />
    </main>
  )
}
