import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Settings, Shield } from "lucide-react";
import EditUser from "@/components/EditUser";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChartLineMultiple } from "@/components/UserLineChart";

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
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-medium mb-6">User Badges</h1>
            <div className="flex gap-4 items-center">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="bg-blue-500/30 rounded-full border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-medium mb-6">User Information</h1>
              <Sheet>
                <SheetTrigger asChild className="cursor-pointer">
                  <Badge>Edit User</Badge>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className=" space-y-4 mt-2">
              <div className=" flex flex-col gap-2 mb-4">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={75} />
                <div className="flex gap-2">
                  <span className="font-bold">Username:</span>
                  <span>John_doe</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Email:</span>
                  <span>John_doe@example.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Location:</span>
                  <span>USA</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Phone:</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Role:</span>
                  <Badge>Admin</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Joined on January 1, 2020
                </p>
              </div>
            </div>
          </div>
          {/* card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* right side */}
        <div className=" w-full xl:w-2/3 space-y-6">
          {/* usercard container */}
          <div className="bg-primary-foreground p-4 rounded-lg ">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="w-10 h-10 rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1>John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              possimus cumque consequatur assumenda cupiditate minima commodi ut
              deleniti a voluptas. Nulla voluptatem ullam assumenda nam
              consequuntur cum eos, rerum vel?
            </p>
          </div>
          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-medium mb-4">User Activity</h1>
            <ChartLineMultiple />
          </div>
        </div>
      </div>
    </div>
  );
}
