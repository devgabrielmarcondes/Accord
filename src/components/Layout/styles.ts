import styled from "styled-components";

// SL - Server List
// DH - Direct Messages Header
// DM - Direct Messages
// UI - User Information
// FT - Friends Tab
// FS - Friends Status
// AN - Active Now

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 7.1rem 24rem auto 44.7rem; // largura
  grid-template-rows: 4.6rem auto 5.2rem; // altura

  grid-template-areas:
    "SL DH FT FT"
    "SL DM FS AN"
    "SL UI FS AN";

  height: 100vh;
`;
