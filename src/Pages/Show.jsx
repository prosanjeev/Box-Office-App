import { useParams } from "react-router-dom";

const Show = () => {
    const { ShowId } = useParams();
  return (
    <div>Show Page for {ShowId}</div>
  )
}

export default Show