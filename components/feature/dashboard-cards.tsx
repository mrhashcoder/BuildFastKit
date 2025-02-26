import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashDetailCard from "../main/cards/dash-detail-card";
import {
  DollarSign,
  SubscriptIcon,
  ChartArea,
  ActivitySquare,
} from "lucide-react";
import { OverviewChart } from "@/components/main/overview-chart";

function DashboardCards() {
  return (
    <>
      {" "}
      <div className="mb-2 flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Button>Download</Button>
        </div>
      </div>
      <Tabs
        orientation="vertical"
        defaultValue="overview"
        className="space-y-4"
      >
        <div className="w-full overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashDetailCard
              value="$12345"
              title="Total Sales"
              subtitle="Sales is up by 20%"
              Icon={DollarSign}
            />
            <DashDetailCard
              value="+230"
              title="Subscriptions"
              subtitle="+180.1% from last month"
              Icon={SubscriptIcon}
            />

            <DashDetailCard
              value="$3234"
              title="Profit"
              subtitle="Profit is up by 30%"
              Icon={ChartArea}
            />
            <DashDetailCard
              value="$12345"
              title="Active Users"
              subtitle="Active User is up by 13%"
              Icon={ActivitySquare}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
            <Card className="col-span-1 lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <OverviewChart />
              </CardContent>
            </Card>
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>{/* <RecentSales /> */}</CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default DashboardCards;
