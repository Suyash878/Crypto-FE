"use client"

import { ColumnDef } from "@tanstack/react-table"
import { cryptoType } from "../../app/crypto/page"

export const columns: ColumnDef<cryptoType>[] = [
  {
    accessorKey: "status",
    header: "Currency",
  },
  {
    accessorKey: "email",
    header: "Price",
  },
  {
    accessorKey: "amount",
    header: "Change",
  },
]
