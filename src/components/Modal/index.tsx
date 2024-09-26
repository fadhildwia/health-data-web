// components/Modal.tsx
import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useGlobal } from "@/context/GlobalContext"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { lastCheck, setLastCheck } = useGlobal()

  const validationSchema = Yup.object({
    weight: Yup.number()
      .required("Current Weight is required")
      .max(999, "Maximum of 3 digits allowed")
      .positive("Must be a positive number"),
    height: Yup.number()
      .required("Height is required")
      .max(999, "Maximum of 3 digits allowed")
      .positive("Must be a positive number"),
    bodyFat: Yup.number()
      .nullable()
      .max(99, "Maximum of 2 digits allowed")
      .positive("Must be a positive number"),
    muscleMass: Yup.number()
      .nullable()
      .max(99, "Maximum of 2 digits allowed")
      .positive("Must be a positive number"),
    visceralFat: Yup.number()
      .nullable()
      .min(1, "Minimum of 1")
      .max(12, "Maximum of 12")
      .integer("Decimals are not allowed"),
    basalMetabolism: Yup.number()
      .nullable()
      .max(9999, "Maximum of 4 digits allowed")
      .positive("Must be a positive number"),
  })

  const formik = useFormik({
    initialValues: {
      weight: "",
      height: "",
      bodyFat: "",
      muscleMass: "",
      visceralFat: "",
      basalMetabolism: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const weight = parseFloat(values.weight)
      const height = parseFloat(values.height) / 100

      const bmi = weight / (height * height)
      let bmiCategory = ""

      if (bmi < 18.5) {
        bmiCategory = "Underweight"
      } else if (bmi >= 18.5 && bmi <= 22.9) {
        bmiCategory = "Normal"
      } else if (bmi >= 23 && bmi <= 24.9) {
        bmiCategory = "Overweight"
      } else {
        bmiCategory = "Obesity"
      }

      setLastCheck([
        ...lastCheck,
        {
          value: bmi.toFixed(1),
          status: bmiCategory,
          date: new Date(),
          weight: values.weight,
          height: values.height,
          bodyFat: values.bodyFat,
          muscleMass: values.muscleMass,
          visceralFat: values.visceralFat,
          basalMetabolism: values.basalMetabolism,
        },
      ])
      onClose()
    },
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Enter Your Data</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Current Weight (Kg) *
            </label>
            <input
              type="number"
              id="weight"
              {...formik.getFieldProps("weight")}
              className="w-full p-2 border rounded"
              placeholder="Enter your current weight"
            />
            {formik.touched.weight && formik.errors.weight && (
              <p className="text-red-500 text-sm">{formik.errors.weight}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Height (Cm) *</label>
            <input
              type="number"
              id="height"
              {...formik.getFieldProps("height")}
              className="w-full p-2 border rounded"
              placeholder="Enter your height"
            />
            {formik.touched.height && formik.errors.height && (
              <p className="text-red-500 text-sm">{formik.errors.height}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Body Fat (%)</label>
            <input
              type="number"
              id="bodyFat"
              {...formik.getFieldProps("bodyFat")}
              className="w-full p-2 border rounded"
              placeholder="Enter body fat percentage"
            />
            {formik.touched.bodyFat && formik.errors.bodyFat && (
              <p className="text-red-500 text-sm">{formik.errors.bodyFat}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Muscle Mass (Kg)</label>
            <input
              type="number"
              id="muscleMass"
              {...formik.getFieldProps("muscleMass")}
              className="w-full p-2 border rounded"
              placeholder="Enter muscle mass"
            />
            {formik.touched.muscleMass && formik.errors.muscleMass && (
              <p className="text-red-500 text-sm">{formik.errors.muscleMass}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Visceral Fat</label>
            <input
              type="number"
              id="visceralFat"
              {...formik.getFieldProps("visceralFat")}
              className="w-full p-2 border rounded"
              placeholder="1 - 12"
            />
            {formik.touched.visceralFat && formik.errors.visceralFat && (
              <p className="text-red-500 text-sm">
                {formik.errors.visceralFat}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Basal Metabolism (Kcal)
            </label>
            <input
              type="number"
              id="basalMetabolism"
              {...formik.getFieldProps("basalMetabolism")}
              className="w-full p-2 border rounded"
              placeholder="Enter basal metabolism"
            />
            {formik.touched.basalMetabolism &&
              formik.errors.basalMetabolism && (
                <p className="text-red-500 text-sm">
                  {formik.errors.basalMetabolism}
                </p>
              )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-orangeCustom text-black rounded hover:bg-secondary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
