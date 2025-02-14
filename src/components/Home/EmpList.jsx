import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function EmpList() {
  // Use useParams to retrieve the employeeCode from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Employee{"auth"} Details for {id}</h1>
    </div>
  );
}
