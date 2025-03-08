import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layouts";
import {TravelDetail} from "../components/travel/";

function TravelDetailPage() {
  const { id } = useParams();
  
  return <PageLayout>
  <TravelDetail id={id} />
  {id}
  </PageLayout>;
}
export default TravelDetailPage;
