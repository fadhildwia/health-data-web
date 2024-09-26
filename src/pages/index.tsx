import BMIRecord from "@/components/BMIRecord";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { useGlobal } from "@/context/GlobalContext";
import { LastCheckInterface } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const {lastCheck} = useGlobal();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOnCard = (data: LastCheckInterface) => {
    console.log('data', data)
    router.push({
      pathname: '/profile',
      query: {
        weight: data.weight,
        height: data.height,
        bodyFat: data.bodyFat || 'N/A',
        muscleMass: data.muscleMass || 'N/A',
        visceralFat: data.visceralFat || 'N/A',
        basalMetabolism: data.basalMetabolism || 'N/A',
      },
    });
  }

  return (
    <div className='px-20 py-24 gap-10 flex flex-col'>
      <Header onClickGoToCalculator={() => setModalOpen(true)} onClickYourChart={() => {}} />
      <BMIRecord data={lastCheck} onClick={handleOnCard} />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
