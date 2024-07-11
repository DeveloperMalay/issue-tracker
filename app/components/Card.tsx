import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { IssueModel } from "../model/IssueModel";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
export function Card({ issue }: { issue: IssueModel }) {
  const router = useRouter();
  const image =
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const image2 =
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
    var id = issue.id;
    var res = await axios.delete("/api/issues", {
      data: { id },
    });
    console.log("Card clicked!", res);
    router.push("/issues");
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {issue.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
        >
          {issue.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center space-x-2 justify-center border-white "
          >
            <AiFillEdit />
            <span> Edit</span>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={handleDelete}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Delete
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
