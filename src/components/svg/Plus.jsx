function Plus({ className, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
      onClick={onClick}
    >
      <path
        fill="#474747"
        d="M16.875 9.375h-6.25v-6.25a.625.625 0 10-1.25 0v6.25h-6.25a.625.625 0 000 1.25h6.25v6.25a.625.625 0 101.25 0v-6.25h6.25a.624.624 0 100-1.25z"
      ></path>
    </svg>
  );
}

export default Plus;
