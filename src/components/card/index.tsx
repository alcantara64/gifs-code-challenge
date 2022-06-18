import { Button, Card} from "react-bootstrap"
import { GIF } from "../../types";

type AppCard = {
    gif:GIF
    handleView: (gif:GIF)=> void;
}

export const APPCard = ({gif, handleView }:AppCard) => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={gif?.images?.fixed_height?.url}  height={300}/>
  <Card.Body>
    <Card.Title title="title">{gif?.title?.length > 20 ? `${gif?.title?.slice(0,20)}...`: gif?.title}</Card.Title>
    <Button onClick={() =>handleView(gif)} style={{width:'100%'}} variant="primary">View</Button>
  </Card.Body>
</Card>)