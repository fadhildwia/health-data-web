import BMIRecord from "@/components/BMIRecord";
import Header from "@/components/Header";
import { useGlobal } from "@/context/GlobalContext";

export default function Home() {
  const {lastCheck, setLastCheck} = useGlobal();

  return (
    <div className='px-20 py-24 gap-10 flex flex-col'>
      <Header onClickGoToCalculator={() => {}} onClickYourChart={() => setLastCheck([...lastCheck, {value: 2.1, status: 'normal', date: '13 September 2024'}])} />
      <BMIRecord data={lastCheck} />
    </div>
  );
}
