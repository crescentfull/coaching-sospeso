import { SospesoApplicationDashboard } from "@/components/SospesoApplicationDashboard";
import {
    TEST_APPLICATION_LIST,
} from "@/sospeso/fixtures";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SospesoApplicationDashboard> = {
    component: SospesoApplicationDashboard,
};

export default meta;
type Story = StoryObj<typeof SospesoApplicationDashboard>;

export const Base: Story = {
    args: {
        applicationList: []
    },
};


export const NotZero: Story = {
    args: {
        applicationList: TEST_APPLICATION_LIST.map((application) => ({
            id: application.id,
            sospesoId: application.sospesoId,
            to: application.to,
            status: application.status,
            appliedAt: application.appliedAt,
            applicant: {
                id: application.applicant.id,
                nickname: application.applicant.nickname,
            },
            content: application.content,
        })),
    },
};
