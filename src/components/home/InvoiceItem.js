import React from "react";
import { Link } from "react-router-dom";
import {  m } from "framer-motion";
import InvoiceStatus from "../shared/InvoiceStatus";
import LazyAnimate from "../shared/LazyAnimate"
import dayjs from "dayjs";
import "./InvoiceItem.css";
import rightArrow from "../../assets/images/icon-arrow-right.svg";

const itemVariant = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.3,
    },
  },
};

const InvoiceItem = ({ id, paymentDue, clientName, total, status }) => {
  return (

      <Link style={{ textDecoration: "none" }} to={`/invoice/${id}`}>
        <LazyAnimate>
        <m.div
          variants={itemVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="invoiceItem"
        >
          <h2 className="invoiceItem-header">
            <span>#</span>
            {id.slice(0, 6).toUpperCase()}
          </h2>
          <div className="invoiceItem-date">
            Due {dayjs(paymentDue).format("DD MMM YYYY")}
          </div>
          <div className="invoiceItem-client">{clientName}</div>
          <div className="invoiceItem-total">{total}</div>
          <InvoiceStatus className="status-grid" status={status} />
          <img
            src={rightArrow}
            alt="rightArrow"
            width="7"
            height="10"
            className="invoice-arrow-icon"
          />
        </m.div>
        </LazyAnimate>
        
      </Link>
   
  );
};

export default InvoiceItem;
