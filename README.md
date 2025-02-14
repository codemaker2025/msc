import React from 'react'
import { Form } from 'informed';
import useSWR from 'swr';
import axiosInstance from '../../api/axiosInstance';

const fetcher = async (url) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export default function Dashboard({}) {
  const { data, error } = useSWR('/api/v1/employee?length=10&page=1&sort_order=asc&sort_by=name', fetcher);
  console.log(data?.data?.rows,"test");
  
  return (
    <>
    {/* use react table and useswr */}
    </>
  )
}
