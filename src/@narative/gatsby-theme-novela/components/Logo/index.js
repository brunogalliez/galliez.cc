import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.779 12C20.779 13.4284 20.7717 14.8375 20.6345 16.2036C20.5596 16.9474 20.1892 17.1181 19.4994 17.191C17.114 17.4424 14.4724 17.5 12 17.4927C9.52762 17.5 6.88605 17.4419 4.50062 17.191C3.81076 17.1176 3.44043 16.9479 3.36552 16.2036C3.22829 14.8375 3.22043 13.4284 3.22043 12C3.22043 10.5716 3.22776 9.16252 3.365 7.79643C3.43938 7.05262 3.81024 6.88186 4.5001 6.80905C6.88552 6.55762 9.5271 6.5 11.9995 6.50733C14.4719 6.5 17.1134 6.55814 19.4989 6.80905C20.1887 6.88238 20.559 7.0521 20.634 7.79643C20.7712 9.16252 20.779 10.5716 20.779 12ZM23 12C23 18.0579 18.071 23 12 23C5.92905 23 1 18.0579 1 12C1 5.94214 5.92905 1 12 1C18.071 1 23 5.94214 23 12ZM7.52929 12C7.52929 9.54857 9.525 7.54762 12 7.54762C14.475 7.54762 16.4707 9.54857 16.4707 12C16.4707 14.4514 14.475 16.4524 12 16.4524C9.525 16.4524 7.52929 14.4514 7.52929 12Z" fill="black"/>
    </svg>
  );
}