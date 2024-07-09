import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema, updateIssueSchema } from "@/app/validationSchemas";


export async function GET() {
    try {
        const issues = await prisma.issue.findMany();
        return NextResponse.json(issues, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch issues' }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description,
        }
    })
    return NextResponse.json(newIssue, { status: 201 })

}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();

    try {
        const deletedIssue = await prisma.issue.delete({
            where: { id },
        });
        return NextResponse.json(deletedIssue, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete issue' }, { status: 500 });
    }
} export async function PATCH(request: NextRequest) {
    const body = await request.json();
    const validation = updateIssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const { id, title, description } = body;

    try {
        const updatedIssue = await prisma.issue.update({
            where: { id },
            data: { title, description },
        });
        return NextResponse.json(updatedIssue, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update issue' }, { status: 500 });
    }
}