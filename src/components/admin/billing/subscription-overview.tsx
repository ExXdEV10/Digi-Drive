import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Clock, Crown } from "lucide-react";

export function SubscriptionOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Subscribers
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,834</div>
          <p className="text-xs text-muted-foreground">Active subscriptions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$48,295</div>
          <p className="text-xs text-green-500">+12% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Trial Users</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">145</div>
          <p className="text-xs text-muted-foreground">Active trials</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Plan Distribution
          </CardTitle>
          <Crown className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-2">
          {[
            { plan: "Basic", count: 1245, color: "bg-blue-500" },
            { plan: "Premium", count: 845, color: "bg-purple-500" },
            { plan: "Business", count: 432, color: "bg-green-500" },
            { plan: "Enterprise", count: 312, color: "bg-yellow-500" },
          ].map((item) => (
            <div key={item.plan} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>{item.plan}</span>
                <span>{item.count}</span>
              </div>
              <div className="bg-secondary h-1.5 rounded-full">
                <div
                  className={`${item.color} h-1.5 rounded-full`}
                  style={{ width: `${(item.count / 2834) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
