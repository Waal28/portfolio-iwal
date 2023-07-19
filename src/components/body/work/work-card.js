import React from "react";
import "./work-card.css";
import BasicModal from "./modal";

function WorkCard({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="work-card">
      <img
        src={item.companyLogo}
        className="work-logo"
        style={{ cursor: "pointer" }}
        alt=""
        onClick={handleOpen}
      />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
        </div>
        <div
          className="work-desc"
          style={{
            maxHeight: 200,
            overflowY: "auto",
            paddingRight: 10,
            marginTop: 5,
            borderTop: "2px solid lightgrey",
          }}
        >
          <p>{item.work}</p>
        </div>
      </div>
      <BasicModal
        open={open}
        handleClose={handleClose}
        image={item.companyLogo}
      />
    </div>
  );
}

export default WorkCard;
