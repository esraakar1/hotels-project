import type { FC } from "react";
import { Field, Form, Formik } from 'formik';
import { initialValues, inputs } from "../../utils/constants";
import { schema } from "../../utils/schema";
import { useCreatePlace } from "../../types/service";
import type { PlaceData } from "../../types";

const Create: FC = () => {


  //!  sayfa yüklenince api istegi atılacaksa : useQuery
  //!  herhangi bir kullanıcı etkileşiminde atılıcaksa: useMutation

  const {mutate, isPending} = useCreatePlace();

  const handleSubmit = (values: PlaceData) => {
      mutate(values);
  }

  return (
    <div className="container">
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>

      {({errors, touched}) => (
         <Form className="max-w-2xl mx-auto grid gap-4">
         {inputs.map((input, key) => (
          <div key={key} className="field">
          <label>{input.label} </label>
          <Field type={input.type} name={input.name} placeholder={input.placeholder} className="input"/>

          {errors[input.name as keyof typeof errors] && touched[input.name as keyof typeof errors] ? <span className="text-red-500 text-sm">{errors[input.name as keyof typeof errors]} </span> : <span className="text-transparent select-none text-sm">.</span>}
        </div>
      ))}
    
        <button type="submit" className="my-5 bg-blue-500 py-2 px-6 text-white rounded-md transition hover:bg-blue-600 cursor-pointer">Gönder</button>
         </Form>
      )}
    
    </Formik>
   </div>
  )
}

export default Create;