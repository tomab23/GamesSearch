import React from 'react'
import SearchInput from '../components/custom/SearchInput'
import HeaderHome from '../components/layout/HeaderHome'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();


  const ValidSchema = Yup.object().shape({
    name: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      navigate("/search", { state: values });
    },
  });

  return (
    <div className='min-h-screen text-center'>
      <HeaderHome />
      <h1 className='text-9xl max-sm:text-6xl font-jersey'>GamesSearch</h1>
      <h2 className='text-2xl max-sm:text-xl font-jersey'>Information about your games</h2>

      <form onSubmit={formik.handleSubmit}>
        <SearchInput classname={"mt-20"} formik={formik} />  
      </form>
    </div>
  )
}

export default Home
