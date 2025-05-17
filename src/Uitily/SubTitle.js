import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubTitle = ({title, btntitle, path}) => {
  return (
    <Col sm={12} md={6} lg={6} className="d-flex justify-content-between pt-4">
      <h3 className="sub-tilte text-info">{title}</h3>
      {btntitle ? (
        <Link to={path} className=" text-decoration-none">
          <h3 className="text-warning">{btntitle}</h3>
        </Link>
      ) : null}
    </Col>
  );
};

export default SubTitle;
