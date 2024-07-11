import { updateIssueSchema } from "@/app/validationSchemas";
import { TextField } from "@radix-ui/themes";
import React from "react";
import { z } from "zod";

type UpdateIssueType = z.infer<typeof updateIssueSchema>;

const EditPage = (issue: UpdateIssueType) => {
  return (
    <div>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
    </div>
  );
};

export default EditPage;
