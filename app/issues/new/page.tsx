"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>{" "}
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
