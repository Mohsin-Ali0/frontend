import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// ----------------------------------------------------------------------

export function ComponentBlock({ title, children, ...other }) {
  return (
    <Card
      style={{
        padding: "1.5rem",
        gap: "0.5rem",
        width: "100%",
        flexWrap: "wrap",
        borderRadius: "0.375rem",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: `rgba(128, 128, 128, 0.04)`, // Replace this with a custom color as needed
        boxShadow: `0 0 0 1px rgba(128, 128, 128, 0.16)`, // Replace this with a custom color as needed
        ...other.style,
      }}
      {...other}
    >
      {title && (
        <span
          style={{
            padding: "0.25rem",
            position: "absolute",
            top: 0,
            left: "1.25rem",
            transform: "translateY(-50%)",
            fontSize: "0.875rem",
            fontWeight: "600",
            color: "#000", // Replace this with a custom color as needed
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(128, 128, 128, 0.24)", // Replace this with a custom color as needed
          }}
        >
          {title}
        </span>
      )}

      {children}
    </Card>
  );
}

// ----------------------------------------------------------------------

export function ComponentContainer({ children, ...other }) {
  return (
    <Container
      style={{
        marginTop: "3rem",
        marginBottom: "7.5rem",
        gap: "1.25rem",
        display: "flex",
        flexDirection: "column",
        ...other.style,
      }}
      {...other}
    >
      {children}
    </Container>
  );
}

// ----------------------------------------------------------------------

export function varAlpha(color, opacity = 1) {
  const unsupported =
    color.startsWith("#") ||
    color.startsWith("rgb") ||
    color.startsWith("rgba") ||
    (!color.includes("var") && color.includes("Channel"));

  if (unsupported) {
    throw new Error(`[Alpha]: Unsupported color format "${color}".
     Supported formats are:
     - RGB channels: "0 184 217".
     - CSS variables with "Channel" prefix: "var(--palette-common-blackChannel, #000000)".
     Unsupported formats are:
     - Hex: "#00B8D9".
     - RGB: "rgb(0, 184, 217)".
     - RGBA: "rgba(0, 184, 217, 1)".
     `);
  }

  return `rgba(${color.split(" ").join(", ")}, ${opacity})`;
}

// ----------------------------------------------------------------------

export const stylesMode = {
  light: '[data-mui-color-scheme="light"] &',
  dark: '[data-mui-color-scheme="dark"] &',
};
