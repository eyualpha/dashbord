import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: 1,
      amount: 100,
      status: "Completed",
      username: "John Doe",
      email: "john_doe@example.com",
    },
    {
      id: 2,
      amount: 200,
      status: "Pending",
      username: "Jane Doe",
      email: "jane_doe@example.com",
    },
    {
      id: 3,
      amount: 150,
      status: "Failed",
      username: "Alice Smith",
      email: "alice_smith@example.com",
    },
    {
      id: 4,
      amount: 250,
      status: "Completed",
      username: "Bob Johnson",
      email: "bob_johnson@example.com",
    },
    {
      id: 5,
      amount: 300,
      status: "Pending",
      username: "Charlie Brown",
      email: "charlie_brown@example.com",
    },
    {
      id: 6,
      amount: 400,
      status: "Failed",
      username: "Dave Wilson",
      email: "dave_wilson@example.com",
    },
    {
      id: 7,
      amount: 500,
      status: "Completed",
      username: "Eve Davis",
      email: "eve_davis@example.com",
    },
    {
      id: 8,
      amount: 600,
      status: "Pending",
      username: "Frank Moore",
      email: "frank_moore@example.com",
    },
    {
      id: 9,
      amount: 700,
      status: "Failed",
      username: "Grace Lee",
      email: "grace_lee@example.com",
    },
    {
      id: 10,
      amount: 800,
      status: "Completed",
      username: "Hank Taylor",
      email: "hank_taylor@example.com",
    },
    {
      id: 11,
      amount: 900,
      status: "Pending",
      username: "Ivy Anderson",
      email: "ivy_anderson@example.com",
    },
    {
      id: 12,
      amount: 1000,
      status: "Failed",
      username: "Jack Thomas",
      email: "jack_thomas@example.com",
    },
  ];
};

export default async function Payments() {
  const data = await getData();
  return (
    <>
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Payments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-4  py-2  rounded-md bg-primary-foreground">
        <h1 className="font-semibold mb-8 p-2">All Payments</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
