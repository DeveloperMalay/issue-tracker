"use client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuePage = () => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg ">Create new Issues</span>
      <div className="mt-5">
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
    </div>
  );
};

export default IssuePage;
