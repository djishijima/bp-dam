export function UpArrow(props: React.SVGAttributes<{}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M29.411 34.84a2.25 2.25 0 0 1 0-3.183l9-9A2.237 2.237 0 0 1 40 22c.577 0 1.152.22 1.59.66l9 9a2.25 2.25 0 0 1-3.181 3.18l-5.159-5.155V46.75a2.25 2.25 0 0 1-4.5 0V29.685l-5.16 5.154c-.88.879-2.3.879-3.179 0Z"
      />
      <path
        fill="#fff"
        fillOpacity={0.7}
        d="M55.75 46.75H44.5a4.5 4.5 0 1 1-9 0H24.25A2.25 2.25 0 0 0 22 49v6.75A2.25 2.25 0 0 0 24.25 58h31.5A2.25 2.25 0 0 0 58 55.75V49a2.248 2.248 0 0 0-2.25-2.25Zm-3.375 7.313c-.928 0-1.688-.76-1.688-1.688 0-.928.76-1.688 1.688-1.688.928 0 1.688.76 1.688 1.688 0 .928-.76 1.688-1.688 1.688Z"
      />
    </svg>
  );
}
