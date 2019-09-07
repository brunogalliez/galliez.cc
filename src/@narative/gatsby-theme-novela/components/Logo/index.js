import React from "react";
import styled from "@emotion/styled";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
const Name = styled.span`
  color: ${p => p.theme.colors.accent};
  font-weight:bold;
  font-size:1.5em;
`;

export default function Logo() {
  return (
    <Name>Bruno Galliez</Name>
  );
}