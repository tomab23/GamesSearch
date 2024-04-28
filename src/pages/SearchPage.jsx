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

    <div className='mt-16 max-sm:mt-10 flex gap-10 px-16 max-xl:px-20 max-md:px-12 flex-wrap mb-20'>
        <CardGame game={"fallout 4"} />
        <CardGame game={"fallout 3"} />
        <CardGame game={"fallout"} />
        <CardGame game={"fallout 76"} />
        <CardGame game={"fallout 4"} />
        <CardGame game={"fallout 3"} />
        <CardGame game={"fallout"} />
        <CardGame game={"fallout 76"} />
    </div>
    {/* max-sm:px-12 */}

    </div>
  )
}

export default SearchPage
