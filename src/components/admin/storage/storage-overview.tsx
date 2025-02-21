import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StorageOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Storage by User Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Free Users</span>
                <span>250 GB / 1 TB</span>
              </div>
              <div className="bg-secondary h-2 rounded-full">
                <div className="bg-primary h-2 w-1/4 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Paid Users</span>
                <span>750 GB / 1 TB</span>
              </div>
              <div className="bg-secondary h-2 rounded-full">
                <div className="bg-primary h-2 w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storage by File Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "Documents", size: "400 GB", percentage: 40 },
              { type: "Images", size: "300 GB", percentage: 30 },
              { type: "Videos", size: "200 GB", percentage: 20 },
              { type: "Others", size: "100 GB", percentage: 10 },
            ].map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.type}</span>
                  <span>{item.size}</span>
                </div>
                <div className="bg-secondary h-2 rounded-full">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
