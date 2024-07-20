"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "../StatusBadge";
import { Appointment } from "@/types/appwrite.types";
import { formatDateTime } from "@/lib/utils";
import { Consultants } from "@/constants";
import Image from "next/image";
import AppointmentModal from "../AppointmentModal";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <p className="text-14-medium">{row.original.client.name}</p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">
        {formatDateTime(row.original.schedule).dateTime}
      </p>
    ),
  },
  {
    accessorKey: "bdMember",
    header: () => "Backdoor Member",
    cell: ({ row }) => {
      const bdMember = Consultants.find(
        (member) => member.name === row.original.bdMember
      );
      return (
        <div className="flex items-center gap-3">
          <Image
            // @ts-ignore
            src={bdMember?.image}
            // @ts-ignore
            alt={bdMember?.name}
            width={32}
            height={32}
            className="size-8 rounded-full"
          />
          <p className="whitespace-nowrap">{bdMember?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row: { original: data } }) => {
      return (
        <div className="flex gap-1">
          <AppointmentModal
            type={"schedule"}
            clientId={data.client.$id}
            userId={data.userId}
            appointment={data}
          />
          <AppointmentModal
            type={"cancel"}
            clientId={data.client.$id}
            userId={data.userId}
            appointment={data}
          />
        </div>
      );
    },
  },
];
