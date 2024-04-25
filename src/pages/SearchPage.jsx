import React from 'react'
import SearchInput from '../components/custom/SearchInput'
import CardGame from '../components/card/CardGame'
import Header from '../components/layout/Header'
import { useLocation } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";

const SearchPage = () => {
  const location = useLocation();

  console.log("search", location);

  const ValidSchema = Yup.object().shape({
    name: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: location.state == null ? "" : location.state.name,
    },
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <Header />
      <SearchInput classname={"max-sm:mt-2"} formik={formik}  />

      <div className='mt-20 px-5'>
        <CardGame />
      </div>
    </div>
  )
}

export default SearchPage
