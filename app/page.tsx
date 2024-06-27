"use client";
import { useEffect, useState } from "react";
import { IssueModel } from "./model/IssueModel";
import axios from "axios";

export default function Home() {
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
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Issues</h1>
      <ul className="space-y-4">
        {issues.map((issue) => (
          <li key={issue.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{issue.title}</h2>
            <p className="text-gray-700 mb-4">{issue.description}</p>
            <div className="text-sm text-gray-500">
              <p>Created at: {new Date(issue.createdAt).toLocaleString()}</p>
              <p>Updated at: {new Date(issue.updatedAt).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
