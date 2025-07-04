import Section1 from './Section1';
import Section2 from './Section2';
import SummerCarousel from './SummerCarousel';
import Ifitems from './IfItems';
import OneSubscription from './OneSubscription';
import RentByCategory from './RentByCategory';
import NeverMissAStyleBeat from './NeverMissAStyleBeat';


export default function Home() {

  return (
    <>
      <Section1/>
      {/* <Section2/>  */}
      <SummerCarousel/>
      <Ifitems/>
      <OneSubscription/>
      <RentByCategory/>
      <NeverMissAStyleBeat/>
    </>
  );
}
