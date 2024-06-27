"use client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IssueModel } from "../model/IssueModel";
import axios from "axios";

const IssuePage = () => {
  const [issues, setIssues] = useState<IssueModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get<IssueModel[]>("/api/issues");
        setIssues(response.data);
      } catch (err) {
        setError("Failed to fetch issues");
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>{" "}
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.description}</p>
            <small>
              Created at: {new Date(issue.createdAt).toLocaleString()}
            </small>
            <small>
              Updated at: {new Date(issue.updatedAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuePage;
