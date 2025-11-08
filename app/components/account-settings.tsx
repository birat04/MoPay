"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserIcon, ShieldIcon } from "@/components/icons"

export function AccountSettings() {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    country: "US",
    language: "en",
  })

  const [editing, setEditing] = useState(false)
  const [tempData, setTempData] = useState(userData)

  const handleSave = () => {
    setUserData(tempData)
    setEditing(false)
    console.log("[v0] Account settings saved:", tempData)
  }

  const handleCancel = () => {
    setTempData(userData)
    setEditing(false)
  }

  const handleChange = (field: string, value: string) => {
    setTempData({ ...tempData, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Personal Information
          </CardTitle>
          <CardDescription>Manage your account details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {userData.firstName.charAt(0)}
                {userData.lastName.charAt(0)}
              </div>
              <div>
                <p className="font-bold">
                  {userData.firstName} {userData.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
              </div>
            </div>

            {!editing ? (
              <Button onClick={() => setEditing(true)} variant="outline" className="w-full">
                Edit Profile
              </Button>
            ) : (
              <div className="space-y-4 border-t pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={tempData.firstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("firstName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={tempData.lastName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("lastName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={tempData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={tempData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select value={tempData.country} onValueChange={(v: string) => handleChange("country", v)}>
                      <SelectTrigger id="country" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="IN">India</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select value={tempData.language} onValueChange={(v: string) => handleChange("language", v)}>
                      <SelectTrigger id="language" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2 border-t pt-4">
                  <Button onClick={handleSave} className="flex-1">
                    Save Changes
                  </Button>
                  <Button onClick={handleCancel} variant="outline" className="flex-1 bg-transparent">
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Connected Payment Methods</CardTitle>
          <CardDescription>Manage your linked payment accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Visa Card", last4: "4242", status: "Active", type: "card" },
              { name: "UPI", last4: "john@bank", status: "Active", type: "upi" },
              { name: "Google Pay", last4: "Connected", status: "Active", type: "google" },
            ].map((method, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium text-sm">{method.name}</p>
                  <p className="text-xs text-muted-foreground">{method.last4}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
                    {method.status}
                  </span>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldIcon className="h-5 w-5" />
            Security & Privacy
          </CardTitle>
          <CardDescription>Manage your account security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Enabled</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Password</p>
              <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
            </div>
            <Button variant="outline" size="sm">
              Change Password
            </Button>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Login History</p>
              <p className="text-sm text-muted-foreground">View recent logins</p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Device Management</p>
              <p className="text-sm text-muted-foreground">Manage trusted devices</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Control how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Transaction Alerts", description: "Get notified for every transaction" },
            { label: "Security Alerts", description: "Important security notifications" },
            { label: "Promotional Offers", description: "Special deals and offers" },
            { label: "Weekly Reports", description: "Summary of your spending" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  Email
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  SMS
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200 dark:border-red-900">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full text-red-600 hover:text-red-700 bg-transparent">
            Deactivate Account
          </Button>
          <Button variant="outline" className="w-full text-red-600 hover:text-red-700 bg-transparent">
            Delete Account Permanently
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
