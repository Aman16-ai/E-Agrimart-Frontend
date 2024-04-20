import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BidTable() {
  return (
    <Table>
      <TableCaption>A list of your recent crops with bids.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Crop Id</TableHead>
          <TableHead>Crop name</TableHead>
          <TableHead>Bids</TableHead>
          <TableHead>Highest Bid</TableHead>
          <TableHead>Base Price</TableHead>
          <TableCell>Profit</TableCell>
          <TableHead>Locked</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>Wheat</TableCell>
          <TableCell>4</TableCell>
          <TableCell>₹22000</TableCell>
          <TableCell>₹18000</TableCell>
          <TableCell>₹4000</TableCell>
          <TableCell>True</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell>Rice</TableCell>
          <TableCell>8</TableCell>
          <TableCell>₹2000</TableCell>
          <TableCell>₹4000</TableCell>
          <TableCell>₹2000</TableCell>
          <TableCell>False</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">3</TableCell>
          <TableCell>Potatos</TableCell>
          <TableCell>9</TableCell>
          <TableCell>₹9000</TableCell>
          <TableCell>₹12000</TableCell>
          <TableCell>₹3000</TableCell>
          <TableCell>True</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
