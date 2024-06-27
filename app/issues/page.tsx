"use client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IssueModel } from "../model/IssueModel";
import axios from "axios";

const IssuePage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>{" "}
    </div>
  );
};

export default IssuePage;
