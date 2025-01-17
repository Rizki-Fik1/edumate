import Navbar from "../components/Navbar";
import Headertodo from "../to-do/Category/SubjectSelection";
import FooterExtraProgress from "../to-do/Chart/FooterExtraProgress";
import FooterProgress from "../to-do/Chart/FooterProgress";
import ProgressRadarChart from "../to-do/Chart/ProgressRadarChart";

export default function Todopages() {

  return(
    <> 
      <div className="h-[160vh] md:h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <Navbar/>
        <ProgressRadarChart/>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-gray-950">
        <FooterProgress/>

        <div className="w-full h-[2px] bg-gray-800"></div>

        <FooterExtraProgress/>
      </div>
    </>
  )
}