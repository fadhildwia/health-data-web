import React from 'react';
import { useRouter } from 'next/router';

const Profile: React.FC = () => {
  const router = useRouter();

  const {
    weight,
    height,
    bodyFat,
    muscleMass,
    visceralFat,
    basalMetabolism,
  } = router.query;

  console.log(router.query)

  const heightInMeters = parseFloat(height as string) / 100;
  const weightInKg = parseFloat(weight as string);
  const bmi = weightInKg / (heightInMeters * heightInMeters);
  
  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    bmiCategory = 'Normal';
  } else if (bmi >= 23 && bmi <= 24.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      <div className="bg-orangeCustom p-4 rounded-lg mb-6">
        <h2 className="text-xl font-medium mb-2">User Input Data</h2>
        <div className="mb-2"><strong>Current Weight (Kg):</strong> {weight}</div>
        <div className="mb-2"><strong>Height (Cm):</strong> {height}</div>
        <div className="mb-2"><strong>Body Fat (%):</strong> {bodyFat}</div>
        <div className="mb-2"><strong>Muscle Mass (Kg):</strong> {muscleMass}</div>
        <div className="mb-2"><strong>Visceral Fat:</strong> {visceralFat}</div>
        <div className="mb-2"><strong>Basal Metabolism (Kcal):</strong> {basalMetabolism}</div>
      </div>

      <div className="bg-orangeCustom p-4 rounded-lg mb-6">
        <h2 className="text-xl font-medium mb-2">BMI Calculation</h2>
        <div className="mb-2"><strong>Your BMI:</strong> {bmi.toFixed(1)}</div>
        <div className="mb-2"><strong>Category:</strong> {bmiCategory}</div>
      </div>

      <div className="bg-orangeCustom p-4 rounded-lg">
        <h2 className="text-xl font-medium mb-4">BMI Categories</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead className='bg-blueSky'>
            <tr>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">BMI Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className={bmiCategory === 'Underweight' ? 'bg-orangeCustom' : ''}>
              <td className="border px-4 py-2">Underweight</td>
              <td className="border px-4 py-2">Less than 18.5</td>
            </tr>
            <tr className={bmiCategory === 'Normal' ? 'bg-blueCustom' : ''}>
              <td className="border px-4 py-2">Normal</td>
              <td className="border px-4 py-2">18.5 - 22.9</td>
            </tr>
            <tr className={bmiCategory === 'Overweight' ? 'bg-secondary' : ''}>
              <td className="border px-4 py-2">Overweight</td>
              <td className="border px-4 py-2">23.0 - 24.9</td>
            </tr>
            <tr className={bmiCategory === 'Obesity' ? 'bg-redCustom' : ''}>
              <td className="border px-4 py-2">Obesity</td>
              <td className="border px-4 py-2">25.0 and above</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
