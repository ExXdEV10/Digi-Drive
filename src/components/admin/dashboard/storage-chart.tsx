import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StorageChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Storage Usage Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">By User Type</div>
            <div className="bg-secondary h-2 rounded-full">
              <div className="bg-primary h-2 w-3/4 rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Free Users (25%)</span>
              <span>Paid Users (75%)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">By File Type</div>
            <div className="space-y-1">
              {[
                { type: "Documents", percentage: 40 },
                { type: "Images", percentage: 30 },
                { type: "Videos", percentage: 20 },
                { type: "Others", percentage: 10 },
              ].map((item) => (
                <div key={item.type} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{item.type}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="bg-secondary h-1.5 rounded-full">
                    <div
                      className="bg-primary h-1.5 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
