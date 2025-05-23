import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function singleUserPage() {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Jhone Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* container */}
      <div className="flex flex-col xl:flex-row gap-8 mt-4">
        {/* left side */}
        <div className="flex flex-col w-full xl:w-1/3 space-y-6">
          {/* user badge container */}
          <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            informatoin
          </div>
          {/* card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* right side */}
        <div className=" w-full xl:w-2/3 space-y-6">
          {/* usercard container */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
}
