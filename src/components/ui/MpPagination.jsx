"use client";

import { Pagination } from "@mui/material";
import PropTypes from "prop-types";

export default function MpPagination({ count, page, onChange, ...rest }) {
  return <Pagination count={count} page={page} onChange={(_, p) => onChange?.(p)} {...rest} />;
}

MpPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
