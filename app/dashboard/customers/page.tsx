"use client";
import React from "react";

export default function Page() {
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("/dashboard/customers/api/");
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return <p>Customers Page!</p>;
}
